# Смерть
Путь `localizations > ru_ru.yml > message.death`

## Пояснение
Сообщения о смерти
![death](/deathserver.png)

## Редактирование
```yaml
<ru_ru.message.death>
```

### По умолчанию
```yaml
death:
  types:
    death.attack.anvil: "<color:#778899>🪦 <fcolor:1><display_name> раздавлен упавшей наковальней"
    death.attack.anvil.player: "<color:#778899>🪦 <fcolor:1><display_name> был раздавлен упавшей наковальней, пока боролся с <killer>"
    death.attack.arrow: "<color:#778899>🪦 <fcolor:1><display_name> застрелен <killer>"
    death.attack.arrow.item: "<color:#778899>🪦 <fcolor:1><display_name> застрелен <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.badRespawnPoint.message: "<color:#778899>🪦 <fcolor:1><display_name> стал жертвой <fcolor:2>[<click:open_url:\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"><hover:show_text:\"<fcolor:2>MCPE-28723\">жестоких правил игры</hover></click>]"
    death.attack.cactus: "<color:#778899>🪦 <fcolor:1><display_name> исколот до смерти"
    death.attack.cactus.player: "<color:#778899>🪦 <fcolor:1><display_name> наткнулся на кактус, спасаясь от <killer>"
    death.attack.cramming: "<color:#778899>🪦 <fcolor:1><display_name> расплющен в лепёшку"
    death.attack.cramming.player: "<color:#778899>🪦 <fcolor:1><display_name> расплющен <killer>"
    death.attack.dragonBreath: "<color:#778899>🪦 <fcolor:1><display_name> испепелён дыханием дракона"
    death.attack.dragonBreath.player: "<color:#778899>🪦 <fcolor:1><display_name> сварился заживо в драконьем дыхании из-за <killer>"
    death.attack.drown: "<color:#778899>🪦 <fcolor:1><display_name> утонул"
    death.attack.drown.player: "<color:#778899>🪦 <fcolor:1><display_name> утонул, спасаясь от <killer>"
    death.attack.dryout: "<color:#778899>🪦 <fcolor:1><display_name> умер от обезвоживания"
    death.attack.dryout.player: "<color:#778899>🪦 <fcolor:1><display_name> умер от обезвоживания, спасаясь от <killer>"
    death.attack.even_more_magic: "<color:#778899>🪦 <fcolor:1><display_name> был убит неизведанной магией"
    death.attack.explosion: "<color:#778899>🪦 <fcolor:1><display_name> взорвался"
    death.attack.explosion.player: "<color:#778899>🪦 <fcolor:1><display_name> был взорван <killer>"
    death.attack.explosion.item: "<color:#778899>🪦 <fcolor:1><display_name> был взорван <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.explosion.player.item: "<color:#778899>🪦 <fcolor:1><display_name> был взорван <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.fall: "<color:#778899>🪦 <fcolor:1><display_name> разбился вдребезги"
    death.attack.fall.player: "<color:#778899>🪦 <fcolor:1><display_name> разбился вдребезги, спасаясь от <killer>"
    death.attack.fallingBlock: "<color:#778899>🪦 <fcolor:1><display_name> раздавлен упавшим блоком"
    death.attack.fallingBlock.player: "<color:#778899>🪦 <fcolor:1><display_name> был раздавлен упавшим блоком, пока боролся с <killer>"
    death.attack.fallingStalactite: "<color:#778899>🪦 <fcolor:1><display_name> был пронзён обрушившимся сталактитом"
    death.attack.fallingStalactite.player: "<color:#778899>🪦 <fcolor:1><display_name> был пронзён обрушившимся сталактитом, пока боролся с <killer>"
    death.attack.fireball: "<color:#778899>🪦 <fcolor:1><display_name> убит файерболом <killer>"
    death.attack.fireball.item: "<color:#778899>🪦 <fcolor:1><display_name> убит файерболом <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.fireworks: "<color:#778899>🪦 <fcolor:1><display_name> с треском разлетелся"
    death.attack.fireworks.item: "<color:#778899>🪦 <fcolor:1><display_name> с треском разлетелся из-за фейерверка <killer>, выпущенного из <fcolor:2>[<i><by_item></i>]"
    death.attack.fireworks.player: "<color:#778899>🪦 <fcolor:1><display_name> с треском разлетелся, пока боролся с <killer>"
    death.attack.flyIntoWall: "<color:#778899>🪦 <fcolor:1><display_name> преобразовал кинетическую энергию во внутреннюю"
    death.attack.flyIntoWall.player: "<color:#778899>🪦 <fcolor:1><display_name> преобразовал кинетическую энергию во внутреннюю, спасаясь от <killer>"
    death.attack.freeze: "<color:#778899>🪦 <fcolor:1><display_name> замёрз насмерть"
    death.attack.freeze.player: "<color:#778899>🪦 <fcolor:1><display_name> замёрз насмерть благодаря <killer>"
    death.attack.generic: "<color:#778899>🪦 <fcolor:1><display_name> умер"
    death.attack.generic.player: "<color:#778899>🪦 <fcolor:1><display_name> умер из-за <killer>"
    death.attack.genericKill: "<color:#778899>🪦 <fcolor:1><display_name> убит"
    death.attack.genericKill.player: "<color:#778899>🪦 <fcolor:1><display_name> был убит, сражаясь с <killer>"
    death.attack.hotFloor: "<color:#778899>🪦 <fcolor:1><display_name> обнаружил, что пол — это лава"
    death.attack.hotFloor.player: "<color:#778899>🪦 <fcolor:1><display_name> зашёл в опасную зону из-за <killer>"
    death.attack.indirectMagic: "<color:#778899>🪦 <fcolor:1><display_name> был убит <killer> с помощью магии"
    death.attack.indirectMagic.item: "<color:#778899>🪦 <fcolor:1><display_name> был убит <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.inFire: "<color:#778899>🪦 <fcolor:1><display_name> умер в огне"
    death.attack.inFire.player: "<color:#778899>🪦 <fcolor:1><display_name> сгорел в огне, пока боролся с <killer>"
    death.attack.inWall: "<color:#778899>🪦 <fcolor:1><display_name> погребён заживо"
    death.attack.inWall.player: "<color:#778899>🪦 <fcolor:1><display_name> был погребён заживо, пока боролся с <killer>"
    death.attack.lava: "<color:#778899>🪦 <fcolor:1><display_name> решил поплавать в лаве"
    death.attack.lava.player: "<color:#778899>🪦 <fcolor:1><display_name> упал в лаву, убегая от <killer>"
    death.attack.lightningBolt: "<color:#778899>🪦 <fcolor:1><display_name> был поражён молнией"
    death.attack.lightningBolt.player: "<color:#778899>🪦 <fcolor:1><display_name> был поражён молнией, пока боролся с <killer>"
    death.attack.mace_smash: "<color:#778899>🪦 <fcolor:1><display_name> был сокрушён <killer>"
    death.attack.mace_smash.item: "<color:#778899>🪦 <fcolor:1><display_name> был сокрушён <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.magic: "<color:#778899>🪦 <fcolor:1><display_name> был убит магией"
    death.attack.magic.player: "<color:#778899>🪦 <fcolor:1><display_name> был убит магией, убегая от <killer>"
    death.attack.mob: "<color:#778899>🪦 <fcolor:1><display_name> был убит <killer>"
    death.attack.mob.item: "<color:#778899>🪦 <fcolor:1><display_name> был убит <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.onFire: "<color:#778899>🪦 <fcolor:1><display_name> сгорел заживо"
    death.attack.onFire.item: "<color:#778899>🪦 <fcolor:1><display_name> был сожжён дотла, пока боролся с <killer>, держащим <fcolor:2>[<i><by_item></i>]"
    death.attack.onFire.player: "<color:#778899>🪦 <fcolor:1><display_name> был сожжён дотла, пока боролся с <killer>"
    death.attack.outOfWorld: "<color:#778899>🪦 <fcolor:1><display_name> выпал из мира"
    death.attack.outOfWorld.player: "<color:#778899>🪦 <fcolor:1><display_name> не захотел жить в том же мире, что и <killer>"
    death.attack.outsideBorder: "<color:#778899>🪦 <fcolor:1><display_name> покинул пределы этого мира"
    death.attack.outsideBorder.player: "<color:#778899>🪦 <fcolor:1><display_name> покинул пределы этого мира, пока боролся с <killer>"
    death.attack.player: "<color:#778899>🪦 <fcolor:1><display_name> был убит <killer>"
    death.attack.player.item: "<color:#778899>🪦 <fcolor:1><display_name> был убит <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.sonic_boom: "<color:#778899>🪦 <fcolor:1><display_name> был уничтожен звуковым зарядом"
    death.attack.sonic_boom.item: "<color:#778899>🪦 <fcolor:1><display_name> был уничтожен звуковым зарядом, спасаясь от <killer>, держащего <fcolor:2>[<i><by_item></i>]"
    death.attack.sonic_boom.player: "<color:#778899>🪦 <fcolor:1><display_name> был уничтожен звуковым зарядом, спасаясь от <killer>"
    death.attack.stalagmite: "<color:#778899>🪦 <fcolor:1><display_name> пронзён сталагмитом"
    death.attack.stalagmite.player: "<color:#778899>🪦 <fcolor:1><display_name> был пронзён сталагмитом, пока боролся с <killer>"
    death.attack.starve: "<color:#778899>🪦 <fcolor:1><display_name> умер от голода"
    death.attack.starve.player: "<color:#778899>🪦 <fcolor:1><display_name> умер от голода, пока боролся с <killer>"
    death.attack.sting: "<color:#778899>🪦 <fcolor:1><display_name> изжален до смерти"
    death.attack.sting.item: "<color:#778899>🪦 <fcolor:1><display_name> был изжален до смерти <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.sting.player: "<color:#778899>🪦 <fcolor:1><display_name> изжален до смерти <killer>"
    death.attack.sweetBerryBush: "<color:#778899>🪦 <fcolor:1><display_name> искололся до смерти в кустах сладких ягод"
    death.attack.sweetBerryBush.player: "<color:#778899>🪦 <fcolor:1><display_name> искололся до смерти в кустах сладких ягод, спасаясь от <killer>"
    death.attack.thorns: "<color:#778899>🪦 <fcolor:1><display_name> был убит, пытаясь навредить <killer>"
    death.attack.thorns.item: "<color:#778899>🪦 <fcolor:1><display_name> был убит <fcolor:2>[<i><by_item></i>]</fcolor:2>, пытаясь навредить <killer>"
    death.attack.thrown: "<color:#778899>🪦 <fcolor:1><display_name> был избит <killer>"
    death.attack.thrown.item: "<color:#778899>🪦 <fcolor:1><display_name> был избит <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.trident: "<color:#778899>🪦 <fcolor:1><display_name> был пронзён <killer>"
    death.attack.trident.item: "<color:#778899>🪦 <fcolor:1><display_name> пронзён <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.attack.wither: "<color:#778899>🪦 <fcolor:1><display_name> иссушён"
    death.attack.wither.player: "<color:#778899>🪦 <fcolor:1><display_name> был иссушён, пока боролся с <killer>"
    death.attack.witherSkull: "<color:#778899>🪦 <fcolor:1><display_name> был поражён черепом из <killer>"
    death.attack.witherSkull.item: "<color:#778899>🪦 <fcolor:1><display_name> был поражён черепом из <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.fell.accident.generic: "<color:#778899>🪦 <fcolor:1><display_name> разбился насмерть"
    death.fell.accident.ladder: "<color:#778899>🪦 <fcolor:1><display_name> свалился с лестницы"
    death.fell.accident.other_climbable: "<color:#778899>🪦 <fcolor:1><display_name> сорвался"
    death.fell.accident.scaffolding: "<color:#778899>🪦 <fcolor:1><display_name> сорвался с подмосток"
    death.fell.accident.twisting_vines: "<color:#778899>🪦 <fcolor:1><display_name> сорвался с вьющейся лозы"
    death.fell.accident.vines: "<color:#778899>🪦 <fcolor:1><display_name> сорвался с лианы"
    death.fell.accident.weeping_vines: "<color:#778899>🪦 <fcolor:1><display_name> сорвался с плакучей лозы"
    death.fell.assist: "<color:#778899>🪦 <fcolor:1><display_name> свалился благодаря <killer>"
    death.fell.assist.item: "<color:#778899>🪦 <fcolor:1><display_name> был обречён на падение <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.fell.finish: "<color:#778899>🪦 <fcolor:1><display_name> упал с высоты и был добит <killer>"
    death.fell.finish.item: "<color:#778899>🪦 <fcolor:1><display_name> упал с высоты и был добит <killer> с помощью <fcolor:2>[<i><by_item></i>]"
    death.fell.killer: "<color:#778899>🪦 <fcolor:1><display_name> был обречён на падение"
```

## Параметры

- [Сообщения](/ru/message/death/)
- [Права](/ru/permission/message/death/)

### `types`

Весь список смертей, где ключом является название смерти, а значением сообщение, которое будет использоваться


