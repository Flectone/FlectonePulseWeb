# Right click
Path `messages > en_us.yml > module.interaction.right-click`

## Explanation
Messages when clicking on a player
![right click](/rightclick.png)

## Edit
```yaml
<en_us.module.interaction.right-click>
```

### Default
```yaml
right-click:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>RIGHT CLICK</u> in <time>"
  format: "<fcolor:1>◁ <display_name> ▷"
```

## Options

- Configuration is here [Right click](/en/config/module/interaction/right-click/)

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>RIGHT CLICK</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>◁ <display_name> ▷`

Message that will be sent to a player who clicked on another player
