# Достижение
Путь `config.yml > module.server.message.advancement`

## Пояснение
Сообщение от сервера, когда игрок получает достижение
![task](/task.png)

## Редактирование
```yaml
<config.module.server.message.advancement>
```

### По умолчанию
```yaml
advancement:
  enable: true
  permission:
    name: "flectonepulse.module.server.message.advancement"
    type: TRUE
  announce:
    enable: false
    worlds: []
  type:
    TASK: true
    GOAL: true
    CHALLENGE: true
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
    permission:
      name: "flectonepulse.module.server.message.advancement.sound"
      type: TRUE
  listener:
    PlayerAdvancementDoneEvent: LOWEST
```

## Параметры

- Сообщения изменяются тут [Достижение](/ru/messages/ru_ru/module/server/message/advancement/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `permission`
- Название `flectonepulse.module.server.message.advancement`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `announce`
- По умолчанию `false`

Включает ванильное отображение достижений от сервера

::: danger Достижения после удаления плагина не показываются !?
1. Заново установи плагин
2. Включи [`announce: true`](#announce)
3. Включи в `worlds` все миры на `true`
4. Перезагрузи сервер и можешь удалять плагин!

---
или используй команду `/execute in название_мира run gamerule announceAdvancements true`
:::

- `worlds` - список названий миров с ванильным отображением достижений
::: tip Нужно понимать
Если `announce: false`, то все миры в `worlds` будут скрывать ванильное отображение достижений
:::

### `type`

Список всех [видов](#виды-достижений) достижений и их отображений

::: tip Например я хочу, чтобы обычные достижения не показывались
Тогда я изменяю `TASK: false` и теперь обычные достижения не будут показываться
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`

### `permission`
- Название `flectonepulse.module.server.message.advancement.sound`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для проигрывания звука
:::

### `listener`
- По умолчанию:
```yaml
PlayerAdvancementDoneEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

## Виды достижений
| Вид         | В игре                       |
|-------------|------------------------------|
| `TASK`      | ![task](/task.png)           |
| `GOAL`      | ![goal](/goal.png)           |
| `CHALLENGE` | ![challenge](/challenge.png) |

<!--@include: @/ru/parts/listener.md-->