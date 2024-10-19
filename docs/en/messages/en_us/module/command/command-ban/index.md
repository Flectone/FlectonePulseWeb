# Command /ban
Path `messages > en_us.yml > module.command.ban`

## Explanation
Messages for `/ban` command
![command ban](/commandban.png)

## Edit
```yaml
<en_us.module.command.ban>
```

### Default
```yaml
command-ban:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TEMPBAN</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  temporarily:
    default-reason: "You have been banned from this server"
    try-connect: "<color:#ff7171>☠ Banned <target> tried to log in, <time> left"
    global: "<color:#ff7171><br>⏵ Player <target> has been banned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
    player: "<color:#ff7171>☠ You are banned, <time> left <br>Reason: <message>"
  permanent:
    default-reason: "You have been banned permanent from this server"
    try-connect: "<color:#ff7171>☠ Permanently banned <target> tried to log in"
    global: "<color:#ff7171><br>⏵ Player <target> has been banned permanently <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>"
    player: "<color:#ff7171>☠ You are banned permanently <br>Reason: <message>"
```

## Options

- Configuration is here [Ban](/en/config/module/command/command-ban/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command> (player)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>TEMPBAN</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if entered player is not found

### `null-time`
- Default `<color:#ff7171><b>⁉</b> Incorrect time`

Message if an impossible time is entered

### `temporarily`

::: details Messages for temporary ban
#### `default-reason`
- Default `You have been banned from this server`

Default reason if not entered

#### `try-connect`
- Default `<color:#ff7171>☠ Banned <target> tried to log in, <time> left`

Message if a banned player tried to connect

#### `global`
- Default `<color:#ff7171><br>⏵ Player <target> has been banned for <time> <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Message for all

#### `player`
- Default `<color:#ff7171>☠ You are banned, <time> left <br>Reason: <message>`

Message for player

:::

### `permanent`

::: details Messages to ban permanently
#### `default-reason`
- Default `You have been banned permanent from this server`

Default reason if not entered

#### `try-connect`
- По умолчанию `<color:#ff7171>☠ Permanently banned <target> tried to log in`

Message if a banned player tried to connect

#### `global`
- По умолчанию `<color:#ff7171><br>⏵ Player <target> has been banned permanently <br>⏵ Reason: <message> <br>⏵ Moderator: <display_name><br>`

Message for all

#### `player`
- По умолчанию `<color:#ff7171>☠ You are banned permanently <br>Reason: <message>`

Message for player

:::

