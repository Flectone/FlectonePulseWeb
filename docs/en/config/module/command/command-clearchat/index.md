# Command /clearchat
Path `config.yml > module.command.command-clearchat`

## Explanation
Command to clear chat
![command clearchat](/commandclearchat.png)

## Edit
```yaml
<config.module.command.command-clearchat>
```

### Default
```yaml
command-clearchat:
  enable: true
  aliases:
    - "clearchat"
  permission:
    name: "flectonepulse.module.command.clearchat"
    type: TRUE
  permission-other:
    name: "flectonepulse.module.command.clearchat.other"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.clearchat.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.clearchat.sound"
      type: TRUE
```

## Options

- Messages are changed here [Clearchat](/en/messages/ru_ru/module/command/command-clearchat/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `clearchat`

List of aliases for using the command

::: tip Aliases can be anything
For example `newclearchat`, `clearchat`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.clearchat`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to clear chat

### `permission-other`
- Name `flectonepulse.module.command.clearchat.other`
- Type `OP`

[Permission](/en/config/module/#explanation) to clear chat for others

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.clearchat.cooldown.ignore`
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
- Name `flectonepulse.module.command.clearchat.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::