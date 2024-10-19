# Command /poll
 `messages > en_us.yml > module.command.poll`

## Explanation
Messages for `/poll` command
![command poll](/commandpoll.png)

## Edit
```yaml
<en_us.module.command.poll>
```

### Default
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

## Options

- Configuration is here [Poll](/en/config/module/command/command-poll/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>POLL</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `expired`
- Default `<color:#ff7171><b>⁉</b> This poll has already ended`

Message if a player tries to vote in a poll that has ended

### `already`
- Default `<color:#ff7171><b>⁉</b> You've already voted in this poll`

Message if a player tries to vote in a poll one more time

### `null-poll`
- Default `<color:#ff7171><b>⁉</b> This poll does not exist`

Message if no poll is found

### `vote-yes`
- Default `<color:#4eff52>👍 You voted for <answer_id> in poll #<id>. There are <count> of you`

Message if a player voted for an option

### `vote-no`
- Default `<color:#ff4e4e>🖓 You rejected <answer_id> in poll #<id>. There are <count> without you`

Message if a player has removed his vote

### `button-count-answer`
- Default `<color:#4eff52><bold><count></bold> for [<answer_key>] - <answer_value> <br>`

Message format for vote counting

### `button-answer`
- Default `<color:#4eff52><hover:show_text:\"<color:#4eff52>Vote for <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>`

Message format for voting for an option

### `start`
- Default `"<br><color:#fce303>🗐 There's a poll #<id> going on right now <br>❓ <message> <br><answers>`

Message form for start

### `over`
- Default `<br><color:#fce303>🗐 Poll #<id> is over <br>❓ <message> <br>Votes: <br><answers>`

Message format for end


