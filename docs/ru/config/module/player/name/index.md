# Имя
Путь `config.yml > module.player.name.*`

## Пояснение
Модуль, отвечающий за имя игрока
![name tab](/nametab.png)
![name display](/namedisplay.png)

## Редактирование
```yaml
<config.module.player.name>
```

### По умолчанию
```yaml
name:
  enable: true
  prefix: "<vault_prefix><stream_prefix>"
  suffix: "<afk_suffix><vault_suffix>"
  tab: "<world_prefix>▋ <reset><prefix><fcolor:2><player></fcolor><suffix>"
  display: "<prefix><fcolor:2><player></fcolor><suffix>"
  permission:
    name: "flectonepulse.module.player.name"
    type: TRUE
  permission-prefix-tag:
    name: "flectonepulse.module.player.name.prefix_tag"
    type: TRUE
  permission-suffix-tag:
    name: "flectonepulse.module.player.name.suffix_tag"
    type: TRUE
  permission-tab-tag:
    name: "flectonepulse.module.player.name.tab_tag"
    type: TRUE
  permission-display-tag:
    name: "flectonepulse.module.player.name.display_tag"
    type: TRUE
```

## Параметры

### `enable`
- По умолчанию `true`

Включает или выключает работоспособность модуля и его наследников

### `prefix`
- По умолчанию `<vault_prefix><stream_prefix>` <br>

`<vault_prefix>` - префикс донатной группы <br>
`<stream_prefix>` - префикс стримера <br>

Отвечает за тег `<prefix>`


### `suffix`
- По умолчанию `<afk_suffix><vault_suffix>` <br>

`<afk_suffix>` - [АФК](/ru/config/module/player/afk/) суффикс <br>
`<vault_suffix>` - суффикс донатной группы <br>

Отвечает за тег `<suffix>`

### `tab`
- По умолчанию `<world_prefix>▋ <reset><prefix><fcolor:2><player></fcolor><suffix>`

Отвечает за тег `<tab_name>`

Например, он используется в [ТАБе](/ru/config/module/server/message/tab/)
![name tab](/nametab.png)

### `display`
- По умолчанию `<prefix><fcolor:2><player></fcolor><suffix>`

Отвечает за тег `<display_name>`
![name display](/namedisplay.png)

### `permission`
- Название `flectonepulse.module.player.name`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования модуля

### `permission-prefix-tag`
- Название `flectonepulse.module.player.name.prefix_tag`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования тега `<prefix>`

### `permission-suffix-tag`
- Название `flectonepulse.module.player.name.suffix_tag`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования тега `<suffix>`

### `permission-tab-tag`
- Название `flectonepulse.module.player.name.tab_tag`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования тега `<tab_name>`

### `permission-display-tag`
- Название `flectonepulse.module.player.name.display_tag`
- Тип `TRUE`

[Право](/ru/config/module/#пояснение) для использования тега `<display_name>`