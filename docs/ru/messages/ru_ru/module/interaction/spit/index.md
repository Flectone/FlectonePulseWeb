# Плевок
Путь `messages > ru_ru.yml > module.interaction.spit`

## Пояснение
Сообщения при плевке
![spit](/spit.png)

## Редактирование
```yaml
<ru_ru.module.interaction.spit>
```

### По умолчанию
```yaml
spit:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>"
  format: "<fcolor:1>🫐 Тебя обплевал <display_name>!"
```

## Параметры

- Конфигурация происходит тут [Плевок](/ru/config/module/interaction/spit/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>SPIT</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>🫐 Тебя обплевал <display_name>!`

Сообщение игроку, которого обплевали
