# Цвета
Путь `config.yml > module.tag.color`

## Пояснение
Тег `fcolor` используется для индивидуальных настроек цвета у каждого игрока

Использование: `<fcolor:номер>`

![color message](/colormessage.png)
![color](/color.gif)

## Редактирование
```yaml
<config.module.tag.color>
```

### По умолчанию
```yaml
color:
  enable: true
  use-player-colors: true
  permission:
    name: "flectonepulse.module.tag.color"
    type: TRUE
  list:
    1: "#ADD8E6"
    2: "#87CEFA"
    3: "#A9A9A9"
    4: "#FFFAFA"
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `use-player-colors`
- По умолчанию `true`

Если включено, то любое сообщение, которое содержит `<fcolor:номер>`, будет отформатировано относительно получателя
![color true](/colortrue.gif)

Иначе цвет будет зависеть от цветов отправителя
![color false](/colorfalse.gif)


### `permission`
- Название `flectonepulse.module.tag.color`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `list`

Список всех используемых цветов, где номер является ключом к цвету по умолчанию


::: tip Например есть цвет
```yaml
1: "#ADD8E6"
```
`1` - номер для цвета `#ADD8E6` <br><br>
Чтобы такой тег использовать, нужно писать `<fcolor:1>`
:::