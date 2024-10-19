# Spit
Path `messages > ru_ru.yml > module.interaction.spit`

## Explanation
Spitting messages
![spit](/spit.png)

## Edit
```yaml
<ru_ru.module.interaction.spit>
```

### Default
```yaml
spit:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>"
  format: "<fcolor:1>🫐 Тебя обплевал <display_name>!"
```

## Options

- Configuration is here [Spit](/en/config/module/interaction/spit/)

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>🫐 Тебя обплевал <display_name>!`

Message to a player who has been spat on
