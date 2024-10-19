# Death
Path `messages > en_us.yml > module.server.message.death`

## Explanation
Death messages
![death](/deathserver.png)

## Edit
```yaml
<en_us.module.server.message.death>
```

### Default
```yaml
death:
  entity-hover: "<fcolor:2><entity_name> <br><fcolor:1>Type: <fcolor:2><entity_type> <br><fcolor:1><entity_uuid>"
  due-to: "<fcolor:1>due to <fcolor:2><killer>"
  by-item: "<fcolor:1>using <fcolor:2>[<item_name>]"
  natural:
    contact: "<color:#778899>🪦 <display_name> <fcolor:1>was prickled to death by <fcolor:2><block_name> <due_to>"
    entity_sweep_attack: "<color:#778899>🪦 <display_name> <fcolor:1>was swept off their feet <due_to>"
    projectile: "<color:#778899>🪦 <display_name> <fcolor:1>was shot by a <fcolor:2><projectile_name> <due_to>"
    suffocation: "<color:#778899>🪦 <display_name> <fcolor:1>suffocated in a wall <due_to>"
    fall: "<color:#778899>🪦 <display_name> <fcolor:1>hit the ground too hard <due_to>"
    fire: "<color:#778899>🪦 <display_name> <fcolor:1>went up in flames <due_to>"
    fire_tick: "<color:#778899>🪦 <display_name> <fcolor:1>burned to death <due_to>"
    melting: "<color:#778899>🪦 <display_name> <fcolor:1>melted <due_to>"
    lava: "<color:#778899>🪦 <display_name> <fcolor:1>tried to swim in lava <due_to>"
    drowning: "<color:#778899>🪦 <display_name> <fcolor:1>drowned <due_to>"
    block_explosion: "<color:#778899>🪦 <display_name> <fcolor:1>was blown up by <fcolor:2><block_name> <due_to>"
    entity_explosion: "<color:#778899>🪦 <display_name> <fcolor:1>was blown up by <fcolor:2><killer> <due_to>"
    void: "<color:#778899>🪦 <display_name> <fcolor:1>fell out of the world <due_to>"
    lightning: "<color:#778899>🪦 <display_name> <fcolor:1>was struck by lightning <due_to>"
    suicide: "<color:#778899>🪦 <display_name> <fcolor:1>took their own life <due_to>"
    starvation: "<color:#778899>🪦 <display_name> <fcolor:1>starved to death <due_to>"
    poison: "<color:#778899>🪦 <display_name> <fcolor:1>died of poison <due_to>"
    magic: "<color:#778899>🪦 <display_name> <fcolor:1>was hit by <fcolor:2><killer> <due_to>"
    wither: "<color:#778899>🪦 <display_name> <fcolor:1>withered away <due_to>"
    falling_block: "<color:#778899>🪦 <display_name> <fcolor:1>was squashed by a <fcolor:2><killer> <due_to>"
    thorns: "<color:#778899>🪦 <display_name> <fcolor:1>was killed by thorns <due_to>"
    dragon_breath: "<color:#778899>🪦 <display_name> <fcolor:1>was roasted in dragon's breath <due_to>"
    custom: "<color:#778899>🪦 <display_name> <fcolor:1>died of unknown causes <due_to>"
    fly_into_wall: "<color:#778899>🪦 <display_name> <fcolor:1>experienced kinetic energy <due_to>"
    hot_floor: "<color:#778899>🪦 <display_name> <fcolor:1>discovered the floor was lava <due_to>"
    cramming: "<color:#778899>🪦 <display_name> <fcolor:1>was squished too much <due_to>"
    dryout: "<color:#778899>🪦 <display_name> <fcolor:1>died from dehydration <due_to>"
    freeze: "<color:#778899>🪦 <display_name> <fcolor:1>froze to death <due_to>"
    sonic_boom: "<color:#778899>🪦 <display_name> <fcolor:1>was obliterated by a sonically-charged shriek <due_to>"
    kill: "<color:#778899>🪦 <display_name> <fcolor:1>was killed <due_to>"
  mob:
    default: "<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>was slain by <fcolor:2><killer> <due_to>"
    player: "<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>was killed by player <fcolor:2><killer> <by_item>"
    zombie: "<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>was eaten by a <fcolor:2><killer> <due_to>"
```

