# Command /poll
Path `config.yml > module.command.command-poll`

## Explanation
Command to create a poll
![command poll](/commandpoll.png)

When the voting was over
![command poll end](/commandpollend.png)

## Edit
```yaml
<config.module.command.command-poll>
```

### Default
```yaml
command-poll:
  enable: true
  range: -2
  last-number: 1
  max-time: 60000
  aliases:
    - "poll"
  permission:
    name: "flectonepulse.module.command.poll"
    type: TRUE
  permission-create:
    name: "flectonepulse.module.command.poll.create"
    type: OP
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.poll.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.poll.sound"
      type: TRUE
```

## Options

- Messages are changed here [Poll](/en/messages/ru_ru/module/command/command-poll/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `last-number`
- Default `1`

The last number of the created vote

### `max-time`
- Default `60000`

Maximum voting time in seconds

### `aliases`
- Default `poll`

List of aliases for using the command

::: tip Aliases can be anything
For example `newpoll`, `poll`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.poll`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to voting

### `permission-create`
- Название `flectonepulse.module.command.poll.create`
- Тип `OP`

[Permission](/en/config/module/#explanation) to create a poll

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.poll.cooldown.ignore`
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
- Name `flectonepulse.module.command.poll.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->