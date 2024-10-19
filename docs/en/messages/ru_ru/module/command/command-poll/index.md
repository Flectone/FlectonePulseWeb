# Command /poll
 `messages > ru_ru.yml > module.command.poll`

## Explanation
Messages for `/poll` command
![command poll](/commandpoll.png)

## Edit
```yaml
<ru_ru.module.command.poll>
```

### Default
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

## Options

- Configuration is here [Poll](/en/config/module/command/command-poll/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>POLL</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `expired`
- Default `<color:#ff7171><b>⁉</b> Голосование завершено`

Message if a player tries to vote in a poll that has ended

### `already`
- Default `<color:#ff7171><b>⁉</b> Ты уже проголосовал в этом голосовании`

Message if a player tries to vote in a poll one more time

### `null-poll`
- Default `<color:#ff7171><b>⁉</b> Голосование не найдено`

Message if no poll is found

### `vote-yes`
- Default `<color:#4eff52>👍 Ты выбрал <answer_id> в голосовании #<id>. Всего таких голосов <count>`

Message if a player voted for an option

### `vote-no`
- Default `<color:#ff4e4e>🖓 Ты передумал об <answer_id> в голосовании #<id>. Всего таких голосов <count> без тебя`

Message if a player has removed his vote

### `button-count-answer`
- Default `<color:#4eff52><bold><count></bold> за [<answer_key>] - <answer_value> <br>`

Message format for vote counting

### `button-answer`
- Default `<color:#4eff52><hover:show_text:\"<color:#4eff52>Проголосовать за <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>`

Message format for voting for an option

### `start`
- Default `<br><color:#fce303>🗐 Создано голосование #<id> <br>❓ <message> <br><answers>`

Message form for start

### `over`
- Default `<br><color:#fce303>🗐 Голосование #<id> завершено <br>❓ <message> <br>Результат: <br><answers>`

Message format for end


