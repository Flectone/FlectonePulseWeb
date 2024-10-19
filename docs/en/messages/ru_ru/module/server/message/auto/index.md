# Auto
Path `messages > ru_ru.yml > module.server.message.auto`

## Explanation
Automatic message once every certain period of time
![auto](/auto.png)

## Edit
```yaml
<ru_ru.module.server.message.auto>
```

### Default
```yaml
auto:
  format:
    1:
      - " "
      - "<fcolor:1>◇ Сервер использует <url:\"https://flectone.net/pulse/\"><fcolor:2>FlectonePulse</url> :)"
      - " "
    2:
      - " "
      - "<fcolor:1>      ❝ Заходи в дискорд ❠ "
      - "<fcolor:2>    <u><url:https://discord.flectone.net>https://discord.flectone.net</url></u>"
      - " "
    3:
      - " "
      - "<fcolor:1>⚡ Поддержи <fcolor:2>FlectonePulse</fcolor:2> на Boosty "
      - "<fcolor:1>⚡ <u><url:\"https://boosty.to/thefaser/\">https://boosty.to/thefaser/</url></u>"
      - " "
```

## Options

- Configuration is here [Auto](/en/config/module/server/message/auto/)

### `format`
- Default:
```yaml
1:
  - " "
  - "<fcolor:1>◇ Сервер использует <url:\"https://flectone.net/pulse/\"><fcolor:2>FlectonePulse</url> :)"
  - " "
2:
  - " "
  - "<fcolor:1>      ❝ Заходи в дискорд ❠ "
  - "<fcolor:2>    <u><url:https://discord.flectone.net>https://discord.flectone.net</url></u>"
  - " "
3:
  - " "
  - "<fcolor:1>⚡ Поддержи <fcolor:2>FlectonePulse</fcolor:2> на Boosty "
  - "<fcolor:1>⚡ <u><url:\"https://boosty.to/thefaser/\">https://boosty.to/thefaser/</url></u>"
  - " "
```

List of indexes and messages

::: danger Mandatory
Indexes should be in order without skips, i.e. `1`, `2`, `3`, `4`, etc.
:::