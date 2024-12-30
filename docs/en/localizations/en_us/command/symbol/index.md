# Комманда /symbol
Путь `localizations > en_us.yml > command.symbol`

## Пояснение
Сообщения для комманды `/symbol`
![command symbol](/commandsymbol.png)

## Редактирование
```yaml
<en_us.command.symbol>
```

### По умолчанию
```yaml
  symbol:
    format: "<click:suggest_command:\"<message>\"><fcolor:2>🖥 Click for using: <fcolor:1><message>"
    categories:
      activities: "activities"
      animals: "animals"
      arrows: "arrows"
      body: "body"
      clothes: "clothes"
      environment: "environment"
      faces: "faces"
      food: "food"
      greenery: "greenery"
      hands: "hands"
      misc: "misc"
      numbers: "numbers"
      people: "people"
      shapes: "shapes"
      symbols: "symbols"
      things: "things"
      transport: "transport"
```

## Параметры

- [Комманда](/ru/command/symbol/)
- [Права](/ru/permission/command/symbol/)

### `format`
- По умолчанию `<click:suggest_command:\"<message>\"><fcolor:2>🖥 Нажми, чтобы использовать: <fcolor:1><message>`

Формат сообщения, которое будет отправлено

### `categories`
```yaml
activities: "мероприятие"
animals: "животные"
arrows: "стрелки"
body: "тело"
clothes: "одежда"
environment: "окружение"
faces: "лицо"
food: "еда"
greenery: "зелень"
hands: "руки"
misc: "разное"
numbers: "числа"
people: "люди"
shapes: "фигуры"
symbols: "символы"
things: "вещи"
transport: "транспорт"
```
Список категорий и их названий для подсказок

