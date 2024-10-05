# Kyori Adventure
Путь `config.yml > module.player.message.format.kyori.*`

## Пояснение
Это форматирование позволяет использовать библиотеку [MiniMessage](https://docs.advntr.dev/minimessage/format.html#standard-tags)

## Редактирование
```yaml
<config.module.player.message.format.kyori>
```

### По умолчанию
```yaml
kyori:
  hover:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.hover"
      type: OP
  click:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.click"
      type: OP
  color:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.color"
      type: OP
  keybind:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.keybind"
      type: OP
  translatable:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.translatable"
      type: OP
  translatable_fallback:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.translatable_fallback"
      type: OP
  insertion:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.insertion"
      type: OP
  font:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.font"
      type: OP
  decoration:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.decoration"
      type: TRUE
  gradient:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.gradient"
      type: OP
  rainbow:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.rainbow"
      type: OP
  reset:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.reset"
      type: OP
  newline:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.newline"
      type: OP
  transition:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.transition"
      type: OP
  selector:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.selector"
      type: OP
  score:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.score"
      type: OP
  nbt:
    enable: true
    permission:
      name: "flectonepulse.module.player.message.format.nbt"
      type: OP
```

## Параметры

### `enable`

Включает или выключает работоспособность тега

### `permission`

[Право](/ru/config/module/#пояснение) для использования тега

## [Виды тегов](https://docs.advntr.dev/minimessage/format.html#standard-tags)

| Тег                       | Использование                                                                | Описание                                                                                       |
|---------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)               | Текст при наведении                                                                            |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)               | Действие при нажатии                                                                           |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)               | Цвет                                                                                           |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)           | Настройка клавиш для сообщения                                                                 |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                       |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                       |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)       | Вставка текста в чат с помощью ШИФТ                                                            |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)                 | Изменение шрифта текста                                                                        |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration)     | Стандартные украшения майнкрафта `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated` |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)         | Градиентный цвет текста                                                                        |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)           | Радужный цвет текста                                                                           |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)               | Сброс всех тегов и декораций                                                                   |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)           | Переход на новую строку, замена `\n`                                                           |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition)     | Переход между двумя цветами                                                                    |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)         | Селектор мобов                                                                                 |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)               | Значение у команды (scoreboard)                                                                |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)                   | Вставка NBT компонента                                                                         |
