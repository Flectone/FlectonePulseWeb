# Enchant
Path `messages > en_us.yml > module.server.message.enchant`

## Explanation
Message when using `/enchant`
![enchant](/enchant.png)

## Edit
```yaml
<en_us.module.server.message.enchant>
```

### Default
```yaml
enchant:
  single: "<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <display_name>'s item"
  multiple: "<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <fcolor:2><count></fcolor:2> entities"
```

## Options

- Configuration is here [Enchant](/en/config/module/server/message/enchant/)

### `single`
- Default `<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <display_name>'s item`

Message if command is applied to a specific player

### `multiple`
- Default `<fcolor:1>📖 Applied enchantment «<fcolor:2><lang:<enchant>> <lang:<level>></fcolor:2>» to <fcolor:2><count></fcolor:2> entities`

Message if command is applied to many entities