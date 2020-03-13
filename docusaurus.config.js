module.exports = {
  title: 'Rose\'s HomeBrew',
  tagline: 'I have no idea what I\'m doing',
  url: 'https://rosedickinson.github.io',
  baseUrl: '/DnD-HomeBrew/',
  favicon: 'img/logo.png',
  organizationName: 'Rose Dickinson', // Usually your GitHub org/user name.
  projectName: 'DnD-HomeBrew', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Rose\'s HomeBrew',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/Spells',
          activeBasePath: 'docs',
          label: 'Spells',
          position: 'left',
        },
        {
          href: 'https://github.com/roseDickinson',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Spells',
              to: 'docs/Spells',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/roseDickinson',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ralkarg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rose Dickinson. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
