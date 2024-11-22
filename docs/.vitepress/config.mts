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
          { text: 'Version 0.0.8', link: 'https://github.com/Flectone/FlectonePulseWeb/' },
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
            text: 'Folder messages/',
            link: '/en/messages/',
            collapsed: false,
            items: [
              {
                text: 'File ru_ru.yml',
                link: '/en/messages/ru_ru/',
                collapsed: true,
                items: [
                  {
                    text: 'Modules',
                    link: '/en/messages/ru_ru/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Commands',
                        link: '/en/messages/ru_ru/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Ball', link: '/en/messages/ru_ru/module/command/ball/' },
                          { text: 'Ban', link: '/en/messages/ru_ru/module/command/ban/' },
                          { text: 'Banlist', link: '/en/messages/ru_ru/module/command/banlist/' },
                          { text: 'Broadcast', link: '/en/messages/ru_ru/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/en/messages/ru_ru/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/en/messages/ru_ru/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/en/messages/ru_ru/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/en/messages/ru_ru/module/command/clearmail/' },
                          { text: 'Coin', link: '/en/messages/ru_ru/module/command/coin/' },
                          { text: 'Dice', link: '/en/messages/ru_ru/module/command/dice/' },
                          { text: 'Do', link: '/en/messages/ru_ru/module/command/do/' },
                          { text: 'Flectonepulse', link: '/en/messages/ru_ru/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/en/messages/ru_ru/module/command/geolocate/' },
                          { text: 'Helper', link: '/en/messages/ru_ru/module/command/helper/' },
                          { text: 'Ignore', link: '/en/messages/ru_ru/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/en/messages/ru_ru/module/command/ignorelist/' },
                          { text: 'Kick', link: '/en/messages/ru_ru/module/command/kick/' },
                          { text: 'Mail', link: '/en/messages/ru_ru/module/command/mail/' },
                          { text: 'Maintenance', link: '/en/messages/ru_ru/module/command/maintenance/' },
                          { text: 'Me', link: '/en/messages/ru_ru/module/command/me/' },
                          { text: 'Mute', link: '/en/messages/ru_ru/module/command/mute/' },
                          { text: 'Mutelist', link: '/en/messages/ru_ru/module/command/mutelist/' },
                          { text: 'Online', link: '/en/messages/ru_ru/module/command/online/' },
                          { text: 'Poll', link: '/en/messages/ru_ru/module/command/poll/' },
                          { text: 'Reply', link: '/en/messages/ru_ru/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/en/messages/ru_ru/module/command/rockpaperscissors/' },
                          { text: 'Spy', link: '/en/messages/ru_ru/module/command/spy/' },
                          { text: 'Stream', link: '/en/messages/ru_ru/module/command/stream/' },
                          { text: 'Symbol', link: '/en/messages/ru_ru/module/command/symbol/' },
                          { text: 'Tell', link: '/en/messages/ru_ru/module/command/tell/' },
                          { text: 'Tictactoe', link: '/en/messages/ru_ru/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/en/messages/ru_ru/module/command/translateto/' },
                          { text: 'Try', link: '/en/messages/ru_ru/module/command/try/' },
                          { text: 'Unban', link: '/en/messages/ru_ru/module/command/unban/' },
                          { text: 'Unmute', link: '/en/messages/ru_ru/module/command/unmute/' },
                          { text: 'Unwarn', link: '/en/messages/ru_ru/module/command/unwarn/' },
                          { text: 'Warn', link: '/en/messages/ru_ru/module/command/warn/' },
                          { text: 'Warnlist', link: '/en/messages/ru_ru/module/command/warnlist/' },
                        ]
                      },
                      {
                        text: 'Integrations',
                        link: '/en/messages/ru_ru/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Discord', link: '/en/messages/ru_ru/module/integration/discord/' },
                          { text: 'Telegram', link: '/en/messages/ru_ru/module/integration/telegram/' },
                          { text: 'Twitch', link: '/en/messages/ru_ru/module/integration/twitch/' },
                        ]
                      },
                      {
                        text: 'Interactions',
                        link: '/en/messages/ru_ru/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Right click', link: '/en/messages/ru_ru/module/interaction/rightclick/' },
                          { text: 'Sign', link: '/en/messages/ru_ru/module/interaction/sign/' },
                          { text: 'Spit', link: '/en/messages/ru_ru/module/interaction/spit/' },
                        ]
                      },
                      {
                        text: 'Player',
                        link: '/en/messages/ru_ru/module/player/',
                        collapsed: true,
                        items: [
                            { text: 'Afk', link: '/en/messages/ru_ru/module/player/afk/' },
                            {
                                text: 'Messagees',
                                link: '/en/messages/ru_ru/module/player/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Bubble', link: '/en/messages/ru_ru/module/player/message/bubble/' },
                                    { text: 'Chat', link: '/en/messages/ru_ru/module/player/message/chat/' },
                                    { text: 'Formating', link: '/en/messages/ru_ru/module/player/message/format/' },
                                ]
                            },
                            { text: 'Name', link: '/en/messages/ru_ru/module/player/name/' },
                            { text: 'Team', link: '/en/messages/ru_ru/module/player/team/' },
                        ]
                      },
                      {
                        text: 'Server',
                        link: '/en/messages/ru_ru/module/server/',
                        collapsed: true,
                        items: [
                            { text: 'Brand', link: '/en/messages/ru_ru/module/server/brand/' },
                            {
                                text: 'Messages',
                                link: '/en/messages/ru_ru/module/server/message/',
                                collapsed: true,
                                items: [
                                  { text: 'Advancement', link: '/en/messages/ru_ru/module/server/message/advancement/' },
                                  { text: 'Auto', link: '/en/messages/ru_ru/module/server/message/auto/' },
                                  { text: 'Clear', link: '/en/messages/ru_ru/module/server/message/clear/' },
                                  { text: 'Death', link: '/en/messages/ru_ru/module/server/message/death/' },
                                  { text: 'Deop', link: '/en/messages/ru_ru/module/server/message/deop/' },
                                  { text: 'Enchant', link: '/en/messages/ru_ru/module/server/message/enchant/' },
                                  { text: 'Gamemode', link: '/en/messages/ru_ru/module/server/message/gamemode/' },
                                  { text: 'Greeting', link: '/en/messages/ru_ru/module/server/message/greeting/' },
                                  { text: 'Join', link: '/en/messages/ru_ru/module/server/message/join/' },
                                  { text: 'Op', link: '/en/messages/ru_ru/module/server/message/op/' },
                                  { text: 'Quit', link: '/en/messages/ru_ru/module/server/message/quit/' },
                                  { text: 'Seed', link: '/en/messages/ru_ru/module/server/message/seed/' },
                                  { text: 'Setblock', link: '/en/messages/ru_ru/module/server/message/setblock/' },
                                  { text: 'Spawnpoint', link: '/en/messages/ru_ru/module/server/message/spawnpoint/' },
                                ]
                            },
                            { text: 'MOTD', link: '/en/messages/ru_ru/module/server/motd/' },
                            { text: 'Player count', link: '/en/messages/ru_ru/module/server/playercount/' },
                            {
                                text: 'Tab',
                                link: '/en/messages/ru_ru/module/server/tab/',
                                collapsed: true,
                                items: [
                                  { text: 'Player list name', link: '/en/messages/ru_ru/module/server/tab/playerlistname/' },
                                  { text: 'Header', link: '/en/messages/ru_ru/module/server/tab/header/' },
                                  { text: 'Footer', link: '/en/messages/ru_ru/module/server/tab/footer/' },
                                ]
                            },
                        ]
                      },
                      {
                        text: 'Tags',
                        link: '/en/messages/ru_ru/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Spoiler', link: '/en/messages/ru_ru/module/tag/spoiler/' },
                        ]
                      },
                    ]
                  },
                ]
              },
              {
                text: 'File en_us.yml',
                link: '/en/messages/en_us/',
                collapsed: true,
                items: [
                  {
                    text: 'Modules',
                    link: '/en/messages/en_us/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Commands',
                        link: '/en/messages/en_us/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Ball', link: '/en/messages/en_us/module/command/ball/' },
                          { text: 'Ban', link: '/en/messages/en_us/module/command/ban/' },
                          { text: 'Banlist', link: '/en/messages/en_us/module/command/banlist/' },
                          { text: 'Broadcast', link: '/en/messages/en_us/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/en/messages/en_us/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/en/messages/en_us/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/en/messages/en_us/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/en/messages/en_us/module/command/clearmail/' },
                          { text: 'Coin', link: '/en/messages/en_us/module/command/coin/' },
                          { text: 'Dice', link: '/en/messages/en_us/module/command/dice/' },
                          { text: 'Do', link: '/en/messages/en_us/module/command/do/' },
                          { text: 'Flectonepulse', link: '/en/messages/en_us/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/en/messages/en_us/module/command/geolocate/' },
                          { text: 'Helper', link: '/en/messages/en_us/module/command/helper/' },
                          { text: 'Ignore', link: '/en/messages/en_us/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/en/messages/en_us/module/command/ignorelist/' },
                          { text: 'Kick', link: '/en/messages/en_us/module/command/kick/' },
                          { text: 'Mail', link: '/en/messages/en_us/module/command/mail/' },
                          { text: 'Maintenance', link: '/en/messages/en_us/module/command/maintenance/' },
                          { text: 'Me', link: '/en/messages/en_us/module/command/me/' },
                          { text: 'Mute', link: '/en/messages/en_us/module/command/mute/' },
                          { text: 'Mutelist', link: '/en/messages/en_us/module/command/mutelist/' },
                          { text: 'Online', link: '/en/messages/en_us/module/command/online/' },
                          { text: 'Poll', link: '/en/messages/en_us/module/command/poll/' },
                          { text: 'Reply', link: '/en/messages/en_us/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/en/messages/en_us/module/command/rockpaperscissors/' },
                          { text: 'Spy', link: '/en/messages/en_us/module/command/spy/' },
                          { text: 'Stream', link: '/en/messages/en_us/module/command/stream/' },
                          { text: 'Symbol', link: '/en/messages/en_us/module/command/symbol/' },
                          { text: 'Tell', link: '/en/messages/en_us/module/command/tell/' },
                          { text: 'Tictactoe', link: '/en/messages/en_us/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/en/messages/en_us/module/command/translateto/' },
                          { text: 'Try', link: '/en/messages/en_us/module/command/try/' },
                          { text: 'Unban', link: '/en/messages/en_us/module/command/unban/' },
                          { text: 'Unmute', link: '/en/messages/en_us/module/command/unmute/' },
                          { text: 'Unwarn', link: '/en/messages/en_us/module/command/unwarn/' },
                          { text: 'Warn', link: '/en/messages/en_us/module/command/warn/' },
                          { text: 'Warnlist', link: '/en/messages/en_us/module/command/warnlist/' },
                        ]
                      },
                      {
                        text: 'Integrations',
                        link: '/en/messages/en_us/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Discord', link: '/en/messages/en_us/module/integration/discord/' },
                          { text: 'Telegram', link: '/en/messages/en_us/module/integration/telegram/' },
                          { text: 'Twitch', link: '/en/messages/en_us/module/integration/twitch/' },
                        ]
                      },
                      {
                        text: 'Interactions',
                        link: '/en/messages/en_us/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Right click', link: '/en/messages/en_us/module/interaction/rightclick/' },
                          { text: 'Sign', link: '/en/messages/en_us/module/interaction/sign/' },
                          { text: 'Spit', link: '/en/messages/en_us/module/interaction/spit/' },
                        ]
                      },
                      {
                        text: 'Player',
                        link: '/en/messages/en_us/module/player/',
                        collapsed: true,
                        items: [
                            { text: 'Afk', link: '/en/messages/en_us/module/player/afk/' },
                            {
                                text: 'Messages',
                                link: '/en/messages/en_us/module/player/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Bubble', link: '/en/messages/en_us/module/player/message/bubble/' },
                                    { text: 'Chat', link: '/en/messages/en_us/module/player/message/chat/' },
                                    { text: 'Formating', link: '/en/messages/en_us/module/player/message/format/' },
                                ]
                            },
                            { text: 'Name', link: '/en/messages/en_us/module/player/name/' },
                            { text: 'Team', link: '/en/messages/en_us/module/player/team/' },
                        ]
                      },
                      {
                        text: 'Server',
                        link: '/en/messages/en_us/module/server/',
                        collapsed: true,
                        items: [
                            { text: 'Brand', link: '/en/messages/en_us/module/server/brand/' },
                            {
                                text: 'Messages',
                                link: '/en/messages/en_us/module/server/message/',
                                collapsed: true,
                                items: [
                                  { text: 'Advancement', link: '/en/messages/en_us/module/server/message/advancement/' },
                                  { text: 'Auto', link: '/en/messages/en_us/module/server/message/auto/' },
                                  { text: 'Clear', link: '/en/messages/en_us/module/server/message/clear/' },
                                  { text: 'Death', link: '/en/messages/en_us/module/server/message/death/' },
                                  { text: 'Deop', link: '/en/messages/en_us/module/server/message/deop/' },
                                  { text: 'Enchant', link: '/en/messages/en_us/module/server/message/enchant/' },
                                  { text: 'Gamemode', link: '/en/messages/en_us/module/server/message/gamemode/' },
                                  { text: 'Greeting', link: '/en/messages/en_us/module/server/message/greeting/' },
                                  { text: 'Join', link: '/en/messages/en_us/module/server/message/join/' },
                                  { text: 'Op', link: '/en/messages/en_us/module/server/message/op/' },
                                  { text: 'Quit', link: '/en/messages/en_us/module/server/message/quit/' },
                                  { text: 'Seed', link: '/en/messages/en_us/module/server/message/seed/' },
                                  { text: 'Setblock', link: '/en/messages/en_us/module/server/message/setblock/' },
                                  { text: 'Spawnpoint', link: '/en/messages/en_us/module/server/message/spawnpoint/' },
                                ]
                            },
                            { text: 'MOTD', link: '/en/messages/en_us/module/server/motd/' },
                            { text: 'Player count', link: '/en/messages/en_us/module/server/playercount/' },
                            {
                                text: 'Tab',
                                link: '/en/messages/en_us/module/server/tab/',
                                collapsed: true,
                                items: [
                                  { text: 'Player list name', link: '/en/messages/en_us/module/server/tab/playerlistname/' },
                                  { text: 'Header', link: '/en/messages/en_us/module/server/tab/header/' },
                                  { text: 'Footer', link: '/en/messages/en_us/module/server/tab/footer/' },
                                ]
                            },
                        ]
                      },
                      {
                        text: 'Tags',
                        link: '/en/messages/en_us/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Spoiler', link: '/en/messages/en_us/module/tag/spoiler/' },
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: 'File config.yml',
            link: '/en/config/',
            collapsed: false,
            items: [
              { text: 'Plugin', link: '/en/config/plugin/' },
              {
                text: 'Modules',
                link: '/en/config/module/',
                collapsed: true,
                items: [
                  {
                    text: 'Integrations',
                    link: '/en/config/module/integration/',
                    collapsed: true,
                    items: [
                      { text: 'Discord', link: '/en/config/module/integration/discord/' },
                      { text: 'InteractiveChat', link: '/en/config/module/integration/interactivechat/' },
                      { text: 'LuckPerms', link: '/en/config/module/integration/luckperms/' },
                      { text: 'PlaceholderAPI', link: '/en/config/module/integration/placeholderapi/' },
                      { text: 'PlasmoVoice', link: '/en/config/module/integration/plasmovoice/' },
                      { text: 'SimpleVoice', link: '/en/config/module/integration/simplevoice/' },
                      { text: 'SkinsRestorer', link: '/en/config/module/integration/skinsrestorer/' },
                      { text: 'SuperVanish', link: '/en/config/module/integration/supervanish/' },
                      { text: 'Telegram', link: '/en/config/module/integration/telegram/' },
                      { text: 'Twitch', link: '/en/config/module/integration/twitch/' },
                      { text: 'Vault', link: '/en/config/module/integration/vault/' },
                    ]
                  },
                  {
                    text: 'Interactions',
                    link: '/en/config/module/interaction/',
                    collapsed: true,
                    items: [
                        { text: 'Knock', link: '/en/config/module/interaction/knock/' },
                        { text: 'Mark', link: '/en/config/module/interaction/mark/' },
                        { text: 'Right click', link: '/en/config/module/interaction/rightclick/' },
                        { text: 'Sign', link: '/en/config/module/interaction/sign/' },
                        { text: 'Spit', link: '/en/config/module/interaction/spit/' },
                        { text: 'Un sign', link: '/en/config/module/interaction/unsign/' },
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
                             { text: 'Anvil', link: '/en/config/module/player/message/anvil/' },
                             { text: 'Book', link: '/en/config/module/player/message/book/' },
                             { text: 'Bubble', link: '/en/config/module/player/message/bubble/' },
                             { text: 'Chat', link: '/en/config/module/player/message/chat/' },
                             {
                                text: 'Formating',
                                link: '/en/config/module/player/message/format/',
                                collapsed: true,
                                items: [
                                    { text: 'Caps', link: '/en/config/module/player/message/format/caps/' },
                                    { text: 'Mention', link: '/en/config/module/player/message/format/mention/' },
                                    { text: 'Swear', link: '/en/config/module/player/message/format/swear/' },
                                ]
                             },
                             { text: 'Sign', link: '/en/config/module/player/message/sign/' },
                        ]
                      },
                      {
                        text: 'Name',
                        link: '/en/config/module/player/name/',
                        collapsed: true,
                      },
                      {
                        text: 'Object',
                        link: '/en/config/module/player/objective/',
                        collapsed: true,
                        items: [
                            { text: 'Below name', link: '/en/config/module/player/objective/belowname/' },
                            { text: 'Player list', link: '/en/config/module/player/objective/playerlist/' },
                        ]
                      },
                      { text: 'Team', link: '/en/config/module/player/team/' },
                      { text: 'World', link: '/en/config/module/player/world/' },
                    ]
                  },
                  {
                    text: 'Server',
                    link: '/en/config/module/server/',
                    collapsed: true,
                    items: [
                        { text: 'Brand', link: '/en/config/module/server/brand/' },
                        { text: 'Icon', link: '/en/config/module/server/icon/' },
                        {
                            text: 'Messages',
                            link: '/en/config/module/server/message/',
                            collapsed: true,
                            items: [
                              { text: 'Advancement', link: '/en/config/module/server/message/advancement/' },
                              { text: 'Auto', link: '/en/config/module/server/message/auto/' },
                              { text: 'Clear', link: '/en/config/module/server/message/clear/' },
                              { text: 'Death', link: '/en/config/module/server/message/death/' },
                              { text: 'Deop', link: '/en/config/module/server/message/deop/' },
                              { text: 'Enchant', link: '/en/config/module/server/message/enchant/' },
                              { text: 'Gamemode', link: '/en/config/module/server/message/gamemode/' },
                              { text: 'Greeting', link: '/en/config/module/server/message/greeting/' },
                              { text: 'Join', link: '/en/config/module/server/message/join/' },
                              { text: 'Op', link: '/en/config/module/server/message/op/' },
                              { text: 'Quit', link: '/en/config/module/server/message/quit/' },
                              { text: 'Seed', link: '/en/config/module/server/message/seed/' },
                              { text: 'Setblock', link: '/en/config/module/server/message/setblock/' },
                              { text: 'Spawnpoint', link: '/en/config/module/server/message/spawnpoint/' },
                            ]
                        },
                        { text: 'MOTD', link: '/en/config/module/server/motd/' },
                        { text: 'Player count', link: '/en/config/module/server/playercount/' },
                        {
                            text: 'Tab',
                            link: '/en/config/module/server/tab/',
                            collapsed: true,
                            items: [
                              { text: 'Player list name', link: '/en/config/module/server/tab/playerlistname/' },
                              { text: 'Header', link: '/en/config/module/server/tab/header/' },
                              { text: 'Footer', link: '/en/config/module/server/tab/footer/' },
                            ]
                        },
                    ]
                  },
                  {
                    text: 'Tags',
                    link: '/en/config/module/tag/',
                    collapsed: true,
                    items: [
                        { text: 'Color', link: '/en/config/module/tag/color/' },
                        { text: 'Emoji', link: '/en/config/module/tag/emoji/' },
                        { text: 'Image', link: '/en/config/module/tag/image/' },
                        { text: 'Spoiler', link: '/en/config/module/tag/spoiler/' },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: 'File commands.yml',
            link: '/en/commands/',
            collapsed: false,
            items: [
              {
                text: 'Modules',
                link: '/en/commands/module/',
                collapsed: true,
                items: [
                    {
                      text: 'Commands',
                      link: '/en/commands/module/command/',
                      collapsed: true,
                      items: [
                          { text: 'Afk', link: '/en/commands/module/command/afk/' },
                          { text: 'Ball', link: '/en/commands/module/command/ball/' },
                          { text: 'Ban', link: '/en/commands/module/command/ban/' },
                          { text: 'Banlist', link: '/en/commands/module/command/banlist/' },
                          { text: 'Broadcast', link: '/en/commands/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/en/commands/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/en/commands/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/en/commands/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/en/commands/module/command/clearmail/' },
                          { text: 'Coin', link: '/en/commands/module/command/coin/' },
                          { text: 'Dice', link: '/en/commands/module/command/dice/' },
                          { text: 'Do', link: '/en/commands/module/command/do/' },
                          { text: 'Flectonepulse', link: '/en/commands/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/en/commands/module/command/geolocate/' },
                          { text: 'Helper', link: '/en/commands/module/command/helper/' },
                          { text: 'Ignore', link: '/en/commands/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/en/commands/module/command/ignorelist/' },
                          { text: 'Kick', link: '/en/commands/module/command/kick/' },
                          { text: 'Mail', link: '/en/commands/module/command/mail/' },
                          { text: 'Maintenance', link: '/en/commands/module/command/maintenance/' },
                          { text: 'Mark', link: '/en/commands/module/command/mark/' },
                          { text: 'Me', link: '/en/commands/module/command/me/' },
                          { text: 'Mute', link: '/en/commands/module/command/mute/' },
                          { text: 'Mutelist', link: '/en/commands/module/command/mutelist/' },
                          { text: 'Online', link: '/en/commands/module/command/online/' },
                          { text: 'Poll', link: '/en/commands/module/command/poll/' },
                          { text: 'Reply', link: '/en/commands/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/en/commands/module/command/rockpaperscissors/' },
                          { text: 'Spit', link: '/en/commands/module/command/spit/' },
                          { text: 'Spy', link: '/en/commands/module/command/spy/' },
                          { text: 'Stream', link: '/en/commands/module/command/stream/' },
                          { text: 'Symbol', link: '/en/commands/module/command/symbol/' },
                          { text: 'Tell', link: '/en/commands/module/command/tell/' },
                          { text: 'Tictactoe', link: '/en/commands/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/en/commands/module/command/translateto/' },
                          { text: 'Try', link: '/en/commands/module/command/try/' },
                          { text: 'Unban', link: '/en/commands/module/command/unban/' },
                          { text: 'Unmute', link: '/en/commands/module/command/unmute/' },
                          { text: 'Unwarn', link: '/en/commands/module/command/unwarn/' },
                          { text: 'Warn', link: '/en/commands/module/command/warn/' },
                          { text: 'Warnlist', link: '/en/commands/module/command/warnlist/' },
                      ]
                    },
                ]
              },
            ]
          },
          {
            text: 'File permissions.yml',
            link: '/en/permissions/',
            collapsed: false,
            items: [

            ]
          },
          {
            text: 'File secrets.yml',
            link: '/en/secrets/',
            collapsed: false,
            items: [
              {
                text: 'Plugin',
                link: '/en/secrets/plugin/',
                collapsed: true,
                items: [
                  { text: 'Database', link: '/en/secrets/plugin/database' },
                ]
              },
              {
                text: 'Modules',
                link: '/en/secrets/module/',
                collapsed: true,
                items: [
                    {
                      text: 'Integrations',
                      link: '/en/secrets/module/integration/',
                      collapsed: true,
                      items: [
                         { text: 'Discord', link: '/en/secrets/module/integration/discord/' },
                         { text: 'Telegram', link: '/en/secrets/module/integration/telegram/' },
                         { text: 'Twitch', link: '/en/secrets/module/integration/twitch/' },
                      ]
                    },
                ]
              },
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
          { text: 'Версия 0.0.8', link: 'https://github.com/Flectone/FlectonePulseWeb/' },
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
            text: 'Папка messages/',
            link: '/ru/messages/',
            collapsed: false,
            items: [
              {
                text: 'Файл ru_ru.yml',
                link: '/ru/messages/ru_ru/',
                collapsed: true,
                items: [
                  {
                    text: 'Модули',
                    link: '/ru/messages/ru_ru/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Комманды',
                        link: '/ru/messages/ru_ru/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Ball', link: '/ru/messages/ru_ru/module/command/ball/' },
                          { text: 'Ban', link: '/ru/messages/ru_ru/module/command/ban/' },
                          { text: 'Banlist', link: '/ru/messages/ru_ru/module/command/banlist/' },
                          { text: 'Broadcast', link: '/ru/messages/ru_ru/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/ru/messages/ru_ru/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/ru/messages/ru_ru/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/ru/messages/ru_ru/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/ru/messages/ru_ru/module/command/clearmail/' },
                          { text: 'Coin', link: '/ru/messages/ru_ru/module/command/coin/' },
                          { text: 'Dice', link: '/ru/messages/ru_ru/module/command/dice/' },
                          { text: 'Do', link: '/ru/messages/ru_ru/module/command/do/' },
                          { text: 'Flectonepulse', link: '/ru/messages/ru_ru/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/ru/messages/ru_ru/module/command/geolocate/' },
                          { text: 'Helper', link: '/ru/messages/ru_ru/module/command/helper/' },
                          { text: 'Ignore', link: '/ru/messages/ru_ru/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/ru/messages/ru_ru/module/command/ignorelist/' },
                          { text: 'Kick', link: '/ru/messages/ru_ru/module/command/kick/' },
                          { text: 'Mail', link: '/ru/messages/ru_ru/module/command/mail/' },
                          { text: 'Maintenance', link: '/ru/messages/ru_ru/module/command/maintenance/' },
                          { text: 'Me', link: '/ru/messages/ru_ru/module/command/me/' },
                          { text: 'Mute', link: '/ru/messages/ru_ru/module/command/mute/' },
                          { text: 'Mutelist', link: '/ru/messages/ru_ru/module/command/mutelist/' },
                          { text: 'Online', link: '/ru/messages/ru_ru/module/command/online/' },
                          { text: 'Poll', link: '/ru/messages/ru_ru/module/command/poll/' },
                          { text: 'Reply', link: '/ru/messages/ru_ru/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/ru/messages/ru_ru/module/command/rockpaperscissors/' },
                          { text: 'Spy', link: '/ru/messages/ru_ru/module/command/spy/' },
                          { text: 'Stream', link: '/ru/messages/ru_ru/module/command/stream/' },
                          { text: 'Symbol', link: '/ru/messages/ru_ru/module/command/symbol/' },
                          { text: 'Tell', link: '/ru/messages/ru_ru/module/command/tell/' },
                          { text: 'Tictactoe', link: '/ru/messages/ru_ru/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/ru/messages/ru_ru/module/command/translateto/' },
                          { text: 'Try', link: '/ru/messages/ru_ru/module/command/try/' },
                          { text: 'Unban', link: '/ru/messages/ru_ru/module/command/unban/' },
                          { text: 'Unmute', link: '/ru/messages/ru_ru/module/command/unmute/' },
                          { text: 'Unwarn', link: '/ru/messages/ru_ru/module/command/unwarn/' },
                          { text: 'Warn', link: '/ru/messages/ru_ru/module/command/warn/' },
                          { text: 'Warnlist', link: '/ru/messages/ru_ru/module/command/warnlist/' },
                        ]
                      },
                      {
                        text: 'Интеграции',
                        link: '/ru/messages/ru_ru/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Дискорд', link: '/ru/messages/ru_ru/module/integration/discord/' },
                          { text: 'Телеграм', link: '/ru/messages/ru_ru/module/integration/telegram/' },
                          { text: 'Твич', link: '/ru/messages/ru_ru/module/integration/twitch/' },
                        ]
                      },
                      {
                        text: 'Взаимодействия',
                        link: '/ru/messages/ru_ru/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Правое нажатие', link: '/ru/messages/ru_ru/module/interaction/rightclick/' },
                          { text: 'Подпись', link: '/ru/messages/ru_ru/module/interaction/sign/' },
                          { text: 'Плевок', link: '/ru/messages/ru_ru/module/interaction/spit/' },
                        ]
                      },
                      {
                        text: 'Игрок',
                        link: '/ru/messages/ru_ru/module/player/',
                        collapsed: true,
                        items: [
                            { text: 'Афк', link: '/ru/messages/ru_ru/module/player/afk/' },
                            {
                                text: 'Сообщения',
                                link: '/ru/messages/ru_ru/module/player/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Над головой', link: '/ru/messages/ru_ru/module/player/message/bubble/' },
                                    { text: 'Чат', link: '/ru/messages/ru_ru/module/player/message/chat/' },
                                    { text: 'Форматирование', link: '/ru/messages/ru_ru/module/player/message/format/' },
                                ]
                            },
                            { text: 'Имя', link: '/ru/messages/ru_ru/module/player/name/' },
                            { text: 'Команда', link: '/ru/messages/ru_ru/module/player/team/' },
                        ]
                      },
                      {
                        text: 'Сервер',
                        link: '/ru/messages/ru_ru/module/server/',
                        collapsed: true,
                        items: [
                            { text: 'Бренд', link: '/ru/messages/ru_ru/module/server/brand/' },
                            {
                                text: 'Сообщения',
                                link: '/ru/messages/ru_ru/module/server/message/',
                                collapsed: true,
                                items: [
                                  { text: 'Достижение', link: '/ru/messages/ru_ru/module/server/message/advancement/' },
                                  { text: 'Автоматическое', link: '/ru/messages/ru_ru/module/server/message/auto/' },
                                  { text: 'Очищение', link: '/ru/messages/ru_ru/module/server/message/clear/' },
                                  { text: 'Смерть', link: '/ru/messages/ru_ru/module/server/message/death/' },
                                  { text: 'Деоп', link: '/ru/messages/ru_ru/module/server/message/deop/' },
                                  { text: 'Зачарование', link: '/ru/messages/ru_ru/module/server/message/enchant/' },
                                  { text: 'Режим игры', link: '/ru/messages/ru_ru/module/server/message/gamemode/' },
                                  { text: 'Приветствие', link: '/ru/messages/ru_ru/module/server/message/greeting/' },
                                  { text: 'Подключение', link: '/ru/messages/ru_ru/module/server/message/join/' },
                                  { text: 'Оп', link: '/ru/messages/ru_ru/module/server/message/op/' },
                                  { text: 'Отключение', link: '/ru/messages/ru_ru/module/server/message/quit/' },
                                  { text: 'Сид', link: '/ru/messages/ru_ru/module/server/message/seed/' },
                                  { text: 'Сетблок', link: '/ru/messages/ru_ru/module/server/message/setblock/' },
                                  { text: 'Спавнпоинт', link: '/ru/messages/ru_ru/module/server/message/spawnpoint/' },
                                ]
                            },
                            { text: 'МОТД', link: '/ru/messages/ru_ru/module/server/motd/' },
                            { text: 'Количество игроков', link: '/ru/messages/ru_ru/module/server/playercount/' },
                            {
                                text: 'Таб',
                                link: '/ru/messages/ru_ru/module/server/tab/',
                                collapsed: true,
                                items: [
                                  { text: 'Имя в списке', link: '/ru/messages/ru_ru/module/server/tab/playerlistname/' },
                                  { text: 'Верхнее', link: '/ru/messages/ru_ru/module/server/tab/header/' },
                                  { text: 'Нижнее', link: '/ru/messages/ru_ru/module/server/tab/footer/' },
                                ]
                            },
                        ]
                      },
                      {
                        text: 'Теги',
                        link: '/ru/messages/ru_ru/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Спойлер', link: '/ru/messages/ru_ru/module/tag/spoiler/' },
                        ]
                      },
                    ]
                  },
                ]
              },
              {
                text: 'Файл en_us.yml',
                link: '/ru/messages/en_us/',
                collapsed: true,
                items: [
                  {
                    text: 'Модули',
                    link: '/ru/messages/en_us/module/',
                    collapsed: true,
                    items: [
                      {
                        text: 'Комманды',
                        link: '/ru/messages/en_us/module/command/',
                        collapsed: true,
                        items: [
                          { text: 'Ball', link: '/ru/messages/en_us/module/command/ball/' },
                          { text: 'Ban', link: '/ru/messages/en_us/module/command/ban/' },
                          { text: 'Banlist', link: '/ru/messages/en_us/module/command/banlist/' },
                          { text: 'Broadcast', link: '/ru/messages/en_us/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/ru/messages/en_us/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/ru/messages/en_us/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/ru/messages/en_us/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/ru/messages/en_us/module/command/clearmail/' },
                          { text: 'Coin', link: '/ru/messages/en_us/module/command/coin/' },
                          { text: 'Dice', link: '/ru/messages/en_us/module/command/dice/' },
                          { text: 'Do', link: '/ru/messages/en_us/module/command/do/' },
                          { text: 'Flectonepulse', link: '/ru/messages/en_us/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/ru/messages/en_us/module/command/geolocate/' },
                          { text: 'Helper', link: '/ru/messages/en_us/module/command/helper/' },
                          { text: 'Ignore', link: '/ru/messages/en_us/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/ru/messages/en_us/module/command/ignorelist/' },
                          { text: 'Kick', link: '/ru/messages/en_us/module/command/kick/' },
                          { text: 'Mail', link: '/ru/messages/en_us/module/command/mail/' },
                          { text: 'Maintenance', link: '/ru/messages/en_us/module/command/maintenance/' },
                          { text: 'Me', link: '/ru/messages/en_us/module/command/me/' },
                          { text: 'Mute', link: '/ru/messages/en_us/module/command/mute/' },
                          { text: 'Mutelist', link: '/ru/messages/en_us/module/command/mutelist/' },
                          { text: 'Online', link: '/ru/messages/en_us/module/command/online/' },
                          { text: 'Poll', link: '/ru/messages/en_us/module/command/poll/' },
                          { text: 'Reply', link: '/ru/messages/en_us/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/ru/messages/en_us/module/command/rockpaperscissors/' },
                          { text: 'Spy', link: '/ru/messages/en_us/module/command/spy/' },
                          { text: 'Stream', link: '/ru/messages/en_us/module/command/stream/' },
                          { text: 'Symbol', link: '/ru/messages/en_us/module/command/symbol/' },
                          { text: 'Tell', link: '/ru/messages/en_us/module/command/tell/' },
                          { text: 'Tictactoe', link: '/ru/messages/en_us/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/ru/messages/en_us/module/command/translateto/' },
                          { text: 'Try', link: '/ru/messages/en_us/module/command/try/' },
                          { text: 'Unban', link: '/ru/messages/en_us/module/command/unban/' },
                          { text: 'Unmute', link: '/ru/messages/en_us/module/command/unmute/' },
                          { text: 'Unwarn', link: '/ru/messages/en_us/module/command/unwarn/' },
                          { text: 'Warn', link: '/ru/messages/en_us/module/command/warn/' },
                          { text: 'Warnlist', link: '/ru/messages/en_us/module/command/warnlist/' },
                        ]
                      },
                      {
                        text: 'Интеграции',
                        link: '/ru/messages/en_us/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Дискорд', link: '/ru/messages/en_us/module/integration/discord/' },
                          { text: 'Телеграм', link: '/ru/messages/en_us/module/integration/telegram/' },
                          { text: 'Твич', link: '/ru/messages/en_us/module/integration/twitch/' },
                        ]
                      },
                      {
                        text: 'Взаимодействия',
                        link: '/ru/messages/en_us/module/interaction/',
                        collapsed: true,
                        items: [
                          { text: 'Правое нажатие', link: '/ru/messages/en_us/module/interaction/rightclick/' },
                          { text: 'Подпись', link: '/ru/messages/en_us/module/interaction/sign/' },
                          { text: 'Плевок', link: '/ru/messages/en_us/module/interaction/spit/' },
                        ]
                      },
                      {
                        text: 'Игрок',
                        link: '/ru/messages/en_us/module/player/',
                        collapsed: true,
                        items: [
                            { text: 'Афк', link: '/ru/messages/en_us/module/player/afk/' },
                            {
                                text: 'Сообщения',
                                link: '/ru/messages/en_us/module/player/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Над головой', link: '/ru/messages/en_us/module/player/message/bubble/' },
                                    { text: 'Чат', link: '/ru/messages/en_us/module/player/message/chat/' },
                                    { text: 'Форматирование', link: '/ru/messages/en_us/module/player/message/format/' },
                                ]
                            },
                            { text: 'Имя', link: '/ru/messages/en_us/module/player/name/' },
                            { text: 'Команда', link: '/ru/messages/en_us/module/player/team/' },
                        ]
                      },
                      {
                        text: 'Сервер',
                        link: '/ru/messages/en_us/module/server/',
                        collapsed: true,
                        items: [
                            { text: 'Бренд', link: '/ru/messages/en_us/module/server/brand/' },
                            {
                                text: 'Сообщения',
                                link: '/ru/messages/en_us/module/server/message/',
                                collapsed: true,
                                items: [
                                  { text: 'Достижение', link: '/ru/messages/en_us/module/server/message/advancement/' },
                                  { text: 'Автоматическое', link: '/ru/messages/en_us/module/server/message/auto/' },
                                  { text: 'Очищение', link: '/ru/messages/en_us/module/server/message/clear/' },
                                  { text: 'Смерть', link: '/ru/messages/en_us/module/server/message/death/' },
                                  { text: 'Деоп', link: '/ru/messages/en_us/module/server/message/deop/' },
                                  { text: 'Зачарование', link: '/ru/messages/en_us/module/server/message/enchant/' },
                                  { text: 'Режим игры', link: '/ru/messages/en_us/module/server/message/gamemode/' },
                                  { text: 'Приветствие', link: '/ru/messages/en_us/module/server/message/greeting/' },
                                  { text: 'Подключение', link: '/ru/messages/en_us/module/server/message/join/' },
                                  { text: 'Оп', link: '/ru/messages/en_us/module/server/message/op/' },
                                  { text: 'Отключение', link: '/ru/messages/en_us/module/server/message/quit/' },
                                  { text: 'Сид', link: '/ru/messages/en_us/module/server/message/seed/' },
                                  { text: 'Сетблок', link: '/ru/messages/en_us/module/server/message/setblock/' },
                                  { text: 'Спавнпоинт', link: '/ru/messages/en_us/module/server/message/spawnpoint/' },
                                ]
                            },
                            { text: 'МОТД', link: '/ru/messages/en_us/module/server/motd/' },
                            { text: 'Количество игроков', link: '/ru/messages/en_us/module/server/playercount/' },
                            {
                                text: 'Таб',
                                link: '/ru/messages/en_us/module/server/tab/',
                                collapsed: true,
                                items: [
                                  { text: 'Имя в списке', link: '/ru/messages/en_us/module/server/tab/playerlistname/' },
                                  { text: 'Верхнее', link: '/ru/messages/en_us/module/server/tab/header/' },
                                  { text: 'Нижнее', link: '/ru/messages/en_us/module/server/tab/footer/' },
                                ]
                            },
                        ]
                      },
                      {
                        text: 'Теги',
                        link: '/ru/messages/en_us/module/tag/',
                        collapsed: true,
                        items: [
                          { text: 'Спойлер', link: '/ru/messages/en_us/module/tag/spoiler/' },
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: 'Файл config.yml',
            link: '/ru/config/',
            collapsed: false,
            items: [
              { text: 'Плагин', link: '/ru/config/plugin/' },
              {
                text: 'Модули',
                link: '/ru/config/module/',
                collapsed: true,
                items: [
                  {
                    text: 'Интеграции',
                    link: '/ru/config/module/integration/',
                    collapsed: true,
                    items: [
                      { text: 'Дискорд', link: '/ru/config/module/integration/discord/' },
                      { text: 'InteractiveChat', link: '/ru/config/module/integration/interactivechat/' },
                      { text: 'LuckPerms', link: '/ru/config/module/integration/luckperms/' },
                      { text: 'PlaceholderAPI', link: '/ru/config/module/integration/placeholderapi/' },
                      { text: 'PlasmoVoice', link: '/ru/config/module/integration/plasmovoice/' },
                      { text: 'SimpleVoice', link: '/ru/config/module/integration/simplevoice/' },
                      { text: 'SkinsRestorer', link: '/ru/config/module/integration/skinsrestorer/' },
                      { text: 'SuperVanish', link: '/ru/config/module/integration/supervanish/' },
                      { text: 'Телеграм', link: '/ru/config/module/integration/telegram/' },
                      { text: 'Твич', link: '/ru/config/module/integration/twitch/' },
                      { text: 'Vault', link: '/ru/config/module/integration/vault/' },
                    ]
                  },
                  {
                    text: 'Взаимодействия',
                    link: '/ru/config/module/interaction/',
                    collapsed: true,
                    items: [
                        { text: 'Стуки', link: '/ru/config/module/interaction/knock/' },
                        { text: 'Метка', link: '/ru/config/module/interaction/mark/' },
                        { text: 'Правое нажатие', link: '/ru/config/module/interaction/rightclick/' },
                        { text: 'Подпись', link: '/ru/config/module/interaction/sign/' },
                        { text: 'Плевок', link: '/ru/config/module/interaction/spit/' },
                        { text: 'Снятие подписи', link: '/ru/config/module/interaction/unsign/' },
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
                             { text: 'Наковальня', link: '/ru/config/module/player/message/anvil/' },
                             { text: 'Книга', link: '/ru/config/module/player/message/book/' },
                             { text: 'Над головой', link: '/ru/config/module/player/message/bubble/' },
                             { text: 'Чат', link: '/ru/config/module/player/message/chat/' },
                             {
                                text: 'Форматирование',
                                link: '/ru/config/module/player/message/format/',
                                collapsed: true,
                                items: [
                                    { text: 'Капс', link: '/ru/config/module/player/message/format/caps/' },
                                    { text: 'Упоминание', link: '/ru/config/module/player/message/format/mention/' },
                                    { text: 'Ругательство', link: '/ru/config/module/player/message/format/swear/' },
                                ]
                             },
                             { text: 'Табличка', link: '/ru/config/module/player/message/sign/' },
                        ]
                      },
                      {
                        text: 'Имя',
                        link: '/ru/config/module/player/name/',
                        collapsed: true,
                      },
                      {
                        text: 'Значения',
                        link: '/ru/config/module/player/objective/',
                        collapsed: true,
                        items: [
                            { text: 'Под ником', link: '/ru/config/module/player/objective/belowname/' },
                            { text: 'В списке', link: '/ru/config/module/player/objective/playerlist/' },
                        ]
                      },
                      { text: 'Команда', link: '/ru/config/module/player/team/' },
                      { text: 'Измерение', link: '/ru/config/module/player/world/' },
                    ]
                  },
                  {
                    text: 'Сервер',
                    link: '/ru/config/module/server/',
                    collapsed: true,
                    items: [
                        { text: 'Бренд', link: '/ru/config/module/server/brand/' },
                        { text: 'Иконка', link: '/ru/config/module/server/icon/' },
                        {
                            text: 'Сообщения',
                            link: '/ru/config/module/server/message/',
                            collapsed: true,
                            items: [
                              { text: 'Достижение', link: '/ru/config/module/server/message/advancement/' },
                              { text: 'Автоматическое', link: '/ru/config/module/server/message/auto/' },
                              { text: 'Очищение', link: '/ru/config/module/server/message/clear/' },
                              { text: 'Смерть', link: '/ru/config/module/server/message/death/' },
                              { text: 'Деоп', link: '/ru/config/module/server/message/deop/' },
                              { text: 'Зачарование', link: '/ru/config/module/server/message/enchant/' },
                              { text: 'Режим игры', link: '/ru/config/module/server/message/gamemode/' },
                              { text: 'Приветствие', link: '/ru/config/module/server/message/greeting/' },
                              { text: 'Подключение', link: '/ru/config/module/server/message/join/' },
                              { text: 'Оп', link: '/ru/config/module/server/message/op/' },
                              { text: 'Отключение', link: '/ru/config/module/server/message/quit/' },
                              { text: 'Сид', link: '/ru/config/module/server/message/seed/' },
                              { text: 'Сетблок', link: '/ru/config/module/server/message/setblock/' },
                              { text: 'Спавнпоинт', link: '/ru/config/module/server/message/spawnpoint/' },
                            ]
                        },
                        { text: 'МОТД', link: '/ru/config/module/server/motd/' },
                        { text: 'Количество игроков', link: '/ru/config/module/server/playercount/' },
                        {
                            text: 'Таб',
                            link: '/ru/config/module/server/tab/',
                            collapsed: true,
                            items: [
                              { text: 'Имя в списке', link: '/ru/config/module/server/tab/playerlistname/' },
                              { text: 'Верхнее', link: '/ru/config/module/server/tab/header/' },
                              { text: 'Нижнее', link: '/ru/config/module/server/tab/footer/' },
                            ]
                        },
                    ]
                  },
                  {
                    text: 'Теги',
                    link: '/ru/config/module/tag/',
                    collapsed: true,
                    items: [
                        { text: 'Цвета', link: '/ru/config/module/tag/color/' },
                        { text: 'Смайлики', link: '/ru/config/module/tag/emoji/' },
                        { text: 'Изображение', link: '/ru/config/module/tag/image/' },
                        { text: 'Спойлер', link: '/ru/config/module/tag/spoiler/' },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: 'Файл commands.yml',
            link: '/ru/commands/',
            collapsed: false,
            items: [
              {
                text: 'Модули',
                link: '/ru/commands/module/',
                collapsed: true,
                items: [
                    {
                      text: 'Комманды',
                      link: '/ru/commands/module/command/',
                      collapsed: true,
                      items: [
                          { text: 'Afk', link: '/ru/commands/module/command/afk/' },
                          { text: 'Ball', link: '/ru/commands/module/command/ball/' },
                          { text: 'Ban', link: '/ru/commands/module/command/ban/' },
                          { text: 'Banlist', link: '/ru/commands/module/command/banlist/' },
                          { text: 'Broadcast', link: '/ru/commands/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/ru/commands/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/ru/commands/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/ru/commands/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/ru/commands/module/command/clearmail/' },
                          { text: 'Coin', link: '/ru/commands/module/command/coin/' },
                          { text: 'Dice', link: '/ru/commands/module/command/dice/' },
                          { text: 'Do', link: '/ru/commands/module/command/do/' },
                          { text: 'Flectonepulse', link: '/ru/commands/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/ru/commands/module/command/geolocate/' },
                          { text: 'Helper', link: '/ru/commands/module/command/helper/' },
                          { text: 'Ignore', link: '/ru/commands/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/ru/commands/module/command/ignorelist/' },
                          { text: 'Kick', link: '/ru/commands/module/command/kick/' },
                          { text: 'Mail', link: '/ru/commands/module/command/mail/' },
                          { text: 'Maintenance', link: '/ru/commands/module/command/maintenance/' },
                          { text: 'Mark', link: '/ru/commands/module/command/mark/' },
                          { text: 'Me', link: '/ru/commands/module/command/me/' },
                          { text: 'Mute', link: '/ru/commands/module/command/mute/' },
                          { text: 'Mutelist', link: '/ru/commands/module/command/mutelist/' },
                          { text: 'Online', link: '/ru/commands/module/command/online/' },
                          { text: 'Poll', link: '/ru/commands/module/command/poll/' },
                          { text: 'Reply', link: '/ru/commands/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/ru/commands/module/command/rockpaperscissors/' },
                          { text: 'Spit', link: '/ru/commands/module/command/spit/' },
                          { text: 'Spy', link: '/ru/commands/module/command/spy/' },
                          { text: 'Stream', link: '/ru/commands/module/command/stream/' },
                          { text: 'Symbol', link: '/ru/commands/module/command/symbol/' },
                          { text: 'Tell', link: '/ru/commands/module/command/tell/' },
                          { text: 'Tictactoe', link: '/ru/commands/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/ru/commands/module/command/translateto/' },
                          { text: 'Try', link: '/ru/commands/module/command/try/' },
                          { text: 'Unban', link: '/ru/commands/module/command/unban/' },
                          { text: 'Unmute', link: '/ru/commands/module/command/unmute/' },
                          { text: 'Unwarn', link: '/ru/commands/module/command/unwarn/' },
                          { text: 'Warn', link: '/ru/commands/module/command/warn/' },
                          { text: 'Warnlist', link: '/ru/commands/module/command/warnlist/' },
                      ]
                    },
                ]
              },
            ]
          },
          {
            text: 'Файл permissions.yml',
            link: '/ru/permissions/',
            collapsed: false,
            items: [
              {
                text: 'Модули',
                link: '/ru/permissions/module/',
                collapsed: true,
                items: [
                    {
                      text: 'Комманды',
                      link: '/ru/permissions/module/command/',
                      collapsed: true,
                      items: [
                          { text: 'Afk', link: '/ru/permissions/module/command/afk/' },
                          { text: 'Ball', link: '/ru/permissions/module/command/ball/' },
                          { text: 'Ban', link: '/ru/permissions/module/command/ban/' },
                          { text: 'Banlist', link: '/ru/permissions/module/command/banlist/' },
                          { text: 'Broadcast', link: '/ru/permissions/module/command/broadcast/' },
                          { text: 'Chatcolor', link: '/ru/permissions/module/command/chatcolor/' },
                          { text: 'Chatsetting', link: '/ru/permissions/module/command/chatsetting/' },
                          { text: 'Clearchat', link: '/ru/permissions/module/command/clearchat/' },
                          { text: 'Clearmail', link: '/ru/permissions/module/command/clearmail/' },
                          { text: 'Coin', link: '/ru/permissions/module/command/coin/' },
                          { text: 'Dice', link: '/ru/permissions/module/command/dice/' },
                          { text: 'Do', link: '/ru/permissions/module/command/do/' },
                          { text: 'Flectonepulse', link: '/ru/permissions/module/command/flectonepulse/' },
                          { text: 'Geolocate', link: '/ru/permissions/module/command/geolocate/' },
                          { text: 'Helper', link: '/ru/permissions/module/command/helper/' },
                          { text: 'Ignore', link: '/ru/permissions/module/command/ignore/' },
                          { text: 'Ignorelist', link: '/ru/permissions/module/command/ignorelist/' },
                          { text: 'Kick', link: '/ru/permissions/module/command/kick/' },
                          { text: 'Mail', link: '/ru/permissions/module/command/mail/' },
                          { text: 'Maintenance', link: '/ru/permissions/module/command/maintenance/' },
                          { text: 'Mark', link: '/ru/permissions/module/command/mark/' },
                          { text: 'Me', link: '/ru/permissions/module/command/me/' },
                          { text: 'Mute', link: '/ru/permissions/module/command/mute/' },
                          { text: 'Mutelist', link: '/ru/permissions/module/command/mutelist/' },
                          { text: 'Online', link: '/ru/permissions/module/command/online/' },
                          { text: 'Poll', link: '/ru/permissions/module/command/poll/' },
                          { text: 'Reply', link: '/ru/permissions/module/command/reply/' },
                          { text: 'Rockpaperscissors', link: '/ru/permissions/module/command/rockpaperscissors/' },
                          { text: 'Spit', link: '/ru/permissions/module/command/spit/' },
                          { text: 'Spy', link: '/ru/permissions/module/command/spy/' },
                          { text: 'Stream', link: '/ru/permissions/module/command/stream/' },
                          { text: 'Symbol', link: '/ru/permissions/module/command/symbol/' },
                          { text: 'Tell', link: '/ru/permissions/module/command/tell/' },
                          { text: 'Tictactoe', link: '/ru/permissions/module/command/tictactoe/' },
                          { text: 'Translateto', link: '/ru/permissions/module/command/translateto/' },
                          { text: 'Try', link: '/ru/permissions/module/command/try/' },
                          { text: 'Unban', link: '/ru/permissions/module/command/unban/' },
                          { text: 'Unmute', link: '/ru/permissions/module/command/unmute/' },
                          { text: 'Unwarn', link: '/ru/permissions/module/command/unwarn/' },
                          { text: 'Warn', link: '/ru/permissions/module/command/warn/' },
                          { text: 'Warnlist', link: '/ru/permissions/module/command/warnlist/' },
                      ]
                    },
                      {
                        text: 'Интеграции',
                        link: '/ru/permissions/module/integration/',
                        collapsed: true,
                        items: [
                          { text: 'Дискорд', link: '/ru/permissions/module/integration/discord/' },
                          { text: 'InteractiveChat', link: '/ru/permissions/module/integration/interactivechat/' },
                          { text: 'LuckPerms', link: '/ru/permissions/module/integration/luckperms/' },
                          { text: 'PlaceholderAPI', link: '/ru/permissions/module/integration/placeholderapi/' },
                          { text: 'PlasmoVoice', link: '/ru/permissions/module/integration/plasmovoice/' },
                          { text: 'SimpleVoice', link: '/ru/permissions/module/integration/simplevoice/' },
                          { text: 'SkinsRestorer', link: '/ru/permissions/module/integration/skinsrestorer/' },
                          { text: 'SuperVanish', link: '/ru/permissions/module/integration/supervanish/' },
                          { text: 'Телеграм', link: '/ru/permissions/module/integration/telegram/' },
                          { text: 'Твич', link: '/ru/permissions/module/integration/twitch/' },
                          { text: 'Vault', link: '/ru/permissions/module/integration/vault/' },
                        ]
                      },
                      {
                        text: 'Взаимодействия',
                        link: '/ru/permissions/module/interaction/',
                        collapsed: true,
                        items: [
                            { text: 'Стуки', link: '/ru/permissions/module/interaction/knock/' },
                            { text: 'Метка', link: '/ru/permissions/module/interaction/mark/' },
                            { text: 'Правое нажатие', link: '/ru/permissions/module/interaction/rightclick/' },
                            { text: 'Подпись', link: '/ru/permissions/module/interaction/sign/' },
                            { text: 'Плевок', link: '/ru/permissions/module/interaction/spit/' },
                            { text: 'Снятие подписи', link: '/ru/permissions/module/interaction/unsign/' },
                        ]
                      },
                      {
                        text: 'Игрок',
                        collapsed: true,
                        link: '/ru/permissions/module/player/',
                        items: [
                          { text: 'Афк', link: '/ru/permissions/module/player/afk/' },
                          {
                            text: 'Сообщения',
                            link: '/ru/permissions/module/player/message/',
                            collapsed: true,
                            items: [
                                 { text: 'Наковальня', link: '/ru/permissions/module/player/message/anvil/' },
                                 { text: 'Книга', link: '/ru/permissions/module/player/message/book/' },
                                 { text: 'Над головой', link: '/ru/permissions/module/player/message/bubble/' },
                                 { text: 'Чат', link: '/ru/permissions/module/player/message/chat/' },
                                 {
                                    text: 'Форматирование',
                                    link: '/ru/permissions/module/player/message/format/',
                                    collapsed: true,
                                    items: [
                                        { text: 'Капс', link: '/ru/permissions/module/player/message/format/caps/' },
                                        { text: 'Упоминание', link: '/ru/permissions/module/player/message/format/mention/' },
                                        { text: 'Ругательство', link: '/ru/permissions/module/player/message/format/swear/' },
                                    ]
                                 },
                                 { text: 'Табличка', link: '/ru/permissions/module/player/message/sign/' },
                            ]
                          },
                          {
                            text: 'Имя',
                            link: '/ru/permissions/module/player/name/',
                            collapsed: true,
                          },
                          {
                            text: 'Значения',
                            link: '/ru/permissions/module/player/objective/',
                            collapsed: true,
                            items: [
                                { text: 'Под ником', link: '/ru/permissions/module/player/objective/belowname/' },
                                { text: 'В списке', link: '/ru/permissions/module/player/objective/playerlist/' },
                            ]
                          },
                          { text: 'Команда', link: '/ru/permissions/module/player/team/' },
                          { text: 'Измерение', link: '/ru/permissions/module/player/world/' },
                        ]
                      },
                      {
                        text: 'Сервер',
                        link: '/ru/permissions/module/server/',
                        collapsed: true,
                        items: [
                            { text: 'Бренд', link: '/ru/permissions/module/server/brand/' },
                            { text: 'Иконка', link: '/ru/permissions/module/server/icon/' },
                            {
                                text: 'Сообщения',
                                link: '/ru/permissions/module/server/message/',
                                collapsed: true,
                                items: [
                                  { text: 'Достижение', link: '/ru/permissions/module/server/message/advancement/' },
                                  { text: 'Автоматическое', link: '/ru/permissions/module/server/message/auto/' },
                                  { text: 'Очищение', link: '/ru/permissions/module/server/message/clear/' },
                                  { text: 'Смерть', link: '/ru/permissions/module/server/message/death/' },
                                  { text: 'Деоп', link: '/ru/permissions/module/server/message/deop/' },
                                  { text: 'Зачарование', link: '/ru/permissions/module/server/message/enchant/' },
                                  { text: 'Режим игры', link: '/ru/permissions/module/server/message/gamemode/' },
                                  { text: 'Приветствие', link: '/ru/permissions/module/server/message/greeting/' },
                                  { text: 'Подключение', link: '/ru/permissions/module/server/message/join/' },
                                  { text: 'Оп', link: '/ru/permissions/module/server/message/op/' },
                                  { text: 'Отключение', link: '/ru/permissions/module/server/message/quit/' },
                                  { text: 'Сид', link: '/ru/permissions/module/server/message/seed/' },
                                  { text: 'Сетблок', link: '/ru/permissions/module/server/message/setblock/' },
                                  { text: 'Спавнпоинт', link: '/ru/permissions/module/server/message/spawnpoint/' },
                                ]
                            },
                            { text: 'МОТД', link: '/ru/permissions/module/server/motd/' },
                            { text: 'Количество игроков', link: '/ru/permissions/module/server/playercount/' },
                            {
                                text: 'Таб',
                                link: '/ru/permissions/module/server/tab/',
                                collapsed: true,
                                items: [
                                  { text: 'Имя в списке', link: '/ru/permissions/module/server/tab/playerlistname/' },
                                  { text: 'Верхнее', link: '/ru/permissions/module/server/tab/header/' },
                                  { text: 'Нижнее', link: '/ru/permissions/module/server/tab/footer/' },
                                ]
                            },
                        ]
                      },
                      {
                        text: 'Теги',
                        link: '/ru/permissions/module/tag/',
                        collapsed: true,
                        items: [
                            { text: 'Цвета', link: '/ru/permissions/module/tag/color/' },
                            { text: 'Смайлики', link: '/ru/permissions/module/tag/emoji/' },
                            { text: 'Изображение', link: '/ru/permissions/module/tag/image/' },
                            { text: 'Спойлер', link: '/ru/permissions/module/tag/spoiler/' },
                        ]
                      },
                ]
              },
            ]
          },
          {
            text: 'Файл secrets.yml',
            link: '/ru/secrets/',
            collapsed: false,
            items: [
              {
                text: 'Плагин',
                link: '/ru/secrets/plugin/',
                collapsed: true,
                items: [
                  { text: 'Датабаза', link: '/ru/secrets/plugin/database' },
                ]
              },
              {
                text: 'Модули',
                link: '/ru/secrets/module/',
                collapsed: true,
                items: [
                    {
                      text: 'Интеграции',
                      link: '/ru/secrets/module/integration/',
                      collapsed: true,
                      items: [
                         { text: 'Дискорд', link: '/ru/secrets/module/integration/discord/' },
                         { text: 'Телеграм', link: '/ru/secrets/module/integration/telegram/' },
                         { text: 'Твич', link: '/ru/secrets/module/integration/twitch/' },
                      ]
                    },
                ]
              },
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
