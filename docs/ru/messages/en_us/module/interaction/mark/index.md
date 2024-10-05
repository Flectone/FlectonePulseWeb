# Метка
Путь `messages > en_us.yml > module.interaction.mark`

## Пояснение
Сообщения при создании метки
![mark](/mark.gif)

## Редактирование
```yaml
<en_us.module.interaction.mark>
```

### По умолчанию
```yaml
mark:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MARK</u> in <time>"
```

## Параметры

- Конфигурация происходит тут [Метка](/ru/config/module/interaction/mark/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>MARK</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`
