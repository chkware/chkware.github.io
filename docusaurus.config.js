// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CHKware",
  tagline: "Low-code API quality testing, and automation toolbox.",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://www.chkware.com",
  baseUrl: "/",
  organizationName: "CHKware",
  projectName: "chkware.github.io",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleTagManager: {
          containerId: "GTM-K2LQSGJV",
        },
        docs: {
          routeBasePath: "/docs",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/chkware/chkware.github.io/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/chkware/chkware.github.io/tree/main/blog",
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "CHKware",
        hideOnScroll: false,
        logo: {
          alt: "CHKware Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Learn",
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: "https://github.com/orgs/chkware/discussions",
            position: "right",
            label: "Forum"
          },
          {
            href: "https://github.com/chkware/cli",
            position: "right",
            label: "GitHub"
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Issues",
            items: [
              {
                label: "❓ Got a question?",
                href: "https://github.com/orgs/chkware/discussions/categories/q-a",
              },
              {
                label: "💭 Share your thoughts",
                href: "https://github.com/orgs/chkware/discussions/categories/general",
              },
              {
                label: "🔖 Want to request a feature?",
                href: "https://github.com/orgs/chkware/discussions/categories/ideas",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "🎉 See what's new",
                href: "https://github.com/orgs/chkware/discussions/categories/announcements",
              },
            ],
          },
          {
            title: "Follow CHKware",
            items: [
              {
                label: "CHKware on Twitter / X",
                href: "https://x.com/chkware",
              },
              {
                label: "CHKware on Github",
                href: "https://github.com/chkware",
              },
              {
                label: "CHK on PyPI",
                href: "https://pypi.org/project/chk",
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 - ${new Date().getFullYear()} CHKware. Built with Docusaurus.`,
      },
      metadata: [
        {
          name: "CHKware",
          content: "Low-code API quality testing, and automation toolbox",
        },
      ],
      image: "img/banner.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        additionalLanguages: ["http", "yaml"],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: "support_us",
        content: `Like <strong>CHKware</strong>❓
        ⭐️ Star repository on <a target="_blank" rel="noopener noreferrer" href="https://github.com/chkware/cli">GitHub</a>.
        Follow on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/chkware" >Twitter</a> ${TwitterSvg}`,
        isCloseable: false,
        backgroundColor: "#DBE432",
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: ["/"],
        language: ["en"],
      },
    ],
  ],
  customFields: {
    indexCta: "docs/quick-start",
    indexCtaTitle: "⏱️ 30 seconds to start",
    shortDetails: "Low-code API quality testing, and automation toolbox.",
    longDetails:
      "API testing tool, a script-able HTTP client, and an API test automation tool for the API era.",
  },
};
export default config;
