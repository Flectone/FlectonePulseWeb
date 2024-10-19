# Command /mutelist
Path `config.yml > module.command.command-mutelist`

## Explanation
Command to see the list of mutes

![command mutelist](/commandmutelist.png)

## Edit
```yaml
<config.module.command.command-mutelist>
```

### Default
```yaml
command-mutelist:
  enable: true
  range: -2
  per-page: 4
  aliases:
    - "mutelist"
  permission:
    name: "flectonepulse.module.command.mutelist"
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
      name: "flectonepulse.module.command.mutelist.cooldown.ignore"
      type: OP
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.command.mutelist.sound"
      type: TRUE
```

## Options

- Messages are changed here [Mutelist](/en/messages/ru_ru/module/command/command-mutelist/)

### `enable`
- Default `true`

Enables or disables module functionality

### `per-page`
- Default `4`

Number of components on one page

### `aliases`
- Default `mutelist`

List of aliases for using the command

::: tip Aliases can be anything
For example `newmutelist`, `listsmutelist`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.mutelist`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `global`

List of all valid mutes

::: details Setting GUI for `/mutelist` command without arguments

#### `gui`
- Default `false`

Switches the list view mode to GUI through the inventory

![command mutelist global gui](/commandmutelistglobalgui.png)

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

List of all the player's warns

::: details Setting GUI for the `/mutelist ник` command

#### `gui`
- Default `false`

Switches the list view mode to GUI through the inventory

![command mutelist player gui](/commandmutelistplayergui.png)

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
- Name `flectonepulse.module.command.mutelist.cooldown.ignore`
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
- Name `flectonepulse.module.command.mutelist.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::