## Options

- Configuration is here [Death](/en/config/module/server/message/death/)

### `entity-hover`
- Default `<fcolor:2><entity_name> <br><fcolor:1>Type: <fcolor:2><entity_type> <br><fcolor:1><entity_uuid>`

Message when hovering over an entity

### `due-to`
- Default `<fcolor:1>due to <fcolor:2><killer>`

A message that replaces the `<due_to>` tag if a player was killed because of someone

### `by-item`
- Default `<fcolor:1>using <fcolor:2>[<item_name>]`

A message that replaces the `<by_item>` tag with name of item

### `natural`

::: details A list of natural deaths

#### `contact`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was prickled to death by <fcolor:2><block_name> <due_to>`

Message when dying from contact with block

#### `entity_sweep_attack`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was swept off their feet <due_to>`

Death message from sweeping

#### `projectile`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was shot by a <fcolor:2><projectile_name> <due_to>`

Message on death by projectile

#### `suffocation`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>suffocated in a wall <due_to>`

Message when dying in blocks

#### `fall`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>hit the ground too hard <due_to>`

Message at death due to altitude

#### `fire`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>went up in flames <due_to>`

Message when dying from a block of fire

#### `fire_tick`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>burned to death <due_to>`

Message when dying by burning

#### `melting`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>melted <due_to>`

Message when dying of heat

#### `lava`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>tried to swim in lava <due_to>`

Message when dying of lava

#### `drowning`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>drowned <due_to>`

Message when dying of shortness of breath

#### `block_explosion`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was blown up by <fcolor:2><block_name> <due_to>`

Message when dying by block explosion

#### `entity_explosion`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was blown up by <fcolor:2><killer> <due_to>`

Message when dying from the explosion of a mob

#### `void`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>fell out of the world <due_to>`

Message when dying of void

#### `lightning`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was struck by lightning <due_to>`

Message when dying from lightning

#### `suicide`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>took their own life <due_to>`

Message when dying by self

#### `starvation`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>starved to death <due_to>`

Message when dying of starvation

#### `poison`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>died of poison <due_to>`

Message when dying of poison

#### `magic`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was hit by <fcolor:2><killer> <due_to>`

Message when dying of magic

#### `wither`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>withered away <due_to>`

Message when dying by withering

#### `falling_block`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was squashed by a <fcolor:2><killer> <due_to>`

Message when dying from a falling block

#### `thorns`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was killed by thorns <due_to>`

Message when dying by thorns

#### `dragon_breath`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was roasted in dragon's breath <due_to>`

Message when dying by dragon's breath

#### `custom`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>died of unknown causes <due_to>`

Message when dying of unknown cause

#### `fly_into_wall`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>experienced kinetic energy <due_to>`

Message when dying from a collision with a wall

#### `hot_floor`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>discovered the floor was lava <due_to>`

Message when dying from altitude in lava

#### `cramming`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was squished too much <due_to>`

Message when dying from a large number of mobs in one block

#### `dryout`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>died from dehydration <due_to>`

Message when dying from lack of water

#### `freeze`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>froze to death <due_to>`

Message when dying of cold

#### `sonic_boom`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was obliterated by a sonically-charged shriek <due_to>`

Message when you die from a sonic charge

#### `kill`
- Default `<color:#778899>🪦 <display_name> <fcolor:1>was killed <due_to>`

Message when you die by `/kill`
:::

### `mob`

::: details List of deaths from mobs
#### `default`
- Default `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>was slain by <fcolor:2><killer> <due_to>`

Message on death from any mob if `mod-default: true` in the configuration

#### `player`
- Default `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>was killed by player <fcolor:2><killer> <by_item>`

Message on death from a player

#### `zombie`
- Default `<color:#778899>🪦 <fcolor:2><display_name> <fcolor:1>was eaten by a <fcolor:2><killer> <due_to>`

Example message when dying from a zombie if `mod-default: false` in the configuration

:::



