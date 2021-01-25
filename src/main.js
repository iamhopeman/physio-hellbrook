// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Layout from '~/layouts/Default.vue'
import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Layout)
  head.htmlAttrs = { lang: 'de' }
  // Add a meta tag
  head.meta.push({
    name: 'robots',
    content: 'index, follow'
  })
}