# Golden Mountain Stories

Build a WARM, ELEGANT, fully animated multi-page author website for JANICE FLOWERS, Christian inspirational author of "LIFE FROM THE MOUNTAIN: A Story of Redemption, Faith and New Beginnings." The entire site's visual energy must match the book cover artwork: a golden mountain sunrise, a cozy stone-chimney log cabin, misty blue-green ridgelines, and warm faith-inspired storytelling tones. Not childish, not corporate, think tasteful literary and inspirational nonfiction site for an adult audience. React + Vite + Pure CSS only. No Tailwind. No UI libraries.

IMPORTANT: Do not use em dashes anywhere in any text content on the site, in any component, page, button label, alt text, or accordion content. Use commas, periods, or simple rewording instead. This rule applies everywhere in the entire codebase.

---

## DESIGN SYSTEM (WARM SUNSET-MOUNTAIN PALETTE, MATCHING THE BOOK COVER AND LOGO EXACTLY)

Colors:
- --navy-deep: #1B2A47 (headline text, primary UI anchor color)
- --navy-soft: #2E3F63 (secondary text/nav)
- --crimson: #7A2E2E (script accents, CTA highlights, quote marks)
- --crimson-light: #9C4A4A
- --gold-amber: #E8A94C (sunburst glow, buttons, dividers)
- --gold-light: #F3C77E
- --forest-green: #3B5B40 (mountain silhouettes, secondary accents)
- --forest-green-deep: #274330
- --parchment: #FBF3E7 (card and section backgrounds)
- --parchment-light: #FFF9F0
- --sky-dusk: #C9D8E3 (soft banner gradient top)
- --glow-gold: 0 0 30px rgba(232,169,76,0.55)
- --glow-crimson: 0 0 22px rgba(122,46,46,0.3)

General rule: every hero/banner section across the entire site (Home, About the Author, About the Book, FAQ, Contact) uses a soft sunrise-over-mountains gradient banner (dusk blue fading into warm gold near the horizon, with a soft mountain ridgeline silhouette along the bottom edge). No section should feel flat, corporate, or cold. Every banner should feel like the quiet golden-hour warmth of the book cover.

Fonts (Google Fonts):
- 'Playfair Display' — hero titles, big headings (elegant serif, matches "LIFE FROM THE MOUNTAIN" cover title)
- 'Cormorant Garamond' — subheadings, eyebrow text, footer column headings
- 'Lora' — body paragraphs, bio text (warm, readable serif)
- 'Alex Brush' — script accents, pull-quotes, signature-style flourishes (matches "Flowers" script in logo and "Mountain" script on cover)

Logo: Use the uploaded transparent PNG logo (mountain and sunburst icon, "JANICE" serif navy plus "Flowers" crimson script) in the navbar and footer.

Texture motif throughout: soft parchment card backgrounds, a thin gold ornamental divider line between sections, a subtle single-line mountain ridge SVG that appears faintly in banner backgrounds, gentle floating light mote particles drifting slowly (warm drifting light specks, not leaves or fireflies).

---

## FILE STRUCTURE
src/
  App.jsx
  main.jsx
  index.css
  assets/
    author-photo.jpeg
    bookcover-front.jpg
    logo.png
  pages/
    Home.jsx
    AboutAuthor.jsx
    AboutBook.jsx
    FAQ.jsx
    Contact.jsx
  components/
    Navbar.jsx
    Footer.jsx
    ParticleCanvas.jsx
    Book3DTilt.jsx
    RidgeDivider.jsx
    ScrollReveal.jsx
    AccordionItem.jsx
    PlatformTicker.jsx
    PageBanner.jsx
    MessageFromAuthor.jsx (new animated author message section for Home page)

NOTE: Only use bookcover-front.jpg (the clean front cover only, cabin and mountain sunrise, no printed text baked in beyond the title itself). Do NOT use the back-cover or full-wrap spread image anywhere on the site.

---

