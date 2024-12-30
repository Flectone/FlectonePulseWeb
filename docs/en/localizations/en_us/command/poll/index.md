# Комманда /poll
Путь `localizations > en_us.yml > command.poll`

## Пояснение
Сообщения для комманды `/poll`
![command poll](/commandpoll.png)

## Редактирование
```yaml
<en_us.command.poll>
```

### По умолчанию
```yaml
poll:
  null-poll: "<color:#ff7171><b>⁉</b> This poll does not exist"
  expired: "<color:#ff7171><b>⁉</b> This poll has already ended"
  already: "<color:#ff7171><b>⁉</b> You've already voted in this poll"
  vote-true: "<color:#4eff52>👍 You voted for <answer_id> in poll #<id>. There are <count> of you"
  vote-false: "<color:#ff4e4e>🖓 You rejected <answer_id> in poll #<id>. There are <count> without you"
  count-answers: "<color:#4eff52><bold><count></bold> for [<answer_key>] - <answer_value> <br>"
  vote-button: "<color:#4eff52><hover:show_text:\"<color:#4eff52>Vote for <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>"
  format-start: "<br><color:#fce303>🗐 There's a poll #<id> going on right now <br>❓ <message> <br><answers>"
  format-over: "<br><color:#fce303>🗐 Poll #<id> is over <br>❓ <message> <br>Votes: <br><answers>"
```

## Параметры

- [Комманда](/ru/command/poll/)
- [Права](/ru/permission/command/poll/)

### `null-poll`
- По умолчанию `<color:#ff7171><b>⁉</b> This poll does not exist`

Сообщение, если голосование не найдено

### `expired`
- По умолчанию `<color:#ff7171><b>⁉</b> This poll has already ended`

Сообщение, если игрок пытается проголосовать в голосовании, которое закончилось

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You've already voted in this poll`

Сообщение, если игрок пытается проголосовать в голосовании ещё один раз

### `vote-true`
- По умолчанию `<color:#4eff52>👍 You voted for <answer_id> in poll #<id>. There are <count> of you`

Сообщение, если игрок проголосовал за какой-то вариант

### `vote-false`
- По умолчанию `<color:#ff4e4e>🖓 You rejected <answer_id> in poll #<id>. There are <count> without you`

Сообщение, если игрок убрал свой голос

### `count-answers`
- По умолчанию `<color:#4eff52><bold><count></bold> for [<answer_key>] - <answer_value> <br>`

Формат сообщения для подсчёта голосов

### `vote-button`
- По умолчанию `<color:#4eff52><hover:show_text:\"<color:#4eff52>Vote for <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>`

Формат сообщения для голоса за какой-то вариант

### `format-start`
- По умолчанию `<br><color:#fce303>🗐 There's a poll #<id> going on right now <br>❓ <message> <br><answers>`

Форма сообщения для начала голосования

### `format-over`
- По умолчанию `<br><color:#fce303>🗐 Poll #<id> is over <br>❓ <message> <br>Votes: <br><answers>`

Формат сообщения для конца голосования


