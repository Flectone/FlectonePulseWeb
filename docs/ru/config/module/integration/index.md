# Интеграции
Путь `config.yml > module.integration.*`

## Пояснение
Интеграцией называется возможность работы с технологией, которая необязательна для плагина

Зачем это нужно?
- Для большего функционала и удобства плагина
- Для исправления несовместимостей плагина и технологии

## Редактирование
```yaml
<config.module.integration>
```

### По умолчанию
```yaml
integration:
  enable: true
  permission:
    name: "flectonepulse.module.integration"
    type: TRUE
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `permission`
- Название `flectonepulse.module.integration`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля