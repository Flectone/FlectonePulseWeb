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
command-poll:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>POLL</u> через <time>"
  expired: "<color:#ff7171><b>⁉</b> Голосование завершено"
  already: "<color:#ff7171><b>⁉</b> Ты уже проголосовал в этом голосовании"
  null-poll: "<color:#ff7171><b>⁉</b> Голосование не найдено"
  vote-yes: "<color:#4eff52>👍 Ты выбрал <answer_id> в голосовании #<id>. Всего таких голосов <count>"
  vote-no: "<color:#ff4e4e>🖓 Ты передумал об <answer_id> в голосовании #<id>. Всего таких голосов <count> без тебя"
  button-count-answer: "<color:#4eff52><bold><count></bold> за [<answer_key>] - <answer_value> <br>"
  button-answer: "<color:#4eff52><hover:show_text:\"<color:#4eff52>Проголосовать за <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>"
  start: "<br><color:#fce303>🗐 Создано голосование #<id> <br>❓ <message> <br><answers>"
  over: "<br><color:#fce303>🗐 Голосование #<id> завершено <br>❓ <message> <br>Результат: <br><answers>"
```

## Параметры

- Конфигурация происходит тут [Poll](/ru/config/module/command/command-poll/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>POLL</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `expired`
- По умолчанию `<color:#ff7171><b>⁉</b> Голосование завершено`

Сообщение, если игрок пытается проголосовать в голосовании, которое закончилось

### `already`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты уже проголосовал в этом голосовании`

Сообщение, если игрок пытается проголосовать в голосовании ещё один раз

### `null-poll`
- По умолчанию `<color:#ff7171><b>⁉</b> Голосование не найдено`

Сообщение, если голосование не найдено

### `vote-yes`
- По умолчанию `<color:#4eff52>👍 Ты выбрал <answer_id> в голосовании #<id>. Всего таких голосов <count>`

Сообщение, если игрок проголосовал за какой-то вариант

### `vote-no`
- По умолчанию `<color:#ff4e4e>🖓 Ты передумал об <answer_id> в голосовании #<id>. Всего таких голосов <count> без тебя`

Сообщение, если игрок убрал свой голос

### `button-count-answer`
- По умолчанию `<color:#4eff52><bold><count></bold> за [<answer_key>] - <answer_value> <br>`

Формат сообщения для подсчёта голосов

### `button-answer`
- По умолчанию `<color:#4eff52><hover:show_text:\"<color:#4eff52>Проголосовать за <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>`

Формат сообщения для голоса за какой-то вариант

### `start`
- По умолчанию `<br><color:#fce303>🗐 Создано голосование #<id> <br>❓ <message> <br><answers>`

Форма сообщения для начала голосования

### `over`
- По умолчанию `<br><color:#fce303>🗐 Голосование #<id> завершено <br>❓ <message> <br>Результат: <br><answers>`

Формат сообщения для конца голосования


