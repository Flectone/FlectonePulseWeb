# Advancement
Path `messages > en_us.yml > module.server.message.advancement`

## Explanation
Message when a player receives an achievement
![task](/task.png)

## Edit
```yaml
<en_us.module.server.message.advancement>
```

### Default
```yaml
advancement:
  task:
    hover: "<color:#4eff52><advancement_title> <br><advancement_description>"
    format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>has completed the task <color:#4eff52>[<advancement>]"
  goal:
    hover: "<color:#FFFF00><advancement_title> <br><advancement_description>"
    format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>has completed the goal <color:#FFFF00>[<advancement>]"
  challenge:
    hover: "<color:#834eff><advancement_title> <br><advancement_description>"
    format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>has completed the challenge <color:#834eff>[<advancement>]"
```

## Options

- Configuration is here [Advancement](/en/config/module/server/message/advancement/)

### `task`
- Default:
```yaml
hover: "<color:#4eff52><advancement_title> <br><advancement_description>"
format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>has completed the task <color:#4eff52>[<advancement>]"
```

Message when a task achievement is received
![task](/task.png)

### `goal`
- Default:
```yaml
hover: "<color:#FFFF00><advancement_title> <br><advancement_description>"
format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>has completed the goal <color:#FFFF00>[<advancement>]"
```

Message when a goal is reached
![goal](/goal.png)

### `challenge`
- Default:
```yaml
hover: "<color:#834eff><advancement_title> <br><advancement_description>"
format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>has completed the challenge <color:#834eff>[<advancement>]"
```

Message at challenge completion
![challenge](/challenge.png)