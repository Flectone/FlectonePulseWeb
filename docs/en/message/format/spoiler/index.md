# Спойлер
Путь `message.yml > format.spoiler`

## Пояснение
Тег `spoiler` используется для скрытия сообщения, до наведения на него

Использование: `<spoiler:сообщение>`

![spoiler message](/spoilermessage.png)
![spoiler minecraft](/spoilerminecraft.png)


## Редактирование
```yaml
<message.format.spoiler>
```

### По умолчанию
```yaml
spoiler:
  enable: true
  color: "<fcolor:2>"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/format/spoiler/)
- [Права](/ru/permission/message/format/spoiler/)

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