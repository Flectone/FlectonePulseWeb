# Command /spy
Path `config.yml > module.command.command-spy`

## Explanation
A command for spying on players' actions
![command spy](/commandspy.gif)

## Edit
```yaml
<config.module.command.command-spit>
```

### Default
```yaml
command-spy:
  enable: true
  range: -2
  aliases:
    - "spy"
  list:
    command:
      - "tell"
    action:
      - "anvil"
      - "book"
      - "sign"
      - "chat"
  permission:
    name: "flectonepulse.module.command.spy"
    type: OP
  listener:
    PlayerCommandPreprocessEvent: NORMAL
    InventoryClickEvent: NORMAL
    PlayerEditBookEvent: NORMAL
    SignChangeEvent: NORMAL
    AsyncPlayerChatEvent: LOWEST
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.spy.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.spy.sound"
      type: TRUE
```

## Options

- Messages are changed here [Spy](/en/messages/ru_ru/module/command/command-spy/)

### `enable`
- Default `true`

Enables or disables module functionality

### `range`
- Default `-2`

[Range](#range-types) how far into the blocks the message will be displayed

### `aliases`
- Default `spy`

List of aliases for using the command

::: tip Aliases can be anything
For example `newspy`, `track`, etc.
:::

### `list`
- Default:
```yaml
command:
  - "tell"
action:
  - "anvil"
  - "book"
  - "sign"
  - "chat"
```

List of categories with actions to spy on

### `permission`
- Name `flectonepulse.module.command.spy`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
PlayerCommandPreprocessEvent: NORMAL
InventoryClickEvent: NORMAL
PlayerEditBookEvent: NORMAL
SignChangeEvent: NORMAL
AsyncPlayerChatEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.spy.cooldown.ignore`
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
- Name `flectonepulse.module.command.spy.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/range.md-->
<!--@include: @/en/parts/listener.md-->