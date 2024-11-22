# Комманда /coin
Путь `messages > en_us.yml > module.command.coin`

## Пояснение
Сообщения для комманды `/coin`
![command coin](/commandcoin.png)

## Редактирование
```yaml
<en_us.module.command.coin>
```

### По умолчанию
```yaml
coin:
  head: "heads"
  tail: "tails"
  format: "<fcolor:1>✎ <display_name> player got <result>"
  format-draw: "<fcolor:1>✎ <display_name> player got edge :)"
```

## Параметры

- [Комманда](/ru/commands/module/command/coin/)
- [Права](/ru/permissions/module/command/coin/)

### `head`
- По умолчанию `heads`

Название стороны монетки

### `tail`
- По умолчанию `tails`

Название другой стороны монетки

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> player got <result>`

Формат сообщения, которое будет отправлено

### `format-draw`
- По умолчанию `<fcolor:1>✎ <display_name> player got edge :)`

Сообщение, если монетка упала на ребро

