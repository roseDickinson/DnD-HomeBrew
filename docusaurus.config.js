module.exports = {
  title: 'Rose\'s HomeBrew',
  tagline: 'I have no idea what I\'m doing',
  url: 'https://rosedickinson.github.io',
  baseUrl: '/DnD-HomeBrew/',
  favicon: 'img/logo.png',
  organizationName: 'roseDickinson', // Usually your GitHub org/user name.
  projectName: 'DnD-HomeBrew', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Rose\'s HomeBrew',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/Spells',
          activeBasePath: 'docs',
          label: 'Spells',
          position: 'left',
        },
        {
          to: 'docs/MagicItems',
          activeBasePath: 'docs',
          label: 'Magic Items',
          position: 'left',
        },
        {
          to: 'docs/RangerAsAFighterSubClass',
          activeBasePath: 'docs',
          label: 'Classes',
          position: 'left',
        },
        {
          to: 'docs/Wereraven',
          activeBasePath: 'docs',
          label: 'Wereraven',
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
              label: 'Magic Items',
              to: 'docs/MagicItems',
            },
            {
              label: 'Classes',
              to: 'docs/RangerAsAFighterSubClass',
            },
            {
              label: 'Wereraven',
              to: 'docs/Wereraven',
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
              href: 'https://twitter.com/typhrosieon',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
