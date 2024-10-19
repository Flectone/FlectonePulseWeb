# Advancement
Path `config.yml > module.server.message.advancement`

## Explanation
A message from server when a player gets an achievement
![task](/task.png)

## Edit
```yaml
<config.module.server.message.advancement>
```

### Default
```yaml
advancement:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.advancement"
    type: TRUE
  announce:
    enable: false
    worlds: []
  type:
    TASK: true
    GOAL: true
    CHALLENGE: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.advancement.sound"
      type: TRUE
  listener:
    PlayerAdvancementDoneEvent: LOWEST
```

## Options

- Messages are changed here [Advancement](/en/messages/en_us/module/server/message/advancement/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.server.message.advancement`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `announce`
- Default `false`

Enables vanilla display of achievements from server

:::: danger Achievements are not shown after removing the plugin !?!?
1. Reinstall the plugin
2. Enable [`announce: true`](#announce)
3. Turn on all worlds in `worlds` to `true`.
4. Restart the server and you can delete the plugin!

---
or use the command `/execute in name_worlds run gamerule announceAdvancements true`.
:::

- `worlds` - list of world names with vanilla achievement mapping
::: tip Need to understand
If `announce: false`, then all worlds in `worlds` will hide the vanilla achievement display
:::

### `type`

List of all [types](#types-achievements) and their displays

::: tip For example, I want the normal achievements not to be displayed
Then I change `TASK: false` and now default achievements will not be shown
:::

### `sound`
- Default `false`

Turns on sound playback when using

::: details Sound setting
### `type`
- Default `BLOCK_NOTE_BLOCK_BELL:1:1`

Specifies the type (`BLOCK_NOTE_BLOCK_BELL`), volume (`1`) and pitch (`1`) of the sound via `:`

### `permission`
- Name `flectonepulse.module.server.message.advancement.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::

### `listener`
- Default:
```yaml
PlayerAdvancementDoneEvent: LOWEST
```

List of event listeners and their [priority](#event-priority)

## Types achievements
| Type        | In game                        |
|-------------|--------------------------------|
| `TASK`      | ![task](/task.png)             |
| `GOAL`      | ![goal](/goal.png)             |
| `CHALLENGE` | ![challenge](/challenge.png)   |

<!--@include: @/en/parts/listener.md-->