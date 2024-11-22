# Форматирование
Путь `permissions.yml > module.player.message.format.*`

## Пояснение
Категория, отвечающая за настройку прав у форматирования сообщений игрока

## Редактирование
```yaml
<permissions.module.player.message.format>
```

### По умолчанию
```yaml
message:
  name: "flectonepulse.module.player.message.format"
  type: TRUE
  all:
    name: "flectonepulse.module.player.message.format.all"
    type: OP
  tags:
    PING:
      name: "flectonepulse.module.player.message.format.ping"
      type: TRUE
    TPS:
      name: "flectonepulse.module.player.message.format.tps"
      type: TRUE
    ONLINE:
      name: "flectonepulse.module.player.message.format.online"
      type: TRUE
    COORDS:
      name: "flectonepulse.module.player.message.format.coords"
      type: TRUE
    STATS:
      name: "flectonepulse.module.player.message.format.stats"
      type: TRUE
    SKIN:
      name: "flectonepulse.module.player.message.format.skin"
      type: TRUE
    ITEM:
      name: "flectonepulse.module.player.message.format.item"
      type: TRUE
    URL:
      name: "flectonepulse.module.player.message.format.url"
      type: TRUE
    IMAGE:
      name: "flectonepulse.module.player.message.format.image"
      type: TRUE
    SPOILER:
      name: "flectonepulse.module.player.message.format.spoiler"
      type: TRUE
    BOLD:
      name: "flectonepulse.module.player.message.format.bold"
      type: TRUE
    ITALIC:
      name: "flectonepulse.module.player.message.format.italic"
      type: TRUE
    UNDERLINE:
      name: "flectonepulse.module.player.message.format.underline"
      type: TRUE
    OBFUSCATED:
      name: "flectonepulse.module.player.message.format.obfuscated"
      type: TRUE
    STRIKETHROUGH:
      name: "flectonepulse.module.player.message.format.strikethrough"
      type: TRUE
    HOVER:
      name: "flectonepulse.module.player.message.format.hover"
      type: OP
    CLICK:
      name: "flectonepulse.module.player.message.format.click"
      type: OP
    COLOR:
      name: "flectonepulse.module.player.message.format.color"
      type: OP
    KEYBIND:
      name: "flectonepulse.module.player.message.format.keybind"
      type: OP
    TRANSLATABLE:
      name: "flectonepulse.module.player.message.format.translatable"
      type: OP
    TRANSLATABLE_FALLBACK:
      name: "flectonepulse.module.player.message.format.translatable_fallback"
      type: OP
    INSERTION:
      name: "flectonepulse.module.player.message.format.insertion"
      type: OP
    FONT:
      name: "flectonepulse.module.player.message.format.font"
      type: OP
    DECORATION:
      name: "flectonepulse.module.player.message.format.decoration"
      type: TRUE
    GRADIENT:
      name: "flectonepulse.module.player.message.format.gradient"
      type: OP
    RAINBOW:
      name: "flectonepulse.module.player.message.format.rainbow"
      type: OP
    RESET:
      name: "flectonepulse.module.player.message.format.reset"
      type: OP
    NEWLINE:
      name: "flectonepulse.module.player.message.format.newline"
      type: OP
    TRANSITION:
      name: "flectonepulse.module.player.message.format.transition"
      type: OP
    SELECTOR:
      name: "flectonepulse.module.player.message.format.selector"
      type: OP
    SCORE:
      name: "flectonepulse.module.player.message.format.score"
      type: OP
    NBT:
      name: "flectonepulse.module.player.message.format.nbt"
      type: OP
```

## Параметры

- [Конфиг](/en/config/module/player/message/format/)
- [Сообщения](/en/messages/ru_ru/module/player/message/format/)

### `name`
- По умолчанию `flectonepulse.module.player.message.format`

Название права

### `type`
- По умолчанию `TRUE`

Тип права

### `all`

Право для использования всех возможных форматирований

::: details Настройка
#### `name`
- По умолчанию `flectonepulse.module.player.message.format.all`

Название права

#### `type`
- По умолчанию `OP`

Тип права
:::

### `tags`

Список тегов и их прав для использования

<!--@include: @/en/parts/permission.md-->

