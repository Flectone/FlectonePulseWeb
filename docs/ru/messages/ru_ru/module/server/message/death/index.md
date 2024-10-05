# Смерть
Путь `messages > ru_ru.yml > module.server.message.death`

## Пояснение
Сообщения о смерти
![death](/deathserver.png)

## Редактирование
```yaml
<ru_ru.module.server.message.death>
```

### По умолчанию
```yaml
death:
  entity-hover: "<fcolor:2><entity_name> <br><fcolor:1>Тип: <fcolor:2><entity_type> <br><fcolor:1><entity_uuid>"
  due-to: "<fcolor:1>благодаря <fcolor:2><killer>"
  by-item: "<fcolor:1>с помощью <fcolor:2>[<item_name>]"
  natural:
    contact: "<color:#778899>🪦 <display_name> <fcolor:1>исколот до смерти блоком <fcolor:2><block_name> <due_to>"
    entity_sweep_attack: "<color:#778899>🪦 <display_name> <fcolor:1>сбит с ног <due_to>"
    projectile: "<color:#778899>🪦 <display_name> <fcolor:1>застрелен <fcolor:2><projectile_name> <due_to>"
    suffocation: "<color:#778899>🪦 <display_name> <fcolor:1>погребён заживо <due_to>"
    fall: "<color:#778899>🪦 <display_name> <fcolor:1>разбился вдребезги <due_to>"
    fire: "<color:#778899>🪦 <display_name> <fcolor:1>умер в огне <due_to>"
    fire_tick: "<color:#778899>🪦 <display_name> <fcolor:1>сгорел заживо <due_to>"
    melting: "<color:#778899>🪦 <display_name> <fcolor:1>расплавился <due_to>"
    lava: "<color:#778899>🪦 <display_name> <fcolor:1>решил поплавать в лаве <due_to>"
    drowning: "<color:#778899>🪦 <display_name> <fcolor:1>утонул <due_to>"
    block_explosion: "<color:#778899>🪦 <display_name> <fcolor:1>был взорван блоком <fcolor:2><block_name> <due_to>"
    entity_explosion: "<color:#778899>🪦 <display_name> <fcolor:1>был взорван <fcolor:2><killer> <due_to>"
    void: "<color:#778899>🪦 <display_name> <fcolor:1>выпал из мира <due_to>"
    lightning: "<color:#778899>🪦 <display_name> <fcolor:1>был поражён молнией <due_to>"
    suicide: "<color:#778899>🪦 <display_name> <fcolor:1>покончил с собой <due_to>"
    starvation: "<color:#778899>🪦 <display_name> <fcolor:1>умер от голода <due_to>"
    poison: "<color:#778899>🪦 <display_name> <fcolor:1>отравился <due_to>"
    magic: "<color:#778899>🪦 <display_name> <fcolor:1>умер от <fcolor:2><killer> <due_to>"
    wither: "<color:#778899>🪦 <display_name> <fcolor:1>иссушён <due_to>"
    falling_block: "<color:#778899>🪦 <display_name> <fcolor:1>раздавлен падающим блоком <fcolor:2><killer> <due_to>"
    thorns: "<color:#778899>🪦 <display_name> <fcolor:1>был убит шипами <due_to>"
    dragon_breath: "<color:#778899>🪦 <display_name> <fcolor:1>испарился в драконьем дыхании <due_to>"
    custom: "<color:#778899>🪦 <display_name> <fcolor:1>умер по неизвестным причинам <due_to>"
    fly_into_wall: "<color:#778899>🪦 <display_name> <fcolor:1>преобразовал кинетическую энергию во внутреннюю <due_to>"
    hot_floor: "<color:#778899>🪦 <display_name> <fcolor:1>обнаружил, что пол — это лава <due_to>"
    cramming: "<color:#778899>🪦 <display_name> <fcolor:1>расплющен в лепёшку <due_to>"
    dryout: "<color:#778899>🪦 <display_name> <fcolor:1>умер от обезвоживания <due_to>"
    freeze: "<color:#778899>🪦 <display_name> <fcolor:1>замёрз насмерть <due_to>"
    sonic_boom: "<color:#778899>🪦 <display_name> <fcolor:1>был уничтожен звуковым зарядом <due_to>"
    kill: "<color:#778899>🪦 <display_name> <fcolor:1>был убит <due_to>"
  mob:
    default: "<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был убит <fcolor:2><killer> <due_to>"
    player: "<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был убит игроком <fcolor:2><killer> <by_item>"
    zombie: "<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был съеден <fcolor:2><killer> <due_to>"
```

