# Комманда /poll
Путь `messages > en_us.yml > module.command.poll`

## Пояснение
Сообщения для комманды `/poll`
![command poll](/commandpoll.png)

## Редактирование
```yaml
<en_us.module.command.poll>
```

### По умолчанию
```yaml
command-poll:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>POLL</u> in <time>"
  expired: "<color:#ff7171><b>⁉</b> This poll has already ended"
  already: "<color:#ff7171><b>⁉</b> You've already voted in this poll"
  null-poll: "<color:#ff7171><b>⁉</b> This poll does not exist"
  vote-yes: "<color:#4eff52>👍 You voted for <answer_id> in poll #<id>. There are <count> of you"
  vote-no: "<color:#ff4e4e>🖓 You rejected <answer_id> in poll #<id>. There are <count> without you"
  button-count-answer: "<color:#4eff52><bold><count></bold> for [<answer_key>] - <answer_value> <br>"
  button-answer: "<color:#4eff52><hover:show_text:\"<color:#4eff52>Vote for <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>"
  start: "<br><color:#fce303>🗐 There's a poll #<id> going on right now <br>❓ <message> <br><answers>"
  over: "<br><color:#fce303>🗐 Poll #<id> is over <br>❓ <message> <br>Votes: <br><answers>"
```

## Параметры

- Конфигурация происходит тут [Poll](/ru/config/module/command/command-poll/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>POLL</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `expired`
- По умолчанию `<color:#ff7171><b>⁉</b> This poll has already ended`

Сообщение, если игрок пытается проголосовать в голосовании, которое закончилось

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> You've already voted in this poll`

Сообщение, если игрок пытается проголосовать в голосовании ещё один раз

### `null-poll`
- По умолчанию `<color:#ff7171><b>⁉</b> This poll does not exist`

Сообщение, если голосование не найдено

### `vote-yes`
- По умолчанию `<color:#4eff52>👍 You voted for <answer_id> in poll #<id>. There are <count> of you`

Сообщение, если игрок проголосовал за какой-то вариант

### `vote-no`
- По умолчанию `<color:#ff4e4e>🖓 You rejected <answer_id> in poll #<id>. There are <count> without you`

Сообщение, если игрок убрал свой голос

### `button-count-answer`
- По умолчанию `<color:#4eff52><bold><count></bold> for [<answer_key>] - <answer_value> <br>`

Формат сообщения для подсчёта голосов

### `button-answer`
- По умолчанию `<color:#4eff52><hover:show_text:\"<color:#4eff52>Vote for <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>`

Формат сообщения для голоса за какой-то вариант

### `start`
- По умолчанию `"<br><color:#fce303>🗐 There's a poll #<id> going on right now <br>❓ <message> <br><answers>`

Форма сообщения для начала голосования

### `over`
- По умолчанию `<br><color:#fce303>🗐 Poll #<id> is over <br>❓ <message> <br>Votes: <br><answers>`

Формат сообщения для конца голосования


