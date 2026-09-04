# Upgrade projects, reels, and testimonials

## What will change
- Keep the existing brand, typography, palette, header, hero, about, services, before/after, contact, footer, copy, and global motion language intact.
- Replace the current Featured Work area with a four-item **Recent Projects** scroll stack. Each full-width card will layer and progressively lift, scale, and reveal as the page scrolls, with project imagery and structured title, location, type, and description data.
- Replace the existing Social/TikTok area with a tactile **Reels** carousel showing four vertical 9:16 roofing clips. The centered reel will be prominent, neighboring reels will remain visible, and drag, touch, wheel, and accessible previous/next controls will move the gallery without page overflow.
- Rework the existing four testimonials into a layered, perspective card stack that transforms through the section while preserving every quote and homeowner/location label.
- Update navigation and section IDs to About, Work, Projects, Before / After, Reels, Testimonials, and Book Kenny in the requested order.

## Visual and interaction details
- Use the current ivory, chocolate, brass, Fraunces, and Jost system throughout.
- Use restrained depth, shadows, scale, translate, opacity, and perspective rather than introducing a new visual identity.
- Preserve normal vertical page scrolling; animated sections stay clipped within the viewport width.
- Reduce or remove transforms when reduced-motion is requested.
- Pause off-screen reel playback and resume visible reels only, while keeping every video muted, looping, inline, and autoplay-capable.

## Technical details
- Add Motion for React only because no Framer Motion dependency or supplied animation components currently exist in the project.
- Create focused reusable components for the project stack, circular reels gallery, and testimonial scroll stack, then compose them in the existing home route.
- Store all project, reel, and testimonial entries as simple data arrays so client photos and videos can be swapped later.
- Reuse the existing local roofing media as temporary placeholders and avoid external hotlinks.
- Verify compilation and inspect the live page at desktop and mobile widths for ordering, overflow, card transforms, video behavior, and navigation anchors.
