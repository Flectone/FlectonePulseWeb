# Зачарование
Путь `localizations > ru_ru.yml > message.enchant`

## Пояснение
Сообщение при использовании `/enchant`
![enchant](/enchant.png)

## Редактирование
```yaml
<ru_ru.message.enchant>
```

### По умолчанию
```yaml
enchant:
  single: "<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <display_name>"
  multiple: "<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <fcolor:2><count></fcolor:2> сущностей"
```

## Параметры

- [Сообщения](/ru/message/enchant/)
- [Права](/ru/permission/message/enchant/)

### `single`
- По умолчанию `<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <display_name>`

Сообщение, если команда применяется для конкретного игрока

### `multiple`
- По умолчанию `<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <fcolor:2><count></fcolor:2> сущностей`

Сообщение, если команда применяется для многих сущностей