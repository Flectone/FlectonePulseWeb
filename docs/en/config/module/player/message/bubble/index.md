# Bubble
Path `config.yml > module.player.message.bubble`

## Explanation
Module for overhead messages
![bubble](/bubble.gif)

Idea taken from [LightChatBubbles](https://github.com/atesin/LightChatBubbles), thanks @atesin

## Edit
```yaml
<config.module.player.message.bubble>
```

### Default
```yaml
bubble:
  enable: true
  max-per-line: 35
  handicap-chars: 10
  read-speed: 800
  permission:
    name: "flectonepulse.module.player.message.bubble"
    type: TRUE
  listener:
    AsyncPlayerChatEvent: MONITOR
```

## Message duration

### Duration formula

```java
int duration = (messageLength + handicapChars * countStrings) * 1200 / readSpeed;
```

Duration = <br>
(`message length` + [`handicap-chars`](#handicap-chars) * [`number of lines`](#formula-number-of-lines)) * `1200` / [`read-speed`](#read-speed)

### Formula number of lines

```java
int countStrings = messageLength / maxPerLine;
```

This value is roughly equal to `message length` / [`max-per-line`](#max-per-line)

## Options

- Format of the message is changed here [Bubble](/en/messages/en_us/module/player/message/bubble/)

### `enable`
- Default `true`

Enables or disables module functionality

### `max-per-line`
- Default `35`

Maximum number of characters per line

### `handicap-chars`
- Default `10`

Additional time to notice the message

### `read-speed`
- Default `800`

Speed of reading message characters

### `permission`
- Name `flectonepulse.module.player.message.bubble`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `listener`
- Default:
```yaml
AsyncPlayerChatEvent: MONITOR
```

List of event listeners and their [priority](#event-priority)

<!--@include: @/en/parts/listener.md-->