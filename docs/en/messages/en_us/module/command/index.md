# Комманды
Путь `messages > en_us.yml > module.command.*`

## Пояснение
Категория, отвечающая за сообщения комманд
- [Ball](/en/messages/en_us/module/command/ball/)
- [Ban](/en/messages/en_us/module/command/ban/)
- [Banlist](/en/messages/en_us/module/command/banlist/)
- [Broadcast](/en/messages/en_us/module/command/broadcast/)
- [Chatcolor](/en/messages/en_us/module/command/chatcolor/)
- [Chatsetting](/en/messages/en_us/module/command/chatsetting/)
- [Clearchat](/en/messages/en_us/module/command/clearchat/)
- [Clearmail](/en/messages/en_us/module/command/clearmail/)
- [Coin](/en/messages/en_us/module/command/coin/)
- [Dice](/en/messages/en_us/module/command/dice/)
- [Do](/en/messages/en_us/module/command/do/)
- [Flectonepulse](/en/messages/en_us/module/command/flectonepulse/)
- [Geolocate](/en/messages/en_us/module/command/geolocate/)
- [Helper](/en/messages/en_us/module/command/helper/)
- [Ignore](/en/messages/en_us/module/command/ignore/)
- [Ignorelist](/en/messages/en_us/module/command/ignorelist/)
- [Kick](/en/messages/en_us/module/command/kick/)
- [Mail](/en/messages/en_us/module/command/mail/)
- [Maintenance](/en/messages/en_us/module/command/maintenance/)
- [Me](/en/messages/en_us/module/command/me/)
- [Mute](/en/messages/en_us/module/command/mute/)
- [Mutelist](/en/messages/en_us/module/command/mutelist/)
- [Online](/en/messages/en_us/module/command/online/)
- [Poll](/en/messages/en_us/module/command/poll/)
- [Reply](/en/messages/en_us/module/command/reply/)
- [Rockpaperscissors](/en/messages/en_us/module/command/rockpaperscissors/)
- [Spy](/en/messages/en_us/module/command/spy/)
- [Stream](/en/messages/en_us/module/command/stream/)
- [Symbol](/en/messages/en_us/module/command/symbol/)
- [Tell](/en/messages/en_us/module/command/tell/)
- [Tictactoe](/en/messages/en_us/module/command/tictactoe/)
- [Translateto](/en/messages/en_us/module/command/translateto/)
- [Try](/en/messages/en_us/module/command/try/)
- [Unban](/en/messages/en_us/module/command/unban/)
- [Unmute](/en/messages/en_us/module/command/unmute/)
- [Unwarn](/en/messages/en_us/module/command/unwarn/)
- [Warn](/en/messages/en_us/module/command/warn/)
- [Warnlist](/en/messages/en_us/module/command/warnlist/)

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

- [Комманда](/en/commands/module/command/)
- [Права](/en/permissions/module/command/)

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