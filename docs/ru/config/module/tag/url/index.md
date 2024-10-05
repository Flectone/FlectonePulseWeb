# Ссылка
Путь `config.yml > module.tag.url`

## Пояснение
Тег `url` используется для форматирования ссылок

Использование: `<url:ссылка> сообщение </url>`

![url message](/urlmessage.png)
![url minecraft](/urlminecraft.png)


## Редактирование
```yaml
<config.module.tag.url>
```

### По умолчанию
```yaml
url:
  enable: true
  hover: true
  clickable: true
  color: "<fcolor:2>"
  permission:
    name: "flectonepulse.module.tag.url"
    type: TRUE
```

## Параметры

- Сообщение изменяется тут [Ссылка](/ru/messages/ru_ru/module/tag/url/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `hover`
- По умолчанию `true`

Включает или выключает сообщение при наведении
![url minecraft](/urlminecraft.png)

### `clickable`
- По умолчанию `true`

Включает или выключает возможность нажимать на ссылку

### `color`
- По умолчанию `<fcolor:2>`

Определяет цвет сообщения, содержащее ссылку

::: tip Пример
`<url:ссылка> привет </url>`

Здесь `привет` будет иметь цвет `<fcolor:2>`

:::

### `permission`
- Название `flectonepulse.module.tag.url`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля