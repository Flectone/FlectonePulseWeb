# Комманда /tictactoe
Путь `messages > ru_ru.yml > module.command.tictactoe`

## Пояснение
Сообщения для комманды `/tictactoe`
![command tictactoe](/commandtictactoe.png)

## Редактирование
```yaml
<ru_ru.module.command.tictactoe>
```

### По умолчанию
```yaml
command-tictactoe:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  myself: "<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой"
  wrong-game: "<color:#ff7171><b>⁉</b> Этой игры не существует"
  wrong-move: "<color:#ff7171><b>⁉</b> Такой ход невозможен"
  wrong-by-player: "<color:#ff7171><b>⁉</b> Игра закончена, потому что один из игроков не в сети"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TICTACTOE</u> через <time>"
  symbol:
    empty: "<hover:show_text:\"<fcolor:1>Ход <move>\"><click:run_command:\"/tictactoe %d %d <move>\">☐</click></hover>"
    first: "<fcolor:2>☑</fcolor:2>"
    second: "<fcolor:2>☒</fcolor:2>"
  field:
    - "<fcolor:1>"
    - "|[#][#][#]| <title>"
    - "|[#][#][#]|"
    - "|[#][#][#]| <last_move>"
    - ""
  move: "<fcolor:2>Ход <player> </fcolor:2>"
  last-move: "<fcolor:2>☐ → <symbol> (<move>)</fcolor:2>"
  win: "<color:#98FB98><player> выйграл</color:#98FB98>"
  draw: "<color:#98FB98>Ничья 👬</color:#98FB98>"
  sender: "<fcolor:1>☐ Предложение сыграть в крестики-нолики отправлено для <display_name>"
  receiver: "<click:run_command:\"/tictactoe %d %d create\"><fcolor:1>☐ Есть предложение сыграть в крестики-нолики от <display_name>, принять? [+]"
```

## Параметры

- Конфигурация происходит тут [Tictactoe](/ru/config/module/command/command-tictactoe/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой`

Сообщение, если введённый игрок пытается поиграть сам с собой

### `wrong-game`
- По умолчанию `<color:#ff7171><b>⁉</b> Этой игры не существует`

Сообщение, если указанной игры не существует

### `wrong-move`
- По умолчанию `<color:#ff7171><b>⁉</b> Такой ход невозможен`

Сообщение, если такой ход невозможен

### `wrong-by-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игра закончена, потому что один из игроков не в сети`

Сообщение, если один из игроков, участвующий в игре, вышел

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>TICTACTOE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `symbol`

::: details Сообщения для символов
#### `empty`
- По умолчанию `<hover:show_text:\"<fcolor:1>Ход <move>\"><click:run_command:\"/tictactoe %d %d <move>\">☐</click></hover>`

Формат сообщения для пустой клетки

#### `first`
- По умолчанию `<fcolor:2>☑</fcolor:2>`

Формат сообщения для клетки первого игрока

#### `second`
- По умолчанию `<fcolor:2>☒</fcolor:2>`

Формат сообщения для клетки второго игрока
:::

### `field`
- По умолчанию:
```yaml
- "<fcolor:1>"
- "|[#][#][#]| <title>"
- "|[#][#][#]|"
- "|[#][#][#]| <last_move>"
- ""
```

Формат сообщения для игрового поля

### `move`
- По умолчанию `<fcolor:2>Ход <player> </fcolor:2>`

Формат сообщения для оповещения о ходе

### `last-move`
- По умолчанию `<fcolor:2>☐ → <symbol> (<move>)</fcolor:2>`

Формат сообщения для информации о прошлом ходе

### `win`
- По умолчанию `<color:#98FB98><player> выйграл</color:#98FB98>`

Сообщение при победе

### `draw`
- По умолчанию `<color:#98FB98>Ничья 👬</color:#98FB98>`

Сообщение при ничье

### `sender`
- По умолчанию `<fcolor:1>☐ Предложение сыграть в крестики-нолики отправлено для <display_name>`

Сообщение для отправителя при запросе

### `receiver`
- По умолчанию `<click:run_command:\"/tictactoe %d %d create\"><fcolor:1>☐ Есть предложение сыграть в крестики-нолики от <display_name>, принять? [+]`

Сообщение для получателя при запросе

