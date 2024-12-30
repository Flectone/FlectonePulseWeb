# Файл `config.yml`

## Пояснение
Файл по настройке плагина `FlectonePulse`

## Редактирование
```yaml
<config>
```

### По умолчанию
```yaml
console: "Console"
version: "0.1.0"
language: "en_us"
language-player: true
metrics: true
bungeecord: false
velocity: false
log-filter:
   - "Paper Async Command Builder"
   - "Caught previously unhandled exception :"
   - "Error received from Telegram GetUpdates Request"
   - "OkHttp TaskRunner"

database:
   type: SQLITE
   name: "flectonepulse"
   host: "localhost"
   port: "3306"
   user: "root"
   password: "1234"

module:
   enable: true
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
Выбираемая локализация должна быть из [доступных](/ru/localizations/)
:::

<!--@include: @/ru/parts/locale.md-->

### `language-player`
- По умолчанию `true`

Если включено, то у каждого игрока будет проверяться его локализация майнкрафта и взависимости от этого будет показываться [сообщение](/ru/localizations/)

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

### `log-filter`

Идея взята [отсюда](https://github.com/Whitescan/ConsoleFilter/blob/master/src/main/java/dev/whitescan/consolefilter/share/LogFilter.java), спасибо @Whitescan

Списком указываются сообщения, которые нужно не показывать, используя ключевые слова, встречающиеся в сообщении

::: tip Например я хочу отфильтровать
![filter](/filter.png)

Значит нужно вписать:
`Unknown or incomplete command` или `command` или `Unknown`
:::

### `database`

::: details Настройка датабазы

#### `type`
- По умолчанию `SQLITE`

В данный момент поддерживаются:
- `SQLite` - локальная
- `MySQL` - серверная

#### `name`
- По умолчанию `flectonepulse`

Название базы данных

#### `host` (для MySQL)
- По умолчанию `localhost`

Адрес сервера, на котором расположена база данных

#### `port` (для MySQL)
- По умолчанию `3306`

Порт подключения к базе данных на сервере

#### `user` (для MySQL)
- По умолчанию `root`

Название пользователя, который будет использован для подключения к базе данных

#### `password` (для MySQL)
- По умолчанию `1234`

Пароль для подключения к базе данных
:::



### module
- По умолчанию `enable: true`

Включает или выключает работу всех модулей

- Каждый модуль имеет родителя (тот, кто выше находится)

::: tip Например есть
```yaml
house:
  door:
  chair:
```

`house` является родителем для `door` и `chair`
:::

- Каждый модуль зависит от `enable` родителя

::: tip Например есть
```yaml
house:
  enable: false // [!code highlight]
  door:
    enable: true
  chair:
    enable: true
```

`house` выключен, значит внезависимости от того, включены ли `door` и `chair` - они тоже будут выключены
:::