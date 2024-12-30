# Комманда /dice
Путь `localizations > en_us.yml > command.dice`

## Пояснение
Сообщения для комманды `/dice`
![command dice](/commanddice.png)

## Редактирование
```yaml
<en_us.command.dice>
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

- [Комманда](/ru/command/dice/)
- [Права](/ru/permission/command/dice/)

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

