# Комманда /warn
Путь `localizations > en_us.yml > command.warn`

## Пояснение
Сообщения для комманды `/warn`
![command warn](/commandwarn.png)

## Редактирование
```yaml
<en_us.command.warn>
```

### По умолчанию
```yaml
warn:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  reasons:
    default: "You have been warned on this server"
  global: "<color:#ff7171><br>⏵ Player <target> has been warned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You are warned, <time> left. Reason: <message>"
```

## Параметры

- [Комманда](/ru/command/warn/)
- [Права](/ru/permission/command/warn/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect time`

Сообщение, если введено невозможное время

### `reasons`
- По умолчанию
```yaml
default: "You have been warned on this server"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/warn player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been warned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ You are warned, <time> left. Reason: <message>`

Сообщение для игрока

