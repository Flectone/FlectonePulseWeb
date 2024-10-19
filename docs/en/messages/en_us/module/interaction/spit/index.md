# Spit
Path `messages > en_us.yml > module.interaction.spit`

## Explanation
Spitting messages
![spit](/spit.png)

## Edit
```yaml
<en_us.module.interaction.spit>
```

### Default
```yaml
spit:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>"
  format: "<fcolor:1>🫐 You were spat on by <display_name>!"
```

## Options

- Configuration is here [Spit](/en/config/module/interaction/spit/)

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>🫐 You were spat on by <display_name>!`

Message to a player who has been spat on
