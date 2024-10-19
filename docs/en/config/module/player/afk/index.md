# Afk
Path `config.yml > module.player.afk`

## Explanation
A player becomes AFK if he does nothing for a period of time
![afk global message](/afkglobalmessage.png)

If a player is AFK, they are given a specific suffix
![afk suffix](/afksuffix.png)


## Edit
```yaml
<config.module.player.afk>
```

### Default
```yaml
afk:
  enable: true
  delay: 3000
  ignore:
    - "afk"
  permission:
    name: "flectonepulse.module.player.afk"
    type: TRUE
  message:
    enable: true
    global: true
  ticker:
    enable: true
    period: 20
  listener:
    AsyncPlayerChatEvent: LOWEST
    PlayerCommandPreprocessEvent: LOWEST
```

## Options

- Messages and AFK suffix are changed here [AFK](/en/messages/ru_ru/module/player/afk/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `delay`
- Default `3000`

How many [ticks](https://minecraft.wiki/w/Tick) player doesn't have to do anything to stand in AFK

### `ignore`
- Default `afk`

List of actions that are ignored and do not affect the AFK mode

| Actions that can be ignored        |
|------------------------------------|
| Any command names                  |
| `chat` - when a player is chatting |
| `quit` - when a player quit        |

::: tip For example
If I put the `tell` command in the list and the player is in AFK mode, he can use the `tell` command and will not be kicked out of AFK mode
:::


### `permission`
- Name `flectonepulse.module.player.afk`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `message`
- `enable: true`

Turns on a message when a player has stepped away

- `global: true`

Indicates that this message should be sent to all
![afk global message](/afkglobalmessage.png)

If `false`, only the player himself will receive the message
![afk local message](/afklocalmessage.png)

### `ticker`
- `enable: true`

Check that a player has returned or joined the AFC

- `period: 20`

How often in [ticks](https://minecraft.wiki/w/Tick) is necessary to check that a player is AFK or not

### `listener`
- Default:
```yaml
AsyncPlayerChatEvent: LOWEST
PlayerCommandPreprocessEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->