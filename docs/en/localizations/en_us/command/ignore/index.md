# Комманда /ignore
Путь `localizations > en_us.yml > command.ignore`

## Пояснение
Сообщения для комманды `/ignore`
![command ignore](/commandignore.png)

## Редактирование
```yaml
<en_us.command.ignore>
```

### По умолчанию
```yaml
ignore:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't ignore yourself"
  he: "<color:#ff7171><b>⁉</b> You can't write to him because he ignore you"
  you: "<color:#ff7171><b>⁉</b> You can't write to him because you ignore him"
  format-true: "<color:#ff7171>☹ You ignore <display_name>"
  format-false: "<color:#98FB98>☺ You unignore <display_name>"
```

## Параметры

- [Комманда](/ru/command/ignore/)
- [Права](/ru/permission/command/ignore/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't ignore yourself`

Сообщение, если игрок пытается игнорировать самого себя

### `he`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't write to him because he ignore you`

Сообщение, если получатель игнорирует отправителя

### `you`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't write to him because you ignore him`

Сообщение, если отправитель игнорирует получателя

### `format-true`
- По умолчанию `<color:#ff7171>☹ You ignore <display_name>`

Сообщение при успешном игнорировании

### `format-false`
- По умолчанию `<color:#98FB98>☺ You unignore <display_name>`

Сообщение при снятии игнорирования

