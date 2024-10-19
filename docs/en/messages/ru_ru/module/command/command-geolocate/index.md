# Command /geolocate
Path `messages > ru_ru.yml > module.command.geolocate`

## Explanation
Messages for `/geolocate` command
![command geolocate](/commandgeolocate.png)

## Edit
```yaml
<ru_ru.module.command.geolocate>
```

### Default
```yaml
command-geolocate:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  error: "<color:#ff7171><b>⁉</b> Ошибка, попробуй чуть позже"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>GEOLOCATE</u> через <time>"
  format: "<fcolor:1>Геолокация <display_name><br>Страна: <fcolor:2><country><br><fcolor:1>Регион: <fcolor:2><region_name><br><fcolor:1>Город: <fcolor:2><city><br><fcolor:1>Часовой пояс: <fcolor:2><timezone><br><fcolor:1>Мобильный интернет? <fcolor:2><mobile><br><fcolor:1>ВПН? <fcolor:2><proxy><br><fcolor:1>Хостинг? <fcolor:2><hosting><br><fcolor:1>Айпи: <fcolor:2><query>"
```

## Options

- Configuration is here [Geolocate](/en/config/module/command/command-geolocate/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> Игрок не найден`

Message if entered player is not found

### `error`
- Default `<color:#ff7171><b>⁉</b> Ошибка, попробуй чуть позже`

Message if there was an error in receiving the information

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>GEOLOCATE</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>Геолокация <display_name><br>Страна: <fcolor:2><country><br><fcolor:1>Регион: <fcolor:2><region_name><br><fcolor:1>Город: <fcolor:2><city><br><fcolor:1>Часовой пояс: <fcolor:2><timezone><br><fcolor:1>Мобильный интернет? <fcolor:2><mobile><br><fcolor:1>ВПН? <fcolor:2><proxy><br><fcolor:1>Хостинг? <fcolor:2><hosting><br><fcolor:1>Айпи: <fcolor:2><query>`

Format of message

