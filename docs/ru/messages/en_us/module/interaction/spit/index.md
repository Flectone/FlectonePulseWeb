# Плевок
Путь `messages > en_us.yml > module.interaction.spit`

## Пояснение
Сообщения при плевке
![spit](/spit.png)

## Редактирование
```yaml
<en_us.module.interaction.spit>
```

### По умолчанию
```yaml
spit:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>"
  format: "<fcolor:1>🫐 You were spat on by <display_name>!"
```

## Параметры

- Конфигурация происходит тут [Плевок](/ru/config/module/interaction/spit/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>SPIT</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>🫐 You were spat on by <display_name>!`

Сообщение игроку, которого обплевали
