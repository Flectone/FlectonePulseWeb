# Sign
Path `config.yml > module.player.message.sign`

## Explanation
Module for messages on sign
![sign](/signoak.gif)

## Edit
```yaml
<config.module.player.message.sign>
```

### Default
```yaml
sign:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.sign"
    type: TRUE
  listener:
    SignChangeEvent: NORMAL
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.sign`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
SignChangeEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->