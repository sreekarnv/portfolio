// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://sreekarnutulapati.vercel.app',
    output: 'static',
    compressHTML: true,
    server: {
        port: 3000
    },
    integrations: [icon()],
    vite: {
        build: {
            cssMinify: true,
        }
    }
});
