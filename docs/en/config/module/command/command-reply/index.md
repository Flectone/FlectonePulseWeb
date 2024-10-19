# Command /reply
Path `config.yml > module.command.command-reply`

## Explanation
A command to write a private message to the last written player
![command reply](/commandreply.png)

::: danger Caution
The command will not work if the [`Tell`](/en/config/module/command/command-tell/) module is disabled
:::

## Edit
```yaml
<config.module.command.command-reply>
```

### Default
```yaml
command-reply:
  enable: true
  aliases:
    - "r"
    - "reply"
  permission:
    name: "flectonepulse.module.command.reply"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.reply.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.reply.sound"
      type: TRUE
```

## Options

- Messages are changed here [Reply](/en/messages/ru_ru/module/command/command-reply/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default:
```yaml
- "r"
- "reply"
```

List of aliases for using the command

::: tip Aliases can be anything
For example `newreply`, `reply`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.reply`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.reply.cooldown.ignore`
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
- Name `flectonepulse.module.command.reply.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::