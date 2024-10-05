# Комманда /chatsetting
Путь `messages > ru_ru.yml > module.command.chatsetting`

## Пояснение
Сообщения для комманды `/chatsetting`
![command chatsetting](/commandchatsetting.png)

## Редактирование
```yaml
<ru_ru.module.command.chatsetting>
```

### По умолчанию
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

## Параметры

- Конфигурация происходит тут [Chatsetting](/ru/config/module/command/command-chatsetting/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>CHATSETTING</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `no-permission`
- По умолчанию `<color:#ff7171><b>⁉</b> Нет разрешения на изменение этой настройки`

Сообщение, если для изменения настройки требуется определённое право

### `header`
- По умолчанию `"          Настройки чата"`

Название для GUI

### `disable`

::: details Сообщения об отключении
#### `you`
- По умолчанию `<color:#ff7171><b>⁉</b> Команда скрыта, проверь /chatsetting`

Сообщение, если отправитель отключил комманду в `/chatsetting`

#### `he`
- По умолчанию `<color:#ff7171><b>⁉</b> Он выключил команду с помощью /chatsetting`

Сообщение, если получатель отключил комманду в `/chatsetting`

#### `server`
- По умолчанию `<color:#ff7171><b>⁉</b> Команда отключена на сервере`

Сообщение, если сервер отключил комманду для `/chatsetting`

:::

### `settings`

Список настроек и их сообщений, где:
- Первая строчка - название предмета, если включено
- Остальные строчки - описание предмета, если включено
- Вторая строчка - название предмета, если выключено
- Остальные строчки - описание предмета, если выключено

::: tip Например возьмём `REPLY`
```yaml
# включено
- - "<fcolor:2>Команда /reply" # название предмета
  - "<color:#98FB98>Показывается" # описание
# выключено
- - "<fcolor:2>Команда /reply" # название предмета
  - "<color:#ff7171>Скрыта" # описание
```
:::

