# Комманда /unban
Путь `messages > ru_ru.yml > module.command.unban`

## Пояснение
Сообщения для комманды `/unban`
![command unban](/commandunban.png)

## Редактирование
```yaml
<ru_ru.module.command.unban>
```

### По умолчанию
```yaml
unban:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not-banned: "<color:#ff7171><b>⁉</b> Игрок не заблокирован"
  format: "<color:#98FB98>☻ Игрок <display_name> разблокирован"
```

## Параметры

- [Комманда](/ru/commands/module/command/unban/)
- [Права](/ru/permissions/module/command/unban/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `not-banned`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не заблокирован`

Сообщение, если введённый игрок не заблокирован

### `format`
- По умолчанию `<color:#98FB98>☻ Игрок <display_name> разблокирован`

Сообщение при разблокировке
