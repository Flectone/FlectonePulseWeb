# PlaceholderAPI
Путь `integration.yml >placeholderapi`

## Пояснение
Интеграция с PlaceholderAPI:
- Позволяет использовать любые [плейсхолдеры](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

::: tip Например
`%server_tps%`, `%server_online%` и т.д., если установлен соответствующий модуль с помощью `/papi ecloud download модуль`
:::

- Добавляет свои плейсхолдеры

| Плейсхолдер                     | Что возращает                                                      |
|---------------------------------|--------------------------------------------------------------------|
| `%flectonepulse_fcolor_номер%`  | Возвращает [индивидуальный](/ru/message/format/color/) цвет игрока |
| `%flectonepulse_world_prefix%`  | Префикс измерения у игрока                                         |
| `%flectonepulse_stream_prefix%` | Префикс стрима у игрока                                            |
| `%flectonepulse_afk_suffix%`    | Суффикс афк у игрока                                               |
| `%flectonepulse_player%`        | Обычное имя игрока                                                 |
| `%flectonepulse_ip%`            | Айпи адрес игрока                                                  |
| `%flectonepulse_ping%`          | Пинг игрока                                                        |
| `%flectonepulse_online%`        | Количество игроков на сервере                                      |
| `%flectonepulse_tps%%`          | ТПС сервера                                                        |

## Редактирование
```yaml
<integration.placeholderapi>
```

### По умолчанию
```yaml
placeholderapi:
  enable: true
```

## Параметры

- [Права](/ru/permission/integration/placeholderapi/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

