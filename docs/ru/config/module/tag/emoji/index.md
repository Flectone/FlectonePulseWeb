# Смайлики
Путь `config.yml > module.tag.emoji`

## Пояснение
Тег `emoji` используется для замены текстовых смайликов в юникод смайлики

Использование: `смайлик`

![emoji message](/emojimessage.png)
![emoji minecraft](/emojiminecraft.png)

При нажатии на такой смайлик, он скопируется в чат
![emoji gif](/emoji.gif)

## Редактирование
```yaml
<config.module.tag.emoji>
```

### По умолчанию
```yaml
emoji:
  enable: true
  permission:
    name: "flectonepulse.module.tag.emoji"
    type: TRUE
  list:
    - target: ":)"
      replacement: "☺"
      hover: "<fcolor:1>:)"
    - target: ":D"
      replacement: "☻"
      hover: "<fcolor:1>:D"
    - target: ":("
      replacement: "☹"
      hover: "<fcolor:1>:("
    - target: ":ok:"
      replacement: "🖒"
      hover: "<fcolor:1>:ok:"
    - target: ":+1:"
      replacement: "🖒"
      hover: "<fcolor:1>:+1:"
    - target: ":-1:"
      replacement: "🖓"
      hover: "<fcolor:1>:-1:"
    - target: ":cool:"
      replacement: "😎"
      hover: "<fcolor:1>:cool:"
    - target: "B)"
      replacement: "😎"
      hover: "<fcolor:1>B)"
    - target: ":clown:"
      replacement: "🤡"
      hover: "<fcolor:1>:clown:"
    - target: "<3"
      replacement: "❤"
      hover: "<fcolor:1><3"
    - target: "XD"
      replacement: "😆"
      hover: "<fcolor:1>XD"
    - target: "%)"
      replacement: "😵"
      hover: "<fcolor:1>%)"
    - target: "=D"
      replacement: "😃"
      hover: "<fcolor:1>=D"
    - target: ">:("
      replacement: "😡"
      hover: "<fcolor:1>>:("
    - target: ":idk:"
      replacement: "¯\\_(ツ)_/¯"
      hover: "<fcolor:1>:idk:"
    - target: ":angry:"
      replacement: "(╯°□°)╯︵ ┻━┻"
      hover: "<fcolor:1>:angry:"
    - target: ":happy:"
      replacement: "＼(＾O＾)／"
      hover: "<fcolor:1>:happy:"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.tag.emoji`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `list`

Список всех доступных смайликов, каждый из которых имеет:
- `target` - какой текст нужно заменить
- `replacement` - на какой текст нужно заменить
- `hover` - сообщение при наведении

::: tip Например есть смайлик
```yaml
target: ":)"
replacement: "☺"
hover: "<fcolor:1>:)"
```

Сообщение `:)` заменится на `☺`
![emoji minecraft](/emojiminecraft.png)
:::