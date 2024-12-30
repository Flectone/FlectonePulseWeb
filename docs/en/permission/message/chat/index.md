# Чат
Путь `permission.yml > message.chat`

## Пояснение
Категория, отвечающая за настройку прав у сообщений игрока в чате

## Редактирование
```yaml
<permission.message.chat>
```

### По умолчанию
```yaml
chat:
  name: "flectonepulse.module.message.chat"
  type: TRUE
  types:
    local:
      name: "flectonepulse.module.message.chat.local"
      type: TRUE
      cooldown-bypass:
        name: "flectonepulse.module.message.chat.local.cooldown.bypass"
        type: OP
      sound:
        name: "flectonepulse.module.message.chat.local.sound"
        type: TRUE
    global:
      name: "flectonepulse.module.message.chat.global"
      type: TRUE
      cooldown-bypass:
        name: "flectonepulse.module.message.chat.global.cooldown.bypass"
        type: OP
      sound:
        name: "flectonepulse.module.message.chat.global.sound"
        type: TRUE
```

## Параметры

- [Сообщения](/ru/message/chat/)
- [Локализация](/ru/localizations/ru_ru/message/chat/)

### `name`
- По умолчанию `flectonepulse.module.message.chat`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `types`
- По умолчанию:
```yaml
local:
  name: "flectonepulse.module.message.chat.local"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.chat.local.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.chat.local.sound"
    type: TRUE
global:
  name: "flectonepulse.module.message.chat.global"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.message.chat.global.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.message.chat.global.sound"
    type: TRUE
```

Список чатов и их прав

#### `cooldown-bypass`

Право для игнорирования задержки между использованием

#### `sound`

Право для использования звука

<!--@include: @/ru/parts/permission.md-->

