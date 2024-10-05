# LuckPerms
Путь `config.yml > module.integration.luckperms`

## Пояснение
Интеграция с LuckPerms позволяет:
- Проверять права у **оффлайн игроков** 
- Сортировать игроков в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

## Редактирование
```yaml
<config.module.integration.luckperms>
```

### По умолчанию
```yaml
luckperms:
  enable: true
  sort: true
  group: {}
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `sort`
- По умолчанию `true`

Включает или выключает сортировку в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

