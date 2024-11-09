# Зачарование
Путь `messages > en_us.yml > module.server.message.enchant`

## Пояснение
Сообщение при использовании `/enchant`
![enchant](/enchant.png)

## Редактирование
```yaml
<en_us.module.server.message.enchant>
```

### По умолчанию
```yaml
enchant:
  single: "<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <display_name>'s item"
  multiple: "<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <fcolor:2><count></fcolor:2> entities"
```

## Параметры

- Конфигурация происходит тут [Зачарование](/ru/config/module/server/message/enchant/)

### `single`
- По умолчанию `<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <display_name>'s item`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <fcolor:2><count></fcolor:2> entities`

Сообщение, если команда применяется для многих сущностей