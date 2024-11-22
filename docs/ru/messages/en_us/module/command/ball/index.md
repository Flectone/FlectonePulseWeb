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
ball:
  format: "<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>"
  answers:
    - "Undeniable"
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
    - "Prospects are not good"
    - "Very doubtful"
```

## Параметры

- [Комманда](/ru/commands/module/command/ball/)
- [Права](/ru/permissions/module/command/ball/)

### `format`
- По умолчанию `<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>`

Формат сообщения, которое будет отправлено

### `answers`
- По умолчанию:
```yaml
- "Undeniable"
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
- "Prospects are not good"
- "Very doubtful"
```

Список возможных ответов

