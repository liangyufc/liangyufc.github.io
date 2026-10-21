import { defineConfig } from 'astro/config';

// Override SITE_URL if you add a custom domain later.
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://liangyufc.github.io',
});
