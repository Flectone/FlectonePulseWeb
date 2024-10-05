# Комманда /geolocate
Путь `messages > en_us.yml > module.command.geolocate`

## Пояснение
Сообщения для комманды `/geolocate`
![command geolocate](/commandgeolocate.png)

## Редактирование
```yaml
<en_us.module.command.geolocate>
```

### По умолчанию
```yaml
command-geolocate:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  error: "<color:#ff7171><b>⁉</b> Problem receiving information, try again"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>GEOLOCATE</u> in <time>"
  format: "<fcolor:1>Geolocation for <display_name><br>Country: <fcolor:2><country><br><fcolor:1>Region: <fcolor:2><region_name><br><fcolor:1>City: <fcolor:2><city><br><fcolor:1>Timezone: <fcolor:2><timezone><br><fcolor:1>Mobile connection: <fcolor:2><mobile><br><fcolor:1>VPN: <fcolor:2><proxy><br><fcolor:1>Hosting: <fcolor:2><hosting><br><fcolor:1>IP: <fcolor:2><query>"
```

## Параметры

- Конфигурация происходит тут [Geolocate](/ru/config/module/command/command-geolocate/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `error`
- По умолчанию `<color:#ff7171><b>⁉</b> Problem receiving information, try again`

Сообщение, если произошла ошибка при получении информации

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>GEOLOCATE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>Geolocation for <display_name><br>Country: <fcolor:2><country><br><fcolor:1>Region: <fcolor:2><region_name><br><fcolor:1>City: <fcolor:2><city><br><fcolor:1>Timezone: <fcolor:2><timezone><br><fcolor:1>Mobile connection: <fcolor:2><mobile><br><fcolor:1>VPN: <fcolor:2><proxy><br><fcolor:1>Hosting: <fcolor:2><hosting><br><fcolor:1>IP: <fcolor:2><query>`

Формат сообщения, которое будет отправлено

