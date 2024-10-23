import {defineConfig} from 'vitepress'

const modrinth = '<svg width="512" height="514" viewBox="0 0 512 514" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M503.16 323.56C514.55 281.47 515.32 235.91 503.2 190.76C466.57 54.2299 326.04 -26.8001 189.33 9.77991C83.8101 38.0199 11.3899 128.07 0.689941 230.47H43.99C54.29 147.33 113.74 74.7298 199.75 51.7098C306.05 23.2598 415.13 80.6699 453.17 181.38L411.03 192.65C391.64 145.8 352.57 111.45 306.3 96.8198L298.56 140.66C335.09 154.13 364.72 184.5 375.56 224.91C391.36 283.8 361.94 344.14 308.56 369.17L320.09 412.16C390.25 383.21 432.4 310.3 422.43 235.14L464.41 223.91C468.91 252.62 467.35 281.16 460.55 308.07L503.16 323.56Z" fill="var(--color-brand)"/><path d="M321.99 504.22C185.27 540.8 44.7501 459.77 8.11011 323.24C3.84011 307.31 1.17 291.33 0 275.46H43.27C44.36 287.37 46.4699 299.35 49.6799 311.29C53.0399 323.8 57.45 335.75 62.79 347.07L101.38 323.92C98.1299 316.42 95.39 308.6 93.21 300.47C69.17 210.87 122.41 118.77 212.13 94.7601C229.13 90.2101 246.23 88.4401 262.93 89.1501L255.19 133C244.73 133.05 234.11 134.42 223.53 137.25C157.31 154.98 118.01 222.95 135.75 289.09C136.85 293.16 138.13 297.13 139.59 300.99L188.94 271.38L174.07 231.95L220.67 184.08L279.57 171.39L296.62 192.38L269.47 219.88L245.79 227.33L228.87 244.72L237.16 267.79C237.16 267.79 253.95 285.63 253.98 285.64L277.7 279.33L294.58 260.79L331.44 249.12L342.42 273.82L304.39 320.45L240.66 340.63L212.08 308.81L162.26 338.7C187.8 367.78 226.2 383.93 266.01 380.56L277.54 423.55C218.13 431.41 160.1 406.82 124.05 361.64L85.6399 384.68C136.25 451.17 223.84 484.11 309.61 461.16C371.35 444.64 419.4 402.56 445.42 349.38L488.06 364.88C457.17 431.16 398.22 483.82 321.99 504.22Z" fill="var(--color-brand)"/></svg>'
const boosty = '<svg width="250" height="250" viewBox="-5 60 215.6 150" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" class="st0" d="M44.3,164.5L76.9,51.6H127l-10.1,35c-0.1,0.2-0.2,0.4-0.3,0.6L90,179.6h24.8c-10.4,25.9-18.5,46.2-24.3,60.9 c-45.8-0.5-58.6-33.3-47.4-72.1 M90.7,240.6l60.4-86.9h-25.6l22.3-55.7c38.2,4,56.2,34.1,45.6,70.5 c-11.3,39.1-57.1,72.1-101.7,72.1C91.3,240.6,91,240.6,90.7,240.6z" fill="var(--color-brand)"/></svg>'

