# Комманда /ban
Путь `localizations > en_us.yml > command.ban`

## Пояснение
Сообщения для комманды `/ban`
![command ban](/commandban.png)

## Редактирование
```yaml
<en_us.command.ban>
```

### По умолчанию
```yaml
ban:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  temporarily:
    connection-attempt: "<color:#ff7171>☠ Banned <target> tried to log in, <time> left"
    global: "<color:#ff7171><br>⏵ Player <target> has been banned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
    player: "<color:#ff7171>☠ You are banned, <time> left <br>Reason: <message>"
    reasons:
      default: "You have been banned from this server"
  permanent:
    connection-attempt: "<color:#ff7171>☠ Permanently banned <target> tried to log in"
    global: "<color:#ff7171><br>⏵ Player <target> has been banned permanently <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
    player: "<color:#ff7171>☠ You are banned permanently <br>Reason: <message>"
    reasons:
      default: "You have been banned permanent from this server"
```

## Параметры

- [Комманда](/ru/command/ban/)
- [Права](/ru/permission/command/ban/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect time`

Сообщение, если введено невозможное время

### `temporarily`

::: details Сообщения для временной блокировки

#### `connection-attempt`
- По умолчанию `<color:#ff7171>☠ Banned <target> tried to log in, <time> left`

Сообщение, если заблокированный игрок пытался подключиться

#### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been banned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

#### `player`
- По умолчанию `<color:#ff7171>☠ You are banned, <time> left <br>Reason: <message>`

Сообщение для игрока

#### `reasons`
- По умолчанию
```yaml
default: "You have been banned from this server"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/ban player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`

:::

### `permanent`

::: details Сообщения для блокировки навсегда

#### `connection-attempt`
- По умолчанию `<color:#ff7171>☠ Permanently banned <target> tried to log in`

Сообщение, если заблокированный игрок пытался подключиться

#### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been banned permanently <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

#### `player`
- По умолчанию `<color:#ff7171>☠ You are banned permanently <br>Reason: <message>`

Сообщение для игрока

#### `reasons`
- По умолчанию
```yaml
default: "You have been banned permanent from this server"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/ban player random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`

:::

