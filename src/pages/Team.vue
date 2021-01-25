<template>
    <div class="intro bg-dots bg-dots--right mb-20">
        <div class="col">
          <div class="text">
            <h1 class="align-center mb-20" v-for="page in $page.allData.edges" :key="page.node.heading1">{{ page.node.heading1 }}</h1>
            <div class="team">
              <div class="card">
                <div class="img"><div class="placeholder"></div></div>
                <div class="name">E.Chomse</div>
                <div class="title">Praxisinhaber</div>
              </div>
              <div class="card">
                <div class="img"><div class="placeholder"></div></div>
                <div class="name">J.Chomse</div>
                <div class="title">Physiotherapeutin u. med.Leitung</div>
              </div>
              <div class="card">
                <div class="img"><div class="placeholder"></div></div>
                <div class="name">T. Mollnau</div>
                <div class="title">Physiotherapeut</div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<page-query>
query {
  allData(filter: {page: {eq: "Team"}}) {
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
    title: 'Das Team'
  }
}

</script>