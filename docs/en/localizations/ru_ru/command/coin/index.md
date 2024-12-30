# Комманда /coin
Путь `localizations > ru_ru.yml > command.coin`

## Пояснение
Сообщения для комманды `/coin`
![command coin](/commandcoin.png)

## Редактирование
```yaml
<ru_ru.command.coin>
```

### По умолчанию
```yaml
coin:
  head: "орёл"
  tail: "решка"
  format: "<fcolor:1>✎ <display_name> подбросил монетку - <result>"
  format-draw: "<fcolor:1>✎ <display_name> неудачно подбросил монетку ребром :)"
```

## Параметры

- [Комманда](/ru/command/coin/)
- [Права](/ru/permission/command/coin/)

### `head`
- По умолчанию `орёл`

Название стороны монетки

### `tail`
- По умолчанию `решка`

Название другой стороны монетки

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> подбросил монетку - <result>`

Формат сообщения, которое будет отправлено

### `format-draw`
- По умолчанию `<fcolor:1>✎ <display_name> неудачно подбросил монетку ребром :)`

Сообщение, если монетка упала на ребро

