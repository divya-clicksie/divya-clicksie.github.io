Nubo Care carousel regeneration
Completed October 19, 2026.

Generated through the OpenAI Images API using the bundled imagegen CLI (explicit API mode).
Model: gpt-image-2.5-sunburst. Quality: high. Requested size: auto. Master format: PNG.
Official model reference: https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst

The four original carousel images were supplied individually as scene and composition references.
The complete final prompt for each successful generation is saved in the corresponding *-prompt.txt file here.
Prompts ask for fresh photographic detail, preserved identities and emotional intent, natural skin and fabric,
clean transitions, no ringing or edge halos, no added sharpening, realistic anatomy, and the existing phone placements.

Lossless masters in this directory:
- nubo-care-hospital-phone-v5.png (1774 x 887)
- nubo-care-baby-visit-v5.png (1774 x 887)
- nubo-care-toddler-visit-v5.png (1983 x 793, original generated canvas)
- nubo-care-toddler-visit-v5-cropped.png (1586 x 793, right-aligned 2:1 crop preserving all three people and phone)
- nubo-care-child-visit-v5.png (1774 x 887)

Final website assets in public/images/:
- nubo-care-hospital-phone-v5.webp (1774 x 887)
- nubo-care-hospital-phone-v5-960.webp (960 x 480)
- nubo-care-baby-visit-v5.webp (1774 x 887)
- nubo-care-baby-visit-v5-960.webp (960 x 480)
- nubo-care-toddler-visit-v5.webp (1586 x 793)
- nubo-care-toddler-visit-v5-960.webp (960 x 480)
- nubo-care-child-visit-v5.webp (1774 x 887)
- nubo-care-child-visit-v5-960.webp (960 x 480)

Export method: Pillow RGB conversion; native full-size pixels; Hamming downsampling for the 960px versions;
WebP lossless=True, method=6, exact=True. No sharpening. Every WebP was decoded and checked for exact RGB
pixel equality against its PNG master or resized source. Lossless exports are larger than the older lossy files:
full-size images are about 1.1 to 1.3 MiB each; 960px images are about 0.4 MiB each.
Earlier image versions remain available. The carousel, homepage social image and first-slide preload use v5.
The toddler image uses its actual dimensions in the responsive markup.

All four requested generations succeeded. An optional toddler aspect-ratio regeneration was rejected because
API credits were exhausted; no replacement was produced by that retry. The successful original was cropped instead.

Verification: npm run build; desktop homepage at 1280px; mobile homepage in a 390px iframe; all four carousel
images decoded successfully in the browser and slide rotation was observed. Review screenshots are in review/.
