Nubo Care carousel: vibrant app-inspired photography
Generated October 23, 2026 using the approved direct OpenAI Images API workflow.

Model: gpt-image-2.5-sunburst. Quality: max. Output: 3840x1920 PNG.
All four images were generated from text only. Earlier care photographs were not supplied.
The user-provided app screenshot informed the palette through sampled color values:
violet #7754b3, berry #ac487b, orange #b75715, teal #238083, blue #3176ae, green #3c8154.
The screenshot itself was not sent to the API. It was used only as local color inspiration.

Art direction: brighter daylight, open shadows, colorful clothing, blankets, cushions and simple
room accents. Natural skin tones and photorealistic material detail remain. The newborn scene
emphasizes tenderness and reassurance; the baby scene thoughtful concern and support; the toddler
scene curiosity and shared delight; the child scene family connection and attentive conversation.
These remain fictional concept photographs.

The four *-prompt.txt files contain complete prompts. The matching *-request.json files contain
exact API request payloads, without credentials. generation-metadata.json records returned max
quality and dimensions, zero image-input tokens, usage and SHA-256 hashes.

PNG masters here: nubo-care-hospital-phone-v7.png, nubo-care-baby-visit-v7.png,
nubo-care-toddler-visit-v7.png, nubo-care-child-visit-v7.png.
Website assets are in public/images/ with matching v7.webp (3840px), v7-1920.webp and v7-960.webp names.
export_web.py reproduces the responsive versions with Pillow and Hamming downsampling, no sharpening.
All exports use lossless WebP and are checked for exact decoded RGB equality with their source pixels.
The carousel, homepage preload and social image use these versioned assets.

Verification: npm run build passed (77 static pages). All four v7 image sources loaded in the
browser with no console errors. Desktop and 390px mobile framing were visually checked.
Review screenshots are in review/. Existing unrelated documentation edits were preserved.
