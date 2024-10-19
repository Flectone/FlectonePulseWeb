# Command /stream
Path `messages > ru_ru.yml > module.command.stream`

## Explanation
Messages for `/stream` command
![command stream](/commandstream.png)

## Edit
```yaml
<ru_ru.module.command.stream>
```

### Default
```yaml
command-stream:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (start|end) (ссылки)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>STREAM</u> через <time>"
  already: "<color:#ff7171><b>⁉</b> Ты уже включил трансляцию"
  not: "<color:#ff7171><b>⁉</b> Ты не включил трансляцию"
  prefix-enable: "<color:#ff4e4e>⏻</color:#ff4e4e> "
  prefix-disable: ""
  end: "<fcolor:2>★ Спасибо за трансляцию на нашем сервере!"
  start:
    - " "
    - "<color:#ff4e4e>🔔 <fcolor:1>Объявление <color:#ff4e4e>🔔"
    - " "
    - "<fcolor:1><display_name> начал трансляцию"
    - " "
    - "<urls>"
    - " "
```

## Options

- Configuration is here [Stream](/en/config/module/command/command-stream/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (start|end) (ссылки)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>STREAM</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `already`
- Default `<color:#ff7171><b>⁉</b> Ты уже включил трансляцию`

Message if player who streaming tries to start another stream

### `not`
- Default `<color:#ff7171><b>⁉</b> Ты не включил трансляцию`

Message if player who is not streaming tries to end stream

### `prefix-enable`
- Default `"<color:#ff4e4e>⏻</color:#ff4e4e> "`

Prefix of player who is currently streaming

### `end`
- Default `<fcolor:2>★ Спасибо за трансляцию на нашем сервере!`

Message if a player has finished streaming

### `prefix-disable`
- Default `пусто`

Prefix of the player who has permission to stream but is not currently streaming

### `start`
- Default:
```yaml
- " "
- "<color:#ff4e4e>🔔 <fcolor:1>Объявление <color:#ff4e4e>🔔"
- " "
- "<fcolor:1><display_name> начал трансляцию"
- " "
- "<urls>"
- " "
```

Stream start notification
