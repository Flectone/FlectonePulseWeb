# Комманда /unmute
Путь `localizations > en_us.yml > command.unmute`

## Пояснение
Сообщения для комманды `/unmute`
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<en_us.command.unmute>
```

### По умолчанию
```yaml
unmute:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not-muted: "<color:#ff7171><b>⁉</b> This player is not muted"
  format: "<color:#98FB98>☻ Player <display_name> unmuted"
```

## Параметры

- [Комманда](/ru/command/unmute/)
- [Права](/ru/permission/command/unmute/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `not-muted`
- По умолчанию `<color:#ff7171><b>⁉</b> This player is not muted`

Сообщение, если введённый игрок не замучен

### `format`
- По умолчанию `<color:#98FB98>☻ Player <display_name> unmuted`

Сообщение при размуте
