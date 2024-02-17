/*
 * This module contains vite configuration 
 * settings for e-commerce webapplication.
 */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: resolve('./webapp/static/webapp/src'),
    base: '/static/',
    mode: 'production',
    server: {
        host: 'localhost',
        port: 3000,
        open: false,
        watch: {
          usePolling: true,
          disableGlobbing: false,
        },
    },
    build: {
        outDir: resolve('./webapp/static/webapp/dist/js'),
        emptyOutDir: true,
        assetsDir: '',
        manifest: true,
        rollupOptions: {
            input: {
                index: resolve('./webapp/static/webapp/src/js/index.jsx'),
            },
        },
    },
});
