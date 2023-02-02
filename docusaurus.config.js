// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CHKware',
  tagline: 'Low-code API quality testing, and automation toolbox',
  url: 'https://chkware.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'CHKware',
  projectName: 'chkware.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          editUrl: 'https://github.com/chkware/chkware.github.io/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CHKware',
        hideOnScroll: false,
        logo: {
          alt: 'CHKware Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/chkware/cli',
            position: 'right',
            'aria-label': 'CHKware gitHub repository',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Issues',
            items: [
              {
                label: 'Github issues',
                href: 'https://github.com/chkware/cli/issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Question',
                href: 'https://stackoverflow.com/questions/tagged/chkware-cli',
              },
              /* {
                label: 'Discussion',
                href: 'https://slack.com/',
              }, */
            ],
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'CHKware @ twitter',
                href: 'https://twitter.com/chkware',
              },
              {
                label: 'CHKware @ github',
                href: 'https://github.com/chkware/cli',
              },
              {
                label: 'CHKware @ pypi',
                href: 'https://pypi.org/project/chk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CHKware.`,
      },
      metadata: [
        {
          name: 'CHKware',
          content: 'Low-code API quality testing, and automation toolbox',
        },
      ],
      image: 'img/banner.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        additionalLanguages: ['http', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'support_us',
        content: `⭐️ If you like <strong>CHKware</strong>, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/chkware/cli">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/chkware" >Twitter</a> ${TwitterSvg}`,
        isCloseable: false,
        backgroundColor: '#f2f2f2',
      },
    }),
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: ['/'],
      },
    ],
  ],
};

module.exports = config;
