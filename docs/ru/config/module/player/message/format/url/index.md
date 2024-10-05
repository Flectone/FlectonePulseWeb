# Ссылка
Путь `config.yml > module.player.message.format.url`

## Пояснение
Это форматирование заменяет в любом сообщении ссылку на кликабельную ссылку
![url](/url.png)

## Редактирование
```yaml
<config.module.player.message.format.url>
```

### По умолчанию
```yaml
url:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.url"
    type: TRUE
  trigger: "(?<!:\")((https?|ftp|gopher|telnet|file):((//)|(\\\\))+[\\w:#@%/;$()~_?+-=\\\\.&]*)"
```

## Параметры

- Формат сообщения изменяется тут [Ссылка](/ru/messages/ru_ru/module/player/message/url/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.player.message.format.url`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `trigger`
- По умолчанию `(?<!:\")((https?|ftp|gopher|telnet|file):((//)|(\\\\))+[\\w:#@%/;$()~_?+-=\\\\.&]*)`

[Регулярное выражение](https://javarush.com/groups/posts/regulyarnye-vyrazheniya-v-java) для поиска ссылки в сообщении