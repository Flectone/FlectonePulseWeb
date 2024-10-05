# Правое нажатие
Путь `messages > en_us.yml > module.interaction.right-click`

## Пояснение
Сообщения при нажатии на игрока
![right click](/rightclick.png)

## Редактирование
```yaml
<en_us.module.interaction.right-click>
```

### По умолчанию
```yaml
right-click:
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>RIGHT CLICK</u> in <time>"
  format: "<fcolor:1>◁ <display_name> ▷"
```

## Параметры

- Конфигурация происходит тут [Правое нажатие](/ru/config/module/interaction/right-click/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>RIGHT CLICK</u> in <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>◁ <display_name> ▷`

Сообщение, которое будет отправлено игроку, нажавшему на другого игрока
