import { defineNuxtConfig, NuxtConfig } from 'nuxt/config'

// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig(<NuxtConfig>{
    telemetry: false,
    pages: true,
    srcDir: 'src',
    debug: process.env.NODE_ENV === 'development',

    runtimeConfig: {
        public: {
            packageVersion: process.env.npm_package_version,
        },
    },

    components: {
        global: true,
        dirs: [{ path: '~/components' }],
    },

    css: ['~/assets/sass/global.scss'],

    modules: [],

    vite: {
        define: {
            'process.env.DEBUG': !!process.env.DEBUG,
        },
    },
})
