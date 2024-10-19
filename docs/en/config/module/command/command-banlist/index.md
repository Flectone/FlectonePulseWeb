# Command /banlist
Path `config.yml > module.command.command-banlist`

## Explanation
Command to see the list of bans
![command banlist](/commandbanlist.png)

## Edit
```yaml
<config.module.command.command-banlist>
```

### Default
```yaml
command-banlist:
  enable: true
  per-page: 4
  aliases:
    - "banlist"
  permission:
    name: "flectonepulse.module.command.banlist"
    type: OP
  global:
    gui:
      enable: false
      size: 45
      previous-material: "RED_STAINED_GLASS_PANE"
      next-material: "GREEN_STAINED_GLASS_PANE"
  player:
    gui:
      enable: false
      size: 45
      previous-material: "RED_STAINED_GLASS_PANE"
      next-material: "GREEN_STAINED_GLASS_PANE"
  cooldown:
    enable: false
    duration: 60
    permission-ignore:
      name: "flectonepulse.module.command.banlist.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.banlist.sound"
      type: TRUE
```

## Options

- Messages are changed here [Banlist](/en/messages/ru_ru/module/command/command-banlist/)

### `enable`
- Default `true`

Enables or disables module functionality

### `per-page`
- Default `4`

Number of components on one page

### `aliases`
- Default `banlist`

List of aliases for using the command

::: tip Aliases can be anything
For example `newbanlist`, `listbans`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.banlist`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `global`

List of all valid bans

::: details Setting GUI for `/banlist` command without arguments

#### `gui`
- Default `false`

Switches the list view mode to GUI through the inventory

![command banlist global gui](/commandbanlistglobalgui.png)

#### `size`
- Default `45`

The size of the inventory in which the list will be

#### We need to understand
1. The size should match the size of the inventory found in minecraft
2. The bottom of the inventory will be occupied by [previos-material](#previos-material) and [next-material](#next-material)

#### `previos-material`
- Default `RED_STAINED_GLASS_PANE`

Name of the [item](https://minecraft.wiki/w/Materials) that will be used to switch to the previous page of the list

#### `next-material`
- По умолчанию `GREEN_STAINED_GLASS_PANE`

Name of the [item](https://minecraft.wiki/w/Materials) to be used to switch to the next page in the list

:::

### `player`

List of all the player's bans

::: details Setting GUI for the `/banlist nickname` command

#### `gui`
- Default `false`

Switches the list view mode to GUI through the inventory

![command banlist player gui](/commandbanlistplayergui.png)

#### `size`
- Default `45`

The size of the inventory in which the list will be

#### We need to understand
1. The size should match the size of the inventory found in minecraft
2. The bottom of the inventory will be occupied by [previos-material](#previos-material) and [next-material](#next-material)

#### `previos-material`
- Default `RED_STAINED_GLASS_PANE`

Name of the [item](https://minecraft.wiki/w/Materials) that will be used to switch to the previous page of the list

#### `next-material`
- Default `GREEN_STAINED_GLASS_PANE`

Name of the [item](https://minecraft.wiki/w/Materials) to be used to switch to the next page in the list

:::

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.banlist.cooldown.ignore`
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
- Name `flectonepulse.module.command.banlist.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::