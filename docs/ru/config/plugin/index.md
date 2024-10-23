# Плагин
Путь `config.yml > plugin.*`

## Пояснение
Эта категория отвечает за настройку плагина в целом, не затрагивая сообщения

## Редактирование
```yaml
<config.plugin>
```

### По умолчанию
```yaml
plugin:
  version: "0.0.6"
  language: "en_us"
  use-player-locale: true
  console-name: "FlectonePulseConsole"
  database:
    type: SQLITE
  proxy:
    bungee: false
    velocity: false
  bstats:
    enable: true
  logger:
    filter:
      - "Paper Async Command Builder"
      - "Caught previously unhandled exception :"
      - "Error received from Telegram GetUpdates Request"
      - "OkHttp TaskRunner"
```

## Параметры

### `version`

Текущая версия плагина, используемая для корректного перехода между версиями плагина

::: warning Предупреждение
Не изменяй версию плагина, если не знаешь, что делаешь!
:::

### `language`
- По умолчанию `en_us`

Локализация, используемая для всех сообщений плагина

::: warning Важно
Выбираемая локализация должна быть из [доступных](/ru/messages/)
:::

<!--@include: @/ru/parts/locale.md-->


### `use-player-locale`
- По умолчанию `true`

Если включено, то у каждого игрока будет проверяться его локализация майнкрафта и взависимости от этого будет показываться [сообщение](/ru/messages/)

![locale](/locale.gif)

Если такой локализации нет, то будет использована из [конфигурации](#language)

::: danger Если ты изменяешь списки сообщений с включенным `use-player-locale`
То это нужно делать во всех локализациях, иначе возможны визуальные ошибки
:::

### `console-name`
- По умолчанию `FlectonePulseConsole`

Используется для отображения имени, когда сообщения создано консолью
![console](/console.gif)

### `database`
- По умолчанию `SQLITE`

::: warning Важно
Название датабазы должно быть указано в верхнем регистре без кавычек
:::

В данный момент поддерживаются:
- `SQLite` - локальная
- `MySQL` - серверная, нyжно **обязательно** настроить подключение в [секретах](/ru/secrets/)

### `proxy`

Плагин поддерживает режим работы в прокси, чтобы можно было отправлять **меж-серверные** сообщения

`bungee`
- По умолчанию `false`

::: tip Чтобы плагин работал на **BungeeCord**:
1. Включи его здесь
2. Для **BungeeCord** сервера закинь файл `FlectonePulse-bungee.jar` в папку `plugins`
3. Перезапусти **BungeeCord** и сервера, где стоит **FlectonePulse**
:::

`velocity`
- По умолчанию `false`

::: tip Чтобы плагин работал на **Velocity**:
1. Включи его здесь
2. Для **Velocity** сервера закинь файл `FlectonePulse-velocity.jar` в папку `plugins`
3. Перезапусти **Velocity** и сервера, где стоит **FlectonePulse**
:::

### `bstats`
- По умолчанию `true`

Позволяет плагину собирать [статистику](https://bstats.org/plugin/bukkit/FlectonePulse/21076) сервера и параметров плагина
[![bstats](https://bstats.org/signatures/bukkit/FlectonePulse.svg)](https://bstats.org/plugin/bukkit/FlectonePulse/21076)

### `logger`

Идея взята [отсюда](https://github.com/Whitescan/ConsoleFilter/blob/master/src/main/java/dev/whitescan/consolefilter/share/LogFilter.java), спасибо @Whitescan

Списком указываются сообщения, которые нужно не показывать, используя ключевые слова, встречающиеся в сообщении

::: tip Например я хочу отфильтровать
![filter](/filter.png)

Значит в `filter` нужно вписать:
`Unknown or incomplete command` или `command` или `Unknown`
:::