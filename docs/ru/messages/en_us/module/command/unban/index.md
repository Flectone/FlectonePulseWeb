# Комманда /unban
Путь `messages > en_us.yml > module.command.unban`

## Пояснение
Сообщения для комманды `/unban`
![command unban](/commandunban.png)

## Редактирование
```yaml
<en_us.module.command.unban>
```

### По умолчанию
```yaml
unban:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not-banned: "<color:#ff7171><b>⁉</b> This player is not banned"
  format: "<color:#98FB98>☻ Player <display_name> unbanned"
```

## Параметры

- [Комманда](/ru/commands/module/command/unban/)
- [Права](/ru/permissions/module/command/unban/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `not-banned`
- По умолчанию `<color:#ff7171><b>⁉</b> This player is not banned`

Сообщение, если введённый игрок не заблокирован

### `format`
- По умолчанию `<color:#98FB98>☻ Player <display_name> unbanned`

Сообщение при разблокировке
