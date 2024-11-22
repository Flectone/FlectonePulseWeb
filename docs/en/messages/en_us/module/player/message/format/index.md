# Форматирование
Путь `messages > en_us.yml > module.player.message.format`

## Пояснение
Сообщения, которые форматируются

## Редактирование
```yaml
<en_us.module.player.message.format>
```

### По умолчанию
```yaml
format:
  url: "<click:open_url:\"<message>\"><hover:show_text:\"<fcolor:2>Open url <br><u><message>\"><fcolor:2><u>🗗 Url</u></fcolor:2></hover></click>"
  image: "<image:\"<message>\"><u>🖃 Image</u></image>"
  ping: "<fcolor:2><ping></fcolor>"
  tps: "<fcolor:2><tps></fcolor>"
  online: "<fcolor:2><online></fcolor>"
  coords: "<fcolor:2><x> <y> <z></fcolor>"
  stats: "<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖"
  skin: "<image:\"<message>\"><u>👨 Skin</u></image>"
  item: "<fcolor:2>[<message>]</fcolor>"
```

## Параметры

- [Конфиг](/en/config/module/player/message/format/)
- [Права](/en/permissions/module/player/message/format/)

### `url`
- По умолчанию `<click:open_url:\"<message>\"><hover:show_text:\"<fcolor:2>Open url <br><u><message>\"><fcolor:2><u>🗗 Url</u></fcolor:2></hover></click>`

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
- По умолчанию `<image:\"<message>\"><u>👨 Skin</u></image>`

Сообщение, если это скин
![skin](/skin.png)

### `item`
- По умолчанию `<fcolor:2>[<message>]</fcolor>`

Сообщение, если это предмет
![item](/item.png)