# Command /chatcolor 
Path `config.yml > module.command.command-chatcolor`

## Explanation
Command to change [colors](/en/config/module/tag/color/)
![command chatcolor](/commandchatcolor.png)


## Edit
```yaml
<config.module.command.command-chatcolor>
```

### Default
```yaml
command-chatcolor:
  enable: true
  aliases:
    - "chatcolor"
  permission:
    name: "flectonepulse.module.command.chatcolor"
    type: TRUE
  permission-other:
    name: "flectonepulse.module.command.chatcolor.other"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.chatcolor.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.chatcolor.sound"
      type: TRUE
```

## Options

- Messages are changed here [Chatcolor](/en/messages/ru_ru/module/command/command-chatcolor/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `chatcolor`

List of aliases for using the command

::: tip Aliases can be anything
For example `newchatcolor`, `colorchat`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.chatcolor`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to change colors for yourself

### `permission-other`
- Name `flectonepulse.module.command.chatcolor.other`
- Type `OP`

[Permission](/en/config/module/#explanation) to change colors for other players
![command chatcolor other](/commandchatcolorother.png)

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.chatcolor.cooldown.ignore`
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
- Name `flectonepulse.module.command.chatcolor.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::