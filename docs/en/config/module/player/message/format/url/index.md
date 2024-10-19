# Url
Path `config.yml > module.player.message.format.url`

## Explanation
This formatting replaces the link with a clickable link in any post
![url](/url.png)

## Edit
```yaml
<config.module.player.message.format.url>
```

### Default
```yaml
url:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.url"
    type: TRUE
  trigger: "(?<!:\")((https?|ftp|gopher|telnet|file):((//)|(\\\\))+[\\w:#@%/;$()~_?+-=\\\\.&]*)"
```

## Options

- Format of the post is changed here [Link](/en/messages/ru_ru/module/player/message/url/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.url`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `trigger`
- Default `(?<!:\")((https?|ftp|gopher|telnet|file):((//)|(\\\\))+[\\w:#@%/;$()~_?+-=\\\\.&]*)`

[RegEx](https://javarush.com/en/groups/posts/en..regular-expressions-in-java-regex) to search for a link in message