# Стуки
Путь `permissions.yml > module.interaction.knock`

## Пояснение
Категория, отвечающая за настройку прав у взаимодействия Стуки

## Редактирование
```yaml
<permissions.module.interaction.knock>
```

### По умолчанию
```yaml
knock:
  name: "flectonepulse.module.interaction.knock"
  type: TRUE
  types:
    GLASS:
      name: "flectonepulse.module.interaction.knock.glass.sound"
      type: TRUE
    DOOR:
      name: "flectonepulse.module.interaction.knock.door.sound"
      type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.interaction.knock.cooldown.bypass"
    type: OP
```

## Параметры

- [Конфиг](/ru/config/module/interaction/knock/)

### `name`
- По умолчанию `flectonepulse.module.interaction.knock`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `types`
- По умолчанию:
```yaml
types:
  GLASS:
    name: "flectonepulse.module.interaction.knock.glass.sound"
    type: TRUE
  DOOR:
    name: "flectonepulse.module.interaction.knock.door.sound"
    type: TRUE
```

Список названий звуков для стука и их права

<!--@include: @/ru/parts/permission.md-->

