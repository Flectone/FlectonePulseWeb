# Комманда /flectonepulse
Путь `messages > ru_ru.yml > module.command.flectonepulse`

## Пояснение
Сообщения для комманды `/flectonepulse`
![command flectonepulse](/commandflectonepulse.png)

## Редактирование
```yaml
<ru_ru.module.command.flectonepulse>
```

### По умолчанию
```yaml
command-flectonepulse:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FLECTONEPULSE</u> через <time>"
  fail: "<color:#ff7171>★ Возникла проблема при перезагрузке"
  format: "<fcolor:2>★ Плагин успешно перезагружен!"
```

## Параметры

- Конфигурация происходит тут [Flectonepulse](/ru/config/module/command/command-flectonepulse/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command>`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>FLECTONEPULSE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `fail`
- По умолчанию `<color:#ff7171>★ Возникла проблема при перезагрузке`

Сообщение при возникновении ошибки

### `format`
- По умолчанию `<fcolor:2>★ Плагин успешно перезагружен!`

Формат сообщения, которое будет отправлено

