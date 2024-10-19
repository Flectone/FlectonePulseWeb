# Command /geolocate
Path `messages > en_us.yml > module.command.geolocate`

## Explanation
Messages for `/geolocate` command
![command geolocate](/commandgeolocate.png)

## Edit
```yaml
<en_us.module.command.geolocate>
```

### Default
```yaml
command-geolocate:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  error: "<color:#ff7171><b>⁉</b> Problem receiving information, try again"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>GEOLOCATE</u> in <time>"
  format: "<fcolor:1>Geolocation for <display_name><br>Country: <fcolor:2><country><br><fcolor:1>Region: <fcolor:2><region_name><br><fcolor:1>City: <fcolor:2><city><br><fcolor:1>Timezone: <fcolor:2><timezone><br><fcolor:1>Mobile connection: <fcolor:2><mobile><br><fcolor:1>VPN: <fcolor:2><proxy><br><fcolor:1>Hosting: <fcolor:2><hosting><br><fcolor:1>IP: <fcolor:2><query>"
```

## Options

- Configuration is here [Geolocate](/en/config/module/command/command-geolocate/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `error`
- Default `<color:#ff7171><b>⁉</b> Problem receiving information, try again`

Message if there was an error in receiving the information

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>GEOLOCATE</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `format`
- Default `<fcolor:1>Geolocation for <display_name><br>Country: <fcolor:2><country><br><fcolor:1>Region: <fcolor:2><region_name><br><fcolor:1>City: <fcolor:2><city><br><fcolor:1>Timezone: <fcolor:2><timezone><br><fcolor:1>Mobile connection: <fcolor:2><mobile><br><fcolor:1>VPN: <fcolor:2><proxy><br><fcolor:1>Hosting: <fcolor:2><hosting><br><fcolor:1>IP: <fcolor:2><query>`

Format of message

