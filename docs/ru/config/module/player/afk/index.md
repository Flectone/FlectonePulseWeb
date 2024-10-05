# Афк
Путь `config.yml > module.player.afk`

## Пояснение
Игрок становится АФК, если ничего не делает какой-то промежуток времени
![afk global message](/afkglobalmessage.png)

Если человек АФК, то ему выдаётся определённый суффикс
![afk suffix](/afksuffix.png)


## Редактирование
```yaml
<config.module.player.afk>
```

### По умолчанию
```yaml
afk:
  enable: true
  delay: 3000
  ignore:
    - "afk"
  permission:
    name: "flectonepulse.module.player.afk"
    type: TRUE
  message:
    enable: true
    global: true
  ticker:
    enable: true
    period: 20
  listener:
    AsyncPlayerChatEvent: LOWEST
    PlayerCommandPreprocessEvent: LOWEST
```

## Параметры

- Сообщения и суффикс АФК изменяются тут [АФК](/ru/messages/ru_ru/module/player/afk/)

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля

### `delay`
- По умолчанию `3000`

Сколько времени в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) игрок ничего не должен делать, чтобы встать в АФК

### `ignore`
- По умолчанию `afk`

Список действий, которые игнорируются и не влияют на режим АФК

| Действия, которые можно игнорировать |
|--------------------------------------|
| Любые названия комманд               |
| `chat` - когда игрок пишет в чат     |
| `quit` - когда игрок выходит         |

::: tip Например
Если я впишу в список комманду `tell` и игрок будет в режиме АФК, то он сможет использовать комманду `tell` и его не выкинет с режима АФК
:::


### `permission`
- Название `flectonepulse.module.player.afk`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `message`
- `enable: true`

Включает сообщение о том, что игрок отошёл или вернулся

- `global: true`

Обозначает, что это сообщение должно быть отправлено всему серверу
![afk global message](/afkglobalmessage.png)

Если `false`, то сообщение получит только сам игрок
![afk local message](/afklocalmessage.png)

### `ticker`
- `enable: true`

Нужно ли проверять что игрок вернулся или встал в АФК

- `period: 20`

Как часто в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) нужно проверять, что игрок АФК или нет

### `listener`
- По умолчанию:
```yaml
AsyncPlayerChatEvent: LOWEST
PlayerCommandPreprocessEvent: LOWEST
```

Список слушателей событий и их [приоритет выполнения](#приоритет-выполнения)

<!--@include: @/ru/parts/listener.md-->