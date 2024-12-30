# Комманда /mute
Путь `localizations > ru_ru.yml > command.mute`

## Пояснение
Сообщения для комманды `/mute`
![command mute](/commandmute.png)

## Редактирование
```yaml
<ru_ru.command.mute>
```

### По умолчанию
```yaml
mute:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  reasons:
    default: "Ты был замучен на сервере"
  global: "<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>"
```

## Параметры

- [Комманда](/ru/command/mute/)
- [Права](/ru/permission/command/mute/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Невозможное время`

Сообщение, если введено невозможное время

### `reasons`
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

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Игрок <target> замучен на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ Ты замучен, осталось <time>. Причина: <message>`

Сообщение для игрока

