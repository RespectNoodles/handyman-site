# Handyman Cruz — Astro + Tailwind v4

Professional handyman service website for showcasing repairs, builds, and projects across Perth.<nl>

Built with:<nl>

- [Astro](https://astro.build/)<nl>
- [Tailwind CSS v4](https://tailwindcss.com/docs/installation)<nl>
- [Vite](https://vitejs.dev/)<nl>
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)<nl>
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)<nl>

---

## 📁 Project Structure

├── public/ <nl>
│ └── images/ # Static images (textures, icons, lightbox) <nl>
├── src/ <nl>
│ ├── components/ # Header, Footer, ParallaxHero, QuoteForm, etc. <nl>
│ ├── layouts/ <nl>
│ │ └── Layout.astro # Global layout wrapper <nl>
│ ├── pages/ <nl>
│ │ ├── index.astro # Homepage <nl>
│ │ ├── about.astro <nl>
│ │ ├── contact.astro <nl>
│ │ ├── services/ <nl>
│ │ │ ├── index.astro # Services page <nl>
│ │ │ └── [slug].astro # Individual service details <nl>
│ │ ├── projects.astro # Projects gallery <nl>
│ │ ├── testimonials.astro <nl>
│ │ └── faq.astro # FAQ toggle page (coming soon) <nl>
│ ├── styles/ <nl>
│ │ └── tailwind.css # Tailwind v4 & global styles <nl>
│ └── data/ <nl>
│ ├── services.js # Dynamic service data <nl>
│ └── projects.js # Dynamic project data <nl>
├── tailwind.config.js # Tailwind theme + plugins <nl>
├── astro.config.mjs # Astro + Vite config <nl>
└── wrangler.toml # Cloudflare deployment config <nl>

---

## 🧱 Setup Instructions

📦 Install Dependencies  <nl>
   npm install

🧪 Local Development  <nl>
   npm run dev<nl>
   Visit: <http://localhost:4321>

🚀 Deploy to Cloudflare  <nl>
   Make sure Wrangler is installed:  <nl>
   npm install -g wrangler  <nl>
   Then:  <nl>
   wrangler deploy<nl>

🎨 Tailwind Config<nl>
Tailwind v4 with:<nl>

Rubik (sans) + Merriweather (serif) fonts<nl>

Dark theme with wood texture background<nl>

Custom fade-ins + lightbox utility<nl>

Plugins: typography, forms, aspect-ratio, line-clamp<nl>

###🔎 Debug & Check Status<nl>
To make sure your site is up to date:<nl>

###✅ Check local site:<nl>
Run npm run dev and ensure all pages and components render without error.<nl>

###✅ Check Cloudflare deployment:<nl>
Run: wrangler pages project list to confirm it's connected.<nl>
Visit: <https://handymancruz.com><nl>
Confirm latest changes (refresh cache with Ctrl+Shift+R or ⌘+Shift+R)<nl>

###✅ Check build output:<nl>
Run:<nl>
npm run build<nl>

This should output without errors into /dist.<nl>

###✅ Check logs/errors (optional):<nl>
Use [Cloudflare Dashboard → Workers & Pages → Your Site] to view deploy history or errors.<nl>

###🧰 Additional Tips<nl>
All global styles are now in /src/styles/tailwind.css, loaded via Layout.astro.<nl>
Avoid @apply in that file unless converting it to .postcss and adding PostCSS config.<nl>
Use src/data/ to keep project/service entries easy to update.<nl>

###💬 Questions / Ideas?<nl>
Contact: facebook.com/handymancruz<nl>

---

###✅ How to Check Your Site Is *Fully Up To Date*<nl>

To confirm everything is fresh and deployed:<nl>

###🖥️ Locally:<nl>

- Run `npm run dev`<nl>
- Visit `http://localhost:4321`<nl>
- Confirm no broken components, images, or pages.<nl>

###🚀 Online:

- Go to `https://handymancruz.com`<nl>
- Press **Ctrl + Shift + R** (hard refresh)<nl>
- Confirm new text/images/styles show up<nl>
- Use browser dev tools > Network tab > disable cache > refresh again<nl>
- (Optional) Use a phone browser or another device to triple-check<nl>

###🧼 Optional cleanup:<nl>

- Clear Cloudflare cache in the dashboard if old assets still appear.<nl>
- Double-check your `tailwind.css` file path and make sure **only one global stylesheet is being loaded** in `Layout.astro`.
