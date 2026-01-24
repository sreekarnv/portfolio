// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

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
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    vite: {
        build: {
            cssMinify: true,
        }
    }
});
