# Footer
Path `messages > ru_ru.yml > module.server.tab.footer`

## Explanation
Messages responsible for bottom of the TAB
![footer](/footer.png)

## Edit
```yaml
<ru_ru.module.server.tab.footer>
```

### Default
```yaml
footer:
  format:
    1:
      - " "
      - "<fcolor:1>FlectonePulse"
      - " "
    2:
      - " "
      - "<fcolor:1>ТПС <tps>, Онлайн <online>"
      - " "
```

## Options

- Configuration is here [Footer](/en/config/module/server/tab/footer/)

### `format`
- Default:
```yaml
1:
  - " "
  - "<fcolor:1>FlectonePulse"
  - " "
2:
  - " "
  - "<fcolor:1>ТПС <tps>, Онлайн <online>"
  - " "
```

List of indexes and messages

::: danger Mandatory
Indexes should be in order without skips, i.e. `1`, `2`, `3`, `4`, etc.
:::

