# Emoji
Path `config.yml > module.tag.emoji`

## Explanation
The `emoji` tag is used to replace text emoticons with Unicode emoticons

Usage: `emoji`

![emoji message](/emojimessage.png)
![emoji minecraft](/emojiminecraft.png)

When you click on such an emoticon, it will be copied into the chat room
![emoji gif](/emoji.gif)

## Edit
```yaml
<config.module.tag.emoji>
```

### Default
```yaml
emoji:
  enable: true
  permission:
    name: "flectonepulse.module.tag.emoji"
    type: TRUE
  list:
    - target: ":)"
      replacement: "☺"
      hover: "<fcolor:1>:)"
    - target: ":D"
      replacement: "☻"
      hover: "<fcolor:1>:D"
    - target: ":("
      replacement: "☹"
      hover: "<fcolor:1>:("
    - target: ":ok:"
      replacement: "🖒"
      hover: "<fcolor:1>:ok:"
    - target: ":+1:"
      replacement: "🖒"
      hover: "<fcolor:1>:+1:"
    - target: ":-1:"
      replacement: "🖓"
      hover: "<fcolor:1>:-1:"
    - target: ":cool:"
      replacement: "😎"
      hover: "<fcolor:1>:cool:"
    - target: "B)"
      replacement: "😎"
      hover: "<fcolor:1>B)"
    - target: ":clown:"
      replacement: "🤡"
      hover: "<fcolor:1>:clown:"
    - target: "<3"
      replacement: "❤"
      hover: "<fcolor:1><3"
    - target: "XD"
      replacement: "😆"
      hover: "<fcolor:1>XD"
    - target: "%)"
      replacement: "😵"
      hover: "<fcolor:1>%)"
    - target: "=D"
      replacement: "😃"
      hover: "<fcolor:1>=D"
    - target: ">:("
      replacement: "😡"
      hover: "<fcolor:1>>:("
    - target: ":idk:"
      replacement: "¯\\_(ツ)_/¯"
      hover: "<fcolor:1>:idk:"
    - target: ":angry:"
      replacement: "(╯°□°)╯︵ ┻━┻"
      hover: "<fcolor:1>:angry:"
    - target: ":happy:"
      replacement: "＼(＾O＾)／"
      hover: "<fcolor:1>:happy:"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.tag.emoji`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `list`

A list of all available emoticons, each with:
- `target` - what text to replace with
- `replacement` - what text to replace with
- `hover` - hover message

::: tip For example, there is a smiley
```yaml
target: ":)"
replacement: "☺"
hover: "<fcolor:1>:)"
```

The message `:)` will be replaced by `☺`.
![emoji minecraft](/emojiminecraft.png)
:::