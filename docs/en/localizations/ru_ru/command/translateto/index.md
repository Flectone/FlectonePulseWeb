# Комманда /translateto
Путь `localizations > ru_ru.yml > command.translateto`

## Пояснение
Сообщения для комманды `/translateto`
![command translateto](/commandtranslateto.png)

## Редактирование
```yaml
<ru_ru.command.translateto>
```

### По умолчанию
```yaml
translateto:
  null-or-error: "<color:#ff7171><b>⁉</b> Ошибка, возможно ты указал неправильный язык"
  format: "<fcolor:1>📖 [<language>] <display_name> перевёл → <fcolor:2><message>"
```

## Параметры

- [Комманда](/ru/command/translateto/)
- [Права](/ru/permission/command/translateto/)

### `null-or-error`
- По умолчанию `<color:#ff7171><b>⁉</b> Ошибка, возможно ты указал неправильный язык`

Сообщение, если произошла ошибка при переводе

### `format`
- По умолчанию `<fcolor:1>📖 [<language>] <display_name> перевёл → <fcolor:2><message>`

Формат сообщения, которое будет отправлено

