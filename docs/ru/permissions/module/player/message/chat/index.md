# Чат
Путь `permissions.yml > module.player.message.chat`

## Пояснение
Категория, отвечающая за настройку прав у сообщений игрока в чате

## Редактирование
```yaml
<permissions.module.player.message.chat>
```

### По умолчанию
```yaml
chat:
  name: "flectonepulse.module.player.message.chat"
  type: TRUE
  types:
    local:
      name: "flectonepulse.module.player.message.chat.local"
      type: TRUE
      cooldown-bypass:
        name: "flectonepulse.module.player.message.chat.local.cooldown.bypass"
        type: OP
      sound:
        name: "flectonepulse.module.player.message.chat.local.sound"
        type: TRUE
    global:
      name: "flectonepulse.module.player.message.chat.global"
      type: TRUE
      cooldown-bypass:
        name: "flectonepulse.module.player.message.chat.global.cooldown.bypass"
        type: OP
      sound:
        name: "flectonepulse.module.player.message.chat.global.sound"
        type: TRUE
```

## Параметры

- [Конфиг](/ru/config/module/player/message/chat/)
- [Сообщения](/ru/messages/ru_ru/module/player/message/chat/)

### `name`
- По умолчанию `flectonepulse.module.player.message.chat`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `types`
- По умолчанию:
```yaml
local:
  name: "flectonepulse.module.player.message.chat.local"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.player.message.chat.local.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.player.message.chat.local.sound"
    type: TRUE
global:
  name: "flectonepulse.module.player.message.chat.global"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.player.message.chat.global.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.player.message.chat.global.sound"
    type: TRUE
```

Список чатов и их прав

#### `cooldown-bypass`

Право для игнорирования задержки между использованием

#### `sound`

Право для использования звука

<!--@include: @/ru/parts/permission.md-->

