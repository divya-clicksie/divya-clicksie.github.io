# Nubo Care hero slideshow concepts

October 1, 2026. Current selection balances reassuring, cheerful, concerned, and attentive visits. Concept photography remains fictional and labeled in the wireframe. Images were created and edited with the built-in image generation tool.

| Stage | Selected asset | Direction |
| --- | --- | --- |
| Newborn | [Hospital v2](/Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-hospital-phone-v2.webp) | Restore the previous reassuring mother and woman doctor, with an iPhone on her lap. |
| Baby | [Baby v3](/Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-baby-visit-v3.webp) | Retain the concerned father comforting his unwell baby while the male doctor explains next steps. |
| Toddler | [Toddler v2](/Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-toddler-visit-v2.webp) | Restore the cheerful toddler, mother, and woman doctor. |
| Child | [Child v4](/Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-child-visit-v4.webp) | The child looks at the male doctor with a neutral, engaged face. Both parents remain attentive. |

All four scenes retain a screen-down iPhone, varied families, and two male and two female doctors. The newborn and toddler use existing assets rather than newly generated alternatives. Each has a 960px responsive derivative beside its full-size WebP. Masters remain 1774 by 887 pixels; cwebp uses quality 84 full-size and quality 82 for 960px versions.

The slideshow rotates every eight seconds with a small icon-only pause/play button over the lower-left corner of the image. The dot selectors, stage caption, and separate control bar have been removed. Mobile shows only the photo panel above the copy, without the former control strip. The corner placement keeps the phone and faces clear. Reduced-motion, hover, offscreen, and hidden-tab behavior remain supported. [V2 asset prompts](care-hero-image-v2.md) document the restored newborn and toddler scenes. [V3 asset prompts](care-hero-image-v3.md) document the retained baby image and the child edit target.

## Child gaze correction

- [Full image](/Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-child-visit-v4.webp)
- [960px derivative](/Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-child-visit-v4-960.webp)
- [Original output](/Users/guru/.codex/generated_images/01a0f4ee-817a-7e03-a4ed-961334f4fd61/exec-7f144d12-9434-4b3a-bd05-34b86dac3d21.png)
- Edit target: /Users/guru/Projects/Nubo/nubo-web/public/images/nubo-care-child-visit-v3.webp

Final prompt:

Use case: identity-preserve editorial photo edit. Edit the supplied Nubo Care family doctor photograph. Change ONLY the young child's head angle, gaze and expression: raise his head and turn his eyes toward the male doctor on the right, listening with a calm neutral face, relaxed closed lips, no grin and no downcast look. The child should look engaged and comfortable. Preserve his exact identity, age, hair, clothes, seated posture, hands and body position. Preserve both parents and their existing attentive expressions, the male doctor's serious face and gesture, all other people, the room, light, phone, wide 2:1 composition and quiet left side. No additional smile, no new objects, no text, no other changes.
