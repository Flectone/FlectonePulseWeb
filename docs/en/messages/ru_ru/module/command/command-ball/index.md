# Command /ball
Path `messages > ru_ru.yml > module.command.ball`

## Explanation
Messages for `/ball` command
![command ball](/commandball.png)

## Edit
```yaml
<ru_ru.module.command.ball>
```

### Default
```yaml
command-ball:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BALL</u> через <time>"
  answers:
    - "Бесспорно"
    - "Никаких сомнений"
    - "Определённо да"
    - "Это база"
    - "Можешь быть уверен в этом"
    - "Вероятнее всего"
    - "Хорошие перспективы"
    - "Да"
    - "Пока не ясно, попробуй снова"
    - "Спроси позже"
    - "Лучше не рассказывать"
    - "Сейчас нельзя предсказать"
    - "Сконцентрируйся и спроси опять"
    - "Даже не думай"
    - "Нет."
    - "Перспективы не очень хорошие"
    - "Весьма сомнительно"
  format: "<color:#9370DB>❓ <display_name> спросил: <message> <br>🔮 Магический шар: <u><answer></u>"
```

## Options

- Configuration is here [Ball](/en/config/module/command/command-ball/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>BALL</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `answers`
- Default:
```yaml
- "Undeniably"
- "No doubt about it"
- "Definitely yes"
- "That's the base"
- "You can be sure of it"
- "Most likely"
- "Good prospects"
- "Yes"
- "It's not clear yet, try again"
- "Ask later"
- "It's better not to tell"
- "Can't predict now"
- "Concentrate and ask again"
- "Don't even think about it"
- "No."
- "The prospects are not good"
- "Very doubtful"
```

List of possible answers

### `format`
- Default `<color:#9370DB>❓ <display_name> спросил: <message> <br>🔮 Магический шар: <u><answer></u>`

Format of message

