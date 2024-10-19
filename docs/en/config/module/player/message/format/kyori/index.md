# Kyori Adventure
Path `config.yml > module.player.message.format.kyori.*`

## Explanation
This formatting allows you to use [MiniMessage](https://docs.advntr.dev/minimessage/format.html#standard-tags)

## Edit
```yaml
<config.module.player.message.format.kyori>
```

### Default
```yaml
kyori:
  hover:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.hover"
      type: OP
  click:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.click"
      type: OP
  color:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.color"
      type: OP
  keybind:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.keybind"
      type: OP
  translatable:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.translatable"
      type: OP
  translatable_fallback:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.translatable_fallback"
      type: OP
  insertion:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.insertion"
      type: OP
  font:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.font"
      type: OP
  decoration:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.decoration"
      type: TRUE
  gradient:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.gradient"
      type: OP
  rainbow:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.rainbow"
      type: OP
  reset:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.reset"
      type: OP
  newline:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.newline"
      type: OP
  transition:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.transition"
      type: OP
  selector:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.selector"
      type: OP
  score:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.score"
      type: OP
  nbt:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.nbt"
      type: OP
```

## Options

### `enable`

Enables or disables the functionality of the module

### `permission`

[Permission](/en/config/module/#explanation) to use tag

## [Tag types](https://docs.advntr.dev/minimessage/format.html#standard-tags)

| Tag                       | Usage                                                                             | Description                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)                    | Text on hover                                                                                 |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)                    | Action when clicked                                                                           |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)                    | Color                                                                                         |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)                | Customizing keys for the message                                                              |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable)      | Message using the player's locale                                                             |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable)      | Message using the player's locale                                                             |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)            | Inserting text into chat using SHIFT                                                          |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)                      | Changing the text font                                                                        |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration)          | Standard minecraft decorations  `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated` |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)              | Gradient text color                                                                           |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)                | Rainbow text color                                                                            |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)                    | Reset all tags and decorations                                                                |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)                | Change to a new line, replacing `\n`                                                          |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition)          | Transition between two colors                                                                 |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)              | Mob Selector                                                                                  |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)                    | Value of the team (scoreboard)                                                                |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)                        | Inserting NBT component                                                                       |
