# Header
Path `messages > en_us.yml > module.server.tab.header`

## Explanation
Messages responsible for top of the TAB
![header](/header.png)

## Edit
```yaml
<en_us.module.server.tab.header>
```

### Default
```yaml
header:
  format:
    1:
      - " "
      - "<fcolor:1>❤"
      - " "
    2:
      - " "
      - "<fcolor:1>👾"
      - " "
```

## Options

- Configuration is here [Header](/en/config/module/server/tab/header/)

### `format`
- Default:
```yaml
1:
  - " "
  - "<fcolor:1>❤"
  - " "
2:
  - " "
  - "<fcolor:1>👾"
  - " "
```

List of indexes and messages

::: danger Mandatory
Indexes should be in order without skips, i.e. `1`, `2`, `3`, `4`, etc.
:::

