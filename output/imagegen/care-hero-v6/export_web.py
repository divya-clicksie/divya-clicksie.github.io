"""Export lossless responsive carousel assets from the generated PNG masters."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent
DESTINATION = ROOT.parents[2] / 'public' / 'images'
SCENES = ('hospital-phone', 'baby-visit', 'toddler-visit', 'child-visit')

for scene in SCENES:
    master = ROOT / f'nubo-care-{scene}-v6.png'
    with Image.open(master) as source:
        image = source.convert('RGB')
        if image.size != (3840, 1920):
            raise ValueError(f'{master.name}: expected 3840 x 1920, got {image.size}')
        for width in (3840, 1920, 960):
            pixels = image if width == 3840 else image.resize(
                (width, width // 2), Image.Resampling.HAMMING
            )
            suffix = '' if width == 3840 else f'-{width}'
            destination = DESTINATION / f'nubo-care-{scene}-v6{suffix}.webp'
            pixels.save(destination, 'WEBP', lossless=True, method=6, exact=True)
            with Image.open(destination) as exported:
                if exported.convert('RGB').tobytes() != pixels.tobytes():
                    raise ValueError(f'{destination.name}: lossless round trip failed')
            print(f'{destination.name}: {width} x {width // 2}, '
                  f'{destination.stat().st_size // 1024} KiB, exact RGB round trip', flush=True)
