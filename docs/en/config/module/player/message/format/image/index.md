# Image
Path `config.yml > module.player.message.format.image`

## Explanation
This formatting replaces the image in any post with a clickable link and display using pixels
![image](https://i.imgur.com/CGmKXW7.png)
![image minecraft](/tagimageminecraft.png)

::: warning Important
The link will be formatted if it ends with the extension `.png`, `.jpg`, `.gif`, etc.
:::

The idea of pixelated images was taken [from here](https://github.com/QuiltServerTools/BlockBot/blob/5d5fa854002de2c12200edbe22f12382350ca7eb/src/main/kotlin/io/github/quiltservertools/blockbotdiscord/extensions/BlockBotApiExtension.kt#L136)

## Edit
```yaml
<config.module.player.message.format.image>
```

### Default
```yaml
image:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.image"
    type: TRUE
  trigger: "(?<!:\")((https?|ftp|gopher|telnet|file):\\/\\/(?:i\\.imgur\\.com|media\\.discordapp\\.net)\\/[\\w:#@%/;$()~_?+-=\\\\.&]*)"
```

## Options

- Format of the message is changed here [Image](/ru/messages/ru_ru/module/player/message/image/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.image`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `(?<!:\")((https?|ftp|gopher|telnet|file):\\/\\/(?:i\\.imgur\\.com|media\\.discordapp\\.net)\\/[\\w:#@%/;$()~_?+-=\\\\.&]*)`

[RegEx](https://javarush.com/en/groups/posts/en..regular-expressions-in-java-regex) to search links in the post on `imgur`, `discord` sites