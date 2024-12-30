# Форматирование
Путь `localizations > en_us.yml > message.format`

## Пояснение
Сообщения, которые форматируются

## Редактирование
```yaml
<en_us.message.format>
```

### По умолчанию
```yaml
format:
  tags:
    PING: "<fcolor:2><ping></fcolor>"
    TPS: "<fcolor:2><tps></fcolor>"
    ONLINE: "<fcolor:2><online></fcolor>"
    COORDS: "<fcolor:2><x> <y> <z></fcolor>"
    STATS: "<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖"
    SKIN: "<image:\"<message>\"><u>👨 Skin</u></image>"
    ITEM: "<fcolor:2>[<message>]</fcolor>"
    URL: "<click:open_url:\"<message>\"><hover:show_text:\"<fcolor:2>Open url <br><u><message>\"><fcolor:2><u>🗗 Url</u></fcolor:2></hover></click>"
    IMAGE: "<image:\"<message>\"><u>🖃 Image</u></image>"
```

## Параметры

- [Сообщения](/ru/message/format/)
- [Права](/ru/permission/message/format/)

### tags

::: details Настройка тегов
#### `url`
- По умолчанию `<click:open_url:\"<message>\"><hover:show_text:\"<fcolor:2>Открыть ссылку <br><u><message>\"><fcolor:2><u>🗗 Ссылка</u></fcolor:2></hover></click>`

Сообщение, если это ссылка
![url](/url.png)

#### `image`
- По умолчанию `<image:\"<message>\"><u>🖃 Картинка</u></image>`

Сообщение, если это изображение
![image](/image.png)

#### `ping`
- По умолчанию `<fcolor:2><ping></fcolor>`

Сообщение, если это пинг
![ping](/ping.png)

#### `tps`
- По умолчанию `<fcolor:2><tps></fcolor>`

Сообщение, если это ТПС
![tps](/tps.png)

#### `online`
- По умолчанию `<fcolor:2><online></fcolor>`

Сообщение, если это онлайн
![online](/online.png)

#### `coords`
- По умолчанию `<fcolor:2><x> <y> <z></fcolor>`

Сообщение, если это координаты
![coords](/coords.png)

#### `stats`
- По умолчанию `<color:#ff7171><hp>♥</color> <color:#3de0d8><armor>🛡 <color:#e33059><attack>🗡 <color:#4eff52><exp>⏺ <color:#f0a01f><food>🍖`

Сообщение, если это статистика
![stats](/stats.png)

#### `skin`
- По умолчанию `<image:\"<message>\"><u>👨 Скин</u></image>`

Сообщение, если это скин
![skin](/skin.png)

#### `item`
- По умолчанию `<fcolor:2>[<message>]</fcolor>`

Сообщение, если это предмет
![item](/item.png)
:::