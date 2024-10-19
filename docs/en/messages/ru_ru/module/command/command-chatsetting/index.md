# Command /chatsetting
Path `messages > ru_ru.yml > module.command.chatsetting`

## Explanation
Messages for `/clearmail` command
![command chatsetting](/commandchatsetting.png)

## Edit
```yaml
<ru_ru.module.command.chatsetting>
```

### Default
```yaml
```yaml
command-chatsetting:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATSETTING</u> через <time>"
  no-permission: "<color:#ff7171><b>⁉</b> Нет разрешения на изменение этой настройки"
  header: "          Настройки чата"
  disable:
    you: "<color:#ff7171><b>⁉</b> Команда скрыта, проверь /chatsetting"
    he: "<color:#ff7171><b>⁉</b> Он выключил команду с помощью /chatsetting"
    server: "<color:#ff7171><b>⁉</b> Команда отключена на сервере"
  settings:
    REPLY:
      - - "<fcolor:2>Команда /reply"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /reply"
        - "<color:#ff7171>Скрыта"
    BALL:
      - - "<fcolor:2>Команда /ball"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /ball"
        - "<color:#ff7171>Скрыта"
    JOIN:
      - - "<fcolor:2>Оповещения о входе"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Оповещения о входе"
        - "<color:#ff7171>Скрыты"
    DICE:
      - - "<fcolor:2>Команда /dice"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /dice"
        - "<color:#ff7171>Скрыта"
    SPIT:
      - - "<fcolor:2>Команда /spit"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /spit"
        - "<color:#ff7171>Скрыта"
    SPY:
      - - "<fcolor:2>Режим слежки"
        - "<color:#98FB98>Включён"
      - - "<fcolor:2>Режим слежки"
        - "<color:#ff7171>Выключен"
    MUTE:
      - - "<fcolor:2>Команда /mute"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /mute"
        - "<color:#ff7171>Скрыта"
    BROADCAST:
      - - "<fcolor:2>Команда /broadcast"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /broadcast"
        - "<color:#ff7171>Скрыта"
    AFK:
      - - "<fcolor:2>Команда /afk"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /afk"
        - "<color:#ff7171>Скрыта"
    ROCKPAPERSCISSORS:
      - - "<fcolor:2>Команда /rockpaperscissors"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /rockpaperscissors"
        - "<color:#ff7171>Скрыта"
    AUTOMESSAGE:
      - - "<fcolor:2>Авто сообщения"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Авто сообщения"
        - "<color:#ff7171>Скрыты"
    WARN:
      - - "<fcolor:2>Команда /warn"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /warn"
        - "<color:#ff7171>Скрыта"
    KICK:
      - - "<fcolor:2>Команда /kick"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /kick"
        - "<color:#ff7171>Скрыта"
    COLOR:
      - - "<fcolor:2>Цвета"
        - "<fcolor:1>сообщение"
        - "<fcolor:2>сообщение"
        - "<fcolor:3>сообщение"
        - "<fcolor:4>сообщение"
    TRANSLATETO:
      - - "<fcolor:2>Команда /translateto"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /translateto"
        - "<color:#ff7171>Скрыта"
    TELL:
      - - "<fcolor:2>Команда /tell"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /tell"
        - "<color:#ff7171>Скрыта"
    DO:
      - - "<fcolor:2>Команда /do"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /do"
        - "<color:#ff7171>Скрыта"
    POLL:
      - - "<fcolor:2>Команда /poll"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /poll"
        - "<color:#ff7171>Скрыта"
    GREETING:
      - - "<fcolor:2>Приветственное сообщение"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Приветственное сообщение"
        - "<color:#ff7171>Скрыта"
    DEATH:
      - - "<fcolor:2>Смерти"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Смерти"
        - "<color:#ff7171>Скрыты"
    CHAT:
      - - "<fcolor:2>Чат"
        - "<fcolor:1>Выбран чат <bold><chat>"
    ME:
      - - "<fcolor:2>Команда /me"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда/me"
        - "<color:#ff7171>Скрыта"
    COIN:
      - - "<fcolor:2>Команда /coin"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /coin"
        - "<color:#ff7171>Скрыта"
    TICTACTOE:
      - - "<fcolor:2>Команда /tictactoe"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /tictactoe"
        - "<color:#ff7171>Скрыта"
    QUIT:
      - - "<fcolor:2>Оповещения о выходе"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Оповещения о выходе"
        - "<color:#ff7171>Скрыты"
    BAN:
      - - "<fcolor:2>Команда /ban"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /ban"
        - "<color:#ff7171>Скрыта"
    STREAM:
      - - "<fcolor:2>Режим стримера"
        - "<color:#98FB98>Включён"
      - - "<fcolor:2>Режим стримера"
        - "<color:#ff7171>Выключен"
    MAIL:
      - - "<fcolor:2>Команда /mail"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /mail"
        - "<color:#ff7171>Скрыта"
    ADVANCEMENT:
      - - "<fcolor:2>Достижения"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Достижения"
        - "<color:#ff7171>Скрыты"
    TRY:
      - - "<fcolor:2>Команда /try"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /try"
        - "<color:#ff7171>Скрыта"
```

## Options

- Configuration is here [Chatsetting](/en/config/module/command/command-chatsetting/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATSETTING</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `no-permission`
- Default `<color:#ff7171><b>⁉</b> Нет разрешения на изменение этой настройки`

Message if a certain permission is required to change a setting

### `header`
- Default `"          Настройки чата"`

Name for GUI

### `disable`

::: details Disable messages
#### `you`
- Default `<color:#ff7171><b>⁉</b> Команда скрыта, проверь /chatsetting`

Message if sender has disabled command in `/chatsetting`

#### `he`
- Default `<color:#ff7171><b>⁉</b> Он выключил команду с помощью /chatsetting`

Message if recipient has disabled command in `/chatsetting`

#### `server`
- Default `<color:#ff7171><b>⁉</b> Команда отключена на сервере`

Message if server has disabled command for `/chatsetting`

:::

### `settings`

A list of settings and their messages, where:
- First line - name of item, if enabled
- Remaining lines - description of item, if enabled
- Second line - name of item, if off
- Remaining lines - description of item, if off

::: tip For example, let's take `REPLY`
```yaml
# enabled
- - "<fcolor:2>Команда /reply" # item name
  - "<color:#98FB98>Показывается" # description
# disabled
- - "<fcolor:2>Команда /reply" # item name
  - "<color:#ff7171>Скрыта" # description
```
:::

