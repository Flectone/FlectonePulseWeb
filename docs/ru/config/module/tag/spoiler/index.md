# Спойлер
Путь `config.yml > module.tag.spoiler`

## Пояснение
Тег `spoiler` используется для скрытия сообщения, до наведения на него

Использование: `<spoiler:сообщение>`

![spoiler message](/spoilermessage.png)
![spoiler minecraft](/spoilerminecraft.png)


## Редактирование
```yaml
<config.module.tag.spoiler>
```

### По умолчанию
```yaml
spoiler:
  enable: true
  color: "<fcolor:2>"
  permission:
    name: "flectonepulse.module.tag.spoiler"
    type: TRUE
```

## Параметры

- Сообщение и символ изменяются тут [Спойлер](/ru/messages/ru_ru/module/tag/spoiler/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `color`
- По умолчанию `<fcolor:2>`

Определяет цвет сообщения, содержащее спойлер

::: tip Пример
`<spoiler:дом>`

Здесь `дом` будет иметь цвет `<fcolor:2>`

:::

### `permission`
- Название `flectonepulse.module.tag.spoiler`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля