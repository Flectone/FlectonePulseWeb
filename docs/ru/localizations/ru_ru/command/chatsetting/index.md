# Комманда /chatsetting
Путь `localizations > ru_ru.yml > command.chatsetting`

## Пояснение
Сообщения для комманды `/chatsetting`
![command chatsetting](/commandchatsetting.png)

## Редактирование
```yaml
<ru_ru.command.chatsetting>
```

### По умолчанию
```yaml
chatsetting:
  no-permission: "<color:#ff7171><b>⁉</b> Нет разрешения на изменение этой настройки"
  disable:
    you: "<color:#ff7171><b>⁉</b> Команда скрыта, проверь /chatsetting"
    he: "<color:#ff7171><b>⁉</b> Он выключил команду с помощью /chatsetting"
    server: "<color:#ff7171><b>⁉</b> Команда отключена на сервере"
  header: "          Настройки чата"
  settings:
    CHAT:
      - - "<fcolor:2>Чат"
        - "<fcolor:1>Выбран чат <bold><chat>"
    COLOR:
      - - "<fcolor:2>Цвета"
        - "<fcolor:1>сообщение"
        - "<fcolor:2>сообщение"
        - "<fcolor:3>сообщение"
        - "<fcolor:4>сообщение"
    STREAM:
      - - "<fcolor:2>Режим стримера"
        - "<color:#98FB98>Включён"
      - - "<fcolor:2>Режим стримера"
        - "<color:#ff7171>Выключен"
    SPY:
      - - "<fcolor:2>Режим слежки"
        - "<color:#98FB98>Включён"
      - - "<fcolor:2>Режим слежки"
        - "<color:#ff7171>Выключен"
    ADVANCEMENT:
      - - "<fcolor:2>Достижения"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Достижения"
        - "<color:#ff7171>Скрыты"
    DEATH:
      - - "<fcolor:2>Смерти"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Смерти"
        - "<color:#ff7171>Скрыты"
    JOIN:
      - - "<fcolor:2>Оповещения о входе"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Оповещения о входе"
        - "<color:#ff7171>Скрыты"
    QUIT:
      - - "<fcolor:2>Оповещения о выходе"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Оповещения о выходе"
        - "<color:#ff7171>Скрыты"
    AUTO:
      - - "<fcolor:2>Авто сообщения"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Авто сообщения"
        - "<color:#ff7171>Скрыты"
    ME:
      - - "<fcolor:2>Команда /me"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда/me"
        - "<color:#ff7171>Скрыта"
    TRY:
      - - "<fcolor:2>Команда /try"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /try"
        - "<color:#ff7171>Скрыта"
    DICE:
      - - "<fcolor:2>Команда /dice"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /dice"
        - "<color:#ff7171>Скрыта"
    BALL:
      - - "<fcolor:2>Команда /ball"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /ball"
        - "<color:#ff7171>Скрыта"
    MUTE:
      - - "<fcolor:2>Команда /mute"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /mute"
        - "<color:#ff7171>Скрыта"
    BAN:
      - - "<fcolor:2>Команда /ban"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /ban"
        - "<color:#ff7171>Скрыта"
    WARN:
      - - "<fcolor:2>Команда /warn"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /warn"
        - "<color:#ff7171>Скрыта"
    TELL:
      - - "<fcolor:2>Команда /tell"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /tell"
        - "<color:#ff7171>Скрыта"
    REPLY:
      - - "<fcolor:2>Команда /reply"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /reply"
        - "<color:#ff7171>Скрыта"
    MAIL:
      - - "<fcolor:2>Команда /mail"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /mail"
        - "<color:#ff7171>Скрыта"
    TICTACTOE:
      - - "<fcolor:2>Команда /tictactoe"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /tictactoe"
        - "<color:#ff7171>Скрыта"
    KICK:
      - - "<fcolor:2>Команда /kick"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /kick"
        - "<color:#ff7171>Скрыта"
    TRANSLATETO:
      - - "<fcolor:2>Команда /translateto"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /translateto"
        - "<color:#ff7171>Скрыта"
    BROADCAST:
      - - "<fcolor:2>Команда /broadcast"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /broadcast"
        - "<color:#ff7171>Скрыта"
    DO:
      - - "<fcolor:2>Команда /do"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /do"
        - "<color:#ff7171>Скрыта"
    COIN:
      - - "<fcolor:2>Команда /coin"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /coin"
        - "<color:#ff7171>Скрыта"
    AFK:
      - - "<fcolor:2>Команда /afk"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /afk"
        - "<color:#ff7171>Скрыта"
    POLL:
      - - "<fcolor:2>Команда /poll"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /poll"
        - "<color:#ff7171>Скрыта"
    SPIT:
      - - "<fcolor:2>Команда /spit"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /spit"
        - "<color:#ff7171>Скрыта"
    GREETING:
      - - "<fcolor:2>Приветственное сообщение"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Приветственное сообщение"
        - "<color:#ff7171>Скрыта"
    ROCKPAPERSCISSORS:
      - - "<fcolor:2>Команда /rockpaperscissors"
        - "<color:#98FB98>Показывается"
      - - "<fcolor:2>Команда /rockpaperscissors"
        - "<color:#ff7171>Скрыта"
    DISCORD:
      - - "<fcolor:2>Сообщения для/из Discord"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Сообщения для/из Discord"
        - "<color:#ff7171>Скрыты"
    TELEGRAM:
      - - "<fcolor:2>Сообщения для/из Telegram"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Сообщения для/из Telegram"
        - "<color:#ff7171>Скрыты"
    TWITCH:
      - - "<fcolor:2>Сообщения для/из Twitch"
        - "<color:#98FB98>Показываются"
      - - "<fcolor:2>Сообщения для/из Twitch"
        - "<color:#ff7171>Скрыты"
```

## Параметры

- [Комманда](/ru/command/chatsetting/)
- [Права](/ru/permission/command/chatsetting/)

### `no-permission`
- По умолчанию `<color:#ff7171><b>⁉</b> Нет разрешения на изменение этой настройки`

Сообщение, если для изменения настройки требуется определённое право

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

### `header`
- По умолчанию `"          Настройки чата"`

Название для GUI

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

