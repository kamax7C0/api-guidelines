import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "API Guidelines",
  description: "API Guidelines",
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "./logo.png",
    search: {
      provider: "local",
    },
    nav: [
      { text: "REST API", link: "/rest-guidelines/" },
      { text: "API Guidelines", link: "/api-guidelines/" },
      { text: "Support", link: "https://slack.com/intl/en-gb" },
    ],
    docFooter: {
      prev: false,
      next: false,
    },
    sidebar: {
      "/api-guidelines/": [
        {
          text: "CORE PRINCIPLES",
          items: [
            {
              text: "API Design",
              link: "/api-guidelines/global/core-principles/api-design",
            },
            {
              text: "API as a product",
              link: "/api-guidelines/global/core-principles/api-as-a-product",
            },
            {
              text: "API scope",
              link: "/api-guidelines/global/core-principles/api-scope",
            },
            {
              text: "Contract first",
              link: "/api-guidelines/global/core-principles/contract-first",
            },
            {
              text: "Quality standards",
              link: "/api-guidelines/global/core-principles/quality-standards",
            },
            {
              text: "Documentation",
              link: "/api-guidelines/global/core-principles/documentation",
            },
          ],
        },
        {
          text: "REST GUIDELINES",
          items: [
            { text: "Contract", link: "/api-guidelines/rest/contract/" },
            { text: "JSON", link: "/api-guidelines/global/json/" },
            {
              text: "Authorization",
              link: "/api-guidelines/rest/authorization/",
            },
            { text: "HTTP", link: "/api-guidelines/rest/http/" },
            { text: "Resources", link: "/api-guidelines/rest/resources/" },
            { text: "Hypermedia", link: "/api-guidelines/rest/hypermedia/" },
            { text: "Errors", link: "/api-guidelines/rest/errors/" },
            {
              text: "Compatibility",
              link: "/api-guidelines/rest/compatibility/",
            },
          ],
        },
        {
          text: "EVENT GUIDELINES",
          items: [
            { text: "Contract", link: "/api-guidelines/rest/contract/" },
            { text: "JSON", link: "/api-guidelines/global/json/" },
            { text: "Concepts", link: "/api-guidelines/rest/authorization/" },
            { text: "Format", link: "/api-guidelines/rest/http/" },
            { text: "Semantics", link: "/api-guidelines/rest/resources/" },
            { text: "Kafka", link: "/api-guidelines/rest/hypermedia/" },
            { text: "Compatibility", link: "/api-guidelines/rest/errors/" },
          ],
        },
        {
          text: "REVISION HISTORY",
          items: [{ text: "Changelog", link: "/markdown-examples" }],
        },
      ],
      "/rest-guidelines/": [
        {
          text: "REST API",
          items: [
            {
              text: "Some Thing",
              link: "/rest-guidelines",
            }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/kamax7C0/api-guidelines" },
    ],
  },
  ignoreDeadLinks: true,
  outDir: "dist",
  base: "/api-guidelines/"
});
