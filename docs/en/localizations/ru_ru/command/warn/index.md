# Комманда /warn
Путь `localizations > ru_ru.yml > command.warn`

## Пояснение
Сообщения для комманды `/warn`
![command warn](/commandwarn.png)

## Редактирование
```yaml
<ru_ru.command.warn>
```

### По умолчанию
```yaml
warn:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-time: "<color:#ff7171><b>⁉</b> Невозможное время"
  reasons:
    default: "Ты получил предупреждение"
  global: "<color:#ff7171><br>⏵ Игрок <target> получил предупреждение на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>"
  player: "<color:#ff7171>☠ Ты получил предупреждение на <time>. Причина: <message>"
```

## Параметры

- [Комманда](/ru/command/warn/)
- [Права](/ru/permission/command/warn/)

### `null-player`
- По умолчанию `<color:#ff7171><b>⁉</b> Игрок не найден`

Сообщение, если введённый игрок не найден

### `null-time`
- По умолчанию `<color:#ff7171><b>⁉</b> Невозможное время`

Сообщение, если введено невозможное время

### `reasons`
- По умолчанию
```yaml
default: "Ты получил предупреждение"
```

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/warn player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

### `global`
- По умолчанию `<color:#ff7171><br>⏵ Игрок <target> получил предупреждение на <time> <br>⏵ Причина: <message> <br>⏵ Модератор: <display_name><br>`

Сообщение для всех

### `player`
- По умолчанию `<color:#ff7171>☠ Ты получил предупреждение на <time>. Причина: <message>`

Сообщение для игрока

