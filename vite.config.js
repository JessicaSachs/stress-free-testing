import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import windiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Support compiling *.vue SFC files.
    vue(),

    // Support JSX (mainly for tests).
    // JSX for tests works well because you're able to quickly create wrapper components.
    vueJSX(),

    // A Tailwind-compatible Alternative CSS Library.
    // WindiCSS has improved devtools support and on-demand loading.
    // Use it for adding utility classes within your tests to better play with your components.
    // See: https://windicss.org/
    windiCSS(),

    // Icons in this application are powered by the unplugin ecosystem
    // which relies on iconify, a massive collection of free-to-use icons.
    // Usage `<icon-mdi-coffee />` or `import CoffeeIcon from '~icons/mdi/coffee`
    // See https://iconify.design/ for the full icon dataset
    // See https://antfu.me/posts/journey-with-icons-continues for the backstory
    Icons(),
    Components({
      resolvers: IconsResolver(),
    }),

    // Whenever a CommonJS dependency is imported, add it to optimizeDeps.entries
    // See https://vitejs.dev/config/#optimizedeps-entries
    // See https://github.com/antfu/vite-plugin-optimize-persist#motivation
    PkgConfig(),
    OptimizationPersist(),
  ],
  resolve: {
    dedupe: ['vue']
  }
})
