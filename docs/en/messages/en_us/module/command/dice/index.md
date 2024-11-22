# Комманда /dice
Путь `messages > en_us.yml > module.command.dice`

## Пояснение
Сообщения для комманды `/dice`
![command dice](/commanddice.png)

## Редактирование
```yaml
<en_us.module.command.dice>
```

### По умолчанию
```yaml
dice:
  symbols:
    1: "⚀"
    2: "⚁"
    3: "⚂"
    4: "⚃"
    5: "⚄"
    6: "⚅"
  format: "<fcolor:1>✎ <display_name> roll <message> (<sum>)"
```

## Параметры

- [Комманда](/en/commands/module/command/dice/)
- [Права](/en/permissions/module/command/dice/)

### `symbols`
- По умолчанию:
```yaml
1: "⚀"
2: "⚁"
3: "⚂"
4: "⚃"
5: "⚄"
6: "⚅"
```

Список индексов (выпавшее число) и символов (кубики)

### `format`
- По умолчанию `<fcolor:1>✎ <display_name> roll <message> (<sum>)`

Формат сообщения, которое будет отправлено

