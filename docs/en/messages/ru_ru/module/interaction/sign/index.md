# Sign
Path `messages > ru_ru.yml > module.interaction.sign`

## Explanation
Messages when signing an item
![sign](/sign.gif)

## Edit
```yaml
<ru_ru.module.interaction.sign>
```

### Default
```yaml
sign:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SIGN</u> через <time>"
  format: "<dye><italic>#<player>"
```

## Options

- Configuration is here [Sign](/en/config/module/interaction/sign/)

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SIGN</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<dye><italic>#<player>`

Message in the item description as a sign
