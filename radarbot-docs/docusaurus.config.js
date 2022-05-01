// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radar Bot Documentation',
  tagline: 'Radar Bot',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/RadarBotLogo.png',
  organizationName: 'radar bot', // Usually your GitHub org/user name.
  projectName: 'radar-bot-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    localeConfigs: {
      en: {
 
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      pt: {
    

        htmlLang: 'pt-BR',
      },
    },


  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/radarbot-team/radarbot-docs/tree/docs-v2-master/radarbot-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RadarBot Docs',
        logo: {
          alt: 'RadarBot documentation website',
          src: 'img/RadarBotLogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/radarbot-team/radarbot-docs',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} RadarBot.`,
        
        logo: {
          
          src:"img/vercel-light-logo.svg",
          alt: "Vercel Logo",
          href: "https://vercel.com/?utm_source=radarbot-team&utm_campaign=oss"
        }
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
    }),
};

module.exports = config;
