# Plugin
Path `config.yml > plugin.*`

## Explanation
This category is responsible for customizing the plugin as a whole, without affecting the messages

## Edit
```yaml
<config.plugin>
```

### Default
```yaml
plugin:
  version: "0.0.7"
  language: "en_us"
  use-player-locale: true
  console-name: "Console"
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

## Options

### `version`

Current version of the plugin, used for correct transition between plugin versions

::: warning Warning
Don't change the plugin version if you don't know what you're doing!
:::

### `language`
- Default `en_us`

Localization used for all plugin messages

::: warning Important
The localization to be selected must be from [available](/en/messages/)
:::

<!--@include: @/en/parts/locale.md-->


### `use-player-locale`
- Default `true`

If enabled, each player will be checked for his localization of minecraft and depending on this will be shown [message](../messages/)

![locale](/locale.gif)

If there is no such localization, it will be used from [configuration](#language)

::: danger  If you modify message lists with `use-player-locale` enabled
It should be done in all localizations, otherwise there may be visual errors
:::

### `console-name`
- Default `Console`

Used to display the name when messages are created by the console
![console](/console.gif)

### `database`
- Default `SQLITE`

::: warning Important
The name of the database must be specified in upper case without quotation marks
:::

Currently supported:
- `SQLite` - local
- `MySQL` - server, you **must** set up a connection in [secrets](/en/secrets/)

### `proxy`

The plugin supports proxy mode so you can send **server** messages

`bungee`
- Default `false`

::: tip For the plugin to work on **BungeeCord**:
1. Turn it on here
2. For the **BungeeCord** server, drop the `FlectonePulse-bungee.jar` file into the `plugins` folder
3. Restart **BungeeCord** and the servers where **FlectonePulse** is installed
:::

`velocity`
- Default `false`

::: tip For the plugin to work on **Velocity**:
1. Turn it on here
2. For the **Velocity** server, drop the `FlectonePulse-velocity.jar` file into the `plugins` folder
3. Restart **Velocity** and the servers where **FlectonePulse** is installed
:::

### `bstats`
- Default `true`

Allows the plugin to collect [statistics](https://bstats.org/plugin/bukkit/FlectonePulse/21076)
[![bstats](https://bstats.org/signatures/bukkit/FlectonePulse.svg)](https://bstats.org/plugin/bukkit/FlectonePulse/21076)

### `logger`

The idea is taken [from here](https://github.com/Whitescan/ConsoleFilter/blob/master/src/main/java/dev/whitescan/consolefilter/share/LogFilter.java), thanks @Whitescan

List the messages that you do not want to show, using keywords that appear in the message

::: tip For example, I want to filter
![filter](/filter.png)

So in `filter` you have to put in `filter`:
`Unknown or incomplete command` or `command` or `Unknown`
:::