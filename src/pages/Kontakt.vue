<template>
    <div class="intro bg-dots bg-dots--right mb-20">
        <div class="col">
          <div class="text">
            <h1 class="align-center mb-20" v-for="page in $page.allData.edges" :key="page.node.heading1">{{ page.node.heading1 }}</h1>
            <h2>So finden und erreichen Sie uns:</h2>
<p><strong>Physiotherapie Hellbrook</strong><br>Hellbrookstraße 71 - 75<br>22305 Hamburg</p><p>Telefon: 040-61 39 84
<br>Fax: 040-32031378<br>E-Mail: <a href="mailto:e.chomse@web.de">e.chomse@web.de</a></p>
        </div>
      </div>
    </div>
</template>

<page-query>
query {
  allData(filter: {page: {eq: "Kontakt"}}) {
    edges {
      node {
        heading1
        textToHeading
        heading2
        text2
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Kontakt'
  }
}
</script>