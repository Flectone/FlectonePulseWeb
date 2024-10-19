# Command /ignorelist
Path `config.yml > module.command.command-ignorelist`

## Explanation
Command to see your ignore list
![command ignorelist](/commandignorelist.png)

## Edit
```yaml
<config.module.command.command-ignorelist>
```

### Default
```yaml
command-ignorelist:
 enable: true
 per-page: 4
 aliases:
   - "ignorelist"
 permission:
   name: "flectonepulse.module.command.ignorelist"
   type: TRUE
 gui:
   enable: false
   size: 45
   previous-material: "RED_STAINED_GLASS_PANE"
   next-material: "GREEN_STAINED_GLASS_PANE"
 cooldown:
   enable: false
   duration: 60
   permission-ignore:
     name: "flectonepulse.module.command.ignorelist.cooldown.ignore"
     type: OP
 sound:
   enable: false
   type: "BLOCK_NOTE_BLOCK_BELL:1:1"
   permission:
     name: "flectonepulse.module.command.ignorelist.sound"
     type: TRUE
```

## Options

- Messages are changed here [Ignorelist](/en/messages/ru_ru/module/command/command-ignorelist/)

### `enable`
- Default `true`

Enables or disables module functionality

### `per-page`
- Default `4`

Number of components on one page

### `aliases`
- Default `ignorelist`

List of aliases for using the command

::: tip Aliases can be anything
For example `newignorelist`, `spisokignorelist`, etc.
:::

### `permission`
- Name `flectonepulse.module.command.ignorelist`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `gui`
- Default `false`

Switches the list view mode to GUI through the inventory

![command ignorelist gui](/commandignorelistgui.png)

::: details Setting GUI
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

### `cooldown`
- Default `false`

Enables cooldown for the player between uses

::: details Cooldown setting
#### `duration: 60`

How many [ticks](https://minecraft.wiki/w/Tick) must elapse between uses

#### `permission-ignore`
- Name `flectonepulse.module.command.ignorelist.sound`
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
- Name `flectonepulse.module.command.ignorelist.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::