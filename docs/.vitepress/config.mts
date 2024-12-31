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
          { text: 'Version 0.1.0', link: 'https://github.com/Flectone/FlectonePulseWeb/' },
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
                text: 'Файл config.yml',
                link: '/en/config/',
                collapsed: false,
                items: []
            },
            {
                text: 'Папка localizations/',
                link: '/en/localizations/',
                collapsed: false,
                items: [
                    {
                        text: 'Файл ru_ru.yml',
                        link: '/en/localizations/ru_ru/',
                        collapsed: true,
                        items: [
                            {
                                text: 'Комманды',
                                link: '/en/localizations/ru_ru/command/',
                                collapsed: true,
                                items: [
                                    { text: 'Ball', link: '/en/localizations/ru_ru/command/ball/' },
                                    { text: 'Ban', link: '/en/localizations/ru_ru/command/ban/' },
                                    { text: 'Banlist', link: '/en/localizations/ru_ru/command/banlist/' },
                                    { text: 'Broadcast', link: '/en/localizations/ru_ru/command/broadcast/' },
                                    { text: 'Chatcolor', link: '/en/localizations/ru_ru/command/chatcolor/' },
                                    { text: 'Chatsetting', link: '/en/localizations/ru_ru/command/chatsetting/' },
                                    { text: 'Clearchat', link: '/en/localizations/ru_ru/command/clearchat/' },
                                    { text: 'Clearmail', link: '/en/localizations/ru_ru/command/clearmail/' },
                                    { text: 'Coin', link: '/en/localizations/ru_ru/command/coin/' },
                                    { text: 'Dice', link: '/en/localizations/ru_ru/command/dice/' },
                                    { text: 'Do', link: '/en/localizations/ru_ru/command/do/' },
                                    { text: 'Flectonepulse', link: '/en/localizations/ru_ru/command/flectonepulse/' },
                                    { text: 'Geolocate', link: '/en/localizations/ru_ru/command/geolocate/' },
                                    { text: 'Helper', link: '/en/localizations/ru_ru/command/helper/' },
                                    { text: 'Ignore', link: '/en/localizations/ru_ru/command/ignore/' },
                                    { text: 'Ignorelist', link: '/en/localizations/ru_ru/command/ignorelist/' },
                                    { text: 'Kick', link: '/en/localizations/ru_ru/command/kick/' },
                                    { text: 'Mail', link: '/en/localizations/ru_ru/command/mail/' },
                                    { text: 'Maintenance', link: '/en/localizations/ru_ru/command/maintenance/' },
                                    { text: 'Me', link: '/en/localizations/ru_ru/command/me/' },
                                    { text: 'Mute', link: '/en/localizations/ru_ru/command/mute/' },
                                    { text: 'Mutelist', link: '/en/localizations/ru_ru/command/mutelist/' },
                                    { text: 'Online', link: '/en/localizations/ru_ru/command/online/' },
                                    { text: 'Poll', link: '/en/localizations/ru_ru/command/poll/' },
                                    { text: 'Reply', link: '/en/localizations/ru_ru/command/reply/' },
                                    { text: 'Rockpaperscissors', link: '/en/localizations/ru_ru/command/rockpaperscissors/' },
                                    { text: 'Spy', link: '/en/localizations/ru_ru/command/spy/' },
                                    { text: 'Stream', link: '/en/localizations/ru_ru/command/stream/' },
                                    { text: 'Symbol', link: '/en/localizations/ru_ru/command/symbol/' },
                                    { text: 'Tell', link: '/en/localizations/ru_ru/command/tell/' },
                                    { text: 'Tictactoe', link: '/en/localizations/ru_ru/command/tictactoe/' },
                                    { text: 'Translateto', link: '/en/localizations/ru_ru/command/translateto/' },
                                    { text: 'Try', link: '/en/localizations/ru_ru/command/try/' },
                                    { text: 'Unban', link: '/en/localizations/ru_ru/command/unban/' },
                                    { text: 'Unmute', link: '/en/localizations/ru_ru/command/unmute/' },
                                    { text: 'Unwarn', link: '/en/localizations/ru_ru/command/unwarn/' },
                                    { text: 'Warn', link: '/en/localizations/ru_ru/command/warn/' },
                                    { text: 'Warnlist', link: '/en/localizations/ru_ru/command/warnlist/' },
                                ]
                            },
                            {
                                text: 'Интеграции',
                                link: '/en/localizations/ru_ru/integration/',
                                collapsed: true,
                                items: [
                                    { text: 'Дискорд', link: '/en/localizations/ru_ru/integration/discord/' },
                                    { text: 'Телеграм', link: '/en/localizations/ru_ru/integration/telegram/' },
                                    { text: 'Твич', link: '/en/localizations/ru_ru/integration/twitch/' },
                                ]
                            },
                            {
                                text: 'Сообщения',
                                link: '/en/localizations/ru_ru/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Достижение', link: '/en/localizations/ru_ru/message/advancement/' },
                                    { text: 'Автоматическое', link: '/en/localizations/ru_ru/message/auto/' },
                                    { text: 'Бренд', link: '/en/localizations/ru_ru/message/brand/' },
                                    { text: 'Над головой', link: '/en/localizations/ru_ru/message/bubble/' },
                                    { text: 'Чат', link: '/en/localizations/ru_ru/message/chat/' },
                                    { text: 'Очищение', link: '/en/localizations/ru_ru/message/clear/' },
                                    {
                                        text: 'Контактирование',
                                        link: '/en/localizations/ru_ru/message/contact/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Афк', link: '/en/localizations/ru_ru/message/contact/afk/' },
                                            { text: 'Правое нажатие', link: '/en/localizations/ru_ru/message/contact/rightclick/' },
                                            { text: 'Подпись', link: '/en/localizations/ru_ru/message/contact/sign/' },
                                            { text: 'Плевок', link: '/en/localizations/ru_ru/message/contact/spit/' },
                                        ]
                                    },
                                    { text: 'Смерть', link: '/en/localizations/ru_ru/message/death/' },
                                    { text: 'Деоп', link: '/en/localizations/ru_ru/message/deop/' },
                                    { text: 'Зачарование', link: '/en/localizations/ru_ru/message/enchant/' },
                                    {
                                        text: 'Форматирование',
                                        link: '/en/localizations/ru_ru/message/format/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Упоминание', link: '/en/localizations/ru_ru/message/format/mention/' },
                                            {
                                                text: 'Модерация',
                                                link: '/en/localizations/ru_ru/message/format/moderation/',
                                                collapsed: true,
                                                items: [
                                                    { text: 'Ругательство', link: '/en/localizations/ru_ru/message/format/moderation/swear/' },
                                                ]
                                            },
                                            { text: 'Имя', link: '/en/localizations/ru_ru/message/format/name_/' },
                                            { text: 'Спойлер', link: '/en/localizations/ru_ru/message/format/spoiler/' },
                                        ]
                                    },
                                    { text: 'Режим игры', link: '/en/localizations/ru_ru/message/gamemode/' },
                                    { text: 'Приветствие', link: '/en/localizations/ru_ru/message/greeting/' },
                                    { text: 'Подключение', link: '/en/localizations/ru_ru/message/join/' },
                                    { text: 'Оп', link: '/en/localizations/ru_ru/message/op/' },
                                    { text: 'Отключение', link: '/en/localizations/ru_ru/message/quit/' },
                                    { text: 'Сид', link: '/en/localizations/ru_ru/message/seed/' },
                                    { text: 'Сетблок', link: '/en/localizations/ru_ru/message/setblock/' },
                                    { text: 'Спавнпоинт', link: '/en/localizations/ru_ru/message/spawnpoint/' },
                                    {
                                        text: 'Статус',
                                        link: '/en/localizations/ru_ru/message/status/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Описание', link: '/en/localizations/ru_ru/message/status/motd/' },
                                            { text: 'Игроки', link: '/en/localizations/ru_ru/message/status/players/' },
                                            { text: 'Версия', link: '/en/localizations/ru_ru/message/status/version/' },
                                        ]
                                    },
                                    {
                                        text: 'Таб',
                                        link: '/en/localizations/ru_ru/message/tab/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Имя в списке', link: '/en/localizations/ru_ru/message/tab/playerlistname/' },
                                            { text: 'Верхнее', link: '/en/localizations/ru_ru/message/tab/header/' },
                                            { text: 'Нижнее', link: '/en/localizations/ru_ru/message/tab/footer/' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Файл en_us.yml',
                        link: '/en/localizations/en_us/',
                        collapsed: true,
                        items: [
                            {
                                text: 'Комманды',
                                link: '/en/localizations/en_us/command/',
                                collapsed: true,
                                items: [
                                    { text: 'Ball', link: '/en/localizations/en_us/command/ball/' },
                                    { text: 'Ban', link: '/en/localizations/en_us/command/ban/' },
                                    { text: 'Banlist', link: '/en/localizations/en_us/command/banlist/' },
                                    { text: 'Broadcast', link: '/en/localizations/en_us/command/broadcast/' },
                                    { text: 'Chatcolor', link: '/en/localizations/en_us/command/chatcolor/' },
                                    { text: 'Chatsetting', link: '/en/localizations/en_us/command/chatsetting/' },
                                    { text: 'Clearchat', link: '/en/localizations/en_us/command/clearchat/' },
                                    { text: 'Clearmail', link: '/en/localizations/en_us/command/clearmail/' },
                                    { text: 'Coin', link: '/en/localizations/en_us/command/coin/' },
                                    { text: 'Dice', link: '/en/localizations/en_us/command/dice/' },
                                    { text: 'Do', link: '/en/localizations/en_us/command/do/' },
                                    { text: 'Flectonepulse', link: '/en/localizations/en_us/command/flectonepulse/' },
                                    { text: 'Geolocate', link: '/en/localizations/en_us/command/geolocate/' },
                                    { text: 'Helper', link: '/en/localizations/en_us/command/helper/' },
                                    { text: 'Ignore', link: '/en/localizations/en_us/command/ignore/' },
                                    { text: 'Ignorelist', link: '/en/localizations/en_us/command/ignorelist/' },
                                    { text: 'Kick', link: '/en/localizations/en_us/command/kick/' },
                                    { text: 'Mail', link: '/en/localizations/en_us/command/mail/' },
                                    { text: 'Maintenance', link: '/en/localizations/en_us/command/maintenance/' },
                                    { text: 'Me', link: '/en/localizations/en_us/command/me/' },
                                    { text: 'Mute', link: '/en/localizations/en_us/command/mute/' },
                                    { text: 'Mutelist', link: '/en/localizations/en_us/command/mutelist/' },
                                    { text: 'Online', link: '/en/localizations/en_us/command/online/' },
                                    { text: 'Poll', link: '/en/localizations/en_us/command/poll/' },
                                    { text: 'Reply', link: '/en/localizations/en_us/command/reply/' },
                                    { text: 'Rockpaperscissors', link: '/en/localizations/en_us/command/rockpaperscissors/' },
                                    { text: 'Spy', link: '/en/localizations/en_us/command/spy/' },
                                    { text: 'Stream', link: '/en/localizations/en_us/command/stream/' },
                                    { text: 'Symbol', link: '/en/localizations/en_us/command/symbol/' },
                                    { text: 'Tell', link: '/en/localizations/en_us/command/tell/' },
                                    { text: 'Tictactoe', link: '/en/localizations/en_us/command/tictactoe/' },
                                    { text: 'Translateto', link: '/en/localizations/en_us/command/translateto/' },
                                    { text: 'Try', link: '/en/localizations/en_us/command/try/' },
                                    { text: 'Unban', link: '/en/localizations/en_us/command/unban/' },
                                    { text: 'Unmute', link: '/en/localizations/en_us/command/unmute/' },
                                    { text: 'Unwarn', link: '/en/localizations/en_us/command/unwarn/' },
                                    { text: 'Warn', link: '/en/localizations/en_us/command/warn/' },
                                    { text: 'Warnlist', link: '/en/localizations/en_us/command/warnlist/' },
                                ]
                            },
                            {
                                text: 'Интеграции',
                                link: '/en/localizations/en_us/integration/',
                                collapsed: true,
                                items: [
                                    { text: 'Дискорд', link: '/en/localizations/en_us/integration/discord/' },
                                    { text: 'Телеграм', link: '/en/localizations/en_us/integration/telegram/' },
                                    { text: 'Твич', link: '/en/localizations/en_us/integration/twitch/' },
                                ]
                            },
                            {
                                text: 'Сообщения',
                                link: '/en/localizations/en_us/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Достижение', link: '/en/localizations/en_us/message/advancement/' },
                                    { text: 'Автоматическое', link: '/en/localizations/en_us/message/auto/' },
                                    { text: 'Бренд', link: '/en/localizations/en_us/message/brand/' },
                                    { text: 'Над головой', link: '/en/localizations/en_us/message/bubble/' },
                                    { text: 'Чат', link: '/en/localizations/en_us/message/chat/' },
                                    { text: 'Очищение', link: '/en/localizations/en_us/message/clear/' },
                                    {
                                        text: 'Контактирование',
                                        link: '/en/localizations/en_us/message/contact/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Афк', link: '/en/localizations/en_us/message/contact/afk/' },
                                            { text: 'Правое нажатие', link: '/en/localizations/en_us/message/contact/rightclick/' },
                                            { text: 'Подпись', link: '/en/localizations/en_us/message/contact/sign/' },
                                            { text: 'Плевок', link: '/en/localizations/en_us/message/contact/spit/' },
                                        ]
                                    },
                                    { text: 'Смерть', link: '/en/localizations/en_us/message/death/' },
                                    { text: 'Деоп', link: '/en/localizations/en_us/message/deop/' },
                                    { text: 'Зачарование', link: '/en/localizations/en_us/message/enchant/' },
                                    {
                                        text: 'Форматирование',
                                        link: '/en/localizations/en_us/message/format/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Упоминание', link: '/en/localizations/en_us/message/format/mention/' },
                                            {
                                                text: 'Модерация',
                                                link: '/en/localizations/en_us/message/format/moderation/',
                                                collapsed: true,
                                                items: [
                                                    { text: 'Ругательство', link: '/en/localizations/en_us/message/format/moderation/swear/' },
                                                ]
                                            },
                                            { text: 'Имя', link: '/en/localizations/en_us/message/format/name_/' },
                                            { text: 'Спойлер', link: '/en/localizations/en_us/message/format/spoiler/' },
                                        ]
                                    },
                                    { text: 'Режим игры', link: '/en/localizations/en_us/message/gamemode/' },
                                    { text: 'Приветствие', link: '/en/localizations/en_us/message/greeting/' },
                                    { text: 'Подключение', link: '/en/localizations/en_us/message/join/' },
                                    { text: 'Оп', link: '/en/localizations/en_us/message/op/' },
                                    { text: 'Отключение', link: '/en/localizations/en_us/message/quit/' },
                                    { text: 'Сид', link: '/en/localizations/en_us/message/seed/' },
                                    { text: 'Сетблок', link: '/en/localizations/en_us/message/setblock/' },
                                    { text: 'Спавнпоинт', link: '/en/localizations/en_us/message/spawnpoint/' },
                                    {
                                        text: 'Статус',
                                        link: '/en/localizations/en_us/message/status/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Описание', link: '/en/localizations/en_us/message/status/motd/' },
                                            { text: 'Игроки', link: '/en/localizations/en_us/message/status/players/' },
                                            { text: 'Версия', link: '/en/localizations/en_us/message/status/version/' },
                                        ]
                                    },
                                    {
                                        text: 'Таб',
                                        link: '/en/localizations/en_us/message/tab/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Имя в списке', link: '/en/localizations/en_us/message/tab/playerlistname/' },
                                            { text: 'Верхнее', link: '/en/localizations/en_us/message/tab/header/' },
                                            { text: 'Нижнее', link: '/en/localizations/en_us/message/tab/footer/' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Файл command.yml',
                link: '/en/command/',
                collapsed: false,
                items: [
                    { text: 'Afk', link: '/en/command/afk/' },
                    { text: 'Ball', link: '/en/command/ball/' },
                    { text: 'Ban', link: '/en/command/ban/' },
                    { text: 'Banlist', link: '/en/command/banlist/' },
                    { text: 'Broadcast', link: '/en/command/broadcast/' },
                    { text: 'Chatcolor', link: '/en/command/chatcolor/' },
                    { text: 'Chatsetting', link: '/en/command/chatsetting/' },
                    { text: 'Clearchat', link: '/en/command/clearchat/' },
                    { text: 'Clearmail', link: '/en/command/clearmail/' },
                    { text: 'Coin', link: '/en/command/coin/' },
                    { text: 'Dice', link: '/en/command/dice/' },
                    { text: 'Do', link: '/en/command/do/' },
                    { text: 'Flectonepulse', link: '/en/command/flectonepulse/' },
                    { text: 'Geolocate', link: '/en/command/geolocate/' },
                    { text: 'Helper', link: '/en/command/helper/' },
                    { text: 'Ignore', link: '/en/command/ignore/' },
                    { text: 'Ignorelist', link: '/en/command/ignorelist/' },
                    { text: 'Kick', link: '/en/command/kick/' },
                    { text: 'Mail', link: '/en/command/mail/' },
                    { text: 'Maintenance', link: '/en/command/maintenance/' },
                    { text: 'Mark', link: '/en/command/mark/' },
                    { text: 'Me', link: '/en/command/me/' },
                    { text: 'Mute', link: '/en/command/mute/' },
                    { text: 'Mutelist', link: '/en/command/mutelist/' },
                    { text: 'Online', link: '/en/command/online/' },
                    { text: 'Poll', link: '/en/command/poll/' },
                    { text: 'Reply', link: '/en/command/reply/' },
                    { text: 'Rockpaperscissors', link: '/en/command/rockpaperscissors/' },
                    { text: 'Spit', link: '/en/command/spit/' },
                    { text: 'Spy', link: '/en/command/spy/' },
                    { text: 'Stream', link: '/en/command/stream/' },
                    { text: 'Symbol', link: '/en/command/symbol/' },
                    { text: 'Tell', link: '/en/command/tell/' },
                    { text: 'Tictactoe', link: '/en/command/tictactoe/' },
                    { text: 'Translateto', link: '/en/command/translateto/' },
                    { text: 'Try', link: '/en/command/try/' },
                    { text: 'Unban', link: '/en/command/unban/' },
                    { text: 'Unmute', link: '/en/command/unmute/' },
                    { text: 'Unwarn', link: '/en/command/unwarn/' },
                    { text: 'Warn', link: '/en/command/warn/' },
                    { text: 'Warnlist', link: '/en/command/warnlist/' },
                ]
            },
            {
                text: 'Файл message.yml',
                link: '/en/message/',
                collapsed: false,
                items: [
                    { text: 'Достижение', link: '/en/message/advancement/' },
                    { text: 'Наковальня', link: '/en/message/anvil/' },
                    { text: 'Автоматическое', link: '/en/message/auto/' },
                    { text: 'Книга', link: '/en/message/book/' },
                    { text: 'Бренд', link: '/en/message/brand/' },
                    { text: 'Над головой', link: '/en/message/bubble/' },
                    { text: 'Чат', link: '/en/message/chat/' },
                    { text: 'Очищение', link: '/en/message/clear/' },
                    {
                        text: 'Контактирование',
                        link: '/en/message/contact/',
                        collapsed: true,
                        items: [
                            { text: 'Афк', link: '/en/message/contact/afk/' },
                            { text: 'Стуки', link: '/en/message/contact/knock/' },
                            { text: 'Метка', link: '/en/message/contact/mark/' },
                            { text: 'Правое нажатие', link: '/en/message/contact/rightclick/' },
                            { text: 'Подпись', link: '/en/message/contact/sign/' },
                            { text: 'Плевок', link: '/en/message/contact/spit/' },
                            { text: 'Снятие подписи', link: '/en/message/contact/unsign/' },
                        ]
                    },
                    { text: 'Смерть', link: '/en/message/death/' },
                    { text: 'Деоп', link: '/en/message/deop/' },
                    { text: 'Зачарование', link: '/en/message/enchant/' },
                    {
                        text: 'Форматирование',
                        link: '/en/message/format/',
                        collapsed: true,
                        items: [
                            { text: 'Цвета', link: '/en/message/format/color/' },
                            { text: 'Смайлики', link: '/en/message/format/emoji/' },
                            { text: 'Изображение', link: '/en/message/format/image/' },
                            { text: 'Упоминание', link: '/en/message/format/image/' },
                            {
                                text: 'Модерация',
                                link: '/en/message/format/moderation/',
                                collapsed: true,
                                items: [
                                    { text: 'Капс', link: '/en/message/format/moderation/caps/' },
                                    { text: 'Ругательство', link: '/en/message/format/moderation/swear/' },
                                ]
                            },
                            { text: 'Имя', link: '/en/message/format/name_/' },
                            { text: 'Спойлер', link: '/en/message/format/spoiler/' },
                            { text: 'Измерение', link: '/en/message/format/world/' },
                        ]
                    },
                    { text: 'Режим игры', link: '/en/message/gamemode/' },
                    { text: 'Приветствие', link: '/en/message/greeting/' },
                    { text: 'Подключение', link: '/en/message/join/' },
                    {
                        text: 'Значения',
                        link: '/en/message/objective/',
                        collapsed: true,
                        items: [
                            { text: 'Под ником', link: '/en/message/objective/belowname/' },
                            { text: 'В табе', link: '/en/message/objective/tabname/' },
                        ]
                    },
                    { text: 'Оп', link: '/en/message/op/' },
                    { text: 'Отключение', link: '/en/message/quit/' },
                    { text: 'Сид', link: '/en/message/seed/' },
                    { text: 'Сетблок', link: '/en/message/setblock/' },
                    { text: 'Табличка', link: '/en/message/sign/' },
                    { text: 'Спавнпоинт', link: '/en/message/spawnpoint/' },
                    {
                        text: 'Статус',
                        link: '/en/message/status/',
                        collapsed: true,
                        items: [
                            { text: 'Иконка', link: '/en/message/status/icon/' },
                            { text: 'Описание', link: '/en/message/status/motd/' },
                            { text: 'Игроки', link: '/en/message/status/players/' },
                            { text: 'Версия', link: '/en/message/status/version/' },
                        ]
                    },
                    {
                        text: 'Таб',
                        link: '/en/message/tab/',
                        collapsed: true,
                        items: [
                            { text: 'Верхнее', link: '/en/message/tab/header/' },
                            { text: 'Нижнее', link: '/en/message/tab/footer/' },
                            { text: 'Имя в списке', link: '/en/message/tab/playerlistname/' },
                        ]
                    },
                ]
            },
            {
                text: 'Файл permission.yml',
                link: '/en/permission/',
                collapsed: false,
                items: [
                    {
                        text: 'Комманды',
                        link: '/en/permission/command/',
                        collapsed: true,
                        items: [
                            { text: 'Afk', link: '/en/permission/command/afk/' },
                            { text: 'Ball', link: '/en/permission/command/ball/' },
                            { text: 'Ban', link: '/en/permission/command/ban/' },
                            { text: 'Banlist', link: '/en/permission/command/banlist/' },
                            { text: 'Broadcast', link: '/en/permission/command/broadcast/' },
                            { text: 'Chatcolor', link: '/en/permission/command/chatcolor/' },
                            { text: 'Chatsetting', link: '/en/permission/command/chatsetting/' },
                            { text: 'Clearchat', link: '/en/permission/command/clearchat/' },
                            { text: 'Clearmail', link: '/en/permission/command/clearmail/' },
                            { text: 'Coin', link: '/en/permission/command/coin/' },
                            { text: 'Dice', link: '/en/permission/command/dice/' },
                            { text: 'Do', link: '/en/permission/command/do/' },
                            { text: 'Flectonepulse', link: '/en/permission/command/flectonepulse/' },
                            { text: 'Geolocate', link: '/en/permission/command/geolocate/' },
                            { text: 'Helper', link: '/en/permission/command/helper/' },
                            { text: 'Ignore', link: '/en/permission/command/ignore/' },
                            { text: 'Ignorelist', link: '/en/permission/command/ignorelist/' },
                            { text: 'Kick', link: '/en/permission/command/kick/' },
                            { text: 'Mail', link: '/en/permission/command/mail/' },
                            { text: 'Maintenance', link: '/en/permission/command/maintenance/' },
                            { text: 'Mark', link: '/en/permission/command/mark/' },
                            { text: 'Me', link: '/en/permission/command/me/' },
                            { text: 'Mute', link: '/en/permission/command/mute/' },
                            { text: 'Mutelist', link: '/en/permission/command/mutelist/' },
                            { text: 'Online', link: '/en/permission/command/online/' },
                            { text: 'Poll', link: '/en/permission/command/poll/' },
                            { text: 'Reply', link: '/en/permission/command/reply/' },
                            { text: 'Rockpaperscissors', link: '/en/permission/command/rockpaperscissors/' },
                            { text: 'Spit', link: '/en/permission/command/spit/' },
                            { text: 'Spy', link: '/en/permission/command/spy/' },
                            { text: 'Stream', link: '/en/permission/command/stream/' },
                            { text: 'Symbol', link: '/en/permission/command/symbol/' },
                            { text: 'Tell', link: '/en/permission/command/tell/' },
                            { text: 'Tictactoe', link: '/en/permission/command/tictactoe/' },
                            { text: 'Translateto', link: '/en/permission/command/translateto/' },
                            { text: 'Try', link: '/en/permission/command/try/' },
                            { text: 'Unban', link: '/en/permission/command/unban/' },
                            { text: 'Unmute', link: '/en/permission/command/unmute/' },
                            { text: 'Unwarn', link: '/en/permission/command/unwarn/' },
                            { text: 'Warn', link: '/en/permission/command/warn/' },
                            { text: 'Warnlist', link: '/en/permission/command/warnlist/' },
                        ]
                    },
                    {
                        text: 'Интеграции',
                        link: '/en/permission/integration/',
                        collapsed: true,
                        items: [
                            { text: 'Дискорд', link: '/en/permission/integration/discord/' },
                            { text: 'InteractiveChat', link: '/en/permission/integration/interactivechat/' },
                            { text: 'LuckPerms', link: '/en/permission/integration/luckperms/' },
                            { text: 'PlaceholderAPI', link: '/en/permission/integration/placeholderapi/' },
                            { text: 'PlasmoVoice', link: '/en/permission/integration/plasmovoice/' },
                            { text: 'SimpleVoice', link: '/en/permission/integration/simplevoice/' },
                            { text: 'SkinsRestorer', link: '/en/permission/integration/skinsrestorer/' },
                            { text: 'SuperVanish', link: '/en/permission/integration/supervanish/' },
                            { text: 'Телеграм', link: '/en/permission/integration/telegram/' },
                            { text: 'Твич', link: '/en/permission/integration/twitch/' },
                            { text: 'Vault', link: '/en/permission/integration/vault/' },
                        ]
                    },
                    {
                        text: 'Сообщения',
                        link: '/en/permission/message/',
                        collapsed: true,
                        items: [
                            { text: 'Достижение', link: '/en/permission/message/advancement/' },
                            { text: 'Наковальня', link: '/en/permission/message/anvil/' },
                            { text: 'Автоматическое', link: '/en/permission/message/auto/' },
                            { text: 'Книга', link: '/en/permission/message/book/' },
                            { text: 'Бренд', link: '/en/permission/message/brand/' },
                            { text: 'Над головой', link: '/en/permission/message/bubble/' },
                            { text: 'Чат', link: '/en/permission/message/chat/' },
                            { text: 'Очищение', link: '/en/permission/message/clear/' },
                            {
                                text: 'Контактирование',
                                link: '/en/permission/message/contact/',
                                collapsed: true,
                                items: [
                                    { text: 'Афк', link: '/en/permission/message/contact/afk/' },
                                    { text: 'Стуки', link: '/en/permission/message/contact/knock/' },
                                    { text: 'Метка', link: '/en/permission/message/contact/mark/' },
                                    { text: 'Правое нажатие', link: '/en/permission/message/contact/rightclick/' },
                                    { text: 'Подпись', link: '/en/permission/message/contact/sign/' },
                                    { text: 'Плевок', link: '/en/permission/message/contact/spit/' },
                                    { text: 'Снятие подписи', link: '/en/permission/message/contact/unsign/' },
                                ]
                            },
                            { text: 'Смерть', link: '/en/permission/message/death/' },
                            { text: 'Деоп', link: '/en/permission/message/deop/' },
                            { text: 'Зачарование', link: '/en/permission/message/enchant/' },
                            {
                                text: 'Форматирование',
                                link: '/en/permission/message/format/',
                                collapsed: true,
                                items: [
                                    { text: 'Цвета', link: '/en/permission/message/format/color/' },
                                    { text: 'Смайлики', link: '/en/permission/message/format/emoji/' },
                                    { text: 'Изображение', link: '/en/permission/message/format/image/' },
                                    { text: 'Упоминание', link: '/en/permission/message/format/image/' },
                                    {
                                        text: 'Модерация',
                                        link: '/en/permission/message/format/moderation/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Капс', link: '/en/permission/message/format/moderation/caps/' },
                                            { text: 'Ругательство', link: '/en/permission/message/format/moderation/swear/' },
                                        ]
                                    },
                                    { text: 'Имя', link: '/en/permission/message/format/name_/' },
                                    { text: 'Спойлер', link: '/en/permission/message/format/spoiler/' },
                                    { text: 'Измерение', link: '/en/permission/message/format/world/' },
                                ]
                            },
                            { text: 'Режим игры', link: '/en/permission/message/gamemode/' },
                            { text: 'Приветствие', link: '/en/permission/message/greeting/' },
                            { text: 'Подключение', link: '/en/permission/message/join/' },
                            {
                                text: 'Значения',
                                link: '/en/permission/message/objective/',
                                collapsed: true,
                                items: [
                                    { text: 'Под ником', link: '/en/permission/message/objective/belowname/' },
                                    { text: 'В табе', link: '/en/permission/message/objective/tabname/' },
                                ]
                            },
                            { text: 'Оп', link: '/en/permission/message/op/' },
                            { text: 'Отключение', link: '/en/permission/message/quit/' },
                            { text: 'Сид', link: '/en/permission/message/seed/' },
                            { text: 'Сетблок', link: '/en/permission/message/setblock/' },
                            { text: 'Табличка', link: '/en/permission/message/sign/' },
                            { text: 'Спавнпоинт', link: '/en/permission/message/spawnpoint/' },
                            {
                                text: 'Статус',
                                link: '/en/permission/message/status/',
                                collapsed: true,
                                items: [
                                    { text: 'Иконка', link: '/en/permission/message/status/icon/' },
                                    { text: 'Описание', link: '/en/permission/message/status/motd/' },
                                    { text: 'Игроки', link: '/en/permission/message/status/players/' },
                                    { text: 'Версия', link: '/en/permission/message/status/version/' },
                                ]
                            },
                            {
                                text: 'Таб',
                                link: '/en/permission/message/tab/',
                                collapsed: true,
                                items: [
                                    { text: 'Верхнее', link: '/en/permission/message/tab/header/' },
                                    { text: 'Нижнее', link: '/en/permission/message/tab/footer/' },
                                    { text: 'Имя в списке', link: '/en/permission/message/tab/playerlistname/' },
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
          { text: 'Версия 0.1.0', link: 'https://github.com/Flectone/FlectonePulseWeb/' },
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
                text: 'Файл config.yml',
                link: '/ru/config/',
                collapsed: false,
                items: []
            },
            {
                text: 'Папка localizations/',
                link: '/ru/localizations/',
                collapsed: false,
                items: [
                    {
                        text: 'Файл ru_ru.yml',
                        link: '/ru/localizations/ru_ru/',
                        collapsed: true,
                        items: [
                            {
                                text: 'Комманды',
                                link: '/ru/localizations/ru_ru/command/',
                                collapsed: true,
                                items: [
                                    { text: 'Ball', link: '/ru/localizations/ru_ru/command/ball/' },
                                    { text: 'Ban', link: '/ru/localizations/ru_ru/command/ban/' },
                                    { text: 'Banlist', link: '/ru/localizations/ru_ru/command/banlist/' },
                                    { text: 'Broadcast', link: '/ru/localizations/ru_ru/command/broadcast/' },
                                    { text: 'Chatcolor', link: '/ru/localizations/ru_ru/command/chatcolor/' },
                                    { text: 'Chatsetting', link: '/ru/localizations/ru_ru/command/chatsetting/' },
                                    { text: 'Clearchat', link: '/ru/localizations/ru_ru/command/clearchat/' },
                                    { text: 'Clearmail', link: '/ru/localizations/ru_ru/command/clearmail/' },
                                    { text: 'Coin', link: '/ru/localizations/ru_ru/command/coin/' },
                                    { text: 'Dice', link: '/ru/localizations/ru_ru/command/dice/' },
                                    { text: 'Do', link: '/ru/localizations/ru_ru/command/do/' },
                                    { text: 'Flectonepulse', link: '/ru/localizations/ru_ru/command/flectonepulse/' },
                                    { text: 'Geolocate', link: '/ru/localizations/ru_ru/command/geolocate/' },
                                    { text: 'Helper', link: '/ru/localizations/ru_ru/command/helper/' },
                                    { text: 'Ignore', link: '/ru/localizations/ru_ru/command/ignore/' },
                                    { text: 'Ignorelist', link: '/ru/localizations/ru_ru/command/ignorelist/' },
                                    { text: 'Kick', link: '/ru/localizations/ru_ru/command/kick/' },
                                    { text: 'Mail', link: '/ru/localizations/ru_ru/command/mail/' },
                                    { text: 'Maintenance', link: '/ru/localizations/ru_ru/command/maintenance/' },
                                    { text: 'Me', link: '/ru/localizations/ru_ru/command/me/' },
                                    { text: 'Mute', link: '/ru/localizations/ru_ru/command/mute/' },
                                    { text: 'Mutelist', link: '/ru/localizations/ru_ru/command/mutelist/' },
                                    { text: 'Online', link: '/ru/localizations/ru_ru/command/online/' },
                                    { text: 'Poll', link: '/ru/localizations/ru_ru/command/poll/' },
                                    { text: 'Reply', link: '/ru/localizations/ru_ru/command/reply/' },
                                    { text: 'Rockpaperscissors', link: '/ru/localizations/ru_ru/command/rockpaperscissors/' },
                                    { text: 'Spy', link: '/ru/localizations/ru_ru/command/spy/' },
                                    { text: 'Stream', link: '/ru/localizations/ru_ru/command/stream/' },
                                    { text: 'Symbol', link: '/ru/localizations/ru_ru/command/symbol/' },
                                    { text: 'Tell', link: '/ru/localizations/ru_ru/command/tell/' },
                                    { text: 'Tictactoe', link: '/ru/localizations/ru_ru/command/tictactoe/' },
                                    { text: 'Translateto', link: '/ru/localizations/ru_ru/command/translateto/' },
                                    { text: 'Try', link: '/ru/localizations/ru_ru/command/try/' },
                                    { text: 'Unban', link: '/ru/localizations/ru_ru/command/unban/' },
                                    { text: 'Unmute', link: '/ru/localizations/ru_ru/command/unmute/' },
                                    { text: 'Unwarn', link: '/ru/localizations/ru_ru/command/unwarn/' },
                                    { text: 'Warn', link: '/ru/localizations/ru_ru/command/warn/' },
                                    { text: 'Warnlist', link: '/ru/localizations/ru_ru/command/warnlist/' },
                                ]
                            },
                            {
                                text: 'Интеграции',
                                link: '/ru/localizations/ru_ru/integration/',
                                collapsed: true,
                                items: [
                                    { text: 'Дискорд', link: '/ru/localizations/ru_ru/integration/discord/' },
                                    { text: 'Телеграм', link: '/ru/localizations/ru_ru/integration/telegram/' },
                                    { text: 'Твич', link: '/ru/localizations/ru_ru/integration/twitch/' },
                                ]
                            },
                            {
                                text: 'Сообщения',
                                link: '/ru/localizations/ru_ru/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Достижение', link: '/ru/localizations/ru_ru/message/advancement/' },
                                    { text: 'Автоматическое', link: '/ru/localizations/ru_ru/message/auto/' },
                                    { text: 'Бренд', link: '/ru/localizations/ru_ru/message/brand/' },
                                    { text: 'Над головой', link: '/ru/localizations/ru_ru/message/bubble/' },
                                    { text: 'Чат', link: '/ru/localizations/ru_ru/message/chat/' },
                                    { text: 'Очищение', link: '/ru/localizations/ru_ru/message/clear/' },
                                    {
                                        text: 'Контактирование',
                                        link: '/ru/localizations/ru_ru/message/contact/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Афк', link: '/ru/localizations/ru_ru/message/contact/afk/' },
                                            { text: 'Правое нажатие', link: '/ru/localizations/ru_ru/message/contact/rightclick/' },
                                            { text: 'Подпись', link: '/ru/localizations/ru_ru/message/contact/sign/' },
                                            { text: 'Плевок', link: '/ru/localizations/ru_ru/message/contact/spit/' },
                                        ]
                                    },
                                    { text: 'Смерть', link: '/ru/localizations/ru_ru/message/death/' },
                                    { text: 'Деоп', link: '/ru/localizations/ru_ru/message/deop/' },
                                    { text: 'Зачарование', link: '/ru/localizations/ru_ru/message/enchant/' },
                                    {
                                        text: 'Форматирование',
                                        link: '/ru/localizations/ru_ru/message/format/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Упоминание', link: '/ru/localizations/ru_ru/message/format/mention/' },
                                            {
                                                text: 'Модерация',
                                                link: '/ru/localizations/ru_ru/message/format/moderation/',
                                                collapsed: true,
                                                items: [
                                                    { text: 'Ругательство', link: '/ru/localizations/ru_ru/message/format/moderation/swear/' },
                                                ]
                                            },
                                            { text: 'Имя', link: '/ru/localizations/ru_ru/message/format/name_/' },
                                            { text: 'Спойлер', link: '/ru/localizations/ru_ru/message/format/spoiler/' },
                                        ]
                                    },
                                    { text: 'Режим игры', link: '/ru/localizations/ru_ru/message/gamemode/' },
                                    { text: 'Приветствие', link: '/ru/localizations/ru_ru/message/greeting/' },
                                    { text: 'Подключение', link: '/ru/localizations/ru_ru/message/join/' },
                                    { text: 'Оп', link: '/ru/localizations/ru_ru/message/op/' },
                                    { text: 'Отключение', link: '/ru/localizations/ru_ru/message/quit/' },
                                    { text: 'Сид', link: '/ru/localizations/ru_ru/message/seed/' },
                                    { text: 'Сетблок', link: '/ru/localizations/ru_ru/message/setblock/' },
                                    { text: 'Спавнпоинт', link: '/ru/localizations/ru_ru/message/spawnpoint/' },
                                    {
                                        text: 'Статус',
                                        link: '/ru/localizations/ru_ru/message/status/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Описание', link: '/ru/localizations/ru_ru/message/status/motd/' },
                                            { text: 'Игроки', link: '/ru/localizations/ru_ru/message/status/players/' },
                                            { text: 'Версия', link: '/ru/localizations/ru_ru/message/status/version/' },
                                        ]
                                    },
                                    {
                                        text: 'Таб',
                                        link: '/ru/localizations/ru_ru/message/tab/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Имя в списке', link: '/ru/localizations/ru_ru/message/tab/playerlistname/' },
                                            { text: 'Верхнее', link: '/ru/localizations/ru_ru/message/tab/header/' },
                                            { text: 'Нижнее', link: '/ru/localizations/ru_ru/message/tab/footer/' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Файл en_us.yml',
                        link: '/ru/localizations/en_us/',
                        collapsed: true,
                        items: [
                            {
                                text: 'Комманды',
                                link: '/ru/localizations/en_us/command/',
                                collapsed: true,
                                items: [
                                    { text: 'Ball', link: '/ru/localizations/en_us/command/ball/' },
                                    { text: 'Ban', link: '/ru/localizations/en_us/command/ban/' },
                                    { text: 'Banlist', link: '/ru/localizations/en_us/command/banlist/' },
                                    { text: 'Broadcast', link: '/ru/localizations/en_us/command/broadcast/' },
                                    { text: 'Chatcolor', link: '/ru/localizations/en_us/command/chatcolor/' },
                                    { text: 'Chatsetting', link: '/ru/localizations/en_us/command/chatsetting/' },
                                    { text: 'Clearchat', link: '/ru/localizations/en_us/command/clearchat/' },
                                    { text: 'Clearmail', link: '/ru/localizations/en_us/command/clearmail/' },
                                    { text: 'Coin', link: '/ru/localizations/en_us/command/coin/' },
                                    { text: 'Dice', link: '/ru/localizations/en_us/command/dice/' },
                                    { text: 'Do', link: '/ru/localizations/en_us/command/do/' },
                                    { text: 'Flectonepulse', link: '/ru/localizations/en_us/command/flectonepulse/' },
                                    { text: 'Geolocate', link: '/ru/localizations/en_us/command/geolocate/' },
                                    { text: 'Helper', link: '/ru/localizations/en_us/command/helper/' },
                                    { text: 'Ignore', link: '/ru/localizations/en_us/command/ignore/' },
                                    { text: 'Ignorelist', link: '/ru/localizations/en_us/command/ignorelist/' },
                                    { text: 'Kick', link: '/ru/localizations/en_us/command/kick/' },
                                    { text: 'Mail', link: '/ru/localizations/en_us/command/mail/' },
                                    { text: 'Maintenance', link: '/ru/localizations/en_us/command/maintenance/' },
                                    { text: 'Me', link: '/ru/localizations/en_us/command/me/' },
                                    { text: 'Mute', link: '/ru/localizations/en_us/command/mute/' },
                                    { text: 'Mutelist', link: '/ru/localizations/en_us/command/mutelist/' },
                                    { text: 'Online', link: '/ru/localizations/en_us/command/online/' },
                                    { text: 'Poll', link: '/ru/localizations/en_us/command/poll/' },
                                    { text: 'Reply', link: '/ru/localizations/en_us/command/reply/' },
                                    { text: 'Rockpaperscissors', link: '/ru/localizations/en_us/command/rockpaperscissors/' },
                                    { text: 'Spy', link: '/ru/localizations/en_us/command/spy/' },
                                    { text: 'Stream', link: '/ru/localizations/en_us/command/stream/' },
                                    { text: 'Symbol', link: '/ru/localizations/en_us/command/symbol/' },
                                    { text: 'Tell', link: '/ru/localizations/en_us/command/tell/' },
                                    { text: 'Tictactoe', link: '/ru/localizations/en_us/command/tictactoe/' },
                                    { text: 'Translateto', link: '/ru/localizations/en_us/command/translateto/' },
                                    { text: 'Try', link: '/ru/localizations/en_us/command/try/' },
                                    { text: 'Unban', link: '/ru/localizations/en_us/command/unban/' },
                                    { text: 'Unmute', link: '/ru/localizations/en_us/command/unmute/' },
                                    { text: 'Unwarn', link: '/ru/localizations/en_us/command/unwarn/' },
                                    { text: 'Warn', link: '/ru/localizations/en_us/command/warn/' },
                                    { text: 'Warnlist', link: '/ru/localizations/en_us/command/warnlist/' },
                                ]
                            },
                            {
                                text: 'Интеграции',
                                link: '/ru/localizations/en_us/integration/',
                                collapsed: true,
                                items: [
                                    { text: 'Дискорд', link: '/ru/localizations/en_us/integration/discord/' },
                                    { text: 'Телеграм', link: '/ru/localizations/en_us/integration/telegram/' },
                                    { text: 'Твич', link: '/ru/localizations/en_us/integration/twitch/' },
                                ]
                            },
                            {
                                text: 'Сообщения',
                                link: '/ru/localizations/en_us/message/',
                                collapsed: true,
                                items: [
                                    { text: 'Достижение', link: '/ru/localizations/en_us/message/advancement/' },
                                    { text: 'Автоматическое', link: '/ru/localizations/en_us/message/auto/' },
                                    { text: 'Бренд', link: '/ru/localizations/en_us/message/brand/' },
                                    { text: 'Над головой', link: '/ru/localizations/en_us/message/bubble/' },
                                    { text: 'Чат', link: '/ru/localizations/en_us/message/chat/' },
                                    { text: 'Очищение', link: '/ru/localizations/en_us/message/clear/' },
                                    {
                                        text: 'Контактирование',
                                        link: '/ru/localizations/en_us/message/contact/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Афк', link: '/ru/localizations/en_us/message/contact/afk/' },
                                            { text: 'Правое нажатие', link: '/ru/localizations/en_us/message/contact/rightclick/' },
                                            { text: 'Подпись', link: '/ru/localizations/en_us/message/contact/sign/' },
                                            { text: 'Плевок', link: '/ru/localizations/en_us/message/contact/spit/' },
                                        ]
                                    },
                                    { text: 'Смерть', link: '/ru/localizations/en_us/message/death/' },
                                    { text: 'Деоп', link: '/ru/localizations/en_us/message/deop/' },
                                    { text: 'Зачарование', link: '/ru/localizations/en_us/message/enchant/' },
                                    {
                                        text: 'Форматирование',
                                        link: '/ru/localizations/en_us/message/format/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Упоминание', link: '/ru/localizations/en_us/message/format/mention/' },
                                            {
                                                text: 'Модерация',
                                                link: '/ru/localizations/en_us/message/format/moderation/',
                                                collapsed: true,
                                                items: [
                                                    { text: 'Ругательство', link: '/ru/localizations/en_us/message/format/moderation/swear/' },
                                                ]
                                            },
                                            { text: 'Имя', link: '/ru/localizations/en_us/message/format/name_/' },
                                            { text: 'Спойлер', link: '/ru/localizations/en_us/message/format/spoiler/' },
                                        ]
                                    },
                                    { text: 'Режим игры', link: '/ru/localizations/en_us/message/gamemode/' },
                                    { text: 'Приветствие', link: '/ru/localizations/en_us/message/greeting/' },
                                    { text: 'Подключение', link: '/ru/localizations/en_us/message/join/' },
                                    { text: 'Оп', link: '/ru/localizations/en_us/message/op/' },
                                    { text: 'Отключение', link: '/ru/localizations/en_us/message/quit/' },
                                    { text: 'Сид', link: '/ru/localizations/en_us/message/seed/' },
                                    { text: 'Сетблок', link: '/ru/localizations/en_us/message/setblock/' },
                                    { text: 'Спавнпоинт', link: '/ru/localizations/en_us/message/spawnpoint/' },
                                    {
                                        text: 'Статус',
                                        link: '/ru/localizations/en_us/message/status/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Описание', link: '/ru/localizations/en_us/message/status/motd/' },
                                            { text: 'Игроки', link: '/ru/localizations/en_us/message/status/players/' },
                                            { text: 'Версия', link: '/ru/localizations/en_us/message/status/version/' },
                                        ]
                                    },
                                    {
                                        text: 'Таб',
                                        link: '/ru/localizations/en_us/message/tab/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Имя в списке', link: '/ru/localizations/en_us/message/tab/playerlistname/' },
                                            { text: 'Верхнее', link: '/ru/localizations/en_us/message/tab/header/' },
                                            { text: 'Нижнее', link: '/ru/localizations/en_us/message/tab/footer/' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                text: 'Файл command.yml',
                link: '/ru/command/',
                collapsed: false,
                items: [
                    { text: 'Afk', link: '/ru/command/afk/' },
                    { text: 'Ball', link: '/ru/command/ball/' },
                    { text: 'Ban', link: '/ru/command/ban/' },
                    { text: 'Banlist', link: '/ru/command/banlist/' },
                    { text: 'Broadcast', link: '/ru/command/broadcast/' },
                    { text: 'Chatcolor', link: '/ru/command/chatcolor/' },
                    { text: 'Chatsetting', link: '/ru/command/chatsetting/' },
                    { text: 'Clearchat', link: '/ru/command/clearchat/' },
                    { text: 'Clearmail', link: '/ru/command/clearmail/' },
                    { text: 'Coin', link: '/ru/command/coin/' },
                    { text: 'Dice', link: '/ru/command/dice/' },
                    { text: 'Do', link: '/ru/command/do/' },
                    { text: 'Flectonepulse', link: '/ru/command/flectonepulse/' },
                    { text: 'Geolocate', link: '/ru/command/geolocate/' },
                    { text: 'Helper', link: '/ru/command/helper/' },
                    { text: 'Ignore', link: '/ru/command/ignore/' },
                    { text: 'Ignorelist', link: '/ru/command/ignorelist/' },
                    { text: 'Kick', link: '/ru/command/kick/' },
                    { text: 'Mail', link: '/ru/command/mail/' },
                    { text: 'Maintenance', link: '/ru/command/maintenance/' },
                    { text: 'Mark', link: '/ru/command/mark/' },
                    { text: 'Me', link: '/ru/command/me/' },
                    { text: 'Mute', link: '/ru/command/mute/' },
                    { text: 'Mutelist', link: '/ru/command/mutelist/' },
                    { text: 'Online', link: '/ru/command/online/' },
                    { text: 'Poll', link: '/ru/command/poll/' },
                    { text: 'Reply', link: '/ru/command/reply/' },
                    { text: 'Rockpaperscissors', link: '/ru/command/rockpaperscissors/' },
                    { text: 'Spit', link: '/ru/command/spit/' },
                    { text: 'Spy', link: '/ru/command/spy/' },
                    { text: 'Stream', link: '/ru/command/stream/' },
                    { text: 'Symbol', link: '/ru/command/symbol/' },
                    { text: 'Tell', link: '/ru/command/tell/' },
                    { text: 'Tictactoe', link: '/ru/command/tictactoe/' },
                    { text: 'Translateto', link: '/ru/command/translateto/' },
                    { text: 'Try', link: '/ru/command/try/' },
                    { text: 'Unban', link: '/ru/command/unban/' },
                    { text: 'Unmute', link: '/ru/command/unmute/' },
                    { text: 'Unwarn', link: '/ru/command/unwarn/' },
                    { text: 'Warn', link: '/ru/command/warn/' },
                    { text: 'Warnlist', link: '/ru/command/warnlist/' },
                ]
            },
            {
                text: 'Файл message.yml',
                link: '/ru/message/',
                collapsed: false,
                items: [
                    { text: 'Достижение', link: '/ru/message/advancement/' },
                    { text: 'Наковальня', link: '/ru/message/anvil/' },
                    { text: 'Автоматическое', link: '/ru/message/auto/' },
                    { text: 'Книга', link: '/ru/message/book/' },
                    { text: 'Бренд', link: '/ru/message/brand/' },
                    { text: 'Над головой', link: '/ru/message/bubble/' },
                    { text: 'Чат', link: '/ru/message/chat/' },
                    { text: 'Очищение', link: '/ru/message/clear/' },
                    {
                        text: 'Контактирование',
                        link: '/ru/message/contact/',
                        collapsed: true,
                        items: [
                            { text: 'Афк', link: '/ru/message/contact/afk/' },
                            { text: 'Стуки', link: '/ru/message/contact/knock/' },
                            { text: 'Метка', link: '/ru/message/contact/mark/' },
                            { text: 'Правое нажатие', link: '/ru/message/contact/rightclick/' },
                            { text: 'Подпись', link: '/ru/message/contact/sign/' },
                            { text: 'Плевок', link: '/ru/message/contact/spit/' },
                            { text: 'Снятие подписи', link: '/ru/message/contact/unsign/' },
                        ]
                    },
                    { text: 'Смерть', link: '/ru/message/death/' },
                    { text: 'Деоп', link: '/ru/message/deop/' },
                    { text: 'Зачарование', link: '/ru/message/enchant/' },
                    {
                        text: 'Форматирование',
                        link: '/ru/message/format/',
                        collapsed: true,
                        items: [
                            { text: 'Цвета', link: '/ru/message/format/color/' },
                            { text: 'Смайлики', link: '/ru/message/format/emoji/' },
                            { text: 'Изображение', link: '/ru/message/format/image/' },
                            { text: 'Упоминание', link: '/ru/message/format/image/' },
                            {
                                text: 'Модерация',
                                link: '/ru/message/format/moderation/',
                                collapsed: true,
                                items: [
                                    { text: 'Капс', link: '/ru/message/format/moderation/caps/' },
                                    { text: 'Ругательство', link: '/ru/message/format/moderation/swear/' },
                                ]
                            },
                            { text: 'Имя', link: '/ru/message/format/name_/' },
                            { text: 'Спойлер', link: '/ru/message/format/spoiler/' },
                            { text: 'Измерение', link: '/ru/message/format/world/' },
                        ]
                    },
                    { text: 'Режим игры', link: '/ru/message/gamemode/' },
                    { text: 'Приветствие', link: '/ru/message/greeting/' },
                    { text: 'Подключение', link: '/ru/message/join/' },
                    {
                        text: 'Значения',
                        link: '/ru/message/objective/',
                        collapsed: true,
                        items: [
                            { text: 'Под ником', link: '/ru/message/objective/belowname/' },
                            { text: 'В табе', link: '/ru/message/objective/tabname/' },
                        ]
                    },
                    { text: 'Оп', link: '/ru/message/op/' },
                    { text: 'Отключение', link: '/ru/message/quit/' },
                    { text: 'Сид', link: '/ru/message/seed/' },
                    { text: 'Сетблок', link: '/ru/message/setblock/' },
                    { text: 'Табличка', link: '/ru/message/sign/' },
                    { text: 'Спавнпоинт', link: '/ru/message/spawnpoint/' },
                    {
                        text: 'Статус',
                        link: '/ru/message/status/',
                        collapsed: true,
                        items: [
                            { text: 'Иконка', link: '/ru/message/status/icon/' },
                            { text: 'Описание', link: '/ru/message/status/motd/' },
                            { text: 'Игроки', link: '/ru/message/status/players/' },
                            { text: 'Версия', link: '/ru/message/status/version/' },
                        ]
                    },
                    {
                        text: 'Таб',
                        link: '/ru/message/tab/',
                        collapsed: true,
                        items: [
                            { text: 'Верхнее', link: '/ru/message/tab/header/' },
                            { text: 'Нижнее', link: '/ru/message/tab/footer/' },
                            { text: 'Имя в списке', link: '/ru/message/tab/playerlistname/' },
                        ]
                    },
                ]
            },
            {
                text: 'Файл permission.yml',
                link: '/ru/permission/',
                collapsed: false,
                items: [
                    {
                        text: 'Комманды',
                        link: '/ru/permission/command/',
                        collapsed: true,
                        items: [
                            { text: 'Afk', link: '/ru/permission/command/afk/' },
                            { text: 'Ball', link: '/ru/permission/command/ball/' },
                            { text: 'Ban', link: '/ru/permission/command/ban/' },
                            { text: 'Banlist', link: '/ru/permission/command/banlist/' },
                            { text: 'Broadcast', link: '/ru/permission/command/broadcast/' },
                            { text: 'Chatcolor', link: '/ru/permission/command/chatcolor/' },
                            { text: 'Chatsetting', link: '/ru/permission/command/chatsetting/' },
                            { text: 'Clearchat', link: '/ru/permission/command/clearchat/' },
                            { text: 'Clearmail', link: '/ru/permission/command/clearmail/' },
                            { text: 'Coin', link: '/ru/permission/command/coin/' },
                            { text: 'Dice', link: '/ru/permission/command/dice/' },
                            { text: 'Do', link: '/ru/permission/command/do/' },
                            { text: 'Flectonepulse', link: '/ru/permission/command/flectonepulse/' },
                            { text: 'Geolocate', link: '/ru/permission/command/geolocate/' },
                            { text: 'Helper', link: '/ru/permission/command/helper/' },
                            { text: 'Ignore', link: '/ru/permission/command/ignore/' },
                            { text: 'Ignorelist', link: '/ru/permission/command/ignorelist/' },
                            { text: 'Kick', link: '/ru/permission/command/kick/' },
                            { text: 'Mail', link: '/ru/permission/command/mail/' },
                            { text: 'Maintenance', link: '/ru/permission/command/maintenance/' },
                            { text: 'Mark', link: '/ru/permission/command/mark/' },
                            { text: 'Me', link: '/ru/permission/command/me/' },
                            { text: 'Mute', link: '/ru/permission/command/mute/' },
                            { text: 'Mutelist', link: '/ru/permission/command/mutelist/' },
                            { text: 'Online', link: '/ru/permission/command/online/' },
                            { text: 'Poll', link: '/ru/permission/command/poll/' },
                            { text: 'Reply', link: '/ru/permission/command/reply/' },
                            { text: 'Rockpaperscissors', link: '/ru/permission/command/rockpaperscissors/' },
                            { text: 'Spit', link: '/ru/permission/command/spit/' },
                            { text: 'Spy', link: '/ru/permission/command/spy/' },
                            { text: 'Stream', link: '/ru/permission/command/stream/' },
                            { text: 'Symbol', link: '/ru/permission/command/symbol/' },
                            { text: 'Tell', link: '/ru/permission/command/tell/' },
                            { text: 'Tictactoe', link: '/ru/permission/command/tictactoe/' },
                            { text: 'Translateto', link: '/ru/permission/command/translateto/' },
                            { text: 'Try', link: '/ru/permission/command/try/' },
                            { text: 'Unban', link: '/ru/permission/command/unban/' },
                            { text: 'Unmute', link: '/ru/permission/command/unmute/' },
                            { text: 'Unwarn', link: '/ru/permission/command/unwarn/' },
                            { text: 'Warn', link: '/ru/permission/command/warn/' },
                            { text: 'Warnlist', link: '/ru/permission/command/warnlist/' },
                        ]
                    },
                    {
                        text: 'Интеграции',
                        link: '/ru/permission/integration/',
                        collapsed: true,
                        items: [
                            { text: 'Дискорд', link: '/ru/permission/integration/discord/' },
                            { text: 'InteractiveChat', link: '/ru/permission/integration/interactivechat/' },
                            { text: 'LuckPerms', link: '/ru/permission/integration/luckperms/' },
                            { text: 'PlaceholderAPI', link: '/ru/permission/integration/placeholderapi/' },
                            { text: 'PlasmoVoice', link: '/ru/permission/integration/plasmovoice/' },
                            { text: 'SimpleVoice', link: '/ru/permission/integration/simplevoice/' },
                            { text: 'SkinsRestorer', link: '/ru/permission/integration/skinsrestorer/' },
                            { text: 'SuperVanish', link: '/ru/permission/integration/supervanish/' },
                            { text: 'Телеграм', link: '/ru/permission/integration/telegram/' },
                            { text: 'Твич', link: '/ru/permission/integration/twitch/' },
                            { text: 'Vault', link: '/ru/permission/integration/vault/' },
                        ]
                    },
                    {
                        text: 'Сообщения',
                        link: '/ru/permission/message/',
                        collapsed: true,
                        items: [
                            { text: 'Достижение', link: '/ru/permission/message/advancement/' },
                            { text: 'Наковальня', link: '/ru/permission/message/anvil/' },
                            { text: 'Автоматическое', link: '/ru/permission/message/auto/' },
                            { text: 'Книга', link: '/ru/permission/message/book/' },
                            { text: 'Бренд', link: '/ru/permission/message/brand/' },
                            { text: 'Над головой', link: '/ru/permission/message/bubble/' },
                            { text: 'Чат', link: '/ru/permission/message/chat/' },
                            { text: 'Очищение', link: '/ru/permission/message/clear/' },
                            {
                                text: 'Контактирование',
                                link: '/ru/permission/message/contact/',
                                collapsed: true,
                                items: [
                                    { text: 'Афк', link: '/ru/permission/message/contact/afk/' },
                                    { text: 'Стуки', link: '/ru/permission/message/contact/knock/' },
                                    { text: 'Метка', link: '/ru/permission/message/contact/mark/' },
                                    { text: 'Правое нажатие', link: '/ru/permission/message/contact/rightclick/' },
                                    { text: 'Подпись', link: '/ru/permission/message/contact/sign/' },
                                    { text: 'Плевок', link: '/ru/permission/message/contact/spit/' },
                                    { text: 'Снятие подписи', link: '/ru/permission/message/contact/unsign/' },
                                ]
                            },
                            { text: 'Смерть', link: '/ru/permission/message/death/' },
                            { text: 'Деоп', link: '/ru/permission/message/deop/' },
                            { text: 'Зачарование', link: '/ru/permission/message/enchant/' },
                            {
                                text: 'Форматирование',
                                link: '/ru/permission/message/format/',
                                collapsed: true,
                                items: [
                                    { text: 'Цвета', link: '/ru/permission/message/format/color/' },
                                    { text: 'Смайлики', link: '/ru/permission/message/format/emoji/' },
                                    { text: 'Изображение', link: '/ru/permission/message/format/image/' },
                                    { text: 'Упоминание', link: '/ru/permission/message/format/image/' },
                                    {
                                        text: 'Модерация',
                                        link: '/ru/permission/message/format/moderation/',
                                        collapsed: true,
                                        items: [
                                            { text: 'Капс', link: '/ru/permission/message/format/moderation/caps/' },
                                            { text: 'Ругательство', link: '/ru/permission/message/format/moderation/swear/' },
                                        ]
                                    },
                                    { text: 'Имя', link: '/ru/permission/message/format/name_/' },
                                    { text: 'Спойлер', link: '/ru/permission/message/format/spoiler/' },
                                    { text: 'Измерение', link: '/ru/permission/message/format/world/' },
                                ]
                            },
                            { text: 'Режим игры', link: '/ru/permission/message/gamemode/' },
                            { text: 'Приветствие', link: '/ru/permission/message/greeting/' },
                            { text: 'Подключение', link: '/ru/permission/message/join/' },
                            {
                                text: 'Значения',
                                link: '/ru/permission/message/objective/',
                                collapsed: true,
                                items: [
                                    { text: 'Под ником', link: '/ru/permission/message/objective/belowname/' },
                                    { text: 'В табе', link: '/ru/permission/message/objective/tabname/' },
                                ]
                            },
                            { text: 'Оп', link: '/ru/permission/message/op/' },
                            { text: 'Отключение', link: '/ru/permission/message/quit/' },
                            { text: 'Сид', link: '/ru/permission/message/seed/' },
                            { text: 'Сетблок', link: '/ru/permission/message/setblock/' },
                            { text: 'Табличка', link: '/ru/permission/message/sign/' },
                            { text: 'Спавнпоинт', link: '/ru/permission/message/spawnpoint/' },
                            {
                                text: 'Статус',
                                link: '/ru/permission/message/status/',
                                collapsed: true,
                                items: [
                                    { text: 'Иконка', link: '/ru/permission/message/status/icon/' },
                                    { text: 'Описание', link: '/ru/permission/message/status/motd/' },
                                    { text: 'Игроки', link: '/ru/permission/message/status/players/' },
                                    { text: 'Версия', link: '/ru/permission/message/status/version/' },
                                ]
                            },
                            {
                                text: 'Таб',
                                link: '/ru/permission/message/tab/',
                                collapsed: true,
                                items: [
                                    { text: 'Верхнее', link: '/ru/permission/message/tab/header/' },
                                    { text: 'Нижнее', link: '/ru/permission/message/tab/footer/' },
                                    { text: 'Имя в списке', link: '/ru/permission/message/tab/playerlistname/' },
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
