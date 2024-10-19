# Command /mail
Path `config.yml > module.command.command-mail`

## Explanation
The command to write an offline player a mail
![command mail](/commandmail.png)

When the player to whom mail was written logs into the server, he will see these mails
![command mail player](/commandmailplayer.png)

If the player is already on the server and the [Tell](/en/config/module/command/command/command-tell/) module is enabled, it will be used
![command tell](/commandtell.png)

## Edit
```yaml
<config.module.command.command-mail>
```

### Default
```yaml
command-mail:
  enable: true
  aliases:
    - "mail"
  permission:
    name: "flectonepulse.module.command.mail"
    type: TRUE
  listener:
    PlayerJoinEvent: MONITOR
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.mail.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.mail.sound"
      type: TRUE
```

## Options

- Messages are changed here [Mail](/en/messages/ru_ru/module/command/command-mail/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `mail`

List of aliases for using the command

::: tip Aliases can be anything
For example `newmail`, `letter`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.mail`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default `PlayerJoinEvent: MONITOR`

List of event listeners and their [priority](#event-priority)

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.mail.cooldown.ignore`
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
- Name `flectonepulse.module.command.mail.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/listener.md-->