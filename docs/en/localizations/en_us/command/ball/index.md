# Комманда /ball
Путь `localizations > en_us.yml > command.ball`

## Пояснение
Сообщения для комманды `/ball`
![command ball](/commandball.png)

## Редактирование
```yaml
<en_us.command.ball>
```

### По умолчанию
```yaml
ball:
  format: "<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>"
  answers:
    - "Very doubtful"
    - "The prospects are not good"
    - "No."
    - "Don't even think about it"
    - "Concentrate and ask again"
    - "Can't predict now"
    - "It's better not to tell"
    - "Ask later"
    - "It's not clear yet, try again"
    - "Yes"
    - "Good prospects"
    - "Most likely"
    - "You can be sure of it"
    - "That's the base"
    - "Definitely yes"
    - "No doubt about it"
    - "Undeniably"
```

## Параметры

- [Комманда](/ru/command/ball/)
- [Права](/ru/permission/command/ball/)

### `format`
- По умолчанию `<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>`

Формат сообщения, которое будет отправлено

### `answers`
- По умолчанию:
```yaml
- "Very doubtful"
- "The prospects are not good"
- "No."
- "Don't even think about it"
- "Concentrate and ask again"
- "Can't predict now"
- "It's better not to tell"
- "Ask later"
- "It's not clear yet, try again"
- "Yes"
- "Good prospects"
- "Most likely"
- "You can be sure of it"
- "That's the base"
- "Definitely yes"
- "No doubt about it"
- "Undeniably"
```

Список возможных ответов

