# Command /coin
Path `config.yml > module.command.command-coin`

## Explanation
The command to flip a coin
![command coin](/commandcoin.png)

## Edit
```yaml
<config.module.command.command-coin>
```

### Default
```yaml
command-coin:
  enable: true
  enable-draw: true
  range: -2
  aliases:
    - "coin"
  permission:
    name: "flectonepulse.module.command.coin"
    type: TRUE
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.coin.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.coin.sound"
      type: TRUE
```

## Options

- Messages are changed here [Coin](/en/messages/ru_ru/module/command/command-coin/)

### `enable`
- Default `true`

Enables or disables module functionality

### `enable-draw`
- Default `true`

Includes a small chance (`1%` of `101%`) of dropping a coin on the edge

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `coin`

List of aliases for using the command

::: tip Aliases can be anything
For example `newcoin`, `coin`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.coin`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.coin.cooldown.ignore`
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
- Name `flectonepulse.module.command.coin.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->