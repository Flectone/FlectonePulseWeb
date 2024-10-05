# Дискорд
Путь `config.yml > module.integration.discord`

## Пояснение
Интеграция с Discord позволяет отправлять сообщения:
- из Minecraft в Discord
- из Discord в Minecraft

![discord message](/discordmessage.png)
![minecraft message](/discordminecraftmessage.png)


## Редактирование
```yaml
<config.module.integration.discord>
```

### По умолчанию
```yaml
discord:
  enable: false
  channel:
    FROM_DISCORD_TO_MINECRAFT: ""
    CHAT: ""
```

## Параметры

- Итоговый формат сообщения изменяется тут [Дискорд](/ru/messages/ru_ru/module/integration/discord/)

### `enable`
- По умолчанию `false`

::: warning Важно
- Перед включением, вставь **токен** бота Discord в [секретах](/ru/secrets/discord/)
- После включения, **ЖЕЛАТЕЛЬНО** перезагрузить сервер, иначе плагин может вызвать зависание
:::

Включает или выключает работоспособность модуля

### `channel`

Список [типов сообщений](#типы-сообщений) и [ID каналов](https://support.discord.com/hc/ru/articles/206346498-%D0%93%D0%B4%D0%B5-%D0%BC%D0%BD%D0%B5-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-ID-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F) в Discord

::: tip Например я хочу, чтобы из Minecraft отправлялось сообщение в Discord
1. Копирую ID канала в дискорде `1286666844358316083`
2. Прописываю `CHAT: "1286666844358316083"`

```yaml
channel:
  CHAT: "1286666844358316083" // [!code highlight]
```
:::

<!--@include: @/ru/parts/messagetag.md-->

