# Command /rockpaperscissors
Path `messages > en_us.yml > module.command.rockpaperscissors`

## Explanation
Messages for `/rockpaperscissors` command
![command rockpaperscissors](/commandrockpaperscissors.png)

## Edit
```yaml
<en_us.module.command.rockpaperscissors>
```

### Default
```yaml
command-rockpaperscissors:
  usage: "<fcolor:1>⚑ Usage: <fcolor:2>/<command>"
  cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ROCKPAPERSCISSORS</u> in <time>"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  wrong-move: "<color:#ff7171><b>⁉</b> This move is not possible"
  already: "<color:#ff7171><b>⁉</b> You've already made your move"
  wrong-game: "<color:#ff7171><b>⁉</b> This game does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't play with yourself"
  move: "<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>"
  sender: "<fcolor:1>Now goes <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors"
  win: "<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>"
  draw: "<color:#98FB98>✂ It's a draw! You both chose <b><move>"
  strategy:
    scissors: "scissors"
    rock: "rock"
    paper: "paper"
```

## Options

- Configuration is here [Rockpaperscissors](/en/config/module/command/command-rockpaperscissors/)

### `usage`
- Default `<fcolor:1>⚑ Usage: <fcolor:2>/<command>`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Too fast, you'll be able to use <u>ROCKPAPERSCISSORS</u> in <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-player`
- Default `<color:#ff7171><b>⁉</b> This player does not exist`

Message if the entered player is not found

### `wrong-move`
- Default `<color:#ff7171><b>⁉</b> This move is not possible`

Message an impossible move

### `already`
- Default `<color:#ff7171><b>⁉</b> You've already made your move`

Message if a player has already made a move

### `wrong-game`
- Default `<color:#ff7171><b>⁉</b> This game does not exist`

Message if game does not exist

### `myself`
- Default `<color:#ff7171><b>⁉</b> You can't play with yourself`

Message if a player decides to play with himself

### `move`
- Default `<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>`

Message on move

### `sender`
- Default `<fcolor:1>Now goes <display_name>`

Message to sender

### `receiver`
- Default `<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors`

Message to recipient

### `win`
- Default `<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>`

Winning message

### `draw`
- Default `<color:#98FB98>✂ It's a draw! You both chose <b><move>`

Message on a draw

### `strategy`
- Default:
```yaml
scissors: "scissors"
rock: "rock"
paper: "paper"
```

List of strategies and their names


