const TwitterSvg = '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
const GithubSvg = `<svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;" width="16" height="16">
<path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z"></path>
</svg>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CHKware",
  tagline: "Reduce API regression cost and release your API quickly.",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://www.chkware.com",
  baseUrl: "/",
  organizationName: "CHKware",
  projectName: "chkware.github.io",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "GT-WB29LF9R",
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
          src: "img/logo-dark.png",
          srcDark: "img/logo-white.png",
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
            label: "Discussion"
          },
          {
            href: "https://github.com/chkware",
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
                href: "/blog",
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
        copyright: `Copyright © 2021 - ${new Date().getFullYear()} CHKware. Licensed under Mozilla Public License 2.0.`,
      },
      metadata: [
        {
          name: "CHKware",
          content: "Low-code API quality testing, and automation tool",
        },
      ],
      image: "img/banner.png",
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        additionalLanguages: ["http", "yaml"],
      },
      announcementBar: {
        id: "support_us",
        content: `Like <strong>CHKware</strong>❓
         Star repository on <a target="_blank" rel="noopener noreferrer" href="https://github.com/chkware/cli">${GithubSvg} GitHub</a>.
        Follow on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/chkware" >${TwitterSvg} Twitter</a>`,
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
    primary: {
      link: "docs/setup",
      title: "pipx install chk",
    },
    secondary: {
      link: "docs/quick-start",
      title: "10 minutes quick start",
    },
    shortDetails: "Low-code API quality testing, and automation tool.",
    longDetails:
      "API testing tool, a script-able HTTP client, and an API test automation tool for the API era.",
  },
};
export default config;
