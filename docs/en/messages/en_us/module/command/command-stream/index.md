# Command /stream
Path `messages > en_us.yml > module.command.stream`

## Explanation
Messages for `/stream` command
![command stream](/commandstream.png)

## Edit
```yaml
<en_us.module.command.stream>
```

### Default
```yaml
command-stream:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (start|end) (url)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>STREAM</u> in <time>"
  already: "<color:#ff7171><b>⁉</b> You are already streaming"
  not: "<color:#ff7171><b>⁉</b> You don't stream"
  prefix-enable: "<color:#ff4e4e>⏻</color:#ff4e4e> "
  prefix-disable: ""
  end: "<fcolor:2>★ Thanks for streaming on our server!"
  start:
    - " "
    - "<color:#ff4e4e>🔔 <fcolor:1>Announcement <color:#ff4e4e>🔔"
    - " "
    - "<fcolor:1><display_name> started stream"
    - " "
    - "<urls>"
    - " "
```

## Options

- Configuration is here [Stream](/en/config/module/command/command-stream/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (start|end) (url)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>STREAM</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `already`
- Default `<color:#ff7171><b>⁉</b> You are already streaming`

Message if player who streaming tries to start another stream

### `not`
- Default `<color:#ff7171><b>⁉</b> You don't stream`

Message if player who is not streaming tries to end stream

### `prefix-enable`
- Default `"<color:#ff4e4e>⏻</color:#ff4e4e> "`

Prefix of player who is currently streaming

### `end`
- Default `<fcolor:2>★ Thanks for streaming on our server!`

Message if a player has finished streaming

### `prefix-disable`
- Default `empty`

Prefix of the player who has permission to stream but is not currently streaming

### `start`
- Default:
```yaml
- " "
- "<color:#ff4e4e>🔔 <fcolor:1>Announcement <color:#ff4e4e>🔔"
- " "
- "<fcolor:1><display_name> started stream"
- " "
- "<urls>"
- " "
```

Stream start notification