export default defineConfig({
  base: '/pulse/docs/',
  title: "FlectonePulse",
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
  ],

  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      logo: '/logo.png',
      description: "FlectonePulse documentation",
      themeConfig: {
        nav: [
          { text: 'Version 0.0.6', link: 'https://github.com/Flectone/FlectonePulseWeb/' },
        ],
        outline: {
          level: [2, 3]
        },
        editLink: {
          pattern: 'https://github.com/Flectone/FlectonePulseWeb/edit/master/docs/:path',
          text: 'Edit this page on GitHub'
        },
        sidebar: [
          {
            text: 'Messages',
            link: '/en/messages/',
            collapsed: false,
            items: [
              {
                text: 'English',
                link: '/en/messages/en_us/',
                collapsed: true,
                items: [
                  {
                    text: 'Modules',
                    link: '/en/messages/en_us/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Tags',
                        link: '/en/messages/en_us/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Url', link: '/en/messages/en_us/module/tag/url/' },
                          { text: 'Spoiler', link: '/en/messages/en_us/module/tag/spoiler/' },
                        ]
                      },
                      {
                        text: 'Integrations',
                        link: '/en/messages/en_us/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Discord', link: '/en/messages/en_us/module/integration/discord/' },
                          { text: 'Twitch', link: '/en/messages/en_us/module/integration/twitch/' },
                          { text: 'Telegram', link: '/en/messages/en_us/module/integration/telegram/' },
                        ]
                      },
                      {
                        text: 'Interactions',
                        link: '/en/messages/en_us/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Sign', link: '/en/messages/en_us/module/interaction/sign/' },
                          { text: 'Un Sign', link: '/en/messages/en_us/module/interaction/unsign/' },
                          { text: 'Spit', link: '/en/messages/en_us/module/interaction/spit/' },
                          { text: 'Mark', link: '/en/messages/en_us/module/interaction/mark/' },
                          { text: 'Knock', link: '/en/messages/en_us/module/interaction/knock/' },
                          { text: 'Right click', link: '/en/messages/en_us/module/interaction/right-click/' },
                        ]
                      },
                      {
                        text: 'Player',
                        link: '/en/messages/en_us/module/player/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Messages',
                            link: '/en/messages/en_us/module/player/message/',
                            collapsed: true,
                            items: [
                              { text: 'Chat', link: '/en/messages/en_us/module/player/message/chat/' },
                              { text: 'Formatting', link: '/en/messages/en_us/module/player/message/format/' },
                              { text: 'Bubble', link: '/en/messages/en_us/module/player/message/bubble/' },
                            ]
                          },
                          {
                            text: 'Name',
                            link: '/en/messages/en_us/module/player/name/',
                            collapsed: true,
                            items: [
                              { text: 'Hover', link: '/en/messages/en_us/module/player/name/hover/' },
                            ]
                          },
                          { text: 'Afk', link: '/en/messages/en_us/module/player/afk/' },
                        ]
                      },
                      {
                        text: 'Server',
                        link: '/en/messages/en_us/module/server/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Messages',
                            link: '/en/messages/en_us/module/server/message/',
                            collapsed: true,
                            items: [
                              { text: 'Advancement', link: '/en/messages/en_us/module/server/message/advancement/' },
                              { text: 'Auto', link: '/en/messages/en_us/module/server/message/auto/' },
                              { text: 'Death', link: '/en/messages/en_us/module/server/message/death/' },
                              { text: 'Join', link: '/en/messages/en_us/module/server/message/join/' },
                              { text: 'Greeting', link: '/en/messages/en_us/module/server/message/greeting/' },
                              { text: 'Quit', link: '/en/messages/en_us/module/server/message/quit/' },
                            ]
                          },
                          { text: 'Brand', link: '/en/messages/en_us/module/server/brand/' },
                          {
                            text: 'Tab',
                            link: '/en/messages/en_us/module/server/tab/',
                            collapsed: true,
                            items: [
                              { text: 'Player list name', link: '/en/messages/en_us/module/server/tab/player-list-name/' },
                              { text: 'Header', link: '/en/messages/en_us/module/server/tab/header/' },
                              { text: 'Footer', link: '/en/messages/en_us/module/server/tab/footer/' },
                            ]
                          },
                          { text: 'MOTD', link: '/en/messages/en_us/module/server/motd/' },
                          { text: 'Player count', link: '/en/messages/en_us/module/server/player-count/' },
                        ]
                      },
                      {
                        text: 'Commands',
                        link: '/en/messages/en_us/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Prompt', link: '/en/messages/en_us/module/command/prompt/' },
                          { text: 'Me', link: '/en/messages/en_us/module/command/command-me/' },
                          { text: 'Try', link: '/en/messages/en_us/module/command/command-try/' },
                          { text: 'Dice', link: '/en/messages/en_us/module/command/command-dice/' },
                          { text: 'Ball', link: '/en/messages/en_us/module/command/command-ball/' },
                          { text: 'Firstonline', link: '/en/messages/en_us/module/command/command-firstonline/' },
                          { text: 'Lastonline', link: '/en/messages/en_us/module/command/command-lastonline/' },
                          { text: 'Do', link: '/en/messages/en_us/module/command/command-do/' },
                          { text: 'Coin', link: '/en/messages/en_us/module/command/command-coin/' },
                          { text: 'Translateto', link: '/en/messages/en_us/module/command/command-translateto/' },
                          { text: 'Geolocate', link: '/en/messages/en_us/module/command/command-geolocate/' },
                          { text: 'Clearchat', link: '/en/messages/en_us/module/command/command-clearchat/' },
                          { text: 'Broadcast', link: '/en/messages/en_us/module/command/command-broadcast/' },
                          { text: 'Afk', link: '/en/messages/en_us/module/command/command-afk/' },
                          { text: 'Mark', link: '/en/messages/en_us/module/command/command-mark/' },
                          { text: 'Spit', link: '/en/messages/en_us/module/command/command-spit/' },
                          { text: 'Spy', link: '/en/messages/en_us/module/command/command-spy/' },
                          { text: 'Stream', link: '/en/messages/en_us/module/command/command-stream/' },
                          { text: 'Kick', link: '/en/messages/en_us/module/command/command-kick/' },
                          { text: 'Helper', link: '/en/messages/en_us/module/command/command-helper/' },
                          { text: 'Tell', link: '/en/messages/en_us/module/command/command-tell/' },
                          { text: 'Reply', link: '/en/messages/en_us/module/command/command-reply/' },
                          { text: 'Poll', link: '/en/messages/en_us/module/command/command-poll/' },
                          { text: 'Ignore', link: '/en/messages/en_us/module/command/command-ignore/' },
                          { text: 'Ignorelist', link: '/en/messages/en_us/module/command/command-ignorelist/' },
                          { text: 'Ban', link: '/en/messages/en_us/module/command/command-ban/' },
                          { text: 'Unban', link: '/en/messages/en_us/module/command/command-unban/' },
                          { text: 'Banlist', link: '/en/messages/en_us/module/command/command-banlist/' },
                          { text: 'Mute', link: '/en/messages/en_us/module/command/command-mute/' },
                          { text: 'Unmute', link: '/en/messages/en_us/module/command/command-unmute/' },
                          { text: 'Mutelist', link: '/en/messages/en_us/module/command/command-mutelist/' },
                          { text: 'Warn', link: '/en/messages/en_us/module/command/command-warn/' },
                          { text: 'Unwarn', link: '/en/messages/en_us/module/command/command-unwarn/' },
                          { text: 'Warnlist', link: '/en/messages/en_us/module/command/command-warnlist/' },
                          { text: 'Flectonepulse', link: '/en/messages/en_us/module/command/command-flectonepulse/' },
                          { text: 'Chatcolor', link: '/en/messages/en_us/module/command/command-chatcolor/' },
                          { text: 'Chatsetting', link: '/en/messages/en_us/module/command/command-chatsetting/' },
                          { text: 'Symbol', link: '/en/messages/en_us/module/command/command-symbol/' },
                          { text: 'Mail', link: '/en/messages/en_us/module/command/command-mail/' },
                          { text: 'Clearmail', link: '/en/messages/en_us/module/command/command-clearmail/' },
                          { text: 'Tictactoe', link: '/en/messages/en_us/module/command/command-tictactoe/' },
                          { text: 'Maintenance', link: '/en/messages/en_us/module/command/command-maintenance/' },
                          { text: 'Rockpaperscissors', link: '/en/messages/en_us/module/command/command-rockpaperscissors/' },
                        ]
                      },
                    ]
                  },
                  { text: 'Times', link: '/en/messages/en_us/time/' },
                ]
              },
              {
                text: 'Russian',
                link: '/en/messages/ru_ru/',
                collapsed: true,
                items: [
                  {
                    text: 'Modules',
                    link: '/en/messages/ru_ru/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Tags',
                        link: '/en/messages/ru_ru/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Url', link: '/en/messages/ru_ru/module/tag/url/' },
                          { text: 'Spoiler', link: '/en/messages/ru_ru/module/tag/spoiler/' },
                        ]
                      },
                      {
                        text: 'Integrations',
                        link: '/en/messages/ru_ru/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Discord', link: '/en/messages/ru_ru/module/integration/discord/' },
                          { text: 'Twitch', link: '/en/messages/ru_ru/module/integration/twitch/' },
                          { text: 'Telegram', link: '/en/messages/ru_ru/module/integration/telegram/' },
                        ]
                      },
                      {
                        text: 'Interactions',
                        link: '/en/messages/ru_ru/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Sign', link: '/en/messages/ru_ru/module/interaction/sign/' },
                          { text: 'Un Sign', link: '/en/messages/ru_ru/module/interaction/unsign/' },
                          { text: 'Spit', link: '/en/messages/ru_ru/module/interaction/spit/' },
                          { text: 'Mark', link: '/en/messages/ru_ru/module/interaction/mark/' },
                          { text: 'Knock', link: '/en/messages/ru_ru/module/interaction/knock/' },
                          { text: 'Right click', link: '/en/messages/ru_ru/module/interaction/right-click/' },
                        ]
                      },
                      {
                        text: 'Player',
                        link: '/en/messages/ru_ru/module/player/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Messages',
                            link: '/en/messages/ru_ru/module/player/message/',
                            collapsed: true,
                            items: [
                              { text: 'Chat', link: '/en/messages/ru_ru/module/player/message/chat/' },
                              { text: 'Formatting', link: '/en/messages/ru_ru/module/player/message/format/',},
                              { text: 'Bubble', link: '/en/messages/ru_ru/module/player/message/bubble/' },
                            ]
                          },
                          {
                            text: 'Name',
                            link: '/en/messages/ru_ru/module/player/name/',
                            collapsed: true,
                            items: [
                              { text: 'Hover', link: '/en/messages/ru_ru/module/player/name/hover/' },
                            ]
                          },
                          { text: 'Afk', link: '/en/messages/ru_ru/module/player/afk/' },
                        ]
                      },
                      {
                        text: 'Server',
                        link: '/en/messages/ru_ru/module/server/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Messages',
                            link: '/en/messages/ru_ru/module/server/message/',
                            collapsed: true,
                            items: [
                              { text: 'Advancement', link: '/en/messages/ru_ru/module/server/message/advancement/' },
                              { text: 'Auto', link: '/en/messages/ru_ru/module/server/message/auto/' },
                              { text: 'Death', link: '/en/messages/ru_ru/module/server/message/death/' },
                              { text: 'Join', link: '/en/messages/ru_ru/module/server/message/join/' },
                              { text: 'Greeting', link: '/en/messages/ru_ru/module/server/message/greeting/' },
                              { text: 'Quit', link: '/en/messages/ru_ru/module/server/message/quit/' },
                            ]
                          },
                          { text: 'Brand', link: '/en/messages/ru_ru/module/server/brand/' },
                          {
                            text: 'Tab',
                            link: '/en/messages/ru_ru/module/server/tab/',
                            collapsed: true,
                            items: [
                              { text: 'Player list name', link: '/en/messages/ru_ru/module/server/tab/player-list-name/' },
                              { text: 'Header', link: '/en/messages/ru_ru/module/server/tab/header/' },
                              { text: 'Footer', link: '/en/messages/ru_ru/module/server/tab/footer/' },
                            ]
                          },
                          { text: 'MOTD', link: '/en/messages/ru_ru/module/server/motd/' },
                          { text: 'Player count', link: '/en/messages/ru_ru/module/server/player-count/' },
                        ]
                      },
                      {
                        text: 'Commands',
                        link: '/en/messages/ru_ru/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Prompt', link: '/en/messages/ru_ru/module/command/prompt/' },
                          { text: 'Me', link: '/en/messages/ru_ru/module/command/command-me/' },
                          { text: 'Try', link: '/en/messages/ru_ru/module/command/command-try/' },
                          { text: 'Dice', link: '/en/messages/ru_ru/module/command/command-dice/' },
                          { text: 'Ball', link: '/en/messages/ru_ru/module/command/command-ball/' },
                          { text: 'Firstonline', link: '/en/messages/ru_ru/module/command/command-firstonline/' },
                          { text: 'Lastonline', link: '/en/messages/ru_ru/module/command/command-lastonline/' },
                          { text: 'Do', link: '/en/messages/ru_ru/module/command/command-do/' },
                          { text: 'Coin', link: '/en/messages/ru_ru/module/command/command-coin/' },
                          { text: 'Translateto', link: '/en/messages/ru_ru/module/command/command-translateto/' },
                          { text: 'Geolocate', link: '/en/messages/ru_ru/module/command/command-geolocate/' },
                          { text: 'Clearchat', link: '/en/messages/ru_ru/module/command/command-clearchat/' },
                          { text: 'Broadcast', link: '/en/messages/ru_ru/module/command/command-broadcast/' },
                          { text: 'Afk', link: '/en/messages/ru_ru/module/command/command-afk/' },
                          { text: 'Mark', link: '/en/messages/ru_ru/module/command/command-mark/' },
                          { text: 'Spit', link: '/en/messages/ru_ru/module/command/command-spit/' },
                          { text: 'Spy', link: '/en/messages/ru_ru/module/command/command-spy/' },
                          { text: 'Stream', link: '/en/messages/ru_ru/module/command/command-stream/' },
                          { text: 'Kick', link: '/en/messages/ru_ru/module/command/command-kick/' },
                          { text: 'Helper', link: '/en/messages/ru_ru/module/command/command-helper/' },
                          { text: 'Tell', link: '/en/messages/ru_ru/module/command/command-tell/' },
                          { text: 'Reply', link: '/en/messages/ru_ru/module/command/command-reply/' },
                          { text: 'Poll', link: '/en/messages/ru_ru/module/command/command-poll/' },
                          { text: 'Ignore', link: '/en/messages/ru_ru/module/command/command-ignore/' },
                          { text: 'Ignorelist', link: '/en/messages/ru_ru/module/command/command-ignorelist/' },
                          { text: 'Ban', link: '/en/messages/ru_ru/module/command/command-ban/' },
                          { text: 'Unban', link: '/en/messages/ru_ru/module/command/command-unban/' },
                          { text: 'Banlist', link: '/en/messages/ru_ru/module/command/command-banlist/' },
                          { text: 'Mute', link: '/en/messages/ru_ru/module/command/command-mute/' },
                          { text: 'Unmute', link: '/en/messages/ru_ru/module/command/command-unmute/' },
                          { text: 'Mutelist', link: '/en/messages/ru_ru/module/command/command-mutelist/' },
                          { text: 'Warn', link: '/en/messages/ru_ru/module/command/command-warn/' },
                          { text: 'Unwarn', link: '/en/messages/ru_ru/module/command/command-unwarn/' },
                          { text: 'Warnlist', link: '/en/messages/ru_ru/module/command/command-warnlist/' },
                          { text: 'Flectonepulse', link: '/en/messages/ru_ru/module/command/command-flectonepulse/' },
                          { text: 'Chatcolor', link: '/en/messages/ru_ru/module/command/command-chatcolor/' },
                          { text: 'Chatsetting', link: '/en/messages/ru_ru/module/command/command-chatsetting/' },
                          { text: 'Symbol', link: '/en/messages/ru_ru/module/command/command-symbol/' },
                          { text: 'Mail', link: '/en/messages/ru_ru/module/command/command-mail/' },
                          { text: 'Clearmail', link: '/en/messages/ru_ru/module/command/command-clearmail/' },
                          { text: 'Tictactoe', link: '/en/messages/ru_ru/module/command/command-tictactoe/' },
                          { text: 'Maintenance', link: '/en/messages/ru_ru/module/command/command-maintenance/' },
                          { text: 'Rockpaperscissors', link: '/en/messages/ru_ru/module/command/command-rockpaperscissors/' },
                        ]
                      },
                    ]
                  },
                  { text: 'Times', link: '/en/messages/ru_ru/time/' },
                ]
              },
            ]
          },
          {
            text: 'Configuration',
            link: '/en/config/',
            collapsed: false,
            items: [
              { text: 'Plugin', link: '/en/config/plugin/' },
              {
                text: 'Modules',
                link: '/en/config/module/',
                collapsed: false,
                items: [
                  {
                    text: 'Tags',
                    link: '/en/config/module/tag/',
                    collapsed: true,
                    items: [
                      { text: 'Url', link: '/en/config/module/tag/url/' },
                      { text: 'Image', link: '/en/config/module/tag/image/' },
                      { text: 'Spoiler', link: '/en/config/module/tag/spoiler/' },
                      { text: 'Emoji', link: '/en/config/module/tag/emoji/' },
                      { text: 'Color', link: '/en/config/module/tag/color/' }
                    ]
                  },
                  {
                    text: 'Integrations',
                    link: '/en/config/module/integration/',
                    collapsed: true,
                    items: [
                      { text: 'Discord', link: '/en/config/module/integration/discord/' },
                      { text: 'Twitch', link: '/en/config/module/integration/twitch/' },
                      { text: 'Telegram', link: '/en/config/module/integration/telegram/' },
                      { text: 'PlaceholderAPI', link: '/en/config/module/integration/placeholderapi/' },
                      { text: 'LuckPerms', link: '/en/config/module/integration/luckperms/' },
                      { text: 'SimpleVoice', link: '/en/config/module/integration/simplevoice/' },
                      { text: 'PlasmoVoice', link: '/en/config/module/integration/plasmovoice/' },
                      { text: 'SuperVanish', link: '/en/config/module/integration/supervanish/' },
                      { text: 'SkinsRestorer', link: '/en/config/module/integration/skinsrestorer/' },
                      { text: 'InteractiveChat', link: '/en/config/module/integration/interactivechat/' }
                    ]
                  },
                  {
                    text: 'Interactions',
                    link: '/en/config/module/interaction/',
                    collapsed: true,
                    items: [
                      { text: 'Sign', link: '/en/config/module/interaction/sign/' },
                      { text: 'Un Sign', link: '/en/config/module/interaction/unsign/' },
                      { text: 'Mark', link: '/en/config/module/interaction/mark/' },
                      { text: 'Spit', link: '/en/config/module/interaction/spit/' },
                      { text: 'Knocks', link: '/en/config/module/interaction/knock/' },
                      { text: 'Right click', link: '/en/config/module/interaction/right-click/' },
                    ]
                  },
                  {
                    text: 'Player',
                    collapsed: true,
                    link: '/en/config/module/player/',
                    items: [
                      { text: 'Afk', link: '/en/config/module/player/afk/' },
                      {
                        text: 'Messages',
                        link: '/en/config/module/player/message/',
                        collapsed: true,
                        items: [
                          { text: 'Chat', link: '/en/config/module/player/message/chat/' },
                          {
                            text: 'Formatting',
                            link: '/en/config/module/player/message/format/',
                            collapsed: true,
                            items: [
                              { text: 'Mention', link: '/en/config/module/player/message/format/mention/' },
                              { text: 'Swear', link: '/en/config/module/player/message/format/swear/' },
                              { text: 'Caps', link: '/en/config/module/player/message/format/caps/' },
                              { text: 'Ping', link: '/en/config/module/player/message/format/ping/' },
                              { text: 'Tps', link: '/en/config/module/player/message/format/tps/' },
                              { text: 'Online', link: '/en/config/module/player/message/format/online/' },
                              { text: 'Coordinates', link: '/en/config/module/player/message/format/coords/' },
                              { text: 'Statistics', link: '/en/config/module/player/message/format/stats/' },
                              { text: 'Skin', link: '/en/config/module/player/message/format/skin/' },
                              { text: 'Item', link: '/en/config/module/player/message/format/item/' },
                              { text: 'Url', link: '/en/config/module/player/message/format/url/' },
                              { text: 'Image', link: '/en/config/module/player/message/format/image/' },
                              { text: 'Spoiler', link: '/en/config/module/player/message/format/spoiler/' },
                              { text: 'Bold', link: '/en/config/module/player/message/format/bold/' },
                              { text: 'Italic', link: '/en/config/module/player/message/format/italic/' },
                              { text: 'Underline', link: '/en/config/module/player/message/format/underline/' },
                              { text: 'Obfuscated', link: '/en/config/module/player/message/format/obfuscated/' },
                              { text: 'Strikethrough', link: '/en/config/module/player/message/format/strikethrough/' },
                              { text: 'Kyori Adventure', link: '/en/config/module/player/message/format/kyori/' },
                            ]
                          },
                          { text: 'Anvil', link: '/en/config/module/player/message/anvil/' },
                          { text: 'Book', link: '/en/config/module/player/message/book/' },
                          { text: 'Sign', link: '/en/config/module/player/message/sign/' },
                          { text: 'Bubble', link: '/en/config/module/player/message/bubble/' },
                        ]
                      },
                      { text: 'Team', link: '/en/config/module/player/team/' },
                      {
                        text: 'Objectives',
                        link: '/en/config/module/player/objective/',
                        collapsed: true,
                        items: [
                          { text: 'Player list', link: '/en/config/module/player/objective/player-list' },
                          { text: 'Below name', link: '/en/config/module/player/objective/below-name' },
                        ]
                      },
                      { text: 'World', link: '/en/config/module/player/world/' },
                      {
                        text: 'Name',
                        link: '/en/config/module/player/name/',
                        collapsed: true,
                        items: [
                          { text: 'Hover', link: '/en/config/module/player/name/hover/' },
                        ]
                      },
                    ]
                  },
                  {
                    text: 'Server',
                    link: '/en/config/module/server/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Messages',
                        link: '/en/config/module/server/message/',
                        collapsed: true,
                        items: [
                          { text: 'Advancement', link: '/en/config/module/server/message/advancement/' },
                          { text: 'Auto', link: '/en/config/module/server/message/auto/' },
                          { text: 'Death', link: '/en/config/module/server/message/death/' },
                          { text: 'Join', link: '/en/config/module/server/message/join/' },
                          { text: 'Greeting', link: '/en/config/module/server/message/greeting/' },
                          { text: 'Quit', link: '/en/config/module/server/message/quit/' },
                        ]
                      },
                      { text: 'Brand', link: '/en/config/module/server/brand/' },
                      {
                        text: 'Tab',
                        link: '/en/config/module/server/tab/',
                        collapsed: true,
                        items: [
                          { text: 'Player list name', link: '/en/config/module/server/tab/player-list-name/' },
                          { text: 'Header', link: '/en/config/module/server/tab/header/' },
                          { text: 'Footer', link: '/en/config/module/server/tab/footer' },
                        ]
                      },
                      { text: 'Icon', link: '/en/config/module/server/icon/' },
                      { text: 'MOTD', link: '/en/config/module/server/motd/' },
                      { text: 'Player count', link: '/en/config/module/server/player-count/' },
                    ]
                  },
                  {
                    text: 'Commands',
                    link: '/en/config/module/command/',
                    collapsed: true,
                    items: [
                      { text: 'Me', link: '/en/config/module/command/command-me/' },
                      { text: 'Try', link: '/en/config/module/command/command-try/' },
                      { text: 'Dice', link: '/en/config/module/command/command-dice/' },
                      { text: 'Ball', link: '/en/config/module/command/command-ball/' },
                      { text: 'Firstonline', link: '/en/config/module/command/command-firstonline/' },
                      { text: 'Lastonline', link: '/en/config/module/command/command-lastonline/' },
                      { text: 'Do', link: '/en/config/module/command/command-do/' },
                      { text: 'Coin', link: '/en/config/module/command/command-coin/' },
                      { text: 'Translateto', link: '/en/config/module/command/command-translateto/' },
                      { text: 'Geolocate', link: '/en/config/module/command/command-geolocate/' },
                      { text: 'Clearchat', link: '/en/config/module/command/command-clearchat/' },
                      { text: 'Broadcast', link: '/en/config/module/command/command-broadcast/' },
                      { text: 'Afk', link: '/en/config/module/command/command-afk/' },
                      { text: 'Mark', link: '/en/config/module/command/command-mark/' },
                      { text: 'Spit', link: '/en/config/module/command/command-spit/' },
                      { text: 'Spy', link: '/en/config/module/command/command-spy/' },
                      { text: 'Stream', link: '/en/config/module/command/command-stream/' },
                      { text: 'Kick', link: '/en/config/module/command/command-kick/' },
                      { text: 'Helper', link: '/en/config/module/command/command-helper/' },
                      { text: 'Tell', link: '/en/config/module/command/command-tell/' },
                      { text: 'Reply', link: '/en/config/module/command/command-reply/' },
                      { text: 'Poll', link: '/en/config/module/command/command-poll/' },
                      { text: 'Ignore', link: '/en/config/module/command/command-ignore/' },
                      { text: 'Ignorelist', link: '/en/config/module/command/command-ignorelist/' },
                      { text: 'Ban', link: '/en/config/module/command/command-ban/' },
                      { text: 'Unban', link: '/en/config/module/command/command-unban/' },
                      { text: 'Banlist', link: '/en/config/module/command/command-banlist/' },
                      { text: 'Mute', link: '/en/config/module/command/command-mute/' },
                      { text: 'Unmute', link: '/en/config/module/command/command-unmute/' },
                      { text: 'Mutelist', link: '/en/config/module/command/command-mutelist/' },
                      { text: 'Warn', link: '/en/config/module/command/command-warn/' },
                      { text: 'Unwarn', link: '/en/config/module/command/command-unwarn/' },
                      { text: 'Warnlist', link: '/en/config/module/command/command-warnlist/' },
                      { text: 'Flectonepulse', link: '/en/config/module/command/command-flectonepulse/' },
                      { text: 'Chatcolor', link: '/en/config/module/command/command-chatcolor/' },
                      { text: 'Chatsetting', link: '/en/config/module/command/command-chatsetting/' },
                      { text: 'Symbol', link: '/en/config/module/command/command-symbol/' },
                      { text: 'Mail', link: '/en/config/module/command/command-mail/' },
                      { text: 'Clearmail', link: '/en/config/module/command/command-clearmail/' },
                      { text: 'Tictactoe', link: '/en/config/module/command/command-tictactoe/' },
                      { text: 'Maintenance', link: '/en/config/module/command/command-maintenance/' },
                      { text: 'Rockpaperscissors', link: '/en/config/module/command/command-rockpaperscissors/' },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: 'Secrets',
            link: '/en/secrets/',
            collapsed: false,
            items: [
              { text: 'Database', link: '/en/secrets/database/' },
              { text: 'Discord', link: '/en/secrets/discord/' },
              { text: 'Twitch', link: '/en/secrets/twitch/' },
              { text: 'Telegram', link: '/en/secrets/telegram/' },
            ]
          },
        ],
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      description: "FlectonePulse документация",
      themeConfig: {
        nav: [
          { text: 'Версия 0.0.6', link: 'https://github.com/Flectone/FlectonePulseWeb/' },
        ],
        lastUpdated: {
          text: 'Обновлено'
        },
        outline: {
          label: "Содержание страницы",
          level: [2, 3]
        },

        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },

        darkModeSwitchLabel: 'Оформление',
        darkModeSwitchTitle: "Переключить на тёмную тему",
        lightModeSwitchTitle: "Переключить на светлую тему",
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
        editLink: {
          pattern: 'https://github.com/Flectone/FlectonePulseWeb/edit/master/docs/:path',
          text: 'Редактировать эту страницу на GitHub'
        },

        sidebar: [
          {
            text: 'Сообщения',
            link: '/ru/messages/',
            collapsed: false,
            items: [
              {
                text: 'Английский',
                link: '/ru/messages/en_us/',
                collapsed: true,
                items: [
                  {
                    text: 'Модули',
                    link: '/ru/messages/en_us/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Теги',
                        link: '/ru/messages/en_us/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Ссылка', link: '/ru/messages/en_us/module/tag/url/' },
                          { text: 'Спойлер', link: '/ru/messages/en_us/module/tag/spoiler/' },
                        ]
                      },
                      {
                        text: 'Интеграции',
                        link: '/ru/messages/en_us/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Дискорд', link: '/ru/messages/en_us/module/integration/discord/' },
                          { text: 'Твич', link: '/ru/messages/en_us/module/integration/twitch/' },
                          { text: 'Телеграм', link: '/ru/messages/en_us/module/integration/telegram/' },
                        ]
                      },
                      {
                        text: 'Взаимодействия',
                        link: '/ru/messages/en_us/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Подпись', link: '/ru/messages/en_us/module/interaction/sign/' },
                          { text: 'Снятие подписи', link: '/ru/messages/en_us/module/interaction/unsign/' },
                          { text: 'Плевок', link: '/ru/messages/en_us/module/interaction/spit/' },
                          { text: 'Метка', link: '/ru/messages/en_us/module/interaction/mark/' },
                          { text: 'Стуки', link: '/ru/messages/en_us/module/interaction/knock/' },
                          { text: 'Правое нажатие', link: '/ru/messages/en_us/module/interaction/right-click/' },
                        ]
                      },
                      {
                        text: 'Игрок',
                        link: '/ru/messages/en_us/module/player/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Сообщения',
                            link: '/ru/messages/en_us/module/player/message/',
                            collapsed: true,
                            items: [
                              { text: 'Чат', link: '/ru/messages/en_us/module/player/message/chat/' },
                              { text: 'Форматирование', link: '/ru/messages/en_us/module/player/message/format/' },
                              { text: 'Над головой', link: '/ru/messages/en_us/module/player/message/bubble/' },
                            ]
                          },
                          {
                            text: 'Имя',
                            link: '/ru/messages/en_us/module/player/name/',
                            collapsed: true,
                            items: [
                              { text: 'При наведении', link: '/ru/messages/en_us/module/player/name/hover/' },
                            ]
                          },
                          { text: 'Афк', link: '/ru/messages/en_us/module/player/afk/' },
                        ]
                      },
                      {
                        text: 'Сервер',
                        link: '/ru/messages/en_us/module/server/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Сообщения',
                            link: '/ru/messages/en_us/module/server/message/',
                            collapsed: true,
                            items: [
                              { text: 'Достижение', link: '/ru/messages/en_us/module/server/message/advancement/' },
                              { text: 'Автоматическое', link: '/ru/messages/en_us/module/server/message/auto/' },
                              { text: 'Смерть', link: '/ru/messages/en_us/module/server/message/death/' },
                              { text: 'Подключение', link: '/ru/messages/en_us/module/server/message/join/' },
                              { text: 'Приветствие', link: '/ru/messages/en_us/module/server/message/greeting/' },
                              { text: 'Отключение', link: '/ru/messages/en_us/module/server/message/quit/' },
                            ]
                          },
                          { text: 'Бренд', link: '/ru/messages/en_us/module/server/brand/' },
                          {
                            text: 'Таб',
                            link: '/ru/messages/en_us/module/server/tab/',
                            collapsed: true,
                            items: [
                              { text: 'Имя в списке', link: '/ru/messages/en_us/module/server/tab/player-list-name/' },
                              { text: 'Верхнее', link: '/ru/messages/en_us/module/server/tab/header/' },
                              { text: 'Нижнее', link: '/ru/messages/en_us/module/server/tab/footer/' },
                            ]
                          },
                          { text: 'МОТД', link: '/ru/messages/en_us/module/server/motd/' },
                          { text: 'Количество игроков', link: '/ru/messages/en_us/module/server/player-count/' },
                        ]
                      },
                      {
                        text: 'Комманды',
                        link: '/ru/messages/en_us/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Подсказка', link: '/ru/messages/en_us/module/command/prompt/' },
                          { text: 'Me', link: '/ru/messages/en_us/module/command/command-me/' },
                          { text: 'Try', link: '/ru/messages/en_us/module/command/command-try/' },
                          { text: 'Dice', link: '/ru/messages/en_us/module/command/command-dice/' },
                          { text: 'Ball', link: '/ru/messages/en_us/module/command/command-ball/' },
                          { text: 'Firstonline', link: '/ru/messages/en_us/module/command/command-firstonline/' },
                          { text: 'Lastonline', link: '/ru/messages/en_us/module/command/command-lastonline/' },
                          { text: 'Do', link: '/ru/messages/en_us/module/command/command-do/' },
                          { text: 'Coin', link: '/ru/messages/en_us/module/command/command-coin/' },
                          { text: 'Translateto', link: '/ru/messages/en_us/module/command/command-translateto/' },
                          { text: 'Geolocate', link: '/ru/messages/en_us/module/command/command-geolocate/' },
                          { text: 'Clearchat', link: '/ru/messages/en_us/module/command/command-clearchat/' },
                          { text: 'Broadcast', link: '/ru/messages/en_us/module/command/command-broadcast/' },
                          { text: 'Afk', link: '/ru/messages/en_us/module/command/command-afk/' },
                          { text: 'Mark', link: '/ru/messages/en_us/module/command/command-mark/' },
                          { text: 'Spit', link: '/ru/messages/en_us/module/command/command-spit/' },
                          { text: 'Spy', link: '/ru/messages/en_us/module/command/command-spy/' },
                          { text: 'Stream', link: '/ru/messages/en_us/module/command/command-stream/' },
                          { text: 'Kick', link: '/ru/messages/en_us/module/command/command-kick/' },
                          { text: 'Helper', link: '/ru/messages/en_us/module/command/command-helper/' },
                          { text: 'Tell', link: '/ru/messages/en_us/module/command/command-tell/' },
                          { text: 'Reply', link: '/ru/messages/en_us/module/command/command-reply/' },
                          { text: 'Poll', link: '/ru/messages/en_us/module/command/command-poll/' },
                          { text: 'Ignore', link: '/ru/messages/en_us/module/command/command-ignore/' },
                          { text: 'Ignorelist', link: '/ru/messages/en_us/module/command/command-ignorelist/' },
                          { text: 'Ban', link: '/ru/messages/en_us/module/command/command-ban/' },
                          { text: 'Unban', link: '/ru/messages/en_us/module/command/command-unban/' },
                          { text: 'Banlist', link: '/ru/messages/en_us/module/command/command-banlist/' },
                          { text: 'Mute', link: '/ru/messages/en_us/module/command/command-mute/' },
                          { text: 'Unmute', link: '/ru/messages/en_us/module/command/command-unmute/' },
                          { text: 'Mutelist', link: '/ru/messages/en_us/module/command/command-mutelist/' },
                          { text: 'Warn', link: '/ru/messages/en_us/module/command/command-warn/' },
                          { text: 'Unwarn', link: '/ru/messages/en_us/module/command/command-unwarn/' },
                          { text: 'Warnlist', link: '/ru/messages/en_us/module/command/command-warnlist/' },
                          { text: 'Flectonepulse', link: '/ru/messages/en_us/module/command/command-flectonepulse/' },
                          { text: 'Chatcolor', link: '/ru/messages/en_us/module/command/command-chatcolor/' },
                          { text: 'Chatsetting', link: '/ru/messages/en_us/module/command/command-chatsetting/' },
                          { text: 'Symbol', link: '/ru/messages/en_us/module/command/command-symbol/' },
                          { text: 'Mail', link: '/ru/messages/en_us/module/command/command-mail/' },
                          { text: 'Clearmail', link: '/ru/messages/en_us/module/command/command-clearmail/' },
                          { text: 'Tictactoe', link: '/ru/messages/en_us/module/command/command-tictactoe/' },
                          { text: 'Maintenance', link: '/ru/messages/en_us/module/command/command-maintenance/' },
                          { text: 'Rockpaperscissors', link: '/ru/messages/en_us/module/command/command-rockpaperscissors/' },
                        ]
                      },
                    ]
                  },
                  { text: 'Время', link: '/ru/messages/en_us/time/' },
                ]
              },
              {
                text: 'Русский',
                link: '/ru/messages/ru_ru/',
                collapsed: true,
                items: [
                  {
                    text: 'Модули',
                    link: '/ru/messages/ru_ru/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Теги',
                        link: '/ru/messages/ru_ru/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Ссылка', link: '/ru/messages/ru_ru/module/tag/url/' },
                          { text: 'Спойлер', link: '/ru/messages/ru_ru/module/tag/spoiler/' },
                        ]
                      },
                      {
                        text: 'Интеграции',
                        link: '/ru/messages/ru_ru/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Дискорд', link: '/ru/messages/ru_ru/module/integration/discord/' },
                          { text: 'Твич', link: '/ru/messages/ru_ru/module/integration/twitch/' },
                          { text: 'Телеграм', link: '/ru/messages/ru_ru/module/integration/telegram/' },
                        ]
                      },
                      {
                        text: 'Взаимодействия',
                        link: '/ru/messages/ru_ru/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Подпись', link: '/ru/messages/ru_ru/module/interaction/sign/' },
                          { text: 'Снятие подписи', link: '/ru/messages/ru_ru/module/interaction/unsign/' },
                          { text: 'Плевок', link: '/ru/messages/ru_ru/module/interaction/spit/' },
                          { text: 'Метка', link: '/ru/messages/ru_ru/module/interaction/mark/' },
                          { text: 'Стуки', link: '/ru/messages/ru_ru/module/interaction/knock/' },
                          { text: 'Правое нажатие', link: '/ru/messages/ru_ru/module/interaction/right-click/' },
                        ]
                      },
                      {
                        text: 'Игрок',
                        link: '/ru/messages/ru_ru/module/player/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Сообщения',
                            link: '/ru/messages/ru_ru/module/player/message/',
                            collapsed: true,
                            items: [
                              { text: 'Чат', link: '/ru/messages/ru_ru/module/player/message/chat/' },
                              { text: 'Форматирование', link: '/ru/messages/ru_ru/module/player/message/format/' },
                              { text: 'Над головой', link: '/ru/messages/ru_ru/module/player/message/bubble/' },
                            ]
                          },
                          {
                            text: 'Имя',
                            link: '/ru/messages/ru_ru/module/player/name/',
                            collapsed: true,
                            items: [
                              { text: 'При наведении', link: '/ru/messages/ru_ru/module/player/name/hover/' },
                            ]
                          },
                          { text: 'Афк', link: '/ru/messages/ru_ru/module/player/afk/' },
                        ]
                      },
                      {
                        text: 'Сервер',
                        link: '/ru/messages/ru_ru/module/server/',
                        collapsed: true,
                        items: [
                          {
                            text: 'Сообщения',
                            link: '/ru/messages/ru_ru/module/server/message/',
                            collapsed: true,
                            items: [
                              { text: 'Достижение', link: '/ru/messages/ru_ru/module/server/message/advancement/' },
                              { text: 'Автоматическое', link: '/ru/messages/ru_ru/module/server/message/auto/' },
                              { text: 'Смерть', link: '/ru/messages/ru_ru/module/server/message/death/' },
                              { text: 'Подключение', link: '/ru/messages/ru_ru/module/server/message/join/' },
                              { text: 'Приветствие', link: '/ru/messages/ru_ru/module/server/message/greeting/' },
                              { text: 'Отключение', link: '/ru/messages/ru_ru/module/server/message/quit/' },
                            ]
                          },
                          { text: 'Бренд', link: '/ru/messages/ru_ru/module/server/brand/' },
                          {
                            text: 'Таб',
                            link: '/ru/messages/ru_ru/module/server/tab/',
                            collapsed: true,
                            items: [
                              { text: 'Имя в списке', link: '/ru/messages/ru_ru/module/server/tab/player-list-name/' },
                              { text: 'Верхнее', link: '/ru/messages/ru_ru/module/server/tab/header/' },
                              { text: 'Нижнее', link: '/ru/messages/ru_ru/module/server/tab/footer/' },
                            ]
                          },
                          { text: 'МОТД', link: '/ru/messages/ru_ru/module/server/motd/' },
                          { text: 'Количество игроков', link: '/ru/messages/ru_ru/module/server/player-count/' },
                        ]
                      },
                      {
                        text: 'Комманды',
                        link: '/ru/messages/ru_ru/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Подсказка', link: '/ru/messages/ru_ru/module/command/prompt/' },
                          { text: 'Me', link: '/ru/messages/ru_ru/module/command/command-me/' },
                          { text: 'Try', link: '/ru/messages/ru_ru/module/command/command-try/' },
                          { text: 'Dice', link: '/ru/messages/ru_ru/module/command/command-dice/' },
                          { text: 'Ball', link: '/ru/messages/ru_ru/module/command/command-ball/' },
                          { text: 'Firstonline', link: '/ru/messages/ru_ru/module/command/command-firstonline/' },
                          { text: 'Lastonline', link: '/ru/messages/ru_ru/module/command/command-lastonline/' },
                          { text: 'Do', link: '/ru/messages/ru_ru/module/command/command-do/' },
                          { text: 'Coin', link: '/ru/messages/ru_ru/module/command/command-coin/' },
                          { text: 'Translateto', link: '/ru/messages/ru_ru/module/command/command-translateto/' },
                          { text: 'Geolocate', link: '/ru/messages/ru_ru/module/command/command-geolocate/' },
                          { text: 'Clearchat', link: '/ru/messages/ru_ru/module/command/command-clearchat/' },
                          { text: 'Broadcast', link: '/ru/messages/ru_ru/module/command/command-broadcast/' },
                          { text: 'Afk', link: '/ru/messages/ru_ru/module/command/command-afk/' },
                          { text: 'Mark', link: '/ru/messages/ru_ru/module/command/command-mark/' },
                          { text: 'Spit', link: '/ru/messages/ru_ru/module/command/command-spit/' },
                          { text: 'Spy', link: '/ru/messages/ru_ru/module/command/command-spy/' },
                          { text: 'Stream', link: '/ru/messages/ru_ru/module/command/command-stream/' },
                          { text: 'Kick', link: '/ru/messages/ru_ru/module/command/command-kick/' },
                          { text: 'Helper', link: '/ru/messages/ru_ru/module/command/command-helper/' },
                          { text: 'Tell', link: '/ru/messages/ru_ru/module/command/command-tell/' },
                          { text: 'Reply', link: '/ru/messages/ru_ru/module/command/command-reply/' },
                          { text: 'Poll', link: '/ru/messages/ru_ru/module/command/command-poll/' },
                          { text: 'Ignore', link: '/ru/messages/ru_ru/module/command/command-ignore/' },
                          { text: 'Ignorelist', link: '/ru/messages/ru_ru/module/command/command-ignorelist/' },
                          { text: 'Ban', link: '/ru/messages/ru_ru/module/command/command-ban/' },
                          { text: 'Unban', link: '/ru/messages/ru_ru/module/command/command-unban/' },
                          { text: 'Banlist', link: '/ru/messages/ru_ru/module/command/command-banlist/' },
                          { text: 'Mute', link: '/ru/messages/ru_ru/module/command/command-mute/' },
                          { text: 'Unmute', link: '/ru/messages/ru_ru/module/command/command-unmute/' },
                          { text: 'Mutelist', link: '/ru/messages/ru_ru/module/command/command-mutelist/' },
                          { text: 'Warn', link: '/ru/messages/ru_ru/module/command/command-warn/' },
                          { text: 'Unwarn', link: '/ru/messages/ru_ru/module/command/command-unwarn/' },
                          { text: 'Warnlist', link: '/ru/messages/ru_ru/module/command/command-warnlist/' },
                          { text: 'Flectonepulse', link: '/ru/messages/ru_ru/module/command/command-flectonepulse/' },
                          { text: 'Chatcolor', link: '/ru/messages/ru_ru/module/command/command-chatcolor/' },
                          { text: 'Chatsetting', link: '/ru/messages/ru_ru/module/command/command-chatsetting/' },
                          { text: 'Symbol', link: '/ru/messages/ru_ru/module/command/command-symbol/' },
                          { text: 'Mail', link: '/ru/messages/ru_ru/module/command/command-mail/' },
                          { text: 'Clearmail', link: '/ru/messages/ru_ru/module/command/command-clearmail/' },
                          { text: 'Tictactoe', link: '/ru/messages/ru_ru/module/command/command-tictactoe/' },
                          { text: 'Maintenance', link: '/ru/messages/ru_ru/module/command/command-maintenance/' },
                          { text: 'Rockpaperscissors', link: '/ru/messages/ru_ru/module/command/command-rockpaperscissors/' },
                        ]
                      },
                    ]
                  },
                  { text: 'Время', link: '/ru/messages/ru_ru/time/' },
                ]
              },
            ]
          },
          {
            text: 'Конфигурация',
            link: '/ru/config/',
            collapsed: false,
            items: [
              { text: 'Плагин', link: '/ru/config/plugin/' },
              {
                text: 'Модули',
                link: '/ru/config/module/',
                collapsed: false,
                items: [
                  {
                    text: 'Теги',
                    link: '/ru/config/module/tag/',
                    collapsed: true,
                    items: [
                      { text: 'Ссылка', link: '/ru/config/module/tag/url/' },
                      { text: 'Изображение', link: '/ru/config/module/tag/image/' },
                      { text: 'Спойлер', link: '/ru/config/module/tag/spoiler/' },
                      { text: 'Смайлики', link: '/ru/config/module/tag/emoji/' },
                      { text: 'Цвета', link: '/ru/config/module/tag/color/' }
                    ]
                  },
                  {
                    text: 'Интеграции',
                    link: '/ru/config/module/integration/',
                    collapsed: true,
                    items: [
                      { text: 'Дискорд', link: '/ru/config/module/integration/discord/' },
                      { text: 'Твич', link: '/ru/config/module/integration/twitch/' },
                      { text: 'Телеграм', link: '/ru/config/module/integration/telegram/' },
                      { text: 'PlaceholderAPI', link: '/ru/config/module/integration/placeholderapi/' },
                      { text: 'LuckPerms', link: '/ru/config/module/integration/luckperms/' },
                      { text: 'SimpleVoice', link: '/ru/config/module/integration/simplevoice/' },
                      { text: 'PlasmoVoice', link: '/ru/config/module/integration/plasmovoice/' },
                      { text: 'SuperVanish', link: '/ru/config/module/integration/supervanish/' },
                      { text: 'SkinsRestorer', link: '/ru/config/module/integration/skinsrestorer/' },
                      { text: 'InteractiveChat', link: '/ru/config/module/integration/interactivechat/' }
                    ]
                  },
                  {
                    text: 'Взаимодействия',
                    link: '/ru/config/module/interaction/',
                    collapsed: true,
                    items: [
                      { text: 'Подпись', link: '/ru/config/module/interaction/sign/' },
                      { text: 'Снятие подписи', link: '/ru/config/module/interaction/unsign/' },
                      { text: 'Метка', link: '/ru/config/module/interaction/mark/' },
                      { text: 'Плевок', link: '/ru/config/module/interaction/spit/' },
                      { text: 'Стуки', link: '/ru/config/module/interaction/knock/' },
                      { text: 'Правое нажатие', link: '/ru/config/module/interaction/right-click/' },
                    ]
                  },
                  {
                    text: 'Игрок',
                    collapsed: true,
                    link: '/ru/config/module/player/',
                    items: [
                      { text: 'Афк', link: '/ru/config/module/player/afk/' },
                      {
                        text: 'Сообщения',
                        link: '/ru/config/module/player/message/',
                        collapsed: true,
                        items: [
                          { text: 'Чат', link: '/ru/config/module/player/message/chat/' },
                          {
                            text: 'Форматирование',
                            link: '/ru/config/module/player/message/format/',
                            collapsed: true,
                            items: [
                              { text: 'Упоминание', link: '/ru/config/module/player/message/format/mention/' },
                              { text: 'Ругательство', link: '/ru/config/module/player/message/format/swear/' },
                              { text: 'Капс', link: '/ru/config/module/player/message/format/caps/' },
                              { text: 'Пинг', link: '/ru/config/module/player/message/format/ping/' },
                              { text: 'ТПС', link: '/ru/config/module/player/message/format/tps/' },
                              { text: 'Онлайн', link: '/ru/config/module/player/message/format/online/' },
                              { text: 'Координаты', link: '/ru/config/module/player/message/format/coords/' },
                              { text: 'Статистика', link: '/ru/config/module/player/message/format/stats/' },
                              { text: 'Скин', link: '/ru/config/module/player/message/format/skin/' },
                              { text: 'Предмет', link: '/ru/config/module/player/message/format/item/' },
                              { text: 'Ссылка', link: '/ru/config/module/player/message/format/url/' },
                              { text: 'Изображение', link: '/ru/config/module/player/message/format/image/' },
                              { text: 'Спойлер', link: '/ru/config/module/player/message/format/spoiler/' },
                              { text: 'Жирный', link: '/ru/config/module/player/message/format/bold/' },
                              { text: 'Курсив', link: '/ru/config/module/player/message/format/italic/' },
                              { text: 'Нижнее подчёркивание', link: '/ru/config/module/player/message/format/underline/' },
                              { text: 'Обфусцирование', link: '/ru/config/module/player/message/format/obfuscated/' },
                              { text: 'Перечёркивание', link: '/ru/config/module/player/message/format/strikethrough/' },
                              { text: 'Kyori Adventure', link: '/ru/config/module/player/message/format/kyori/' },
                            ]
                          },
                          { text: 'Наковальня', link: '/ru/config/module/player/message/anvil/' },
                          { text: 'Книга', link: '/ru/config/module/player/message/book/' },
                          { text: 'Табличка', link: '/ru/config/module/player/message/sign/' },
                          { text: 'Над головой', link: '/ru/config/module/player/message/bubble/' },
                        ]
                      },
                      { text: 'Команда', link: '/ru/config/module/player/team/' },
                      {
                        text: 'Значения',
                        link: '/ru/config/module/player/objective/',
                        collapsed: true,
                        items: [
                          { text: 'В списке', link: '/ru/config/module/player/objective/player-list' },
                          { text: 'Под ником', link: '/ru/config/module/player/objective/below-name' },
                        ]
                      },
                      { text: 'Измерение', link: '/ru/config/module/player/world/' },
                      {
                        text: 'Имя',
                        link: '/ru/config/module/player/name/',
                        collapsed: true,
                        items: [
                          { text: 'При наведении', link: '/ru/config/module/player/name/hover/' },
                        ]
                      },
                    ]
                  },
                  {
                    text: 'Сервер',
                    link: '/ru/config/module/server/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Сообщения',
                        link: '/ru/config/module/server/message/',
                        collapsed: true,
                        items: [
                          { text: 'Достижение', link: '/ru/config/module/server/message/advancement/' },
                          { text: 'Автоматическое', link: '/ru/config/module/server/message/auto/' },
                          { text: 'Смерть', link: '/ru/config/module/server/message/death/' },
                          { text: 'Подключение', link: '/ru/config/module/server/message/join/' },
                          { text: 'Приветствие', link: '/ru/config/module/server/message/greeting/' },
                          { text: 'Отключение', link: '/ru/config/module/server/message/quit/' },
                        ]
                      },
                      { text: 'Бренд', link: '/ru/config/module/server/brand/' },
                      {
                        text: 'Таб',
                        link: '/ru/config/module/server/tab/',
                        collapsed: true,
                        items: [
                          { text: 'Имя в списке', link: '/ru/config/module/server/tab/player-list-name/' },
                          { text: 'Верхнее', link: '/ru/config/module/server/tab/header/' },
                          { text: 'Нижнее', link: '/ru/config/module/server/tab/footer' },
                        ]
                      },
                      { text: 'Иконка', link: '/ru/config/module/server/icon/' },
                      { text: 'МОТД', link: '/ru/config/module/server/motd/' },
                      { text: 'Количество игроков', link: '/ru/config/module/server/player-count/' },
                    ]
                  },
                  {
                    text: 'Комманды',
                    link: '/ru/config/module/command/',
                    collapsed: true,
                    items: [
                      { text: 'Me', link: '/ru/config/module/command/command-me/' },
                      { text: 'Try', link: '/ru/config/module/command/command-try/' },
                      { text: 'Dice', link: '/ru/config/module/command/command-dice/' },
                      { text: 'Ball', link: '/ru/config/module/command/command-ball/' },
                      { text: 'Firstonline', link: '/ru/config/module/command/command-firstonline/' },
                      { text: 'Lastonline', link: '/ru/config/module/command/command-lastonline/' },
                      { text: 'Do', link: '/ru/config/module/command/command-do/' },
                      { text: 'Coin', link: '/ru/config/module/command/command-coin/' },
                      { text: 'Translateto', link: '/ru/config/module/command/command-translateto/' },
                      { text: 'Geolocate', link: '/ru/config/module/command/command-geolocate/' },
                      { text: 'Clearchat', link: '/ru/config/module/command/command-clearchat/' },
                      { text: 'Broadcast', link: '/ru/config/module/command/command-broadcast/' },
                      { text: 'Afk', link: '/ru/config/module/command/command-afk/' },
                      { text: 'Mark', link: '/ru/config/module/command/command-mark/' },
                      { text: 'Spit', link: '/ru/config/module/command/command-spit/' },
                      { text: 'Spy', link: '/ru/config/module/command/command-spy/' },
                      { text: 'Stream', link: '/ru/config/module/command/command-stream/' },
                      { text: 'Kick', link: '/ru/config/module/command/command-kick/' },
                      { text: 'Helper', link: '/ru/config/module/command/command-helper/' },
                      { text: 'Tell', link: '/ru/config/module/command/command-tell/' },
                      { text: 'Reply', link: '/ru/config/module/command/command-reply/' },
                      { text: 'Poll', link: '/ru/config/module/command/command-poll/' },
                      { text: 'Ignore', link: '/ru/config/module/command/command-ignore/' },
                      { text: 'Ignorelist', link: '/ru/config/module/command/command-ignorelist/' },
                      { text: 'Ban', link: '/ru/config/module/command/command-ban/' },
                      { text: 'Unban', link: '/ru/config/module/command/command-unban/' },
                      { text: 'Banlist', link: '/ru/config/module/command/command-banlist/' },
                      { text: 'Mute', link: '/ru/config/module/command/command-mute/' },
                      { text: 'Unmute', link: '/ru/config/module/command/command-unmute/' },
                      { text: 'Mutelist', link: '/ru/config/module/command/command-mutelist/' },
                      { text: 'Warn', link: '/ru/config/module/command/command-warn/' },
                      { text: 'Unwarn', link: '/ru/config/module/command/command-unwarn/' },
                      { text: 'Warnlist', link: '/ru/config/module/command/command-warnlist/' },
                      { text: 'Flectonepulse', link: '/ru/config/module/command/command-flectonepulse/' },
                      { text: 'Chatcolor', link: '/ru/config/module/command/command-chatcolor/' },
                      { text: 'Chatsetting', link: '/ru/config/module/command/command-chatsetting/' },
                      { text: 'Symbol', link: '/ru/config/module/command/command-symbol/' },
                      { text: 'Mail', link: '/ru/config/module/command/command-mail/' },
                      { text: 'Clearmail', link: '/ru/config/module/command/command-clearmail/' },
                      { text: 'Tictactoe', link: '/ru/config/module/command/command-tictactoe/' },
                      { text: 'Maintenance', link: '/ru/config/module/command/command-maintenance/' },
                      { text: 'Rockpaperscissors', link: '/ru/config/module/command/command-rockpaperscissors/' },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: 'Секреты',
            link: '/ru/secrets/',
            collapsed: false,
            items: [
              { text: 'База данных', link: '/ru/secrets/database/' },
              { text: 'Дискорд', link: '/ru/secrets/discord/' },
              { text: 'Твич', link: '/ru/secrets/twitch/' },
              { text: 'Телеграм', link: '/ru/secrets/telegram/' },
            ]
          },
        ],
      }
    },
  },

  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      {
        icon: { svg: boosty },
        link: 'https://boosty.to/thefaser',
        ariaLabel: 'Boosty',
      },
      { icon: 'github', link: 'https://github.com/flectone/FlectonePulse' },
      {
        icon: { svg: modrinth },
        link: 'https://modrinth.com/plugin/flectonepulse',
        ariaLabel: 'Modrinth',
      },
      { icon: 'discord', link: 'https://discord.flectone.net' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }

      },
    },
  }
})
