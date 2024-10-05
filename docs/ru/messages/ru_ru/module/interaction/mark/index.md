# Метка
Путь `messages > ru_ru.yml > module.interaction.mark`

## Пояснение
Сообщения при создании метки
![mark](/mark.gif)

## Редактирование
```yaml
<ru_ru.module.interaction.mark>
```

### По умолчанию
```yaml
mark:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MARK</u> через <time>"
```

## Параметры

- Конфигурация происходит тут [Метка](/ru/config/module/interaction/mark/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>MARK</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`
