# Book
Path `config.yml > module.player.message.book`

## Explanation
Module for messages in a book and the title of that book
![book](/book.gif)

## Edit
```yaml
<config.module.player.message.book>
```

### Default
```yaml
book:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.book"
    type: TRUE
  listener:
    PlayerEditBookEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables module functionality

### `permission`
- Name `flectonepulse.module.player.message.book`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
PlayerEditBookEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->