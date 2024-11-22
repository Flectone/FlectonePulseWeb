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
  console: "Console"
  version: "0.0.8"
  language: "en_us"
  language-player: true
  metrics: true
  bungeecord: false
  velocity: false
  database: SQLITE
  log-filter:
    - "Paper Async Command Builder"
    - "Caught previously unhandled exception :"
    - "Error received from Telegram GetUpdates Request"
    - "OkHttp TaskRunner"
```

## Параметры

### `console`
- По умолчанию `Console`

Используется для отображения имени, когда сообщения создано консолью
![console](/console.gif)

### `version`

Текущая версия плагина, используемая для корректного перехода между версиями плагина

::: warning ПРЕДУПРЕЖДЕНИЕ
Не изменяй версию плагина, если не знаешь, что делаешь!
:::

### `language`
- По умолчанию `en_us`

Локализация, используемая для всех сообщений плагина

::: warning ПРЕДУПРЕЖДЕНИЕ
Выбираемая локализация должна быть из [доступных](/ru/messages/)
:::

<!--@include: @/ru/parts/locale.md-->

### `language-player`
- По умолчанию `true`

Если включено, то у каждого игрока будет проверяться его локализация майнкрафта и взависимости от этого будет показываться [сообщение](/ru/messages/)

![locale](/locale.gif)

Если такой локализации нет, то будет использована из [конфигурации](#language)

::: danger ОЧЕНЬ ВАЖНО ПОНИМАТЬ
Если ты изменяешь списки сообщений с включенным `language-player`, то это нужно делать во всех локализациях, иначе возможны визуальные ошибки
:::

### `metrics`
- По умолчанию `true`

Позволяет плагину собирать [статистику](https://bstats.org/plugin/bukkit/FlectonePulse/21076) сервера и параметров плагина
[![bstats](https://bstats.org/signatures/bukkit/FlectonePulse.svg)](https://bstats.org/plugin/bukkit/FlectonePulse/21076)

### `bungeecord`
- По умолчанию `false`

::: tip Чтобы плагин работал на **BungeeCord**:
1. Включи его здесь
2. Для **BungeeCord** сервера закинь файл `FlectonePulse-bungee.jar` в папку `plugins`
3. Перезапусти **BungeeCord** и сервера, где стоит **FlectonePulse**
:::

### `velocity`
- По умолчанию `false`

::: tip Чтобы плагин работал на **Velocity**:
1. Включи его здесь
2. Для **Velocity** сервера закинь файл `FlectonePulse-velocity.jar` в папку `plugins`
3. Перезапусти **Velocity** и сервера, где стоит **FlectonePulse**
:::

### `database`
- По умолчанию `SQLITE`

::: warning ВАЖНО
Название датабазы должно быть указано в верхнем регистре без кавычек
:::

В данный момент поддерживаются:
- `SQLite` - локальная
- `MySQL` - серверная, нyжно **обязательно** настроить подключение в [секретах](/ru/secrets/)

### `log-filter`

Идея взята [отсюда](https://github.com/Whitescan/ConsoleFilter/blob/master/src/main/java/dev/whitescan/consolefilter/share/LogFilter.java), спасибо @Whitescan

Списком указываются сообщения, которые нужно не показывать, используя ключевые слова, встречающиеся в сообщении

::: tip Например я хочу отфильтровать
![filter](/filter.png)

Значит нужно вписать:
`Unknown or incomplete command` или `command` или `Unknown`
:::