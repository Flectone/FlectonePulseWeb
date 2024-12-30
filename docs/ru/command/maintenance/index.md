# Комманда /maintenance
Путь `command.yml > maintenance`

## Пояснение
Комманда для включения технических работ
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

## Редактирование
```yaml
<command.maintenance>
```

### По умолчанию
```yaml
maintenance:
  enable: true
  turned-on: false
  aliases:
    - "maintenance"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/command/maintenance/)
- [Права](/ru/permission/command/maintenance/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `turned-on`
- По умолчанию `false`

Включает или выключает технические работы на сервере

### `aliases`
- По умолчанию `maintenance`

Список псевдонимов для использования комманды

::: tip Псевдонимы могут быть любыми
Например `newmaintenance`, `техническиеработы` и т.д.
:::

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::