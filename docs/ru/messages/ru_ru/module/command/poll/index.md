# Комманда /poll
Путь `messages > ru_ru.yml > module.command.poll`

## Пояснение
Сообщения для комманды `/poll`
![command poll](/commandpoll.png)

## Редактирование
```yaml
<ru_ru.module.command.poll>
```

### По умолчанию
```yaml
poll:
  null-poll: "<color:#ff7171><b>⁉</b> Голосование не найдено"
  expired: "<color:#ff7171><b>⁉</b> Голосование завершено"
  already: "<color:#ff7171><b>⁉</b> Ты уже проголосовал в этом голосовании"
  vote-true: "<color:#4eff52>👍 Ты выбрал <answer_id> в голосовании #<id>. Всего таких голосов <count>"
  vote-false: "<color:#ff4e4e>🖓 Ты передумал об <answer_id> в голосовании #<id>. Всего таких голосов <count> без тебя"
  count-answers: "<color:#4eff52><bold><count></bold> за [<answer_key>] - <answer_value> <br>"
  vote-button: "<color:#4eff52><hover:show_text:\"<color:#4eff52>Проголосовать за <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>"
  format-start: "<br><color:#fce303>🗐 Создано голосование #<id> <br>❓ <message> <br><answers>"
  format-over: "<br><color:#fce303>🗐 Голосование #<id> завершено <br>❓ <message> <br>Результат: <br><answers>"
```

## Параметры

- [Комманда](/ru/commands/module/command/poll/)
- [Права](/ru/permissions/module/command/poll/)

### `null-poll`
- По умолчанию `<color:#ff7171><b>⁉</b> Голосование не найдено`

Сообщение, если голосование не найдено

### `expired`
- По умолчанию `<color:#ff7171><b>⁉</b> Голосование завершено`

Сообщение, если игрок пытается проголосовать в голосовании, которое закончилось

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты уже проголосовал в этом голосовании`

Сообщение, если игрок пытается проголосовать в голосовании ещё один раз

### `vote-true`
- По умолчанию `<color:#4eff52>👍 Ты выбрал <answer_id> в голосовании #<id>. Всего таких голосов <count>`

Сообщение, если игрок проголосовал за какой-то вариант

### `vote-false`
- По умолчанию `<color:#ff4e4e>🖓 Ты передумал об <answer_id> в голосовании #<id>. Всего таких голосов <count> без тебя`

Сообщение, если игрок убрал свой голос

### `count-answers`
- По умолчанию `<color:#4eff52><bold><count></bold> за [<answer_key>] - <answer_value> <br>`

Формат сообщения для подсчёта голосов

### `vote-button`
- По умолчанию `<color:#4eff52><hover:show_text:\"<color:#4eff52>Проголосовать за <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>`

Формат сообщения для голоса за какой-то вариант

### `format-start`
- По умолчанию `<br><color:#fce303>🗐 Создано голосование #<id> <br>❓ <message> <br><answers>`

Форма сообщения для начала голосования

### `format-over`
- По умолчанию `<br><color:#fce303>🗐 Голосование #<id> завершено <br>❓ <message> <br>Результат: <br><answers>`

Формат сообщения для конца голосования


