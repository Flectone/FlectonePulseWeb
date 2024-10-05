# Изображение
Путь `config.yml > module.player.message.format.image`

## Пояснение
Это форматирование заменяет в любом сообщении изображение на кликабельную ссылку и отображение с помощью пикселей
![image](https://i.imgur.com/CGmKXW7.png)
![image minecraft](/tagimageminecraft.png)

::: warning Важно
Ссылка будет отформатирована, если оканчивается расширением `.png`, `.jpg`, `.gif` и т.д.
:::

Идея пиксельных изображений была взята [отсюда](https://github.com/QuiltServerTools/BlockBot/blob/5d5fa854002de2c12200edbe22f12382350ca7eb/src/main/kotlin/io/github/quiltservertools/blockbotdiscord/extensions/BlockBotApiExtension.kt#L136)

## Редактирование
```yaml
<config.module.player.message.format.image>
```

### По умолчанию
```yaml
image:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.image"
    type: TRUE
  trigger: "(?<!:\")((https?|ftp|gopher|telnet|file):\\/\\/(?:i\\.imgur\\.com|media\\.discordapp\\.net)\\/[\\w:#@%/;$()~_?+-=\\\\.&]*)"
```

## Параметры

- Формат сообщения изменяется тут [Изображение](/ru/messages/ru_ru/module/player/message/image/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.image`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `(?<!:\")((https?|ftp|gopher|telnet|file):\\/\\/(?:i\\.imgur\\.com|media\\.discordapp\\.net)\\/[\\w:#@%/;$()~_?+-=\\\\.&]*)`

[Регулярное выражение](https://javarush.com/groups/posts/regulyarnye-vyrazheniya-v-java) для поиска ссылки в сообщении на сайтах `imgur`, `discord`