#!/usr/bin/env python3
"""
make_theme_images.py — creates light + dark versions of your project screenshots
so they follow the website's light/dark toggle.

USAGE
  1. Put a screenshot in  images/   (png / jpg / webp)
  2. Run:   python3 make_theme_images.py
  3. Output lands in  images/themed/<name>-light.webp  and  <name>-dark.webp
  4. In data.js, point the project at them:
        image:      "images/<name>.png",              // original (fallback)
        imageLight: "images/themed/<name>-light.webp",
        imageDark:  "images/themed/<name>-dark.webp",

Requires:  pip install pillow numpy
Skips:     Me.png (your photo) and anything already inside images/themed/
Tip:       if the automatic version of a screenshot looks off, take a real
           screenshot in the other theme and save it as the -light / -dark file.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image

SRC = Path(__file__).parent / "images"
OUT = SRC / "themed"
SKIP = {"me.png", "me.jpg", "me.jpeg", "profile.jpg", "profile.png"}
MAX_W = 1600

# CSS "invert(1) hue-rotate(180deg)" as a matrix: flips lightness, keeps hue
M = np.array([[-0.574, 1.430, 0.144],
              [ 0.426, 0.430, 0.144],
              [ 0.426, 1.430, -0.856]], dtype=np.float32)

def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)

def flip_theme(rgb, to_dark):
    """Invert neutral UI (backgrounds, text, borders) but keep strongly coloured
    pixels (buttons, charts, photos), nudging their brightness so they stay readable."""
    lum_w = np.array([0.299, 0.587, 0.114], dtype=np.float32)
    mx, mn = rgb.max(-1), rgb.min(-1)
    chroma = mx - mn
    lum = rgb @ lum_w

    base = rgb
    if not to_dark:
        # dark UI -> light: flatten near-black noise/gradients first, otherwise
        # inverting them produces a visible blotchy texture
        flat = smoothstep(0.03, 0.40, mx)[..., None]
        base = rgb * flat

    inv = np.clip((1 - base) @ M.T, 0, 1)
    keep = smoothstep(0.14, 0.40, chroma)[..., None]          # coloured -> keep
    coloured = rgb
    if not to_dark:       # keep colours, but darken very bright ones for contrast on white
        f = np.minimum(1.0, 0.62 / np.maximum(lum, 1e-3))[..., None]
        coloured = rgb * (1 - 0.8 * keep) + rgb * f * (0.8 * keep) if False else rgb * (f * keep + (1 - keep))
    else:                 # keep colours, but lift very dark ones for contrast on dark
        f = np.minimum(2.0, 0.42 / np.maximum(lum, 1e-3))[..., None]
        f = np.maximum(f, 1.0)
        coloured = rgb * (f * keep + (1 - keep))
    out = inv * (1 - keep) + np.clip(coloured, 0, 1) * keep

    # land on the site's own dark / light surfaces instead of pure black / white
    if to_dark:
        out = out * 0.90 + np.array([0.035, 0.05, 0.085], dtype=np.float32)
    else:
        out = out * 0.97 + 0.015
    return np.clip(out, 0, 1)

def load_rgb(path):
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
        im = Image.alpha_composite(bg, im)
    im = im.convert("RGB")
    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
    return im

def main():
    OUT.mkdir(exist_ok=True)
    files = [p for p in sorted(SRC.iterdir())
             if p.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp")
             and p.name.lower() not in SKIP and p.is_file()]
    for p in files:
        im = load_rgb(p)
        arr = np.asarray(im, dtype=np.float32) / 255
        lum = float((arr @ np.array([0.299, 0.587, 0.114], dtype=np.float32)).mean())
        is_dark = lum < 0.5
        flipped = Image.fromarray((flip_theme(arr, to_dark=not is_dark) * 255).astype(np.uint8))
        light, dark = (flipped, im) if is_dark else (im, flipped)
        light.save(OUT / f"{p.stem}-light.webp", quality=84, method=6)
        dark.save(OUT / f"{p.stem}-dark.webp", quality=84, method=6)
        print(f"{p.name}: original is {'dark' if is_dark else 'light'} -> themed/{p.stem}-light.webp + -dark.webp")

if __name__ == "__main__":
    main()
