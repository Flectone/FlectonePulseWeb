# Mention
Path `config.yml > module.player.message.format.mention`

## Explanation
This formatting allows you to mention (ping) player in the message
![mention](/mention.png)

## Edit
```yaml
<config.module.player.message.format.mention>
```

### Default
```yaml
mention:
  enable: true
  trigger: "@"
  permission:
    name: "flectonepulse.module.player.message.format.mention"
    type: TRUE
  sound:
    enable: true
    type: "ENTITY_EXPERIENCE_ORB_PICKUP:0.1:0.1"
    permission:
      name: "flectonepulse.module.player.message.format.mention.sound"
      type: TRUE
```

## Options

- Format of the mention is changed here [Mention](/en/messages/en_us/module/player/message/mention/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `trigger`
- Default `@`

Character with which the mention message should begin
::: tip For example
If I want to mention `Flectone`, I should write `@Flectone`
![mention](/mention.png)
:::

### `permission`
- Name `flectonepulse.module.player.message.format.mention`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `sound`
- Default `true`

Turns on sound playback when using

::: details Sound setting
### `type`
- Default `ENTITY_EXPERIENCE_ORB_PICKUP:0.1:0.1`

Specifies the type (`ENTITY_EXPERIENCE_ORB_PICKUP`), volume (`0.1`), and tone (`0.1`) of the sound via `:`

### `permission`
- Name `flectonepulse.module.player.message.format.mention.sound`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to play sound
:::