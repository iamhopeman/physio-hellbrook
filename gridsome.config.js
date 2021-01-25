// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  pathPrefix: '/test',
  siteName: 'Physiotherapie Hellbrook',
  siteDescription: 'Als Therapieangebot stehen u.a. Massagen zur Muskeldehnung und Muskellockerung, sowie Krankengymnastik mit aktiven und passiven Beweglichkeitsübungen (Mobilisation). Auch ganzheitliche Konzepte zum Erlernen von Bewegungskontrolle bzw. zum Bewegungserlernen (PNF), Elektrotherapie und Cranio-Sakrale Therapie gehören zu unserem Therapieangebot.',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: 'keyaaatVnyRAhgkcq', // required
        base: 'appjhYqE2QFCKbR7J', // required
        tables: [
          {
            name: 'Data', // required
            typeName: 'Data', // required
          }
        ],
        tableName: 'Data', // required
      },
    },
  ],
}
