import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://catania.python.it",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
});
