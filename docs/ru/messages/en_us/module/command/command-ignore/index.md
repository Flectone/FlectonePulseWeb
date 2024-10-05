# Комманда /ignore
Путь `messages > en_us.yml > module.command.ignore`

## Пояснение
Сообщения для комманды `/ignore`
![command ignore](/commandignore.png)

## Редактирование
```yaml
<en_us.module.command.ignore>
```

### По умолчанию
```yaml
command-ignore:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>IGNORE</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't ignore yourself"
  he-ignore: "<color:#ff7171><b>⁉</b> You can't write to him because he ignore you"
  you-ignore: "<color:#ff7171><b>⁉</b> You can't write to him because you ignore him"
  ignore: "<color:#ff7171>☹ You ignore <display_name>"
  unignore: "<color:#98FB98>☺ You unignore <display_name>"
```

## Параметры

- Конфигурация происходит тут [Ignore](/ru/config/module/command/command-ignore/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>IGNORE</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> This player does not exist`

Сообщение, если введённый игрок не найден

### `myself`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't ignore yourself`

Сообщение, если игрок пытается игнорировать самого себя

### `he-ignore`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't write to him because he ignore you`

Сообщение, если получатель игнорирует отправителя

### `you-ignore`
- По умолчанию `<color:#ff7171><b>⁉</b> You can't write to him because you ignore him`

Сообщение, если отправитель игнорирует получателя

### `ignore`
- По умолчанию `<color:#ff7171>☹ You ignore <display_name>`

Сообщение при успешном игнорировании

### `unignore`
- По умолчанию `<color:#98FB98>☺ You unignore <display_name>`

Сообщение при снятии игнорирования

