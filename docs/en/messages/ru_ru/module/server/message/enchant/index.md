# Enchant
Path `messages > ru_ru.yml > module.server.message.enchant`

## Explanation
Message when using `/enchant`
![enchant](/enchant.png)

## Edit
```yaml
<ru_ru.module.server.message.enchant>
```

### Default
```yaml
enchant:
  single: "<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <display_name>"
  multiple: "<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <fcolor:2><count></fcolor:2> сущностей"
```

## Options

- Configuration is here [Enchant](/en/config/module/server/message/enchant/)

### `single`
- Default `<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <display_name>`

Message if command is applied to a specific player

### `multiple`
- Default `<fcolor:1>📖 Наложены чары «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» на предмет <fcolor:2><count></fcolor:2> сущностей`

Message if command is applied to many entities