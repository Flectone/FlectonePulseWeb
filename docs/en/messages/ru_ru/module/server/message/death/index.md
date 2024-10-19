# Death
Path `messages > ru_ru.yml > module.server.message.death`

## Explanation
Death messages
![death](/deathserver.png)

## Edit
```yaml
<ru_ru.module.server.message.death>
```

### Default
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

## Options

- Configuration is here [Death](/en/config/module/server/message/death/)

### `entity-hover`
- Default `<fcolor:2><entity_name> <br><fcolor:1>Тип: <fcolor:2><entity_type> <br><fcolor:1><entity_uuid>`

Message when hovering over an entity

### `due-to`
- Default `<fcolor:1>благодаря <fcolor:2><killer>`

A message that replaces the `<due_to>` tag if a player was killed because of someone

### `by-item`
- Default `<fcolor:1>с помощью <fcolor:2>[<item_name>]`

A message that replaces the `<by_item>` tag with name of item

### `natural`

::: details A list of natural deaths

#### `contact`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>исколот до смерти блоком <fcolor:2><block_name> <due_to>`

Message when dying from contact with block

#### `entity_sweep_attack`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>сбит с ног <due_to>`

Death message from sweeping

#### `projectile`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>застрелен <fcolor:2><projectile_name> <due_to>`

Message on death by projectile

#### `suffocation`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>погребён заживо <due_to>`

Message when dying in blocks

#### `fall`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>разбился вдребезги <due_to>`

Message at death due to altitude

#### `fire`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>умер в огне <due_to>`

Message when dying from a block of fire

#### `fire_tick`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>сгорел заживо <due_to>`

Message when dying by burning

#### `melting`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>расплавился <due_to>`

Message when dying of heat

#### `lava`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>решил поплавать в лаве <due_to>`

Message when dying of lava

#### `drowning`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>утонул <due_to>`

Message when dying of shortness of breath

#### `block_explosion`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>был взорван блоком <fcolor:2><block_name> <due_to>`

Message when dying by block explosion

#### `entity_explosion`
- Default ``<color:#778899>🪦 <display_name> <fcolor:1>был взорван <fcolor:2><killer> <due_to>`

Message when dying from the explosion of a mob

#### `void`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>выпал из мира <due_to>`

Message when dying of void

#### `lightning`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>был поражён молнией <due_to>`

Message when dying from lightning

#### `suicide`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>покончил с собой <due_to>`

Message when dying by self

#### `starvation`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>умер от голода <due_to>`

Message when dying of starvation

#### `poison`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>отравился <due_to>`

Message when dying of poison

#### `magic`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>умер от <fcolor:2><killer> <due_to>`

Message when dying of magic

#### `wither`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>иссушён <due_to>`

Message when dying by withering

#### `falling_block`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>раздавлен падающим блоком <fcolor:2><killer> <due_to>`

Message when dying from a falling block

#### `thorns`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>был убит шипами <due_to>`

Message when dying by thorns

#### `dragon_breath`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>испарился в драконьем дыхании <due_to>`

Message when dying by dragon's breath

#### `custom`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>умер по неизвестным причинам <due_to>`

Message when dying of unknown cause

#### `fly_into_wall`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>преобразовал кинетическую энергию во внутреннюю <due_to>`

Message when dying from a collision with a wall

#### `hot_floor`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>обнаружил, что пол — это лава <due_to>`

Message when dying from altitude in lava

#### `cramming`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>расплющен в лепёшку <due_to>`

Message when dying from a large number of mobs in one block

#### `dryout`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>умер от обезвоживания <due_to>`

Message when dying from lack of water

#### `freeze`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>замёрз насмерть <due_to>`

Message when dying of cold

#### `sonic_boom`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>был уничтожен звуковым зарядом <due_to>`

Message when you die from a sonic charge

#### `kill`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>был убит <due_to>`

Message when you die by `/kill`
:::

### `mob`

::: details List of deaths from mobs
#### `default`
- Default `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был убит <fcolor:2><killer> <due_to>`

Message on death from any mob if `mod-default: true` in the configuration

#### `player`
- Default `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был убит игроком <fcolor:2><killer> <by_item>`

Message on death from a player

#### `zombie`
- Default `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>был съеден <fcolor:2><killer> <due_to>`

Example message when dying from a zombie if `mod-default: false` in the configuration

:::



