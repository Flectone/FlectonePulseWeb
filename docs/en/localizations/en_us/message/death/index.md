# Смерть
Путь `localizations > en_us.yml > message.death`

## Пояснение
Сообщения о смерти
![death](/deathserver.png)

## Редактирование
```yaml
<en_us.message.death>
```

### По умолчанию
```yaml
death:
  types:
    death.attack.anvil: "<color:#778899>🪦 <fcolor:1><display_name> was squashed by a falling anvil"
    death.attack.anvil.player: "<color:#778899>🪦 <fcolor:1><color:#778899>🪦 <fcolor:1> <display_name> was squashed by a falling anvil while fighting <killer>"
    death.attack.arrow: "<color:#778899>🪦 <fcolor:1><display_name> was shot by <killer>"
    death.attack.arrow.item: "<color:#778899>🪦 <fcolor:1><display_name> was shot by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.badRespawnPoint.message: "<color:#778899>🪦 <fcolor:1><display_name> was killed by <fcolor:2>[<click:open_url:\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"><hover:show_text:\"<fcolor:2>MCPE-28723\">Intentional Game Design</hover></click>]"
    death.attack.cactus: "<color:#778899>🪦 <fcolor:1><display_name> was pricked to death"
    death.attack.cactus.player: "<color:#778899>🪦 <fcolor:1><display_name> walked into a cactus while trying to escape <killer>"
    death.attack.cramming: "<color:#778899>🪦 <fcolor:1><display_name> was squished too much"
    death.attack.cramming.player: "<color:#778899>🪦 <fcolor:1><display_name> was squashed by <killer>"
    death.attack.dragonBreath: "<color:#778899>🪦 <fcolor:1><display_name> was roasted in dragon's breath"
    death.attack.dragonBreath.player: "<color:#778899>🪦 <fcolor:1><display_name> was roasted in dragon's breath by <killer>"
    death.attack.drown: "<color:#778899>🪦 <fcolor:1><display_name> drowned"
    death.attack.drown.player: "<color:#778899>🪦 <fcolor:1><display_name> drowned while trying to escape <killer>"
    death.attack.dryout: "<color:#778899>🪦 <fcolor:1><display_name> died from dehydration"
    death.attack.dryout.player: "<color:#778899>🪦 <fcolor:1><display_name> died from dehydration while trying to escape <killer>"
    death.attack.even_more_magic: "<color:#778899>🪦 <fcolor:1><display_name> was killed by even more magic"
    death.attack.explosion: "<color:#778899>🪦 <fcolor:1><display_name> blew up"
    death.attack.explosion.player: "<color:#778899>🪦 <fcolor:1><display_name> was blown up by <killer>"
    death.attack.explosion.item: "<color:#778899>🪦 <fcolor:1><display_name> was blown up by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.explosion.player.item: "<color:#778899>🪦 <fcolor:1><display_name> was blown up by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.fall: "<color:#778899>🪦 <fcolor:1><display_name> hit the ground too hard"
    death.attack.fall.player: "<color:#778899>🪦 <fcolor:1><display_name> hit the ground too hard while trying to escape <killer>"
    death.attack.fallingBlock: "<color:#778899>🪦 <fcolor:1><display_name> was squashed by a falling block"
    death.attack.fallingBlock.player: "<color:#778899>🪦 <fcolor:1><display_name> was squashed by a falling block while fighting <killer>"
    death.attack.fallingStalactite: "<color:#778899>🪦 <fcolor:1><display_name> was skewered by a falling stalactite"
    death.attack.fallingStalactite.player: "<color:#778899>🪦 <fcolor:1><display_name> was skewered by a falling stalactite while fighting <killer>"
    death.attack.fireball: "<color:#778899>🪦 <fcolor:1><display_name> was fireballed by <killer>"
    death.attack.fireball.item: "<color:#778899>🪦 <fcolor:1><display_name> was fireballed by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.fireworks: "<color:#778899>🪦 <fcolor:1><display_name> went off with a bang"
    death.attack.fireworks.item: "<color:#778899>🪦 <fcolor:1><display_name> went off with a bang due to a firework fired from <fcolor:2>[<i><by_item></i>] by <killer>"
    death.attack.fireworks.player: "<color:#778899>🪦 <fcolor:1><display_name> went off with a bang while fighting <killer>"
    death.attack.flyIntoWall: "<color:#778899>🪦 <fcolor:1><display_name> experienced kinetic energy"
    death.attack.flyIntoWall.player: "<color:#778899>🪦 <fcolor:1><display_name> experienced kinetic energy while trying to escape <killer>"
    death.attack.freeze: "<color:#778899>🪦 <fcolor:1><display_name> froze to death"
    death.attack.freeze.player: "<color:#778899>🪦 <fcolor:1><display_name> was frozen to death by <killer>"
    death.attack.generic: "<color:#778899>🪦 <fcolor:1><display_name> died"
    death.attack.generic.player: "<color:#778899>🪦 <fcolor:1><display_name> died because of <killer>"
    death.attack.genericKill: "<color:#778899>🪦 <fcolor:1><display_name> was killed"
    death.attack.genericKill.player: "<color:#778899>🪦 <fcolor:1><display_name> was killed while fighting <killer>"
    death.attack.hotFloor: "<color:#778899>🪦 <fcolor:1><display_name> discovered the floor was lava"
    death.attack.hotFloor.player: "<color:#778899>🪦 <fcolor:1><display_name> walked into the danger zone due to <killer>"
    death.attack.indirectMagic: "<color:#778899>🪦 <fcolor:1><display_name> was killed by <killer> using magic"
    death.attack.indirectMagic.item: "<color:#778899>🪦 <fcolor:1><display_name> was killed by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.inFire: "<color:#778899>🪦 <fcolor:1><display_name> went up in flames"
    death.attack.inFire.player: "<color:#778899>🪦 <fcolor:1><display_name> walked into fire while fighting <killer>"
    death.attack.inWall: "<color:#778899>🪦 <fcolor:1><display_name> suffocated in a wall"
    death.attack.inWall.player: "<color:#778899>🪦 <fcolor:1><display_name> suffocated in a wall while fighting <killer>"
    death.attack.lava: "<color:#778899>🪦 <fcolor:1><display_name> tried to swim in lava"
    death.attack.lava.player: "<color:#778899>🪦 <fcolor:1><display_name> tried to swim in lava to escape <killer>"
    death.attack.lightningBolt: "<color:#778899>🪦 <fcolor:1><display_name> was struck by lightning"
    death.attack.lightningBolt.player: "<color:#778899>🪦<fcolor:1> <display_name> was struck by lightning while fighting <killer>"
    death.attack.mace_smash: "<color:#778899>🪦 <fcolor:1><display_name> was smashed by <killer>"
    death.attack.mace_smash.item: "<color:#778899>🪦 <fcolor:1><display_name> was smashed by <killer> with <fcolor:2>[<i><by_item></i>]"
    death.attack.magic: "<color:#778899>🪦 <fcolor:1><display_name> was killed by magic"
    death.attack.magic.player: "<color:#778899>🪦 <fcolor:1><display_name> was killed by magic while trying to escape <killer>"
    death.attack.mob: "<color:#778899>🪦 <fcolor:1><display_name> was slain by <killer>"
    death.attack.mob.item: "<color:#778899>🪦 <fcolor:1><display_name> was slain by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.onFire: "<color:#778899>🪦 <fcolor:1><display_name> burned to death"
    death.attack.onFire.item: "<color:#778899>🪦 <fcolor:1><display_name> was burned to a crisp while fighting <killer> wielding <fcolor:2>[<i><by_item></i>]"
    death.attack.onFire.player: "<color:#778899>🪦 <fcolor:1><display_name> was burned to a crisp while fighting <killer>"
    death.attack.outOfWorld: "<color:#778899>🪦 <fcolor:1><display_name> fell out of the world"
    death.attack.outOfWorld.player: "<color:#778899>🪦 <fcolor:1><display_name> didn't want to live in the same world as <killer>"
    death.attack.outsideBorder: "<color:#778899>🪦 <fcolor:1><display_name> left the confines of this world"
    death.attack.outsideBorder.player: "<color:#778899>🪦 <fcolor:1><display_name> left the confines of this world while fighting <killer>"
    death.attack.player: "<color:#778899>🪦 <fcolor:1><display_name> was slain by <killer>"
    death.attack.player.item: "<color:#778899>🪦 <fcolor:1><display_name> was slain by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.sonic_boom: "<color:#778899>🪦 <fcolor:1><display_name> was obliterated by a sonically-charged shriek"
    death.attack.sonic_boom.item: "<color:#778899>🪦 <fcolor:1><display_name> was obliterated by a sonically-charged shriek while trying to escape <killer> wielding <fcolor:2>[<i><by_item></i>]"
    death.attack.sonic_boom.player: "<color:#778899>🪦 <fcolor:1><display_name> was obliterated by a sonically-charged shriek while trying to escape <killer>"
    death.attack.stalagmite: "<color:#778899>🪦 <fcolor:1><display_name> was impaled on a stalagmite"
    death.attack.stalagmite.player: "<color:#778899>🪦 <fcolor:1><display_name> was impaled on a stalagmite while fighting <killer>"
    death.attack.starve: "<color:#778899>🪦 <fcolor:1><display_name> starved to death"
    death.attack.starve.player: "<color:#778899>🪦 <fcolor:1><display_name> starved to death while fighting <killer>"
    death.attack.sting: "<color:#778899>🪦 <fcolor:1><display_name> was stung to death"
    death.attack.sting.item: "<color:#778899>🪦 <fcolor:1><display_name> was stung to death by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.sting.player: "<color:#778899>🪦 <fcolor:1><display_name> was stung to death by <killer>"
    death.attack.sweetBerryBush: "<color:#778899>🪦 <fcolor:1><display_name> was poked to death by a sweet berry bush"
    death.attack.sweetBerryBush.player: "<color:#778899>🪦 <fcolor:1><display_name> was poked to death by a sweet berry bush while trying to escape <killer>"
    death.attack.thorns: "<color:#778899>🪦 <fcolor:1><display_name> was killed while trying to hurt <killer>"
    death.attack.thorns.item: "<color:#778899>🪦 <fcolor:1><display_name> was killed by <fcolor:2>[<i><by_item></i>]</fcolor:2> while trying to hurt <killer>"
    death.attack.thrown: "<color:#778899>🪦 <fcolor:1><display_name> was pummeled by <killer>"
    death.attack.thrown.item: "<color:#778899>🪦 <fcolor:1><display_name> was pummeled by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.attack.trident: "<color:#778899>🪦 <fcolor:1><display_name> was impaled by <killer>"
    death.attack.trident.item: "<color:#778899>🪦 <fcolor:1><display_name> was impaled by <killer> with <fcolor:2>[<i><by_item></i>]"
    death.attack.wither: "<color:#778899>🪦 <fcolor:1><display_name> withered away"
    death.attack.wither.player: "<color:#778899>🪦 <fcolor:1><display_name> withered away while fighting <killer>"
    death.attack.witherSkull: "<color:#778899>🪦 <fcolor:1><display_name> was shot by a skull from <killer>"
    death.attack.witherSkull.item: "<color:#778899>🪦 <fcolor:1><display_name> was shot by a skull from <killer> using <fcolor:2>[<i><by_item></i>]"
    death.fell.accident.generic: "<color:#778899>🪦 <fcolor:1><display_name> fell from a high place"
    death.fell.accident.ladder: "<color:#778899>🪦 <fcolor:1><display_name> fell off a ladder"
    death.fell.accident.other_climbable: "<color:#778899>🪦 <fcolor:1><display_name> fell while climbing"
    death.fell.accident.scaffolding: "<color:#778899>🪦 <fcolor:1><display_name> fell off scaffolding"
    death.fell.accident.twisting_vines: "<color:#778899>🪦 <fcolor:1><display_name> fell off some twisting vines"
    death.fell.accident.vines: "<color:#778899>🪦 <fcolor:1><display_name> fell off some vines"
    death.fell.accident.weeping_vines: "<color:#778899>🪦 <fcolor:1><display_name> fell off some weeping vines"
    death.fell.assist: "<color:#778899>🪦 <fcolor:1><display_name> was doomed to fall by <killer>"
    death.fell.assist.item: "<color:#778899>🪦 <fcolor:1><display_name> was doomed to fall by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.fell.finish: "<color:#778899>🪦 <fcolor:1><display_name> fell too far and was finished by <killer>"
    death.fell.finish.item: "<color:#778899>🪦 <fcolor:1><display_name> fell too far and was finished by <killer> using <fcolor:2>[<i><by_item></i>]"
    death.fell.killer: "<color:#778899>🪦 <fcolor:1><display_name> was doomed to fall"
```

## Параметры

- [Сообщения](/ru/message/death/)
- [Права](/ru/permission/message/death/)

### `types`

Весь список смертей, где ключом является название смерти, а значением сообщение, которое будет использоваться


