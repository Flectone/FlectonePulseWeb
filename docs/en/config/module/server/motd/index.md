# MOTD
Path `config.yml > module.server.motd`

## Explanation
Module for welcome message of server
![motd](/motd.png)

## Edit
```yaml
<config.module.server.motd>
```

### Default
```yaml
motd:
  enable: true
  random: true
  permission:
    name: "flectonepulse.module.server.motd"
    type: TRUE
  listener:
    ServerListPingEvent: NORMAL
```

## Options

- Messages are changed here [MOTD](/en/messages/en_us/module/server/motd/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `random`
- Default `true`

If enabled, message will be selected randomly, otherwise in order

### `permission`
- Name `flectonepulse.module.server.motd`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
ServerListPingEvent: NORMAL
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->