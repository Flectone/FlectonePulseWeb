# PlaceholderAPI
Path `config.yml > module.integration.placeholderapi`

## Explanation
Integration with PlaceholderAPI:
- Allows to use any [placeholder](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

::: tip Example
`%server_tps%`, `%server_online%`, etc., if module is installed with `/papi ecloud download module`.
:::

- Adds its placeholders

| Placeholder                     | What returns                                                               |
|---------------------------------|----------------------------------------------------------------------------|
| `%flectonepulse_fcolor_номер%`  | Returns the [individual](/en/config/module/tag/color/) color of the player |
| `%flectonepulse_world_prefix%`  | World prefix of the player                                                 |
| `%flectonepulse_stream_prefix%` | Stream prefix of the player                                                |
| `%flectonepulse_afk_suffix%`    | Afk suffix of the player                                                   |
| `%flectonepulse_player%`        | Default player name                                                        |
| `%flectonepulse_ip%`            | Player's IP address                                                        |
| `%flectonepulse_ping%`          | Player ping                                                                |
| `%flectonepulse_online%`        | Number of players on server                                                |
| `%flectonepulse_tps%%`          | Server TPS                                                                 |

## Edit
```yaml
<config.module.integration.placeholderapi>
```

### Default
```yaml
placeholderapi:
  enable: true
  permission:
    name: "flectonepulse.module.integration.placeholderapi"
    type: OP
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.integration.placeholderapi`
- Type `OP`

Permission to use placeholders directly in messages