## NAVBAR (IMPORTANT SIZING RULES)
- Glass morphism sticky navbar (backdrop-filter: blur(16px), bg rgba(251,243,231,0.9))
- Left: Logo, sized properly and clearly visible, roughly 55 to 65px tall on desktop and 40 to 45px tall on mobile, not stretched or distorted, with enough left padding to breathe
- Center or right: nav links Home, About the Author, About the Book, FAQ, Contact, in a restrained, elegant size, around 14 to 15px font size, letter-spacing subtle (not oversized, not competing visually with the logo)
- The logo should have clear visual weight and presence, while the nav links stay clean, understated, and secondary in visual hierarchy
- On scroll past 80px: gold glowing bottom border, bg becomes navy with cream text
- Active link: thin crimson or gold underline with gentle fade-in animation
- Mobile: hamburger opens a full-screen slide-down menu, staggered link animations
- Height: 80px desktop, 60px mobile
- Fully responsive, no overlap or overflow at any screen width

---

## UNIVERSAL PAGE BANNER RULE (APPLIES TO EVERY PAGE)

Every page (Home hero, About Author hero, About Book hero, FAQ hero, Contact hero) opens with:
- Background: animated gradient combining soft dusk sky-blue at the top transitioning into warm golden amber near the bottom, like the sunrise over the ridgeline on the book cover. CSS keyframes slowly shift gradient position and hue so it feels alive.
- A soft, single-line mountain ridge silhouette (forest green, low opacity) along the bottom edge of the banner, transitioning smoothly into the parchment content below.
- A gentle golden sunburst glow radiating softly from one side, slow pulse animation.
- ParticleCanvas: 20 to 40 soft drifting light motes, subtle and warm, quiet and contemplative rather than busy.
- Text inside each banner uses Playfair Display for the main heading in navy or cream with a soft gold glow, and Cormorant Garamond for the eyebrow or subheading in crimson or gold.

---

## HOME PAGE — 9 SECTIONS

### SECTION 1 — HERO
- Full viewport height
- Background: vivid animated gradient, dusk blue at top blending into warm amber and soft crimson near the bottom, mountain ridgeline silhouette along the base, soft sunburst glow from one corner
- Layered background elements at low-medium opacity: faint cabin silhouette, soft mist drifting horizontally near the ridgeline, warm light motes drifting slowly
- CENTER CONTENT (fade in on load, staggered delay), top to bottom:
  1. Eyebrow: "A STORY OF REDEMPTION, FAITH AND NEW BEGINNINGS" in Cormorant Garamond, crimson, letter-spacing 0.25em
  2. Main title: "LIFE FROM THE MOUNTAIN" in Playfair Display, huge, two lines, navy with a warm gold glowing text-shadow
  3. Divider: thin gold ornamental flourish line
  4. Tagline (Alex Brush script, large, crimson): "A heartfelt journey of faith, healing, and second chances."
  5. Author credit: "by JANICE FLOWERS" in Cormorant Garamond, gold
  6. EXACTLY TWO BUTTONS side by side, no other buttons anywhere on the site:
     - "BUY ON AMAZON", gold to crimson gradient bg, cream text, hover brightens and lifts with glow, ripple effect on click
     - "BUY DIRECTLY", navy outline button with soft fill, hover fills solid navy with cream text, links to a placeholder direct purchase URL
  7. Scroll indicator: soft bouncing chevron below buttons, gold color

### SECTION 2 — BOOK SHOWCASE (3D Cover Reveal)
- Parchment bg, full-width
- Left: Book3DTilt component using the clean front cover image, CSS 3D perspective tilt on mouse move, gold glow aura pulsing around the cover, shimmer sweep animation every few seconds
- Right, text in order:
  1. "THE BOOK" label, Cormorant Garamond, crimson, small caps
  2. Title, Playfair Display, navy, large: "Life from the Mountain"
  3. Subtitle badge pill: "A Story of Redemption, Faith and New Beginnings", gold bg, navy text
  4. Short synopsis (2 to 3 sentences): A story of redemption, weaving together Christian faith, historical fiction, and emotional healing against the beauty and challenge of mountain life. It follows two wounded people whose lives are quietly and powerfully transformed by God's grace.
  5. Genre pills row: Christian Fiction, Historical Fiction, Redemption and Healing, Faith-Based Storytelling
  6. Five gold star rating display
  7. The same two buttons repeated: Buy on Amazon and Buy Directly
- On scroll-enter: left slides in from the left, right slides in from the right

### SECTION 3 — WHERE TO FIND THE BOOK (Platform Slider)
- Bg: navy, cream text, subtle golden light rays
- Heading: "AVAILABLE ON YOUR FAVORITE PLATFORMS" Playfair Display, gold, centered
- Subtext (Alex Brush script, italic): "Wherever your heart loves to read"
- PlatformTicker component: infinite auto-scrolling horizontal slider, pill badges, scrolling continuously right to left: Amazon Kindle, Barnes and Noble, Apple Books, Kobo, Google Play Books, Paperback Edition
  - Smooth infinite loop, duplicate badge list back to back, no visible jump
  - Pill badges: gold bg, navy bold text, soft shadow, rounded corners
  - Pauses on hover, edges fade via mask-image gradient, fully responsive
- Stats row below: 3 cards, "Faith-Filled Story", "Redemption Journey", "Mountain Setting", gold number or icon, navy label, gentle lift on hover

### SECTION 4 — ABOUT THE AUTHOR PREVIEW (LARGER, MORE PROMINENT SECTION)
- Split layout: image left, text right, generous top and bottom padding, noticeably larger and more prominent than a typical compact preview section
- Left: large author photo in a rounded frame, gold border, soft gold ring glow behind the photo, thin ornamental corner flourish detail, soft crimson glow shadow, slight hover zoom
- Right:
  1. "MEET THE AUTHOR" eyebrow, Cormorant Garamond, crimson
  2. "Janice Flowers" Playfair Display, navy, large
  3. Subtitle: "Christian Author, Storyteller of Hope" Cormorant Garamond, crimson
  4. Expanded bio, 2 to 3 short warm paragraphs in Lora: Janice Flowers is a Christian author from Alabama with a heartfelt passion for sharing stories that point readers to God's faithfulness, hope, and redeeming love. Her writing carries the quiet conviction that no hurt is beyond God's healing and no life is beyond His purpose. Through every page, she invites readers into a deeper trust in grace, drawing on the beauty of mountain life and the resilience of the human heart. Her latest release, Life from the Mountain, reflects years of thoughtful storytelling rooted in faith, and she hopes every reader closes the book feeling a little more hopeful than when they opened it.
  5. "READ FULL BIO" button, ghost style, gold border, hover fill gold bg navy text, linking to the About the Author page
- Background: parchment texture, soft light motes at low opacity

### SECTION 5 — BOOK SYNOPSIS DEEP DIVE
- Full-width section, warm gradient bg blending gold and soft crimson, like a sunset settling over the ridgeline
- Center top pull quote block: large italic Playfair Display text "No hurt is beyond His healing." navy on a gold panel, crimson quotation mark icon, generous padding
- Below: full synopsis in Lora, navy, comfortable line-height, max-width 800px centered: Life from the Mountain is a heartfelt story of redemption, weaving together Christian faith, historical fiction, and emotional healing set against the quiet beauty and hard realities of mountain life. It follows two wounded souls whose paths cross and whose lives are slowly, tenderly transformed by God's grace. Set among misty ridgelines and a weathered mountain home, this is a story about second chances, the courage to begin again, and the belief that no life is ever beyond His purpose.
- Left sidebar accent: vertical gold line with "SYNOPSIS" text rotated
- Below synopsis: clean front cover image displayed small, elegantly framed, max-width around 320px desktop, centered, gold border glow, gentle 3D tilt on hover

### SECTION 6 — A MESSAGE FROM JANICE (NEW ANIMATED SECTION)
- Full-width section with a warm parchment background and a soft animated gold light glow drifting slowly across the background
- Centered content, max-width 750px:
  1. A small decorative quotation mark icon in crimson at the top, fading in on scroll
  2. A heartfelt short personal message from the author in Playfair Display italic, navy text, medium-large size, revealing itself with a gentle fade-and-rise animation as the user scrolls into view: "I wrote this story for anyone who has ever wondered if they are too broken, too far gone, or too late for a new beginning. I promise you, grace reaches every mountain."
  3. Below it, in Alex Brush script styling, crimson: "With love, Janice"
  4. A thin gold ornamental divider line beneath the signature
- Subtle floating light motes drifting through this section, matching the rest of the site
- The section animates in smoothly on scroll-enter, with a slight staggered delay between the quote icon, the message text, and the signature

### SECTION 7 — WHY READERS LOVE THIS BOOK (Feature Grid)
- Heading: "WHY THIS STORY TOUCHES HEARTS" Playfair Display, navy
- 6 card grid (2 rows by 3 columns, mobile: 1 column), parchment bg, gold top border glow, crimson icon, gentle lift and glow on hover
  1. "A Story of Redemption", two wounded lives transformed by grace
  2. "Rooted in Faith", a gentle, honest exploration of God's healing power
  3. "Mountain Setting", the beauty and hardship of life among the ridgelines
  4. "Historical Fiction Woven In", a story grounded in time and place
  5. "Emotional Healing", a journey readers will feel in their own hearts
  6. "Hope for New Beginnings", a reminder that no life is beyond His purpose
- Cards animate in staggered on scroll-enter

### SECTION 8 — READER PRAISE
- Heading: "WHAT READERS ARE SAYING" Playfair Display, navy
- 3 quote cards in a row (mobile: stacked), parchment bg, gold left border, crimson quotation mark, quote in Lora italic, reviewer name in Cormorant Garamond small caps, hover tilt and gold glow
  1. "A beautifully written story of grace that stayed with me long after I finished it." A Reader
  2. "Janice writes with such honesty about pain and healing. This book is a gift." Book Club Reader
  3. "A quiet, powerful reminder that God's grace reaches every corner of our lives." Early Reader Review

### SECTION 9 — CALL TO ACTION AND FOOTER BRIDGE
- Full-width warm gradient bg (gold to crimson, sunset-over-mountain feel)
- Soft floating light motes
- Center: "BEGIN YOUR OWN JOURNEY OF GRACE" Playfair Display, navy text with cream glow, huge
- Subtext: "Grab your copy today and step into a story of faith, healing, and new beginnings."
- The same two buttons: Buy on Amazon and Buy Directly

---

## ABOUT THE AUTHOR PAGE — 5 SECTIONS

### SECTION 1 — AUTHOR HERO (Universal Page Banner)
- "JANICE FLOWERS" Playfair Display, navy, centered, gold glow
- Subtitle: "Author of Life from the Mountain" Cormorant Garamond, crimson
- Thin gold flourish divider

### SECTION 2 — PHOTO AND FULL BIO
- Left: large author photo, gold frame border, soft gold ring glow, soft hover zoom
- Right: full bio in Lora, navy, on parchment background: "Janice Flowers is a Christian author from Alabama who has a passion for sharing stories that point readers to God's faithfulness, hope, and redeeming love. Through her writing, she seeks to remind others that no hurt is beyond God's healing and no life is beyond His purpose. Her latest release, Life from the Mountain, weaves together faith, history, and emotional healing into a story readers will carry with them long after the final page."

### SECTION 3 — WHERE THE STORY COMES FROM
- Two column layout
- Left: italic quote in Playfair Display: "Every story of healing begins with grace." gold quotation marks
- Right: paragraph about her Alabama roots and her heart for writing faith-centered stories of hope. Parchment card, gold top border.
- Background: warm gradient (gold and crimson), light particle drift

### SECTION 4 — WRITING JOURNEY
- Vertical timeline (center line, gold, crimson dots)
- Milestones:
  "Alabama Roots", raised with a heart for faith and storytelling
  "A Calling to Write", drawn to stories of grace, hope, and redemption
  "Life from the Mountain", her latest release, a story of faith and new beginnings

### SECTION 5 — CONNECT WITH JANICE
- Centered section, navy background with gold light rays
- "STAY CONNECTED" heading, gold
- Paragraph: "Follow Janice for updates on new releases, reflections on faith, and more."
- "CONTACT JANICE" button linking to /contact

---

## ABOUT THE BOOK PAGE — 6 SECTIONS

### SECTION 1 — BOOK HERO (Universal Page Banner)
- Center: Book3DTilt component, large, mouse tilt, gold glow aura
- Small line above title: "A Story of Redemption, Faith and New Beginnings" Cormorant Garamond, crimson
- Title: "LIFE FROM THE MOUNTAIN" Playfair Display, navy with gold glow
- The same two buttons: Buy on Amazon and Buy Directly

### SECTION 2 — FULL SYNOPSIS
- Left: genre pills row, then full synopsis text (as above)
- Right: clean front cover image, medium size, hover tilt, gold border glow

### SECTION 3 — BOOK DETAILS
- 6 card info grid, parchment cards, gold glow border, hover lift:
  Genre: Christian Fiction, Historical Fiction
  Themes: Redemption, Faith, Healing, New Beginnings
  Setting: A mountain community, a weathered log home, misty ridgelines
  Tone: Heartfelt, reflective, hopeful
  Format: Paperback and eBook
  Perfect For: Readers of faith-based and inspirational fiction

### SECTION 4 — KEY THEMES
- Heading: "THEMES OF THE STORY"
- Grid of 4 theme pillars, icon, Cormorant Garamond heading, Lora description: Faith and God's Grace, Redemption and Second Chances, Emotional Healing, New Beginnings

### SECTION 5 — READER REVIEWS
- 4 review cards in 2x2 grid, same styling as homepage, hover glow

### SECTION 6 — WHERE TO BUY (Platform Slider repeated)
- Heading: "GET YOUR COPY TODAY"
- PlatformTicker again: Amazon Kindle, Barnes and Noble, Apple Books, Kobo, Google Play Books, Paperback Edition
- The same two buttons: Buy on Amazon and Buy Directly
- Small text: "Available in paperback and eBook formats"

---

## FAQ PAGE

- Hero (Universal Page Banner): "FREQUENTLY ASKED QUESTIONS"
- 8 accordion items, smooth expand and collapse, gold left border when open:
  1. Where can I buy the book?
  2. Is this book part of a series?
  3. What themes does the book explore?
  4. Is this book appropriate for a church book club?
  5. Will there be a sequel?
  6. Is the book available in paperback?
  7. Where can I leave a review?
  8. How can I stay updated on new releases?
- Below accordion: CTA card, "Still have questions? Reach out directly." plus Contact button

---

## CONTACT PAGE

- Hero (Universal Page Banner): heading, subtext, warm gradient background
- Two column layout:
  Left: Contact form (Name, Email, Subject, Message, Submit), success state animation
  Right: Contact info card on parchment: "Reach Out" heading, email placeholder hello@janiceflowersbooks.com, "Janice loves hearing from readers, book clubs, and fellow believers on the journey.", small circular author photo with gold ring border

---

## FOOTER (FULL, DETAILED, PROFESSIONAL MULTI-COLUMN FOOTER)

