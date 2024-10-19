# Command /ban 
Path `config.yml > module.command.command-ban`

## Explanation
The command to ban a player
![command ban](/commandban.png)

On behalf of the player
![command ban player](/commandbanplayer.png)

## Edit
```yaml
<config.module.command.command-ban>
```

### Default
```yaml
command-ban:
  enable: true
  online-players: false
  show-try-connect: true
  range: -2
  aliases:
    - "tempban"
    - "ban"
  permission:
    name: "flectonepulse.module.command.ban"
    type: OP
  listener:
    AsyncPlayerPreLoginEvent: LOWEST
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.ban.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.ban.sound"
      type: TRUE
```

## Options

- Messages are changed here [Ban](/en/messages/ru_ru/module/command/command-ban/)

### `enable`
- Default `true`

Enables or disables module functionality

### `online-players`
- Default `false`

If enabled, it prompts the nicknames of players who are online, otherwise it prompts everyone who was on the server
::: tip This only affects the text prompt
If you enter the nickname of a player who is **not online** and `online-players: true`, the command will execute without error anyway
:::

### `show-try-connect`
- Default `true`

If enabled, it will show a message that the blocked player tried to connect
![command ban connect](/commandbanconnect.png)

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `ban`

List of aliases for using the command

::: tip Aliases can be anything
For example `newban`, `block`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.ban`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default `AsyncPlayerPreLoginEvent: LOWEST`

List of event listeners and their [priority](#event-priority)

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.ban.cooldown.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the delay
:::

### `sound`
- Default `false`

Turns on sound playback when using

::: details Sound setting
#### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and tone (`1`) of the sound via `:`

#### `permission`
- Name `flectonepulse.module.command.ban.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->
<!--@include: @/en/parts/listener.md-->