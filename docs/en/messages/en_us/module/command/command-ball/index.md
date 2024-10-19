# Command /ball
Path `messages > en_us.yml > module.command.ball`

## Explanation
Messages for `/ball` command
![command ball](/commandball.png)

## Edit
```yaml
<en_us.module.command.ball>
```

### Default
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

## Options

- Configuration is here [Ball](/en/config/module/command/command-ball/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>BALL</u> in <time>`

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
- Default `<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>`

Format of message

