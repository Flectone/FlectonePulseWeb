# Комманды
Путь `messages > ru_ru.yml > module.command.*`

## Пояснение
Категория, отвечающая за сообщения комманд
- [Ball](/ru/messages/ru_ru/module/command/ball/)
- [Ban](/ru/messages/ru_ru/module/command/ban/)
- [Banlist](/ru/messages/ru_ru/module/command/banlist/)
- [Broadcast](/ru/messages/ru_ru/module/command/broadcast/)
- [Chatcolor](/ru/messages/ru_ru/module/command/chatcolor/)
- [Chatsetting](/ru/messages/ru_ru/module/command/chatsetting/)
- [Clearchat](/ru/messages/ru_ru/module/command/clearchat/)
- [Clearmail](/ru/messages/ru_ru/module/command/clearmail/)
- [Coin](/ru/messages/ru_ru/module/command/coin/)
- [Dice](/ru/messages/ru_ru/module/command/dice/)
- [Do](/ru/messages/ru_ru/module/command/do/)
- [Flectonepulse](/ru/messages/ru_ru/module/command/flectonepulse/)
- [Geolocate](/ru/messages/ru_ru/module/command/geolocate/)
- [Helper](/ru/messages/ru_ru/module/command/helper/)
- [Ignore](/ru/messages/ru_ru/module/command/ignore/)
- [Ignorelist](/ru/messages/ru_ru/module/command/ignorelist/)
- [Kick](/ru/messages/ru_ru/module/command/kick/)
- [Mail](/ru/messages/ru_ru/module/command/mail/)
- [Maintenance](/ru/messages/ru_ru/module/command/maintenance/)
- [Me](/ru/messages/ru_ru/module/command/me/)
- [Mute](/ru/messages/ru_ru/module/command/mute/)
- [Mutelist](/ru/messages/ru_ru/module/command/mutelist/)
- [Online](/ru/messages/ru_ru/module/command/online/)
- [Poll](/ru/messages/ru_ru/module/command/poll/)
- [Reply](/ru/messages/ru_ru/module/command/reply/)
- [Rockpaperscissors](/ru/messages/ru_ru/module/command/rockpaperscissors/)
- [Spy](/ru/messages/ru_ru/module/command/spy/)
- [Stream](/ru/messages/ru_ru/module/command/stream/)
- [Symbol](/ru/messages/ru_ru/module/command/symbol/)
- [Tell](/ru/messages/ru_ru/module/command/tell/)
- [Tictactoe](/ru/messages/ru_ru/module/command/tictactoe/)
- [Translateto](/ru/messages/ru_ru/module/command/translateto/)
- [Try](/ru/messages/ru_ru/module/command/try/)
- [Unban](/ru/messages/ru_ru/module/command/unban/)
- [Unmute](/ru/messages/ru_ru/module/command/unmute/)
- [Unwarn](/ru/messages/ru_ru/module/command/unwarn/)
- [Warn](/ru/messages/ru_ru/module/command/warn/)
- [Warnlist](/ru/messages/ru_ru/module/command/warnlist/)

## Редактирование
```yaml
<ru_ru.module.command>
```

### По умолчанию
```yaml
command:
  prompt:
    message: "сообщение"
    hard: "сложно?"
    accept: "принять"
    turn: "включить"
    reason: "причина"
    category: "категория"
    id: "айди"
    time: "время"
    multiple-vote: "мульти голосование"
    player: "игрок"
    number: "число"
    color: "цвет"
    language: "язык"
    url: "ссылка"
    move: "ход"
```

## Параметры

- [Комманда](/ru/commands/module/command/)
- [Права](/ru/permissions/module/command/)

### `prompt`

Форматирование подсказок, а именно

#### `message`
- По умолчанию `сообщение`

Подсказка для комманд, в которых вводится сообщение

#### `hard`
- По умолчанию `сложно?`

Подсказка для комманд, в которых спрашивается про сложность

#### `accept`
- По умолчанию `принять`

Подсказка для комманд, в которых что-то принимается или отклоняется

#### `turn`
- По умолчанию `включить`

Подсказка для комманд, в которых что-то включается или выключается

#### `reason`
- По умолчанию `причина`

Подсказка для комманд, в которых вводится причина

#### `category`
- По умолчанию `категория`

Подсказка для комманд, в которых выбирается категория

#### `id`
- По умолчанию `айди`

Подсказка для комманд, в которых вводится айди

#### `time`
- По умолчанию `время`

Подсказка для комманд, в которых вводится время

#### `multiple-vote`
- По умолчанию `мульти голосование`

Подсказка для комманд, в которых спрашивается про мульти голосование

#### `player`
- По умолчанию `игрок`

Подсказка для комманд, в которых вводится игрок

#### `number`
- По умолчанию `число`

Подсказка для комманд, в которых вводится число

#### `color`
- По умолчанию `цвет`

Подсказка для комманд, в которых вводится цвет

#### `language`
- По умолчанию `язык`

Подсказка для комманд, в которых вводится язык

#### `url`
- По умолчанию `ссылка`

Подсказка для комманд, в которых вводится ссылка

#### `move`
- По умолчанию `ход`

Подсказка для комманд, в которых выбирается ход