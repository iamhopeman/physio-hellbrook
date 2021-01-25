<template>
    <div class="intro bg-dots bg-dots--right">
      <div class="grid-2">
        <div class="col col1">
          <div class="hours">
            <table>
              <tr>
                <td><span class="icon-hours"><svg height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#0d6aa4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" transform="translate(-1.5 -1.5)"><path d="m33 18a15 15 0 1 1 -15-15 15 15 0 0 1 15 15z"/><path d="m18 9v9l6 3"/></g></svg></span></td>
                <td colspan="2"><h2 v-for="page in $page.allData.edges" :key="page.node.heading2">{{ page.node.heading2 }}</h2></td>
              </tr>
              <tr>
                <th></th>
                <th>Mo - Do</th>
                <th>Fr</th>
              </tr>
              <tr>
                <td></td>
                <td>08 - 13 Uhr</td>
                <td>08 - 13 Uhr</td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">14 - 18 Uhr</td></tr>
            </table>
          </div>
        </div>
        <div class="col col2">
          <div class="text align-right">
            <h1 v-for="page in $page.allData.edges" :key="page.node.heading1">{{ page.node.heading1 }}</h1>
            <p v-for="page in $page.allData.edges" :key="page.node.textToHeading">{{ page.node.textToHeading }}</p>
            <g-link class="button" to="/therapien/"><span>mehr erfahren</span></g-link>
          </div>
        </div>
      </div>
    </div>
</template>

<page-query>
query {
  allData(filter: {page: {eq: "Startseite"}}) {
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
    title: 'Ihr Physiopartner'
  }
}

</script>