# Command /maintenance
Path `config.yml > module.command.command-maintenance`

## Explanation
Command to enable maintenance
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

## Edit
```yaml
<config.module.command.command-maintenance>
```

### Default
```yaml
command-maintenance:
  enable: true
  turned-on: false
  aliases:
    - "maintenance"
  permission:
    name: "flectonepulse.module.command.maintenance"
    type: OP
  permission-join:
    name: "flectonepulse.module.command.maintenance.join"
    type: OP
  listener:
    AsyncPlayerPreLoginEvent: LOWEST
    ServerListPingEvent: LOWEST
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.maintenance.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.maintenance.sound"
      type: TRUE
```

## Options

- Messages are changed here [Maintenance](/en/messages/ru_ru/module/command/command-maintenance/)

### `enable`
- Default `true`

Enables or disables module functionality

### `turned-on`
- Default `false`

Enables or disables maintenance on the server

### `aliases`
- Default `maintenance`

List of aliases for using the command

::: tip Aliases can be anything
For example `newmaintenance`, `technical work`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.maintenance`
- Type `OP`

[Permission](/en/config/module/#explanation) to use the module

### `permission-join`
- Name `flectonepulse.module.command.maintenance.join`
- Type `OP`

[Permission](/en/config/module/#explanation) to log in to the server when it's on maintenance

### `listener`
- Default:
```yaml
AsyncPlayerPreLoginEvent: LOWEST
ServerListPingEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.maintenance.cooldown.ignore`
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
- Name `flectonepulse.module.command.maintenance.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

<!--@include: @/en/parts/listener.md-->