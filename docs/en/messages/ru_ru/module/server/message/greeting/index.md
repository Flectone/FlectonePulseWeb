# Greeting
Path `messages > ru_ru.yml > module.server.message.greeting`

## Explanation
Private message to a player when connecting to the server
![greeting](/greeting.png)

## Edit
```yaml
<ru_ru.module.server.message.greeting>
```

### Default
```yaml
greeting:
  format:
    - " "
    - "[#][#][#][#][#][#][#][#]"
    - "[#][#][#][#][#][#][#][#]"
    - "[#][#][#][#][#][#][#][#]"
    - "[#][#][#][#][#][#][#][#]"
    - "[#][#][#][#][#][#][#][#]  <fcolor:1>Привет,"
    - "[#][#][#][#][#][#][#][#]  <player>"
    - "[#][#][#][#][#][#][#][#]"
    - "[#][#][#][#][#][#][#][#]"
    - " "
```

## Options

- Configuration is here [Greeting](/en/config/module/server/message/greeting/)

### `format`
- Default:
```yaml
- " "
- "[#][#][#][#][#][#][#][#]"
- "[#][#][#][#][#][#][#][#]"
- "[#][#][#][#][#][#][#][#]"
- "[#][#][#][#][#][#][#][#]"
- "[#][#][#][#][#][#][#][#]  <fcolor:1>Привет,"
- "[#][#][#][#][#][#][#][#]  <player>"
- "[#][#][#][#][#][#][#][#]"
- "[#][#][#][#][#][#][#][#]"
- " "
```

Private message to the player when connecting
![greeting](/greeting.png)