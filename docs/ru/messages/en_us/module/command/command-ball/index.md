# Комманда /ball
Путь `messages > en_us.yml > module.command.ball`

## Пояснение
Сообщения для комманды `/ball`
![command ball](/commandball.png)

## Редактирование
```yaml
<en_us.module.command.ball>
```

### По умолчанию
```yaml
command-ball:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BALL</u> in <time>"
  answers:
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
  format: "<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>"
```

## Параметры

- Конфигурация происходит тут [Ball](/ru/config/module/command/command-ball/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BALL</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `answers`
- По умолчанию:
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

Список возможных ответов

### `format`
- По умолчанию `<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>`

Формат сообщения, которое будет отправлено

