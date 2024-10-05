# Комманды
Путь `config.yml > module.command.*`

## Пояснение
Комманда это то, что игрок может использовать с помощью `/`
![command me](/commandme.png)

## Редактирование
```yaml
<config.module.command>
```

### По умолчанию
```yaml
command:
  enable: true
  permission:
    name: "flectonepulse.module.command"
    type: TRUE
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `permission`
- Название `flectonepulse.module.command`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля