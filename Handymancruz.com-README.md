# Handyman Cruz — Astro + Tailwind v4

Professional handyman service website for showcasing repairs, builds, and projects across Perth.

Built with:

- [Astro](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/docs/installation)
- [Vite](https://vitejs.dev/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

## 📁 Project Structure

├── public/
│ └── images/ # Static images (textures, icons, lightbox)
├── src/
│ ├── components/ # Header, Footer, ParallaxHero, QuoteForm, etc.
│ ├── layouts/
│ │ └── Layout.astro # Global layout wrapper
│ ├── pages/
│ │ ├── index.astro # Homepage
│ │ ├── about.astro
│ │ ├── contact.astro
│ │ ├── services/
│ │ │ ├── index.astro # Services page
│ │ │ └── [slug].astro # Individual service details
│ │ ├── projects.astro # Projects gallery
│ │ ├── testimonials.astro
│ │ └── faq.astro # FAQ toggle page (coming soon)
│ ├── styles/
│ │ └── tailwind.css # Tailwind v4 & global styles
│ └── data/
│ ├── services.js # Dynamic service data
│ └── projects.js # Dynamic project data
├── tailwind.config.js # Tailwind theme + plugins
├── astro.config.mjs # Astro + Vite config
└── wrangler.toml # Cloudflare deployment config

---

## 🧱 Setup Instructions

📦 Install Dependencies  
   npm install

🧪 Local Development  
   npm run dev

   Visit: <http://localhost:4321>

🚀 Deploy to Cloudflare  
   Make sure Wrangler is installed:  
   npm install -g wrangler  
   Then:  
   wrangler deploy

🎨 Tailwind Config
Tailwind v4 with:

Rubik (sans) + Merriweather (serif) fonts

Dark theme with wood texture background

Custom fade-ins + lightbox utility

Plugins: typography, forms, aspect-ratio, line-clamp

🔎 Debug & Check Status
To make sure your site is up to date:

✅ Check local site:
Run npm run dev and ensure all pages and components render without error.

✅ Check Cloudflare deployment:
Run: wrangler pages project list to confirm it's connected.
Visit: <https://handymancruz.com>
Confirm latest changes (refresh cache with Ctrl+Shift+R or ⌘+Shift+R)

✅ Check build output:
Run:
npm run build

This should output without errors into /dist.

✅ Check logs/errors (optional):
Use [Cloudflare Dashboard → Workers & Pages → Your Site] to view deploy history or errors.

🧰 Additional Tips
All global styles are now in /src/styles/tailwind.css, loaded via Layout.astro.
Avoid @apply in that file unless converting it to .postcss and adding PostCSS config.
Use src/data/ to keep project/service entries easy to update.

💬 Questions / Ideas?
Contact: facebook.com/handymancruz

---

✅ How to Check Your Site Is *Fully Up To Date*

To confirm everything is fresh and deployed:

🖥️ Locally:

- Run `npm run dev`
- Visit `http://localhost:4321`
- Confirm no broken components, images, or pages.

🚀 Online:

- Go to `https://handymancruz.com`
- Press **Ctrl + Shift + R** (hard refresh)
- Confirm new text/images/styles show up
- Use browser dev tools > Network tab > disable cache > refresh again
- (Optional) Use a phone browser or another device to triple-check

🧼 Optional cleanup:

- Clear Cloudflare cache in the dashboard if old assets still appear.
- Double-check your `tailwind.css` file path and make sure **only one global stylesheet is being loaded** in `Layout.astro`.
