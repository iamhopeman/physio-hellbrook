<template>
    <VueSlickCarousel v-bind="settings">
        <div><g-image src="~/assets/img/slider1.jpg" alt="Praxisflur" /></div>
        <div><g-image src="~/assets/img/slider2.jpg" alt="Hantelübung" /></div>
        <div><g-image src="~/assets/img/slider3.jpg" alt="Rückenmassage" /></div>
        <div><g-image src="~/assets/img/slider2.jpg" alt="Hantelübung" /></div>
    </VueSlickCarousel>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Slider',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      }
    }
  },
}
</script>