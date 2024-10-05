# Комманда /helper
Путь `messages > en_us.yml > module.command.helper`

## Пояснение
Сообщения для комманды `/helper`
![command helper](/commandhelper.png)

## Редактирование
```yaml
<en_us.module.command.helper>
```

### По умолчанию
```yaml
command-helper:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>HELPER</u> in <time>"
  null-helper: "<color:#ff7171><b>⁉</b> There are no people who can help you"
  global: "<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Request sent, awaiting reply"
```

## Параметры

- Конфигурация происходит тут [Helper](/ru/config/module/command/command-helper/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (message)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>HELPER</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-helper`
- По умолчанию `<color:#ff7171><b>⁉</b> There are no people who can help you`

Сообщение, если на сервере нет людей, которые смогут помочь

### `global`
- По умолчанию `<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>`

Сообщение для тех, кто должен помочь

### `player`
- По умолчанию `<fcolor:2>👤 Request sent, awaiting reply`

Сообщение для игрока

