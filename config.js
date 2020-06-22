const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://orionx.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://app.orionx.com/logo-white.svg',
    logoLink: 'https://docs.orionx.com/',
    title: "<a href='https://docs.orionx.com/'></a>",
    githubUrl: 'https://github.com/orionx-dev/orionx-sdk-js',
    helpUrl: '',
    tweetText: '',
    social: `
      <li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/comienza-a-programar', // add trailing slash if enabled above
      '/tutoriales-orionx',
      '/sdks',
      '/queries',
      '/mutations',
      '/objects',
      '/scalars',
      '/websockets',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Orionx', link: 'https://orionx.com' }],
    frontline: true,
    ignoreIndex: true,
    title:
      "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Documentación API | Orionx',
    description: 'Documentación API Orionx ',
    ogImage: null,
    docsLocation: 'https://github.com/orionx-dev/orionx-sdk-js',
    favicon: 'http://docs.orionx.com/img/icon.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Orionx API Documentation',
      short_name: 'OrionxDocs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
