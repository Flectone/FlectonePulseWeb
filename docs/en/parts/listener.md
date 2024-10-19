## Event priority
| Priority  | Description                                             |
|-----------|---------------------------------------------------------|
| `LOWEST`  | The very first                                          |
| `LOW`     | Executed after `LOWEST`                                 |
| `NORMAL`  | Executed after `LOW`, default value in `Bukkit API`     |
| `HIGH`    | Executed after `NORMAL`                                 |
| `HIGHEST` | The very last                                           |
| `MONITOR` | Executed after `HIGHEST` and without changing the event |