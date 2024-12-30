# Комманда /online
Путь `localizations > ru_ru.yml > command.online`

## Пояснение
Сообщения для комманды `/online`
![command online](/commandonline.png)

## Редактирование
```yaml
<ru_ru.command.online>
```

### По умолчанию
```yaml
online:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  format-current: "<fcolor:1>⌛ <display_name> сейчас на сервере"
  format-first: "<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад"
  format-last: "<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад"
  format-total: "<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>"
```

## Параметры

- [Комманда](/ru/command/online/)
- [Права](/ru/permission/command/online/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `format-current`
- По умолчанию `<fcolor:1>⌛ <display_name> сейчас на сервере`

Сообщение, если введённый игрок на сервере

### `format-first`
- По умолчанию `<fcolor:1>⌛ <display_name> впервые зашёл на сервер <time> назад`

Формат сообщения `/online first`, которое будет отправлено

### `format-last`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>последний раз был на сервере <time> назад`

Формат сообщения `/online last`, которое будет отправлено

### `format-total`
- По умолчанию `<fcolor:1>⌛ <display_name> <fcolor:1>всего провёл на сервере <time>`

Формат сообщения `/online total`, которое будет отправлено


