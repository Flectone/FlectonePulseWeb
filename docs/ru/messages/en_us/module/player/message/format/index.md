# Форматирование
Путь `messages > en_us.yml > module.player.message.chat`

## Пояснение
Сообщения, которые форматируются

## Редактирование
```yaml
<en_us.module.player.message.format>
```

### По умолчанию
```yaml
format:
  mention: "<fcolor:2>@<player></fcolor>"
  swear: "❤"
  url: "<url:\"<message>\"><u>🗗 Url</u></url>"
  image: "<image:\"<message>\"><u>🖃 Image</u></image>"
  ping: "<fcolor:2><ping></fcolor>"
  tps: "<fcolor:2><tps></fcolor>"
  online: "<fcolor:2><online></fcolor>"
  coords: "<fcolor:2><x> <y> <z></fcolor>"
  stats: "<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖"
  skin: "<image:\"<message>><u>👨 Skin</u></image>"
  item: "<fcolor:2>[<message>]</fcolor>"
```

## Параметры

- Конфигурация происходит тут [Форматирование](/ru/config/module/player/message/format/)

### `mention`
- По умолчанию `<fcolor:2>@<player></fcolor>`

Сообщение, если это упоминание игрока
![mention](/mention.png)


### `swear`
- По умолчанию `❤`

Символ, которым заменяется каждая буква ругательства
![swear](/swear.png)

### `url`
- По умолчанию `<url:\"<message>\"><u>🗗 Url</u></url>`

Сообщение, если это ссылка
![url](/url.png)

### `image`
- По умолчанию `<image:\"<message>\"><u>🖃 Image</u></image>`

Сообщение, если это изображение
![image](/image.png)

### `ping`
- По умолчанию `<fcolor:2><ping></fcolor>`

Сообщение, если это пинг
![ping](/ping.png)

### `tps`
- По умолчанию `<fcolor:2><tps></fcolor>`

Сообщение, если это ТПС
![tps](/tps.png)

### `online`
- По умолчанию `<fcolor:2><online></fcolor>`

Сообщение, если это онлайн
![online](/online.png)

### `coords`
- По умолчанию `<fcolor:2><x> <y> <z></fcolor>`

Сообщение, если это координаты
![coords](/coords.png)

### `stats`
- По умолчанию `<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖`

Сообщение, если это статистика
![stats](/stats.png)

### `skin`
- По умолчанию `<image:\"<message>><u>👨 Скин</u></image>`

Сообщение, если это скин
![skin](/skin.png)

### `item`
- По умолчанию `<fcolor:2>[<message>]</fcolor>`

Сообщение, если это предмет
![item](/item.png)