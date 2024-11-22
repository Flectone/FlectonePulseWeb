# Комманда /unmute
Путь `messages > ru_ru.yml > module.command.unmute`

## Пояснение
Сообщения для комманды `/unmute`
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<ru_ru.module.command.unmute>
```

### По умолчанию
```yaml
unmute:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not-muted: "<color:#ff7171><b>⁉</b> Игрок не замучен"
  format: "<color:#98FB98>☻ Игрок <display_name> размучен"
```

## Параметры

- [Комманда](/en/commands/module/command/unmute/)
- [Права](/en/permissions/module/command/unmute/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `not-muted`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не замучен`

Сообщение, если введённый игрок не замучен

### `format`
- По умолчанию `<color:#98FB98>☻ Игрок <display_name> размучен`

Сообщение при размуте
