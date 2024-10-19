# Anvil
Path `config.yml > module.player.message.anvil`

## Explanation
Module for messages in anvil when renaming
![anvil](/anvil.gif)

## Edit
```yaml
<config.module.player.message.anvil>
```

### Default
```yaml
anvil:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.anvil"
    type: TRUE
  listener:
    InventoryClickEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.anvil`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
InventoryClickEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->