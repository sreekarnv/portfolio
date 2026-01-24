// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    server: {
        port: 3000
    },
    integrations: [icon()]
});
