# Дискорд
Путь `integration.yml >discord`

## Пояснение
Интеграция с Discord позволяет отправлять сообщения:
- из Minecraft в Discord
- из Discord в Minecraft

![discord message](/discordmessage.png)
![minecraft message](/discordminecraftmessage.png)


## Редактирование
```yaml
<integration.discord>
```

### По умолчанию
```yaml
discord:
  enable: false
  token: ""
  presence:
    enable: true
    status: "ONLINE"
    activity:
      enable: true
      type: "PLAYING"
      name: "FlectonePulse"
      url: "https://flectone.net/pulse/"
  channel-info:
    enable: false
    ticker:
      enable: true
      period: 1200
  message-channel:
    FROM_DISCORD_TO_MINECRAFT: ""
    CHAT: ""
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/integration/discord/)
- [Права](/ru/permission/integration/discord/)

### `enable`
- По умолчанию `false`

::: warning Важно
- Перед включением, вставь **токен** бота Discord
- После включения, **ЖЕЛАТЕЛЬНО** перезагрузить сервер, иначе плагин может вызвать зависание
:::

Включает или выключает работоспособность модуля

### `token`
- По умолчанию `пусто`

[Токен](https://discordgsm.com/guide/how-to-get-a-discord-bot-token) дискорд бота для подключения

### `presence`

![discord presence](/discordpresence.png)

::: details Настройка статуса бота
#### `enable`
- По умолчанию `true`

Включает или выключает кастомный статус бота

#### `status`
- По умолчанию `ONLINE`

Режим статуса

| Режим            | Пояснение                       |
|------------------|---------------------------------|
| `UNKNOWN`        | -                               |
| `ONLINE`         | В сети                          |
| `DO_NOT_DISTURB` | В сети, с режимом не беспокоить |
| `IDLE`           | В сети, но отошёл               |
| `INVISIBLE`      | Невидимый                       |
| `OFFLINE`        | Не в сети                       |

#### `activity`

Активность бота в дискорде

##### `enable`
- По умолчанию `true`

Включает или выключает активность

##### `type`
- По умолчанию `PLAYING`

Тип активности

| Тип         | Пояснение   |
|-------------|-------------|
| `UNKNOWN`   | -           |
| `STREAMING` | Стримит     |
| `LISTENING` | Слушает     |
| `WATCHING`  | Смотрит     |
| `CUSTOM`    | -           |
| `COMPETING` | Соревнуется |

##### `name`
- По умолчанию `FlectonePulse`

Название активности

##### `url`
- По умолчанию `https://flectone.net/pulse/`

Ссылка на активности

:::


### `channel-info`

![discord channel info](/discordchannelinfo.png)

::: details Настройка каналов с информацией
#### `enable`
- По умолчанию `true`

### `ticker`
- `enable: true`

Нужно ли обновлять канал раз в какой-то промежуток времени

- `period: 1200`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно обновлять

:::

### `message-channel`

Список [типов сообщений](#типы-сообщений) и [ID каналов](https://support.discord.com/hc/ru/articles/206346498-%D0%93%D0%B4%D0%B5-%D0%BC%D0%BD%D0%B5-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-ID-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F) в Discord

::: tip Например я хочу, чтобы из Minecraft отправлялось сообщение комманды `/ban` в Discord
1. Копирую ID канала в дискорде `1286666844358316083`
2. Прописываю `CHAT: "1286666844358316083"`

```yaml
message-channel:
  COMMAND_BAN: "1286666844358316083" // [!code highlight]
```
:::

<!--@include: @/ru/parts/messagetag.md-->

