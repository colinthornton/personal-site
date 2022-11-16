import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [tailwind(), prefetch(), image()],
});
