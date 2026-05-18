// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inconsolata",
      cssVariable: "--font-inconsolata",
      weights: ["200 900"],
    },
  ],
  adapter: cloudflare(),
});
