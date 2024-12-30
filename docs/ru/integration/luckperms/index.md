# LuckPerms
Путь `integration.yml >luckperms`

## Пояснение
Интеграция с LuckPerms позволяет:
- Проверять права у **оффлайн игроков** 
- Сортировать игроков в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

## Редактирование
```yaml
<integration.luckperms>
```

### По умолчанию
```yaml
luckperms:
  enable: true
  tab-sort: false
```

## Параметры

- [Права](/ru/permission/integration/luckperms/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `tab-sort`
- По умолчанию `false`

Включает или выключает сортировку в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

