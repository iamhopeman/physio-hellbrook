<template>
  <div>
    <Header />
    <Layout>
     <transition name="fade" appear>
      <router-view />
    </transition>
    </Layout>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>

<script>

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Header,
    Footer
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>