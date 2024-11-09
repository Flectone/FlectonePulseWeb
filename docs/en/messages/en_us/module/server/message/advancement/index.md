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
    format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>has completed the task <advancement>"
    tag: "<color:#4eff52>[<hover:show_text:\"<color:#4eff52><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  goal:
    format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>has completed the goal <advancement>"
    tag: "<color:#FFFF00>[<hover:show_text:\"<color:#FFFF00><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  challenge:
    format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>has completed the challenge <color:#834eff><advancement>"
    tag: "<color:#834eff>[<hover:show_text:\"<color:#834eff><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  revoke:
    many-to-one: "<fcolor:1>🌠 Revoked <fcolor:2><number></fcolor:2> advancements from <display_name>"
    one-to-one: "<fcolor:1>🌠 Revoked the advancement <fcolor:2><advancement></fcolor:2> from <display_name>"
  grant:
    many-to-one: "<fcolor:1>🌠 Granted <fcolor:2><number></fcolor:2> advancements to <display_name>"
    one-to-one: "<fcolor:1>🌠 Granted the advancement <fcolor:2><advancement></fcolor:2> to <display_name>"
```

## Options

- Configuration is here [Advancement](/en/config/module/server/message/advancement/)

### `task`
- Default:
```yaml
format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>has completed the task <advancement>"
tag: "<color:#4eff52>[<hover:show_text:\"<color:#4eff52><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
```

Message when a task achievement is received
![task](/task.png)

### `goal`
- Default:
```yaml
format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>has completed the goal <advancement>"
tag: "<color:#FFFF00>[<hover:show_text:\"<color:#FFFF00><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
```

Message when a goal is reached
![goal](/goal.png)

### `challenge`
- Default:
```yaml
format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>has completed the challenge <color:#834eff><advancement>"
tag: "<color:#834eff>[<hover:show_text:\"<color:#834eff><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
```

Message at challenge completion
![challenge](/challenge.png)

### `revoke`
- Default:
```yaml
many-to-one: "<fcolor:1>🌠 Revoked <fcolor:2><number></fcolor:2> advancements from <display_name>"
one-to-one: "<fcolor:1>🌠 Revoked the advancement <fcolor:2><advancement></fcolor:2> from <display_name>"
```

Message when using `/advancement revoke`

### `grant`
- Default:
```yaml
many-to-one: "<fcolor:1>🌠 Granted <fcolor:2><number></fcolor:2> advancements to <display_name>"
one-to-one: "<fcolor:1>🌠 Granted the advancement <fcolor:2><advancement></fcolor:2> to <display_name>"
```

Message when using `/advancement grant`