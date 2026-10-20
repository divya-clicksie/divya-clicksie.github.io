Nubo Care carousel, fresh DSLR-style scenes
Generated October 19, 2026.

Execution: direct OpenAI Images API requests, explicitly approved by the user.
Endpoint: https://api.openai.com/v1/images/generations
Model: gpt-image-2.5-sunburst
Quality: max
Size: 3840x1920
Output: lossless PNG
Input: text only. No reference images. All four API responses confirm max quality, 3840x1920,
and zero image input tokens. The response metadata and image hashes are in generation-metadata.json.
The complete prompts and request bodies are saved in the four *-prompt.txt and *-request.json files.

Scenes:
- hospital-phone: an exhausted mother lovingly holding her sleeping newborn, with a reassuring woman doctor.
- baby-visit: a concerned father securely holding his baby while listening to a calm pediatrician.
- toddler-visit: a curious toddler with a bunny toy, smiling mother and warm woman doctor.
- child-visit: a child and both parents attentively listening to their pediatrician.

Each scene was generated independently from its description, with natural daylight, realistic skin,
hair, fabric and anatomy, full-frame DSLR character, and restrained photographic processing.
These are fictional concept photographs.

Masters here: nubo-care-{hospital-phone,baby-visit,toddler-visit,child-visit}-v6.png.
Website assets in public/images/: the corresponding v6.webp (3840x1920), v6-1920.webp (1920x960),
and v6-960.webp (960x480) files. Run export_web.py with Python and Pillow to reproduce these exports.
Every WebP export was decoded and checked for exact RGB equality against its PNG source or Hamming
resize. No sharpening or lossy compression was applied. The native 3840px files are about 5.6 to
5.9 MiB each; 1920px versions about 1.4 MiB; 960px versions about 0.4 MiB. Responsive srcset selects
a suitable size. The homepage preload and social image point to the new scene.

Verification: npm run build passed (73 static pages). All four v6 image sources loaded successfully
in the browser, with no browser console errors. Desktop and 390px mobile previews were inspected.
Screenshots are in review/. The local homepage was left open with the updated carousel.
