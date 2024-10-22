# Комманда /mute
Путь `messages > ru_ru.yml > module.command.mute`

## Пояснение
Сообщения для комманды `/mute`
![command mute](/commandmute.png)

## Редактирование
```yaml
<ru_ru.module.command.mute>
```

### По умолчанию
```yaml
command-mute:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MUTE</u> через <time>"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  global: "<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>"
  reason:
    default: "Ты был замучен на сервере"
```

## Параметры

- Конфигурация происходит тут [Mute](/ru/config/module/command/command-mute/)

### `usage`
- По умолчанию `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (игрок)`

Сообщение о том, как использовать комманду

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MUTE</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Невозможное время`

Сообщение, если введено невозможное время

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>`

Сообщение для игрока

### `reason`
- По умолчанию
```yaml
default: "Ты был замучен на сервере"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/mute player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

