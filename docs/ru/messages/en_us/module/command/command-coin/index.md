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
command-coin:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>COIN</u> in <time>"
  draw: "<fcolor:1>✎ <display_name> player got edge :)"
  head: "heads"
  tail: "tails"
  format: "<fcolor:1>✎ <display_name> player got <result>"
```

## Параметры

- Конфигурация происходит тут [Coin](/ru/config/module/command/command-coin/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>COIN</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `draw`
- По умолчанию `<fcolor:1>✎ <display_name> player got edge :)`

Сообщение, если монетка упала на ребро

### `head`
- По умолчанию `heads`

Название стороны монетки

### `tail`
- По умолчанию `tails`

Название другой стороны монетки

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> player got <result>`

Формат сообщения, которое будет отправлено

