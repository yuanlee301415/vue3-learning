import type { UserConfig, ConfigEnv } from 'vite';

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'

const pkg = require('./package.json')
const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = { dependencies, devDependencies, name, version };

// https://vitejs.dev/config/
export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_INTERNAL_VERSION, VITE_APP_TITLE } = env

  return {
    plugins: [
        vue(),
      vueJsx(),
      createHtmlPlugin({
        entry: 'src/main.ts',
        minify: true,
        inject: {
          data: {
            title: VITE_APP_TITLE
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: Number(VITE_PORT)
    },
    define: {
      __APP_VERSION__: JSON.stringify([pkg.version, VITE_INTERNAL_VERSION].join('.')),
      __APP_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  }
})
