# Смайлики
Путь `message.yml > format.emoji`

## Пояснение
Тег `emoji` используется для замены текстовых смайликов в юникод смайлики

Использование: `смайлик`

![emoji message](/emojimessage.png)
![emoji minecraft](/emojiminecraft.png)

При нажатии на такой смайлик, он скопируется в чат
![emoji gif](/emoji.gif)

## Редактирование
```yaml
<message.format.emoji>
```

### По умолчанию
```yaml
emoji:
  enable: true
  values:
     :): "<click:suggest_command:\":)\"><hover:show_text:\":)\">☺</hover></click>"
     :D: "<click:suggest_command:\":D\"><hover:show_text:\":D\">☻</hover></click>"
     :(: "<click:suggest_command:\":(\"><hover:show_text:\":(\">☹</hover></click>"
    :ok:: "<click:suggest_command:\":ok:\"><hover:show_text:\":ok:\">🖒</hover></click>"
    :+1:: "<click:suggest_command:\":+1:\"><hover:show_text:\":+1:\">🖒</hover></click>"
    :-1:: "<click:suggest_command:\":-1:\"><hover:show_text:\":-1:\">🖓</hover></click>"
    :cool:: "<click:suggest_command:\":cool:\"><hover:show_text:\":cool:\">😎</hover></click>"
     B): "<click:suggest_command:\"B)\"><hover:show_text:\"B)\">😎</hover></click>"
    :clown:: "<click:suggest_command:\":clown:\"><hover:show_text:\":clown:\">🤡</hover></click>"
     <3: "<click:suggest_command:\"<3\"><hover:show_text:\"<3\">❤</hover></click>"
     XD: "<click:suggest_command:\"XD\"><hover:show_text:\"XD\">😆</hover></click>"
    %): "<click:suggest_command:\"%)\"><hover:show_text:\"%)\">😵</hover></click>"
     =D: "<click:suggest_command:\"=D\"><hover:show_text:\"=D\">😃</hover></click>"
    >:(: "<click:suggest_command:\">:(\"><hover:show_text:\">:(\">😡</hover></click>"
    :idk:: "<click:suggest_command:\":idk:\"><hover:show_text:\":idk:\">¯\\_(ツ)_/¯</hover></click>"
    :angry:: "<click:suggest_command:\":angry:\"><hover:show_text:\":angry:\">(╯°□°)╯︵ ┻━┻</hover></click>"
    :happy:: "<click:suggest_command:\":happy:\"><hover:show_text:\":happy:\">＼(＾O＾)／</hover></click>"
```

## Параметры

- [Права](/ru/permission/message/format/emoji/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `values`

Список всех доступных смайликов, где ключ - какой текст нужно заменить, а значение - на какой текст нужно заменить

::: tip Например есть смайлик
```yaml
:): "<click:suggest_command:\":)\"><hover:show_text:\":)\">☺</hover></click>"
```

Сообщение `:)` заменится на `☺`
![emoji minecraft](/emojiminecraft.png)
:::