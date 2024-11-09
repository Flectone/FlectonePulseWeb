# Seed
Путь `messages > ru_ru.yml > module.server.message.seed`

## Explanation
Message when using `/seed`
![seed](/seed.png)

## Edit
```yaml
<ru_ru.module.server.message.seed>
```

### Default
```yaml
seed:
  format: "<fcolor:1>🌐 Ключ генератора: [<fcolor:2><hover:show_text:'<fcolor:2>Нажми, чтобы скопировать в буфер обмена'><click:copy_to_clipboard:<seed>><seed></click></fcolor:2>]"
```

## Options

- Configuration is here [Seed](/en/config/module/server/message/seed/)

### `format`
- Default `<fcolor:1>🌐 Ключ генератора: [<fcolor:2><hover:show_text:'<fcolor:2>Нажми, чтобы скопировать в буфер обмена'><click:copy_to_clipboard:<seed>><seed></click></fcolor:2>`

Message to be sent