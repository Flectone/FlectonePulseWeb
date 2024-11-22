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
helper:
  null-helper: "<color:#ff7171><b>⁉</b> There are no people who can help you"
  global: "<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Request sent, awaiting reply"
```

## Параметры

- [Комманда](/en/commands/module/command/helper/)
- [Права](/en/permissions/module/command/helper/)

### `null-helper`
- По умолчанию `<color:#ff7171><b>⁉</b> There are no people who can help you`

Сообщение, если на сервере нет людей, которые смогут помочь

### `global`
- По умолчанию `<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>`

Сообщение для тех, кто должен помочь

### `player`
- По умолчанию `<fcolor:2>👤 Request sent, awaiting reply`

Сообщение для игрока

