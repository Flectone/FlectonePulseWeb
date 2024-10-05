# Подпись
Путь `messages > ru_ru.yml > module.interaction.sign`

## Пояснение
Сообщения при подписи предмета
![sign](/sign.gif)

## Редактирование
```yaml
<ru_ru.module.interaction.sign>
```

### По умолчанию
```yaml
sign:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SIGN</u> через <time>"
  format: "<dye><italic>#<player>"
```

## Параметры

- Конфигурация происходит тут [Подпись](/ru/config/module/interaction/sign/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SIGN</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<dye><italic>#<player>`

Сообщение, которое будет занесено в описание предмета, как подпись
