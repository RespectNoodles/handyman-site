# Handyman Cruz — Astro + Tailwind v4

Professional handyman service website for showcasing repairs, builds, and projects across Perth. <br>

Built with:<nl>

- [Astro](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/docs/installation)
- [Vite](https://vitejs.dev/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

## 📁 Project Structure

├── public/ <br>
│ └── images/ # Static images (textures, icons, lightbox) <br>
├── src/ <br>
│ ├── components/ # Header, Footer, ParallaxHero, QuoteForm, etc. <br>
│ ├── layouts/ <br>
│ │ └── Layout.astro # Global layout wrapper <br>
│ ├── pages/ <br>
│ │ ├── index.astro # Homepage <br>
│ │ ├── about.astro <br>
│ │ ├── contact.astro <br>
│ │ ├── services/ <br>
│ │ │ ├── index.astro # Services page <br>
│ │ │ └── [slug].astro # Individual service details <br>
│ │ ├── projects.astro # Projects gallery <br>
│ │ ├── testimonials.astro <br>
│ │ └── faq.astro # FAQ toggle page (coming soon) <br>
│ ├── styles/ <br>
│ │ └── tailwind.css # Tailwind v4 & global styles <br>
│ └── data/ <br>
│ ├── services.js # Dynamic service data <br>
│ └── projects.js # Dynamic project data <br>
├── tailwind.config.js # Tailwind theme + plugins <br>
├── astro.config.mjs # Astro + Vite config <br>
└── wrangler.toml # Cloudflare deployment config <br>
---

## 🧱 Setup Instructions

📦 Install Dependencies  <br>
   npm install <br>

🧪 Local Development  
   npm run dev <br>
   Visit: <http://localhost:4321>

🚀 Deploy to Cloudflare <br>
   Make sure Wrangler is installed: <br>
   npm install -g wrangler <br>
   Then:  <br>
   wrangler deploy <br>

🎨 Tailwind Config
Tailwind v4 with: <br>

Rubik (sans) + Merriweather (serif) fonts <br> 

Dark theme with wood texture background <br>

Custom fade-ins + lightbox utility <br>

Plugins: typography, forms, aspect-ratio, line-clamp <br>

###🔎 Debug & Check Status<br>
To make sure your site is up to date:<br>

###✅ Check local site:<br>
Run npm run dev and ensure all pages and components render without error.<br>

###✅ Check Cloudflare deployment:<br>
Run: wrangler pages project list to confirm it's connected.<br>
Visit: <https://handymancruz.com><br>
Confirm latest changes (refresh cache with Ctrl+Shift+R or ⌘+Shift+R)<br>

###✅ Check build output:<br>
Run:<br>
npm run build<br>

This should output without errors into /dist.<br>

###✅ Check logs/errors (optional):<br>
Use [Cloudflare Dashboard → Workers & Pages → Your Site] to view deploy history or errors.<br>

###🧰 Additional Tips: <br>
All global styles are now in /src/styles/tailwind.css, loaded via Layout.astro.<br>
Avoid @apply in that file unless converting it to .postcss and adding PostCSS config.<br>
Use src/data/ to keep project/service entries easy to update.<br>

###💬 Questions / Ideas?<br>
Contact: facebook.com/handymancruz<br>

---

###✅ How to Check Your Site Is *Fully Up To Date*<br>

To confirm everything is fresh and deployed:<br>

###🖥️ Locally:<br>

- Run `npm run dev`<br>
- Visit `http://localhost:4321`<br>
- Confirm no broken components, images, or pages.<br>

###🚀 Online:

- Go to `https://handymancruz.com`<br>
- Press **Ctrl + Shift + R** (hard refresh)<br>
- Confirm new text/images/styles show up<br>
- Use browser dev tools > Network tab > disable cache > refresh again<br>
- (Optional) Use a phone browser or another device to triple-check<br>

###🧼 Optional cleanup:<br>

- Clear Cloudflare cache in the dashboard if old assets still appear.<br>
- Double-check your `tailwind.css` file path and make sure **only one global stylesheet is being loaded** in `Layout.astro`.
