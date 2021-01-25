<template>
    <div class="intro bg-dots bg-dots--right mb-20">
        <div class="col">
          <div class="text">
            <h1 class="align-center mb-20" v-for="page in $page.allData.edges" :key="page.node.heading1">{{ page.node.heading1 }}</h1>
            <div class="therapies">
              <ul class="align-center">
                <li>Krankengymnastik</li>
                <li>Lymphdrainage</li>
                <li>Craniosacraletherapie</li>
                <li>Manuelle Therapie</li>
                <li>Kinesiotape</li>
                <li>Fangopackungen</li>
                <li>KG-Gerät</li>
                <li>Ultraschall</li>
                <li>Sonnenbank</li>
                <li>Bowen</li>
                <li>Massagen</li>
                <li>Bindegewebsmassage</li>
                <li>Fußreflexmassage</li>
                <li>Computergestützte</li>
                <li>Heissluft</li>
                <li>Elektrotherapie</li>
                <li>Eisbehandlung</li>
                <li>Sportphysiotherapie</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<page-query>
query {
  allData(filter: {page: {eq: "Therapien"}}) {
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
    title: 'Unser Therapieangebot'
  }
}
</script>