from pathlib import Path
from math import cos, sin, pi
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
outdir = root / 'public' / 'icons'
outdir.mkdir(parents=True, exist_ok=True)

BG = (239, 229, 216)
BLUE = (14, 87, 126)
BLUE2 = (22, 104, 145)
GOLD = (201, 154, 67)
WHITE = (255, 255, 255)
GREEN = (109, 160, 108)
PINK = (234, 188, 170)
SKIN = (227, 214, 190)


def star(draw, cx, cy, outer, inner, color):
    pts = []
    for i in range(10):
        ang = -pi / 2 + i * pi / 5
        r = outer if i % 2 == 0 else inner
        pts.append((cx + r * cos(ang), cy + r * sin(ang)))
    draw.polygon(pts, fill=color)


def round_square(draw, box, radius=80):
    draw.rounded_rectangle(box, radius=radius, fill=BG, outline=(255, 255, 255, 255), width=6)


def monogram_m(draw, cx, cy):
    draw.line((cx - 88, cy + 92, cx - 88, cy - 96), fill=GOLD, width=12)
    draw.line((cx - 88, cy - 96, cx - 42, cy - 10), fill=GOLD, width=12)
    draw.line((cx - 42, cy - 10, cx, cy - 96), fill=GOLD, width=12)
    draw.line((cx, cy - 96, cx + 42, cy - 10), fill=GOLD, width=12)
    draw.line((cx + 42, cy - 10, cx + 88, cy + 92), fill=GOLD, width=12)
    draw.line((cx - 88, cy + 92, cx + 88, cy + 92), fill=GOLD, width=6)


def lily(draw, cx, cy, scale=1.0):
    s = scale
    draw.ellipse([cx - 26 * s, cy - 32 * s, cx + 26 * s, cy + 22 * s], fill=WHITE, outline=GOLD, width=4)
    draw.ellipse([cx - 16 * s, cy - 6 * s, cx + 16 * s, cy + 42 * s], fill=WHITE, outline=GOLD, width=4)
    draw.line((cx, cy + 24 * s, cx, cy + 82 * s), fill=GREEN, width=5)
    draw.line((cx - 18 * s, cy + 42 * s, cx + 18 * s, cy + 42 * s), fill=GREEN, width=5)


def beads(draw, cx, cy, count, radius, color):
    for i in range(count):
        ang = (2 * pi / count) * i - pi / 2
        x = cx + 150 * cos(ang)
        y = cy + 150 * sin(ang)
        draw.ellipse([x - radius, y - radius, x + radius, y + radius], fill=color)


