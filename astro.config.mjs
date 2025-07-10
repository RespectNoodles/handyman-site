import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import spotlight from "@spotlightjs/astro";

export default defineConfig({
  site: "https://handymancruz.com", // ✅ set your live domain
  integrations: [
    mdx(),
    sitemap(),
    tailwind(), // ✅ use @astrojs/tailwind instead of vite plugin
    sentry(),
    spotlight()
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // No need to manually inject tailwindcss here
  },
});
