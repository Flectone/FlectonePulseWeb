# Комманда /helper
Путь `messages > ru_ru.yml > module.command.helper`

## Пояснение
Сообщения для комманды `/helper`
![command helper](/commandhelper.png)

## Редактирование
```yaml
<ru_ru.module.command.helper>
```

### По умолчанию
```yaml
command-helper:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>HELPER</u> через <time>"
  null-helper: "<color:#ff7171><b>⁉</b> Сейчас нет людей, кто бы смог помочь"
  global: "<fcolor:2>👤 <display_name> просит помощи ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Запрос отправлен, ожидай ответа"
```

## Параметры

- Конфигурация происходит тут [Helper](/ru/config/module/command/command-helper/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>HELPER</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-helper`
- По умолчанию `<color:#ff7171><b>⁉</b> Сейчас нет людей, кто бы смог помочь`

Сообщение, если на сервере нет людей, которые смогут помочь

### `global`
- По умолчанию `<fcolor:2>👤 <display_name> просит помощи ⏩ <fcolor:1><message>`

Сообщение для тех, кто должен помочь

### `player`
- По умолчанию `<fcolor:2>👤 Запрос отправлен, ожидай ответа`

Сообщение для игрока

