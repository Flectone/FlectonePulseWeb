# Formatting
Path `messages > ru_ru.yml > module.player.message.chat`

## Explanation
Messages that are formatted

## Edit
```yaml
<ru_ru.module.player.message.format>
```

### Default
```yaml
format:
  mention: "<fcolor:2>@<player></fcolor>"
  swear: "❤"
  url: "<url:\"<message>\"><u>🗗 Ссылка</u></url>"
  image: "<image:\"<message>\"><u>🖃 Картинка</u></image>"
  ping: "<fcolor:2><ping></fcolor>"
  tps: "<fcolor:2><tps></fcolor>"
  online: "<fcolor:2><online></fcolor>"
  coords: "<fcolor:2><x> <y> <z></fcolor>"
  stats: "<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖"
  skin: "<image:\"<message>><u>👨 Скин</u></image>"
  item: "<fcolor:2>[<message>]</fcolor>"
```

## Options

- Configuration is here [Formatting](/en/config/module/player/message/format/)

### `mention`
- Default `<fcolor:2>@<player></fcolor>`

Message if it is a mention of a player
![mention](/mention.png)


### `swear`
- Default `❤`

The symbol with which each letter of wear word is replaced
![swear](/swear.png)

### `url`
- Default `<url:\"<message>\"><u>🗗 Ссылка</u></url>`

Message if it's a link
![url](/url.png)

### `image`
- Default `<image:\"<message>\"><u>🖃 Картинка</u></image>`

Message if it's an image
![image](/image.png)

### `ping`
- Default `<fcolor:2><ping></fcolor>`

Message if it's a ping
![ping](/ping.png)

### `tps`
- Default `<fcolor:2><tps></fcolor>`

Message if it's a TPS
![tps](/tps.png)

### `online`
- Default `<fcolor:2><online></fcolor>`

Message if it's a online
![online](/online.png)

### `coords`
- Default `<fcolor:2><x> <y> <z></fcolor>`

Message if it's a coords
![coords](/coords.png)

### `stats`
- Default `<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖`

Message if it's a stats
![stats](/stats.png)

### `skin`
- Default `<image:\"<message>><u>👨 Скин</u></image>`

Message if it's a skin
![skin](/skin.png)

### `item`
- Default `<fcolor:2>[<message>]</fcolor>`

Message if it's an item
![item](/item.png)