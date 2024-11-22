# Комманды
Путь `messages > ru_ru.yml > module.command.*`

## Пояснение
Категория, отвечающая за сообщения комманд
- [Ball](/en/messages/ru_ru/module/command/ball/)
- [Ban](/en/messages/ru_ru/module/command/ban/)
- [Banlist](/en/messages/ru_ru/module/command/banlist/)
- [Broadcast](/en/messages/ru_ru/module/command/broadcast/)
- [Chatcolor](/en/messages/ru_ru/module/command/chatcolor/)
- [Chatsetting](/en/messages/ru_ru/module/command/chatsetting/)
- [Clearchat](/en/messages/ru_ru/module/command/clearchat/)
- [Clearmail](/en/messages/ru_ru/module/command/clearmail/)
- [Coin](/en/messages/ru_ru/module/command/coin/)
- [Dice](/en/messages/ru_ru/module/command/dice/)
- [Do](/en/messages/ru_ru/module/command/do/)
- [Flectonepulse](/en/messages/ru_ru/module/command/flectonepulse/)
- [Geolocate](/en/messages/ru_ru/module/command/geolocate/)
- [Helper](/en/messages/ru_ru/module/command/helper/)
- [Ignore](/en/messages/ru_ru/module/command/ignore/)
- [Ignorelist](/en/messages/ru_ru/module/command/ignorelist/)
- [Kick](/en/messages/ru_ru/module/command/kick/)
- [Mail](/en/messages/ru_ru/module/command/mail/)
- [Maintenance](/en/messages/ru_ru/module/command/maintenance/)
- [Me](/en/messages/ru_ru/module/command/me/)
- [Mute](/en/messages/ru_ru/module/command/mute/)
- [Mutelist](/en/messages/ru_ru/module/command/mutelist/)
- [Online](/en/messages/ru_ru/module/command/online/)
- [Poll](/en/messages/ru_ru/module/command/poll/)
- [Reply](/en/messages/ru_ru/module/command/reply/)
- [Rockpaperscissors](/en/messages/ru_ru/module/command/rockpaperscissors/)
- [Spy](/en/messages/ru_ru/module/command/spy/)
- [Stream](/en/messages/ru_ru/module/command/stream/)
- [Symbol](/en/messages/ru_ru/module/command/symbol/)
- [Tell](/en/messages/ru_ru/module/command/tell/)
- [Tictactoe](/en/messages/ru_ru/module/command/tictactoe/)
- [Translateto](/en/messages/ru_ru/module/command/translateto/)
- [Try](/en/messages/ru_ru/module/command/try/)
- [Unban](/en/messages/ru_ru/module/command/unban/)
- [Unmute](/en/messages/ru_ru/module/command/unmute/)
- [Unwarn](/en/messages/ru_ru/module/command/unwarn/)
- [Warn](/en/messages/ru_ru/module/command/warn/)
- [Warnlist](/en/messages/ru_ru/module/command/warnlist/)

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

- [Комманда](/en/commands/module/command/)
- [Права](/en/permissions/module/command/)

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