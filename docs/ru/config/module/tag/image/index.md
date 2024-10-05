# Изображение
Путь `config.yml > module.tag.image`

## Пояснение
Тег `image` используется для отображения изображений

Использование: `<image:ссылка> сообщение </image>`

![image](https://i.imgur.com/hX8U4T7.png)
![image message](/imagemessage.png)
![image minecraft](/imageminecraft.png)


## Редактирование
```yaml
<config.module.tag.image>
```

### По умолчанию
```yaml
image:
  enable: true
  color: "<fcolor:2>"
  permission:
    name: "flectonepulse.module.tag.image"
    type: TRUE
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `color`
- По умолчанию `<fcolor:2>`

Определяет цвет сообщения, содержащее ссылку

::: tip Пример
`<image:ссылка> дом </image>`

Здесь `дом` будет иметь цвет `<fcolor:2>`

:::

### `permission`
- Название `flectonepulse.module.tag.image`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля