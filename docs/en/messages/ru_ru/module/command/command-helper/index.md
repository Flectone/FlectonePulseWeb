# Command /helper
Path `messages > ru_ru.yml > module.command.helper`

## Explanation
Messages for `/helper` command
![command helper](/commandhelper.png)

## Edit
```yaml
<ru_ru.module.command.helper>
```

### Default
```yaml
command-helper:
  usage: "<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)"
  cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>HELPER</u> через <time>"
  null-helper: "<color:#ff7171><b>⁉</b> Сейчас нет людей, кто бы смог помочь"
  global: "<fcolor:2>👤 <display_name> просит помощи ⏩ <fcolor:1><message>"
  player: "<fcolor:2>👤 Запрос отправлен, ожидай ответа"
```

## Options

- Configuration is here [Helper](/en/config/module/command/command-helper/)

### `usage`
- Default `<fcolor:1>⚑ Использование: <fcolor:2>/<command> (сообщение)`

Message on how to use the command

### `cooldown`
- Default `<color:#ff7171><b>⁉</b> Слишком быстро, ты сможешь использовать <u>HELPER</u> через <time>`

Message to a player who attempted to perform an action without delay if `cooldown` is enabled

### `null-helper`
- Default `<color:#ff7171><b>⁉</b> Сейчас нет людей, кто бы смог помочь`

Message if there are no people on server who can help

### `global`
- Default `<fcolor:2>👤 <display_name> просит помощи ⏩ <fcolor:1><message>`

A message to those who need to help

### `player`
- Default `<fcolor:2>👤 Запрос отправлен, ожидай ответа`

Message for player

