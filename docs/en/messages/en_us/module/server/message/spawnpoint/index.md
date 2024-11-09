# Spawnpoint
Path `messages > en_us.yml > module.server.message.spawnpoint`

## Explanation
Message when using `/spawnpoint`
![spawnpoint](/spawnpoint.png)

## Edit
```yaml
<en_us.module.server.message.spawnpoint>
```

### Default
```yaml
spawnpoint:
  single: "<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <display_name>"
  multiple: "<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <fcolor:2><count></fcolor:2> players"
```

## Options

- Configuration is here [Spawnpoint](/en/config/module/server/message/spawnpoint/)

### `single`
- Default `<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <display_name>`

Message if command is applied to a specific player

### `multiple`
- Default `<fcolor:1>🛌 Set spawn point to <fcolor:2><x></fcolor:2>, <fcolor:2><y></fcolor:2>, <fcolor:2><z></fcolor:2> [<fcolor:2><angle></fcolor:2>] in <fcolor:2><world></fcolor:2> for <fcolor:2><count></fcolor:2> players`

Message if command is applied to many players