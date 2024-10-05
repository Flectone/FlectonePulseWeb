# Комманда /flectonepulse
Путь `messages > en_us.yml > module.command.flectonepulse`

## Пояснение
Сообщения для комманды `/flectonepulse`
![command flectonepulse](/commandflectonepulse.png)

## Редактирование
```yaml
<en_us.module.command.flectonepulse>
```

### По умолчанию
```yaml
command-flectonepulse:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FLECTONEPULSE</u> in <time>"
  fail: "<color:#ff7171>★ An has error occurred while reloading"
  format: "<fcolor:2>★ Plugin successfully reloaded!"
```

## Параметры

- Конфигурация происходит тут [Flectonepulse](/ru/config/module/command/command-flectonepulse/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>FLECTONEPULSE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `fail`
- По умолчанию `<color:#ff7171>★ An has error occurred while reloading`

Сообщение при возникновении ошибки

### `format`
- По умолчанию `<fcolor:2>★ Plugin successfully reloaded!`

Формат сообщения, которое будет отправлено

