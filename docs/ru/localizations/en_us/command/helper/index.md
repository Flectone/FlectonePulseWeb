# Комманда /helper
Путь `localizations > en_us.yml > command.helper`

## Пояснение
Сообщения для комманды `/helper`
![command helper](/commandhelper.png)

## Редактирование
```yaml
<en_us.command.helper>
```

### По умолчанию
```yaml
helper:
  null-helper: "<color:#ff7171><b>⁉</b> There are no people who can help you"
  global: "<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Request sent, awaiting reply"
```

## Параметры

- [Комманда](/ru/command/helper/)
- [Права](/ru/permission/command/helper/)

### `null-helper`
- По умолчанию `<color:#ff7171><b>⁉</b> There are no people who can help you`

Сообщение, если на сервере нет людей, которые смогут помочь

### `global`
- По умолчанию `<fcolor:2>👤 <display_name> needs help ⏩ <fcolor:1><message>`

Сообщение для тех, кто должен помочь

### `player`
- По умолчанию `<fcolor:2>👤 Request sent, awaiting reply`

Сообщение для игрока

