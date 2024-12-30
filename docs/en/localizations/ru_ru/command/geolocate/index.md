# Комманда /geolocate
Путь `localizations > ru_ru.yml > command.geolocate`

## Пояснение
Сообщения для комманды `/geolocate`
![command geolocate](/commandgeolocate.png)

## Редактирование
```yaml
<ru_ru.command.geolocate>
```

### По умолчанию
```yaml
geolocate:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-or-error: "<color:#ff7171><b>⁉</b> Ошибка, попробуй чуть позже"
  format: "<fcolor:1>Геолокация <display_name><br>Страна: <fcolor:2><country><br><fcolor:1>Регион: <fcolor:2><region_name><br><fcolor:1>Город: <fcolor:2><city><br><fcolor:1>Часовой пояс: <fcolor:2><timezone><br><fcolor:1>Мобильный интернет? <fcolor:2><mobile><br><fcolor:1>ВПН? <fcolor:2><proxy><br><fcolor:1>Хостинг? <fcolor:2><hosting><br><fcolor:1>Айпи: <fcolor:2><query>"
```

## Параметры

- [Комманда](/ru/command/geolocate/)
- [Права](/ru/permission/command/geolocate/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `null-or-error`
- По умолчанию `<color:#ff7171><b>⁉</b> Ошибка, попробуй чуть позже`

Сообщение, если произошла ошибка при получении информации

### `format`
- По умолчанию `<fcolor:1>Геолокация <display_name><br>Страна: <fcolor:2><country><br><fcolor:1>Регион: <fcolor:2><region_name><br><fcolor:1>Город: <fcolor:2><city><br><fcolor:1>Часовой пояс: <fcolor:2><timezone><br><fcolor:1>Мобильный интернет? <fcolor:2><mobile><br><fcolor:1>ВПН? <fcolor:2><proxy><br><fcolor:1>Хостинг? <fcolor:2><hosting><br><fcolor:1>Айпи: <fcolor:2><query>`

Формат сообщения, которое будет отправлено