Build a complete 4-column footer on a navy background (#1B2A47) with cream text and a gold glowing top border line. Generous padding, this should feel like a proper, substantial footer, not a thin closing strip.

**Column 1: Brand**
- Logo, same clear visible size as navbar
- Tagline: "Stories of faith, healing, and new beginnings."
- Short paragraph: "Janice Flowers writes heartfelt Christian fiction that points readers to God's grace and the hope of second chances."

**Column 2: Explore**
- Heading "EXPLORE" in gold, Cormorant Garamond, small caps
- Links: Home, About the Author, About the Book, FAQ, Contact, each with subtle hover color shift to gold and a small arrow icon that slides in on hover

**Column 3: The Book**
- Heading "THE BOOK" in gold, Cormorant Garamond, small caps
- "Life from the Mountain"
- "A Story of Redemption, Faith and New Beginnings"
- Small book cover thumbnail, 60 to 80px wide, soft gold glow on hover
- "Buy on Amazon" small text link with gold arrow icon
- "Buy Directly" small text link with gold arrow icon

**Column 4: Stay Connected**
- Heading "STAY CONNECTED" in gold, Cormorant Garamond, small caps
- Short line: "Get updates on new releases and reflections on faith."
- Email input field with a "Subscribe" button, gold gradient, rounded pill styling matching the rest of the site, on submit show a small inline success message with a gentle fade animation, no page reload

**Bottom bar (below the 4 columns, separated by a thin gold divider line):**
- Left: "© 2026 Janice Flowers. Life from the Mountain. All rights reserved."
- Center or right: small centered muted gold or cream text: "Website designed and developed by Chicagowrite"

**Back to top button**, bottom right corner, gold circle with up arrow, fixed position, appears after 300px scroll, smooth scroll to top on click, gentle hover lift and glow

---

## GLOBAL ANIMATIONS (must be present on EVERY page)

1. Page fade transition on route change (opacity 0 to 1, 400ms)
2. ScrollReveal on every page: headings and content fade up into view on scroll
3. Staggered children: grid cards animate in with 80ms delay each
4. Soft drifting light motes present in every page banner
5. Book3DTilt: mouse tilt on desktop, simple tap animation on touch devices
6. PlatformTicker: infinite scroll, pauses on hover, edge fade via mask-image
7. Button ripple on click
8. Accordion: smooth eased max-height transition
9. Navbar scroll: toggles class at 80px scroll
10. Shimmer sweep across book cover image every few seconds
11. Timeline: alternating left and right slide in on scroll
12. Banner glow pulse: golden light softly pulses in size and brightness on a slow loop
13. Card hover effects site-wide: gentle lift plus glow for all card types
14. Sun ray animation: soft diagonal golden light beams slowly shift and pulse in every banner
15. Message from Janice section: staggered fade-and-rise animation on scroll-enter for quote icon, message text, and signature

---

## MOBILE RESPONSIVENESS (REQUIRED)

- All hero and banner text resizes fluidly using clamp() for font sizes
- Buttons stack vertically on narrow viewports, full width, no overflow
- ParticleCanvas particle count automatically reduces on mobile
- Navbar collapses into hamburger menu below 768px, logo stays clearly visible at proper size
- All grids collapse to single column on mobile, footer columns stack vertically
- Book3DTilt scales down proportionally, simple tap animation on touch devices
- PlatformTicker badges resize smaller on mobile, animation stays smooth
- No horizontal scroll on any page at any screen width

---

## ROUTING (React Router v6)
/ → Home
/about-author → AboutAuthor
/about-book → AboutBook
/faq → FAQ
/contact → Contact

---

## DEPENDENCIES
"react": "^18.x",
"react-dom": "^18.x",
"react-router-dom": "^6.x",
"vite": "^5.x"
No other libraries. All animations in pure CSS and vanilla JS inside React.

---

## README.md
Janice Flowers, Author Website
Setup
npm install
Add images to src/assets/:
author-photo.jpeg
bookcover-front.jpg (clean front cover only, no back-cover text)
logo.png (uploaded transparent logo)
npm run dev
Open http://localhost:5173

---

Build every single file completely. No placeholders in code. Every component full. Every section detailed. Every animation functional on every page. Every page banner across the entire site must match the warm, golden, faith-inspired energy of the book cover exactly: soft dusk blue to warm amber gradients, mountain ridgeline silhouettes, gentle sunburst glow, no cold, flat, or corporate banners anywhere on the site. No em dashes anywhere in the text content, in any component or page. No image with baked-in printed text should be used anywhere on the site. The navbar logo must be clearly visible and properly sized, and nav link text must stay restrained and elegant, not oversized. The footer must be a full, detailed, multi-column professional footer, not a thin closing strip. This should be a production quality, warm, heartfelt, faith-inspired author website, mobile friendly, and welcoming for readers of Christian and inspirational fiction.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://golden-grace-scribe.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b34f6b6c-0578-46c7-80fc-7ee58d4b765e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
