<template>
  <div>
    <div class="praxis-slider bg-dots bg-dots--left">
      <div class="inner">
        <h2 class="mb-20">Die Praxis</h2>
        <Slider />
      </div>
    </div>
    <div class="footer-triangle"><div></div></div>
    <footer>
      <p class="copyright">© Physiotherapie Hellbrook</p>
      <div class="grid-2">
        <div class="col col1">
          <p>Hellbrookstraße 71 - 75<br>22305 Hamburg</p>
        </div>
        <div class="col col2">
          <p>Telefon 040 / 61 39 84<br>Fax 040/ 32031378</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="col col1">
          <g-link class="footer__link" to="/impressum/" title="Impressum"><span>Impressum</span></g-link>
        </div>
        <div class="col col2">
          <g-link class="footer__link" to="/datenschutz/" title="Datenschutz"><span>Datenschutz</span></g-link>
          </div>
      </div>
    </footer>
  </div>
</template>

<script>

import Slider from '~/components/Slider.vue'

export default {
  components: {
    Slider
  }
}
</script>