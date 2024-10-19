# Command /afk
Path `config.yml > module.command.command-afk`

## Explanation
Command to change AFK mode
![afk](/afkglobalmessage.png)

::: danger Attention
The command will not work if the [`AFK`](/en/config/module/player/afk/) module is disabled
:::

## Edit
```yaml
<config.module.command.command-afk>
```

### Default
```yaml
command-afk:
  enable: true
  aliases:
    - "afk"
  permission:
    name: "flectonepulse.module.command.afk"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.afk.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.afk.sound"
      type: TRUE
```

## Options

- Messages are changed here [Afk](/en/messages/ru_ru/module/command/command-afk/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `afk`

List of aliases for using the command

::: tip Aliases can be anything
For example `newafk`, `afk`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.afk`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.afk.cooldown.ignore`
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
- Name `flectonepulse.module.command.afk.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::