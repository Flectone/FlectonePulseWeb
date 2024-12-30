# Комманда /mute
Путь `localizations > en_us.yml > command.mute`

## Пояснение
Сообщения для комманды `/mute`
![command mute](/commandmute.png)

## Редактирование
```yaml
<en_us.command.mute>
```

### По умолчанию
```yaml
mute:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  reasons:
    default: "You have been muted on this server"
  global: "<color:#ff7171><br>⏵ Player <target> has been muted for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
  player: "<color:#ff7171>☠ You are muted, <time> left. Reason: <message>"
```

## Параметры

- [Комманда](/ru/command/mute/)
- [Права](/ru/permission/command/mute/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Incorrect time`

Сообщение, если введено невозможное время

### `reasons`
- По умолчанию
```yaml
default: "You have been muted on this server"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/mute player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been muted for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ You are muted, <time> left. Reason: <message>`

Сообщение для игрока

