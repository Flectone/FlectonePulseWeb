# Command /chatsetting
Path `config.yml > module.command.command-chatsetting`

## Explanation
Command to customize chat
![command chatsetting](/commandchatsetting.png)


## Edit
```yaml
<config.module.command.command-chatsetting>
```

### Default
```yaml
    command-chatsetting:
      enable: true
      aliases:
        - "chatsetting"
      settings:
        TELL:
          slot: 16
          permission:
            name: "flectonepulse.module.command.chatsetting.tell"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        DO:
          slot: 23
          permission:
            name: "flectonepulse.module.command.chatsetting.do"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        AFK:
          slot: 25
          permission:
            name: "flectonepulse.module.command.chatsetting.afk"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        ADVANCEMENT:
          slot: 4
          permission:
            name: "flectonepulse.module.command.chatsetting.advancement"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        WARN:
          slot: 15
          permission:
            name: "flectonepulse.module.command.chatsetting.warn"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        JOIN:
          slot: 6
          permission:
            name: "flectonepulse.module.command.chatsetting.join"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        ROCKPAPERSCISSORS:
          slot: 29
          permission:
            name: "flectonepulse.module.command.chatsetting.rockpaperscissors"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        GREETING:
          slot: 28
          permission:
            name: "flectonepulse.module.command.chatsetting.greeting"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        DICE:
          slot: 11
          permission:
            name: "flectonepulse.module.command.chatsetting.dice"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        BAN:
          slot: 14
          permission:
            name: "flectonepulse.module.command.chatsetting.ban"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        KICK:
          slot: 20
          permission:
            name: "flectonepulse.module.command.chatsetting.kick"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        QUIT:
          slot: 7
          permission:
            name: "flectonepulse.module.command.chatsetting.quit"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        CHAT:
          slot: 0
          permission:
            name: "flectonepulse.module.command.chatsetting.chat"
            type: TRUE
          materials:
            - YELLOW_CONCRETE
        TICTACTOE:
          slot: 19
          permission:
            name: "flectonepulse.module.command.chatsetting.tictactoe"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        COLOR:
          slot: 1
          permission:
            name: "flectonepulse.module.command.chatsetting.color"
            type: TRUE
          materials:
            - YELLOW_CONCRETE
        MUTE:
          slot: 13
          permission:
            name: "flectonepulse.module.command.chatsetting.mute"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        REPLY:
          slot: 17
          permission:
            name: "flectonepulse.module.command.chatsetting.reply"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        COIN:
          slot: 24
          permission:
            name: "flectonepulse.module.command.chatsetting.coin"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        DEATH:
          slot: 5
          permission:
            name: "flectonepulse.module.command.chatsetting.death"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        TRANSLATETO:
          slot: 21
          permission:
            name: "flectonepulse.module.command.chatsetting.translateto"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        BALL:
          slot: 12
          permission:
            name: "flectonepulse.module.command.chatsetting.ball"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        STREAM:
          slot: 2
          permission:
            name: "flectonepulse.module.command.chatsetting.stream"
            type: OP
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        SPIT:
          slot: 27
          permission:
            name: "flectonepulse.module.command.chatsetting.spit"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        MAIL:
          slot: 18
          permission:
            name: "flectonepulse.module.command.chatsetting.mail"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        SPY:
          slot: 3
          permission:
            name: "flectonepulse.module.command.chatsetting.spy"
            type: OP
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        POLL:
          slot: 26
          permission:
            name: "flectonepulse.module.command.chatsetting.poll"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        ME:
          slot: 9
          permission:
            name: "flectonepulse.module.command.chatsetting.me"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        TRY:
          slot: 10
          permission:
            name: "flectonepulse.module.command.chatsetting.try"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        AUTOMESSAGE:
          slot: 8
          permission:
            name: "flectonepulse.module.command.chatsetting.automessage"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
        BROADCAST:
          slot: 22
          permission:
            name: "flectonepulse.module.command.chatsetting.broadcast"
            type: TRUE
          materials:
            - LIME_CONCRETE
            - RED_CONCRETE
      permission:
        name: "flectonepulse.module.command.chatsetting"
        type: TRUE
      permission-other:
        name: "flectonepulse.module.command.chatsetting.other"
        type: OP
      cooldown:
        enable: false
        duration: 60
        permission-ignore:
          name: "flectonepulse.module.command.chatsetting.cooldown.ignore"
          type: OP
      sound:
        enable: false
        type: "BLOCK_NOTE_BLOCK_BELL:1:1"
        permission:
          name: "flectonepulse.module.command.chatsetting.sound"
          type: TRUE
```

## Options

- Messages are changed here [Chatsetting](/en/messages/ru_ru/module/command/command-chatsetting/)

### `enable`
- Default `true`

Enables or disables module functionality

### `aliases`
- Default `chatsetting`

List of aliases for using the command

::: tip Aliases can be anything
For example `newchatsetting`, `chatsetting`, etc.
:::

### `settings`

List of settings that can be changed

::: tip Example of setting `TELL`
#### `slot`
- Default `16`

The inventory slot where setting will take place

#### `permission`
- Name `flectonepulse.module.command.chatsetting.tell`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to change the `tell` setting

#### `materials`
- Default:
```yaml
- LIME_CONCRETE
- RED_CONCRETE
```

List of materials that will be used to display the setting status

`LIME_CONCRETE` first material, displayed when the setting is enabled <br>
`RED_CONCRETE` second material, displayed when the setting is off

:::

### `permission`
- Name `flectonepulse.module.command.chatsetting`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use chatsetting

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.chatsetting.cooldown.ignore`
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
- Name `flectonepulse.module.command.chatsetting.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::