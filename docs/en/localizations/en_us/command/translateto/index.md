# Комманда /translateto
Путь `localizations > en_us.yml > command.translateto`

## Пояснение
Сообщения для комманды `/translateto`
![command translateto](/commandtranslateto.png)

## Редактирование
```yaml
<en_us.command.translateto>
```

### По умолчанию
```yaml
translateto:
  null-or-error: "<color:#ff7171><b>⁉</b> Error, you may have specified an unsupported language"
  format: "<fcolor:1>📖 [<language>] <display_name> translated → <fcolor:2><message>"
```

## Параметры

- [Комманда](/ru/command/translateto/)
- [Права](/ru/permission/command/translateto/)

### `null-or-error`
- По умолчанию `<color:#ff7171><b>⁉</b> Error, you may have specified an unsupported language`

Сообщение, если произошла ошибка при переводе

### `format`
- По умолчанию `<fcolor:1>📖 [<language>] <display_name> translated → <fcolor:2><message>`

Формат сообщения, которое будет отправлено

