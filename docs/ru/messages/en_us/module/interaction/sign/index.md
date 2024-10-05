# Подпись
Путь `messages > en_us.yml > module.interaction.sign`

## Пояснение
Сообщения при подписи предмета
![sign](/sign.gif)

## Редактирование
```yaml
<en_us.module.interaction.sign>
```

### По умолчанию
```yaml
sign:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SIGN</u> in <time>"
  format: "<dye><italic>#<player>"
```

## Параметры

- Конфигурация происходит тут [Подпись](/ru/config/module/interaction/sign/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SIGN</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<dye><italic>#<player>`

Сообщение, которое будет занесено в описание предмета, как подпись