## Параметры

- Конфигурация происходит тут [Смерть](/ru/config/module/server/message/death/)

### `entity-hover`
- По умолчанию `<fcolor:2><entity_name> <br><fcolor:1>Тип: <fcolor:2><entity_type> <br><fcolor:1><entity_uuid>`

Сообщение при наведении на моба

### `due-to`
- По умолчанию `<fcolor:1>благодаря <fcolor:2><killer>`

Сообщение, которое заменяет тег `<due_to>`, если игрок был убит из-за кого-то

### `by-item`
- По умолчанию `<fcolor:1>с помощью <fcolor:2>[<item_name>]`

Сообщение, которое заменяет тег `<by_item>` с названием предмета

### `natural`

::: details Список натуральных смертей

#### `contact`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>исколот до смерти блоком <fcolor:2><block_name> <due_to>`

Сообщение при смерти от контакта с блоком

#### `entity_sweep_attack`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>сбит с ног <due_to>`

Сообщение при смерти от разящего удара

#### `projectile`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>застрелен <fcolor:2><projectile_name> <due_to>`

Сообщение при смерти от снаряда

#### `suffocation`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>погребён заживо <due_to>`

Сообщение при смерти в блоках

#### `fall`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>разбился вдребезги <due_to>`

Сообщение при смерти от высоты

#### `fire`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>умер в огне <due_to>`

Сообщение при смерти от блока огня

#### `fire_tick`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>сгорел заживо <due_to>`

Сообщение при смерти от горения

#### `melting`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>расплавился <due_to>`

Сообщение при смерти от жары

#### `lava`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>решил поплавать в лаве <due_to>`

Сообщение при смерти от лавы

#### `drowning`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>утонул <due_to>`

Сообщение при смерти от нехватки воздуха

#### `block_explosion`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>был взорван блоком <fcolor:2><block_name> <due_to>`

Сообщение при смерти от взрыва блоком

#### `entity_explosion`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>был взорван <fcolor:2><killer> <due_to>`

Сообщение при смерти от взрыва моба

#### `void`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>выпал из мира <due_to>`

Сообщение при смерти от пустоты

#### `lightning`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>был поражён молнией <due_to>`

Сообщение при смерти от молнии

#### `suicide`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>покончил с собой <due_to>`

Сообщение при смерти от самого себя

#### `starvation`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>умер от голода <due_to>`

Сообщение при смерти от голода

#### `poison`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>отравился <due_to>`

Сообщение при смерти от яда

#### `magic`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>умер от <fcolor:2><killer> <due_to>`

Сообщение при смерти от магии

#### `wither`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>иссушён <due_to>`

Сообщение при смерти от иссушения

#### `falling_block`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>раздавлен падающим блоком <fcolor:2><killer> <due_to>`

Сообщение при смерти от падающего блока

#### `thorns`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>был убит шипами <due_to>`

Сообщение при смерти от шипов

#### `dragon_breath`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>испарился в драконьем дыхании <due_to>`

Сообщение при смерти от драконьего дыхания

#### `custom`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>умер по неизвестным причинам <due_to>`

Сообщение при смерти от неизвестной причины

#### `fly_into_wall`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>преобразовал кинетическую энергию во внутреннюю <due_to>`

Сообщение при смерти от столкновения об стену

#### `hot_floor`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>обнаружил, что пол — это лава <due_to>`

Сообщение при смерти от высоты в лаве

#### `cramming`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>расплющен в лепёшку <due_to>`

Сообщение при смерти от большого количества мобов в одном блоке

#### `dryout`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>умер от обезвоживания <due_to>`

Сообщение при смерти от нехватки воды

#### `freeze`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>замёрз насмерть <due_to>`

Сообщение при смерти от холода

#### `sonic_boom`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>был уничтожен звуковым зарядом <due_to>`

Сообщение при смерти от звукового заряда

#### `kill`
- По умолчанию `<color:#778899>🪦 <display_name> <fcolor:1>был убит <due_to>`

Сообщение при смерти от `/kill`
:::

### `mob`

::: details Список смертей от мобов
#### `default`
- По умолчанию `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был убит <fcolor:2><killer> <due_to>`

Сообщение при смерти от любого моба, если `mod-default: true` в конфигурации

#### `player`
- По умолчанию `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был убит игроком <fcolor:2><killer> <by_item>`

Сообщение при смерти от игрока

#### `zombie`
- По умолчанию `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был съеден <fcolor:2><killer> <due_to>`

Пример сообщения при смерти от зомби, если `mod-default: false` в конфигурации

:::



