# Command /clearmail
Path `config.yml > module.command.command-clearmail`

## Explanation
Command to delete sent [mails](/en/config/module/command/command-mail/)
![command clearmail](/commandclearmail.png)

## Edit
```yaml
<config.module.command.command-clearmail>
```

### Default
```yaml
command-clearmail:
  enable: true
  aliases:
    - "clearmail"
  permission:
    name: "flectonepulse.module.command.clearmail"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.clearmail.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.clearmail.sound"
      type: TRUE
```

## Options

- Messages are changed here [Clearmail](/en/messages/ru_ru/module/command/command-clearmail/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `clearmail`

List of aliases for using the command

::: tip Aliases can be anything
For example `newclearmail`, `deleteemail`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.clearmail`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.clearmail.cooldown.ignore`
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
- Name `flectonepulse.module.command.clearmail.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::