# Sign
Path `messages > en_us.yml > module.interaction.sign`

## Explanation
Messages when signing an item
![sign](/sign.gif)

## Edit
```yaml
<en_us.module.interaction.sign>
```

### Default
```yaml
sign:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SIGN</u> in <time>"
  format: "<dye><italic>#<player>"
```

## Options

- Configuration is here [Sign](/en/config/module/interaction/sign/)

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SIGN</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<dye><italic>#<player>`

Message in the item description as a sign
