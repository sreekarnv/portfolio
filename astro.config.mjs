// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: "https://sreekarnutulapati.vercel.app",
    output: 'static',
    compressHTML: true,
    server: {
        port: 3000
    },
    integrations: [
        icon(),
        sitemap(),
        mdx(),
    ],
    vite: {
        build: {
            cssMinify: true,
        }
    }
});
