# Комманды
Путь `messages > en_us.yml > module.command.*`

## Пояснение
Категория, отвечающая за сообщения комманд
- [Ball](/ru/messages/en_us/module/command/ball/)
- [Ban](/ru/messages/en_us/module/command/ban/)
- [Banlist](/ru/messages/en_us/module/command/banlist/)
- [Broadcast](/ru/messages/en_us/module/command/broadcast/)
- [Chatcolor](/ru/messages/en_us/module/command/chatcolor/)
- [Chatsetting](/ru/messages/en_us/module/command/chatsetting/)
- [Clearchat](/ru/messages/en_us/module/command/clearchat/)
- [Clearmail](/ru/messages/en_us/module/command/clearmail/)
- [Coin](/ru/messages/en_us/module/command/coin/)
- [Dice](/ru/messages/en_us/module/command/dice/)
- [Do](/ru/messages/en_us/module/command/do/)
- [Flectonepulse](/ru/messages/en_us/module/command/flectonepulse/)
- [Geolocate](/ru/messages/en_us/module/command/geolocate/)
- [Helper](/ru/messages/en_us/module/command/helper/)
- [Ignore](/ru/messages/en_us/module/command/ignore/)
- [Ignorelist](/ru/messages/en_us/module/command/ignorelist/)
- [Kick](/ru/messages/en_us/module/command/kick/)
- [Mail](/ru/messages/en_us/module/command/mail/)
- [Maintenance](/ru/messages/en_us/module/command/maintenance/)
- [Me](/ru/messages/en_us/module/command/me/)
- [Mute](/ru/messages/en_us/module/command/mute/)
- [Mutelist](/ru/messages/en_us/module/command/mutelist/)
- [Online](/ru/messages/en_us/module/command/online/)
- [Poll](/ru/messages/en_us/module/command/poll/)
- [Reply](/ru/messages/en_us/module/command/reply/)
- [Rockpaperscissors](/ru/messages/en_us/module/command/rockpaperscissors/)
- [Spy](/ru/messages/en_us/module/command/spy/)
- [Stream](/ru/messages/en_us/module/command/stream/)
- [Symbol](/ru/messages/en_us/module/command/symbol/)
- [Tell](/ru/messages/en_us/module/command/tell/)
- [Tictactoe](/ru/messages/en_us/module/command/tictactoe/)
- [Translateto](/ru/messages/en_us/module/command/translateto/)
- [Try](/ru/messages/en_us/module/command/try/)
- [Unban](/ru/messages/en_us/module/command/unban/)
- [Unmute](/ru/messages/en_us/module/command/unmute/)
- [Unwarn](/ru/messages/en_us/module/command/unwarn/)
- [Warn](/ru/messages/en_us/module/command/warn/)
- [Warnlist](/ru/messages/en_us/module/command/warnlist/)

## Редактирование
```yaml
<en_us.module.command>
```

### По умолчанию
```yaml
command:
  prompt:
    message: "message"
    hard: "hard"
    accept: "accept"
    turn: "turn on"
    reason: "reason"
    category: "category"
    id: "id"
    time: "time"
    multiple-vote: "multiple vote"
    player: "player"
    number: "number"
    color: "color"
    language: "language"
    url: "url"
    move: "move"
```

## Параметры

- [Комманда](/ru/commands/module/command/)
- [Права](/ru/permissions/module/command/)

### `prompt`

Форматирование подсказок, а именно

#### `message`
- По умолчанию `message`

Подсказка для комманд, в которых вводится сообщение

#### `hard`
- По умолчанию `hard`

Подсказка для комманд, в которых спрашивается про сложность

#### `accept`
- По умолчанию `accept`

Подсказка для комманд, в которых что-то принимается или отклоняется

#### `turn`
- По умолчанию `turn on`

Подсказка для комманд, в которых что-то включается или выключается

#### `reason`
- По умолчанию `reason`

Подсказка для комманд, в которых вводится причина

#### `category`
- По умолчанию `category`

Подсказка для комманд, в которых выбирается категория

#### `id`
- По умолчанию `id`

Подсказка для комманд, в которых вводится айди

#### `time`
- По умолчанию `time`

Подсказка для комманд, в которых вводится время

#### `multiple-vote`
- По умолчанию `multiple vote`

Подсказка для комманд, в которых спрашивается про мульти голосование

#### `player`
- По умолчанию `player`

Подсказка для комманд, в которых вводится игрок

#### `number`
- По умолчанию `number`

Подсказка для комманд, в которых вводится число

#### `color`
- По умолчанию `color`

Подсказка для комманд, в которых вводится цвет

#### `language`
- По умолчанию `language`

Подсказка для комманд, в которых вводится язык

#### `url`
- По умолчанию `url`

Подсказка для комманд, в которых вводится ссылка

#### `move`
- По умолчанию `move`

Подсказка для комманд, в которых выбирается ход