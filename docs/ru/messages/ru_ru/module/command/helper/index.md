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
helper:
  null-helper: "<color:#ff7171><b>⁉</b> Сейчас нет людей, кто бы смог помочь"
  global: "<fcolor:2>👤 <display_name> просит помощи ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Запрос отправлен, ожидай ответа"
```

## Параметры

- [Комманда](/ru/commands/module/command/helper/)
- [Права](/ru/permissions/module/command/helper/)

### `null-helper`
- По умолчанию `<color:#ff7171><b>⁉</b> Сейчас нет людей, кто бы смог помочь`

Сообщение, если на сервере нет людей, которые смогут помочь

### `global`
- По умолчанию `<fcolor:2>👤 <display_name> просит помощи ⏩ <fcolor:1><message>`

Сообщение для тех, кто должен помочь

### `player`
- По умолчанию `<fcolor:2>👤 Запрос отправлен, ожидай ответа`

Сообщение для игрока

