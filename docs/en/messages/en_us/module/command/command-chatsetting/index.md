# Command /chatsetting
Path `messages > en_us.yml > module.command.chatsetting`

## Explanation
Messages for `/clearmail` command
![command chatsetting](/commandchatsetting.png)

## Edit
```yaml
<en_us.module.command.chatsetting>
```

### Default
```yaml
command-chatsetting:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CHATSETTING</u> in <time>"
  no-permission: "<color:#ff7171><b>⁉</b> No permission to change this setting"
  header: "            Chat Settings"
  disable:
    you: "<color:#ff7171><b>⁉</b> Display of this command is disabled, check /chatsetting"
    he: "<color:#ff7171><b>⁉</b> He disabled this option via /chatsetting"
    server: "<color:#ff7171><b>⁉</b> This command disabled on server"
  settings:
    REPLY:
      - - "<fcolor:2>Command /reply"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /reply"
        - "<color:#ff7171>Display disabled"
    BALL:
      - - "<fcolor:2>Command /ball"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /ball"
        - "<color:#ff7171>Display disabled"
    JOIN:
      - - "<fcolor:2>Join"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Join"
        - "<color:#ff7171>Display disabled"
    DICE:
      - - "<fcolor:2>Command /dice"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /dice"
        - "<color:#ff7171>Display disabled"
    SPIT:
      - - "<fcolor:2>Command /spit"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /spit"
        - "<color:#ff7171>Display disabled"
    SPY:
      - - "<fcolor:2>Spy"
        - "<color:#98FB98>You're spying"
      - - "<fcolor:2>Spy"
        - "<color:#ff7171>You're not spying"
    MUTE:
      - - "<fcolor:2>Command /mute"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /mute"
        - "<color:#ff7171>Display disabled"
    BROADCAST:
      - - "<fcolor:2>Command /broadcast"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /broadcast"
        - "<color:#ff7171>Display disabled"
    AFK:
      - - "<fcolor:2>Command /afk"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /afk"
        - "<color:#ff7171>Display disabled"
    ROCKPAPERSCISSORS:
      - - "<fcolor:2>Command /rockpaperscissors"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /rockpaperscissors"
        - "<color:#ff7171>Display disabled"
    AUTOMESSAGE:
      - - "<fcolor:2>Auto Message"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Auto Message"
        - "<color:#ff7171>Display disabled"
    WARN:
      - - "<fcolor:2>Command /warn"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /warn"
        - "<color:#ff7171>Display disabled"
    KICK:
      - - "<fcolor:2>Command /kick"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /kick"
        - "<color:#ff7171>Display disabled"
    COLOR:
      - - "<fcolor:2>Colors"
        - "<fcolor:1>message"
        - "<fcolor:2>message"
        - "<fcolor:3>message"
        - "<fcolor:4>message"
    TRANSLATETO:
      - - "<fcolor:2>Command /translateto"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /translateto"
        - "<color:#ff7171>Display disabled"
    TELL:
      - - "<fcolor:2>Command /tell"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /tell"
        - "<color:#ff7171>Display disabled"
    DO:
      - - "<fcolor:2>Command /do"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /do"
        - "<color:#ff7171>Display disabled"
    POLL:
      - - "<fcolor:2>Command /poll"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /poll"
        - "<color:#ff7171>Display disabled"
    GREETING:
      - - "<fcolor:2>Greeting message"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Greeting message"
        - "<color:#ff7171>Display disabled"
    DEATH:
      - - "<fcolor:2>Death"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Death"
        - "<color:#ff7171>Display disabled"
    CHAT:
      - - "<fcolor:2>Chat"
        - "<fcolor:1>Your chat <bold><chat>"
    ME:
      - - "<fcolor:2>Command /me"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /me"
        - "<color:#ff7171>Display disabled"
    COIN:
      - - "<fcolor:2>Command /coin"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /coin"
        - "<color:#ff7171>Display disabled"
    TICTACTOE:
      - - "<fcolor:2>Command /tictactoe"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /tictactoe"
        - "<color:#ff7171>Display disabled"
    QUIT:
      - - "<fcolor:2>Quit"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Quit"
        - "<color:#ff7171>Display disabled"
    BAN:
      - - "<fcolor:2>Command /ban"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /ban"
        - "<color:#ff7171>Display disabled"
    STREAM:
      - - "<fcolor:2>Stream"
        - "<color:#98FB98>You're streaming"
      - - "<fcolor:2>Stream"
        - "<color:#ff7171>You don't stream"
    MAIL:
      - - "<fcolor:2>Command /mail"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /mail"
        - "<color:#ff7171>Display disabled"
    ADVANCEMENT:
      - - "<fcolor:2>Advancement"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Advancement"
        - "<color:#ff7171>Display disabled"
    TRY:
      - - "<fcolor:2>Command /try"
        - "<color:#98FB98>Display enabled"
      - - "<fcolor:2>Command /try"
        - "<color:#ff7171>Display disabled"
```

## Options

- Configuration is here [Chatsetting](/en/config/module/command/command-chatsetting/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>CHATSETTING</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `no-permission`
- Default `<color:#ff7171><b>⁉</b> No permission to change this setting`

Message if a certain permission is required to change a setting

### `header`
- Default `"            Chat Settings"`

Name for GUI

### `disable`

::: details Disable messages
#### `you`
- Default `<color:#ff7171><b>⁉</b> Display of this command is disabled, check /chatsetting`

Message if sender has disabled command in `/chatsetting`

#### `he`
- Default `<color:#ff7171><b>⁉</b> He disabled this option via /chatsetting`

Message if recipient has disabled command in `/chatsetting`

#### `server`
- Default `<color:#ff7171><b>⁉</b> This command disabled on server`

Message if server has disabled command for `/chatsetting`

:::

### `settings`

A list of settings and their messages, where:
- First line - name of item, if enabled
- Remaining lines - description of item, if enabled
- Second line - name of item, if off
- Remaining lines - description of item, if off

::: tip For example, let's take `REPLY`
```yaml
# enabled
- - "<fcolor:2>Command /reply" # item name
  - "<color:#98FB98>Display enabled" # description
# disabled
- - "<fcolor:2>Command /reply" # item name
  - "<color:#ff7171>Display disabled" # description
```
:::

