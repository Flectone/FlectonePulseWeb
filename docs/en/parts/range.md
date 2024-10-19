## Range types

| Range               | Description                                                                                                  |
|---------------------|--------------------------------------------------------------------------------------------------------------|
| `-2`                | A message will be sent to all players on the server and on [Proxy](/en/config/plugin/#proxy)                 |
| `-1`                | A message will be sent to all players on the server                                                          |
| `0`                 | A message will only be sent to the sender                                                                    |
| any number ` > 0`   | A message will be sent to players who have a distance between them and the sender **lower** than this number |

::: tip We need to understand
If a range of `> 0` is specified, such as `100`, then the recipients must also be in the same dimension as the sender
:::