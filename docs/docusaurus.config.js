// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Avoin Avustaja",
  tagline: "Auta meitä luomaan tulevaisuuden tekoälyavustaja!",
  url: "https://turkunlp.org/",
  trailingSlash: false,
  baseUrl: "/avoin-avustaja/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  staticDirectories: ["public", "static", "docs/data/img"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TurkuNLP", // Usually your GitHub org/username.
  projectName: "Open-Assistant", // Usually your repo name.
  deploymentBranch: "main",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fi",
    locales: ["fi"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        api: {
          path: "docs/api/",
        },
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
          blogTitle: "Julkaisut",
          blogDescription: "Täältä löydät Avoimeen Avustajaan liittyviä kirjoituksia.",
          blogSidebarTitle: "Julkaisut",
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
          feedOptions: {
            type: "all",
            title: "Avoimen Avustajan julkaisut",
            description: "Täältä löydät Avoimeen Avustajaan liittyviä kirjoituksia.",
            language: "fi",
            copyright: `Tekijänoikeus © ${new Date().getFullYear()} Avoin Avustaja & OpenAssistant.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Avoin Avustaja",
        logo: {
          alt: "Avoimen Avustajan logo",
          src: "img/logo_192x192.webp",
        },
        items: [
          {
            href: "https://avoin-avustaja.fi/",
            label: "Sovellus",
            position: "left",
          },
          /*{
            href: "https://avoin-avustaja.fi/chat",
            label: "Chat",
            position: "left",
          },*/
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Dokumentaatio",
          },
          { to: "/blog", label: "Julkaisut", position: "left" },
          { to: "/api", label: "API", position: "left" },
          {
            href: "https://github.com/TurkuNLP/Open-Assistant",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Yhteisöt",
            items: [
              {
                label: "OpenAssistant Contributors Discord",
                href: "https://ykilcher.com/open-assistant-discord",
              },
              {
                label: "LAION Discord",
                href: "https://discord.com/invite/mVcgxMPD7e",
              },
              {
                label: "YK Discord",
                href: "https://ykilcher.com/discord",
              },
            ],
          },
          {
            title: "Lisätietoja",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/TurkuNLP/Open-Assistant",
              },
              {
                label: "FAQ",
                href: "https://docs.avoin-avustaja.fi/avoin-avustaja/docs/faq",
              },
            ],
          },
        ],
        copyright: `Tekijänoikeus © ${new Date().getFullYear()} TurkuNLP & laion.ai. Tehty käyttäen Docusaurusta.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
