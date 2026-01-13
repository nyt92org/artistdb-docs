import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ArtistDB",
  description: "ArtistDB documentation for API and more information",
  titleTemplate: " ArtistDB",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api' }
    ],

    sidebar: [
      {
        text: "Introduction",
        link: "/introduction"
      },
      {
        text: "Submission Guidelines",
        link: "/submission"
      },
      {
        text: "API",
        link: "/api"
      },
      {
        text: "FAQ",
        link: "/faq"
      },
      {
        text: "Verified by ArtistDB",
        link: "/verified-by-artistdb"
      },
      {
        text: "Terms of Services",
        link: "/terms-of-services"
      }
    ],

    outline: {
      level: "deep"
    },

    logo: {
      light: '/pendb.svg',
      dark: '/pendbwh.svg',
      alt: 'ArtistDB Logo',
    },

    search: {
      provider: "local",
    },

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2024-present | ArtistDB by NYT92org'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nyt92org/artistdb' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/artistdb.bsky.social' }
    ]
  }
})