def save(kind, variant):
    img = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    round_square(draw, (18, 18, 494, 494), radius=80)

    cx, cy = 256, 256
    draw.ellipse([cx - 170, cy - 170, cx + 170, cy + 170], fill=BLUE, outline=GOLD, width=12)
    draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], outline=GOLD, width=8)

    if kind == 'maria':
        if variant == '1':
            star(draw, cx, cy - 170, 28, 12, GOLD)
            monogram_m(draw, cx, cy)
            lily(draw, cx - 96, cy + 76, 1.2)
            lily(draw, cx + 95, cy + 76, 1.2)
            beads(draw, cx, cy + 122, 12, 6, GOLD)
        else:
            star(draw, cx, cy - 170, 28, 12, GOLD)
            monogram_m(draw, cx, cy - 4)
            lily(draw, cx - 94, cy + 74, 1.1)
            lily(draw, cx + 94, cy + 74, 1.1)
            for i in range(10):
                x = 110 + i * 26
                y = 392 if i % 2 == 0 else 404
                draw.ellipse([x, y, x + 12, y + 12], fill=GOLD)
            draw.line((110, 396, 396, 396), fill=GOLD, width=5)

    elif kind == 'jose':
        if variant == '1':
            gear_r = 138
            draw.ellipse([cx - gear_r, cy - gear_r, cx + gear_r, cy + gear_r], fill=BLUE2, outline=GOLD, width=14)
            for ang in range(0, 360, 30):
                a = ang * pi / 180
                r1, r2 = gear_r + 15, gear_r + 52
                x1, y1 = cx + r1 * cos(a), cy + r1 * sin(a)
                x2, y2 = cx + r2 * cos(a), cy + r2 * sin(a)
                x3, y3 = cx + (gear_r + 8) * cos(a + pi / 30), cy + (gear_r + 8) * sin(a + pi / 30)
                x4, y4 = cx + (gear_r + 8) * cos(a - pi / 30), cy + (gear_r + 8) * sin(a - pi / 30)
                draw.polygon([(x1, y1), (x2, y2), (x3, y3), (x4, y4)], fill=GOLD)
            draw.ellipse([cx - 76, cy - 76, cx + 76, cy + 76], fill=BLUE, outline=GOLD, width=8)
            draw.line((cx, cy - 62, cx, cy + 62), fill=WHITE, width=18)
            draw.line((cx - 62, cy, cx + 62, cy), fill=WHITE, width=18)
            star(draw, cx - 142, cy - 130, 18, 8, GOLD)
            star(draw, cx + 142, cy - 130, 18, 8, GOLD)
        else:
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=BLUE, outline=GOLD, width=12)
            draw.ellipse([cx - 90, cy - 90, cx + 90, cy + 90], fill=BLUE2, outline=GOLD, width=10)
            draw.line((cx, cy - 70, cx, cy + 70), fill=WHITE, width=18)
            draw.line((cx - 70, cy, cx + 70, cy), fill=WHITE, width=18)
            star(draw, cx - 138, cy - 128, 16, 7, GOLD)
            star(draw, cx + 138, cy - 128, 16, 7, GOLD)

    elif kind == 'familias':
        if variant == '1':
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=BLUE, outline=GOLD, width=12)
            draw.ellipse([cx - 118, cy - 80, cx - 52, cy - 14], fill=SKIN, outline=GOLD, width=4)
            draw.ellipse([cx + 52, cy - 80, cx + 118, cy - 14], fill=SKIN, outline=GOLD, width=4)
            draw.ellipse([cx - 52, cy - 20, cx + 52, cy + 52], fill=SKIN, outline=GOLD, width=4)
            draw.arc([cx - 150, cy + 52, cx - 20, cy + 170], start=180, end=360, fill=(176, 133, 107), width=14)
            draw.arc([cx + 20, cy + 52, cx + 150, cy + 170], start=180, end=360, fill=(176, 133, 107), width=14)
            draw.arc([cx - 60, cy + 70, cx + 60, cy + 150], start=180, end=360, fill=(174, 160, 102), width=14)
            draw.polygon([(cx, cy + 34), (cx - 16, cy + 82), (cx, cy + 126), (cx + 16, cy + 82)], fill=(217, 120, 105))
        else:
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=GREEN, outline=GOLD, width=12)
            draw.ellipse([cx - 118, cy - 80, cx - 52, cy - 14], fill=SKIN, outline=GOLD, width=4)
            draw.ellipse([cx + 52, cy - 80, cx + 118, cy - 14], fill=SKIN, outline=GOLD, width=4)
            draw.ellipse([cx - 52, cy - 20, cx + 52, cy + 52], fill=SKIN, outline=GOLD, width=4)
            draw.arc([cx - 150, cy + 52, cx - 20, cy + 170], start=180, end=360, fill=(176, 133, 107), width=14)
            draw.arc([cx + 20, cy + 52, cx + 150, cy + 170], start=180, end=360, fill=(176, 133, 107), width=14)
            draw.arc([cx - 60, cy + 70, cx + 60, cy + 150], start=180, end=360, fill=(174, 160, 102), width=14)
            draw.ellipse([cx - 16, cy + 20, cx + 16, cy + 50], fill=(220, 152, 120))

    elif kind == 'espiritu':
        if variant == '1':
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=BLUE, outline=GOLD, width=12)
            for ang in range(0, 360, 30):
                a = ang * pi / 180
                x1, y1 = cx + 106 * cos(a), cy + 106 * sin(a)
                x2, y2 = cx + 170 * cos(a), cy + 170 * sin(a)
                draw.line((x1, y1, x2, y2), fill=GOLD, width=5)
            draw.polygon([(cx - 80, cy - 10), (cx - 170, cy - 110), (cx - 30, cy + 35), (cx - 10, cy + 8)], fill=WHITE, outline=GOLD, width=4)
            draw.polygon([(cx + 80, cy - 10), (cx + 170, cy - 110), (cx + 30, cy + 35), (cx + 10, cy + 8)], fill=WHITE, outline=GOLD, width=4)
            draw.ellipse([cx - 52, cy - 62, cx + 52, cy + 38], fill=WHITE, outline=GOLD, width=4)
            draw.line((cx, cy - 28, cx, cy + 72), fill=GOLD, width=5)
        else:
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=PINK, outline=GOLD, width=12)
            for i in range(7):
                a = -pi / 2 + i * pi / 3.5
                x = cx + 165 * cos(a)
                y = cy + 165 * sin(a)
                draw.line((x, y, x, y + 40), fill=GOLD, width=6)
                draw.polygon([(x - 12, y + 40), (x + 12, y + 40), (x, y + 72)], fill=(239, 110, 64))
            draw.polygon([(cx - 80, cy - 10), (cx - 175, cy - 115), (cx - 38, cy + 35), (cx - 12, cy + 6)], fill=WHITE, outline=GOLD, width=4)
            draw.polygon([(cx + 80, cy - 10), (cx + 175, cy - 115), (cx + 38, cy + 35), (cx + 12, cy + 6)], fill=WHITE, outline=GOLD, width=4)
            draw.ellipse([cx - 52, cy - 62, cx + 52, cy + 38], fill=WHITE, outline=GOLD, width=4)
            draw.line((cx, cy - 28, cx, cy + 72), fill=GOLD, width=5)

    elif kind == 'coronilla':
        if variant == '1':
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=BLUE, outline=GOLD, width=12)
            draw.polygon([(cx, cy - 120), (cx + 128, cy + 26), (cx, cy + 116), (cx - 128, cy + 26)], fill=WHITE, outline=GOLD, width=6)
            draw.ellipse([cx - 42, cy - 88, cx + 42, cy + 14], fill=WHITE, outline=GOLD, width=3)
            draw.ellipse([cx - 24, cy - 40, cx + 24, cy + 24], fill=WHITE, outline=GOLD, width=3)
            draw.line((cx, cy + 18, cx, cy + 90), fill=GREEN, width=5)
            draw.line((cx - 18, cy + 26, cx + 18, cy + 26), fill=GREEN, width=5)
            draw.line((cx, cy - 94, cx, cy + 40), fill=GOLD, width=10)
            draw.line((cx - 30, cy - 66, cx + 30, cy - 66), fill=GOLD, width=10)
            for i in range(7):
                x = 118 + i * 30
                y = 360 + (i % 2) * 10
                draw.ellipse([x - 8, y - 8, x + 8, y + 8], fill=GOLD)
        else:
            draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=BLUE, outline=GOLD, width=12)
            draw.polygon([(cx, cy - 110), (cx + 128, cy + 34), (cx, cy + 112), (cx - 128, cy + 34)], fill=WHITE, outline=GOLD, width=6)
            draw.ellipse([cx - 36, cy - 58, cx + 36, cy + 18], fill=WHITE, outline=GOLD, width=4)
            draw.line((cx, cy - 78, cx, cy + 18), fill=GOLD, width=10)
            draw.line((cx - 26, cy - 54, cx + 26, cy - 54), fill=GOLD, width=10)
            draw.line((cx, cy + 25, cx, cy + 90), fill=GREEN, width=5)
            draw.ellipse([cx - 18, cy + 90, cx + 18, cy + 120], fill=GOLD)
            for i in range(8):
                x = 118 + i * 25
                y = 332 + (i % 2) * 16
                draw.ellipse([x - 7, y - 7, x + 7, y + 7], fill=GOLD)

    path = outdir / f'{kind}-{variant}.png'
    img.save(path)
    print(f'created {path.name}')

for kind in ['maria', 'jose', 'familias', 'espiritu', 'coronilla']:
    for variant in ['1', '2']:
        save(kind, variant)
