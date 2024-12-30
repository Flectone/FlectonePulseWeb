# Комманда /unwarn
Путь `localizations > ru_ru.yml > command.unwarn`

## Пояснение
Сообщения для комманды `/unwarn`
![command unwarn](/commandunwarn.png)

## Редактирование
```yaml
<ru_ru.command.unwarn>
```

### По умолчанию
```yaml
unwarn:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  not-warned: "<color:#ff7171><b>⁉</b> Игрок не имеет предупреждений"
  format: "<color:#98FB98>☻ С игрока <display_name> снято предупреждение"
```

## Параметры

- [Комманда](/ru/command/unwarn/)
- [Права](/ru/permission/command/unwarn/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `not-warned`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не имеет предупреждений`

Сообщение, если введённый игрок не имеет предупреждения

### `format`
- По умолчанию `<color:#98FB98>☻ С игрока <display_name> снято предупреждение`

Сообщение при снятии предупреждения
