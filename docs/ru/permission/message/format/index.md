# Форматирование
Путь `permission.yml > message.format.*`

## Пояснение
Категория, отвечающая за настройку прав у форматирования сообщений игрока

## Редактирование
```yaml
<permission.message.format>
```

### По умолчанию
```yaml
message:
  name: "flectonepulse.module.message.format"
  type: TRUE
  all:
    name: "flectonepulse.module.message.format.all"
    type: OP
  tags:
    PING:
      name: "flectonepulse.module.message.format.ping"
      type: TRUE
    TPS:
      name: "flectonepulse.module.message.format.tps"
      type: TRUE
    ONLINE:
      name: "flectonepulse.module.message.format.online"
      type: TRUE
    COORDS:
      name: "flectonepulse.module.message.format.coords"
      type: TRUE
    STATS:
      name: "flectonepulse.module.message.format.stats"
      type: TRUE
    SKIN:
      name: "flectonepulse.module.message.format.skin"
      type: TRUE
    ITEM:
      name: "flectonepulse.module.message.format.item"
      type: TRUE
    URL:
      name: "flectonepulse.module.message.format.url"
      type: TRUE
    IMAGE:
      name: "flectonepulse.module.message.format.image"
      type: TRUE
    SPOILER:
      name: "flectonepulse.module.message.format.spoiler"
      type: TRUE
    BOLD:
      name: "flectonepulse.module.message.format.bold"
      type: TRUE
    ITALIC:
      name: "flectonepulse.module.message.format.italic"
      type: TRUE
    UNDERLINE:
      name: "flectonepulse.module.message.format.underline"
      type: TRUE
    OBFUSCATED:
      name: "flectonepulse.module.message.format.obfuscated"
      type: TRUE
    STRIKETHROUGH:
      name: "flectonepulse.module.message.format.strikethrough"
      type: TRUE
    HOVER:
      name: "flectonepulse.module.message.format.hover"
      type: OP
    CLICK:
      name: "flectonepulse.module.message.format.click"
      type: OP
    COLOR:
      name: "flectonepulse.module.message.format.color"
      type: OP
    KEYBIND:
      name: "flectonepulse.module.message.format.keybind"
      type: OP
    TRANSLATABLE:
      name: "flectonepulse.module.message.format.translatable"
      type: OP
    TRANSLATABLE_FALLBACK:
      name: "flectonepulse.module.message.format.translatable_fallback"
      type: OP
    INSERTION:
      name: "flectonepulse.module.message.format.insertion"
      type: OP
    FONT:
      name: "flectonepulse.module.message.format.font"
      type: OP
    DECORATION:
      name: "flectonepulse.module.message.format.decoration"
      type: TRUE
    GRADIENT:
      name: "flectonepulse.module.message.format.gradient"
      type: OP
    RAINBOW:
      name: "flectonepulse.module.message.format.rainbow"
      type: OP
    RESET:
      name: "flectonepulse.module.message.format.reset"
      type: OP
    NEWLINE:
      name: "flectonepulse.module.message.format.newline"
      type: OP
    TRANSITION:
      name: "flectonepulse.module.message.format.transition"
      type: OP
    SELECTOR:
      name: "flectonepulse.module.message.format.selector"
      type: OP
    SCORE:
      name: "flectonepulse.module.message.format.score"
      type: OP
    NBT:
      name: "flectonepulse.module.message.format.nbt"
      type: OP
```

## Параметры

- [Сообщения](/ru/message/format/)
- [Локализация](/ru/localizations/ru_ru/message/format/)

### `name`
- По умолчанию `flectonepulse.module.message.format`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `all`

Право для использования всех возможных форматирований

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.message.format.all`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `tags`

Список тегов и их прав для использования

<!--@include: @/ru/parts/permission.md-->

