# Правое нажатие
Путь `messages > ru_ru.yml > module.interaction.right-click`

## Пояснение
Сообщения при нажатии на игрока
![right click](/rightclick.png)

## Редактирование
```yaml
<ru_ru.module.interaction.right-click>
```

### По умолчанию
```yaml
right-click:
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>RIGHT CLICK</u> через <time>"
  format: "<fcolor:1>◁ <display_name> ▷"
```

## Параметры

- Конфигурация происходит тут [Правое нажатие](/ru/config/module/interaction/right-click/)

### `cooldown`
- По умолчанию `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>RIGHT CLICK</u> через <time>`

Сообщение, которое будет отправлено игроку, пытавшемуся выполнить действие без задержки, если включен `cooldown`

### `format`
- По умолчанию `<fcolor:1>◁ <display_name> ▷`

Сообщение, которое будет отправлено игроку, нажавшему на другого игрока
