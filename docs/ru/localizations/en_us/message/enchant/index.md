# Зачарование
Путь `localizations > en_us.yml > message.enchant`

## Пояснение
Сообщение при использовании `/enchant`
![enchant](/enchant.png)

## Редактирование
```yaml
<en_us.message.enchant>
```

### По умолчанию
```yaml
enchant:
  single: "<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <display_name>'s item"
  multiple: "<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <fcolor:2><count></fcolor:2> entities"
```

## Параметры

- [Сообщения](/ru/message/enchant/)
- [Права](/ru/permission/message/enchant/)

### `single`
- По умолчанию `<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <display_name>'s item`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <fcolor:2><count></fcolor:2> entities`

Сообщение, если команда применяется для многих сущностей