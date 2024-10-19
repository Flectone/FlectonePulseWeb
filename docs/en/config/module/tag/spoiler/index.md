# Spoiler
Path `config.yml > module.tag.spoiler`

## Explanation
The `spoiler` tag is used to hide a message before hovering over it

Usage: `<spoiler:message>`

![spoiler message](/spoilermessage.png)
![spoiler minecraft](/spoilerminecraft.png)


## Edit
```yaml
<config.module.tag.spoiler>
```

### Default
```yaml
spoiler:
  enable: true
  color: "<fcolor:2>"
  permission:
    name: "flectonepulse.module.tag.spoiler"
    type: TRUE
```

## Options

- Message and symbol are changed here [Spoiler](/en/messages/ru_ru/module/tag/spoiler/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `color`
- Default `<fcolor:2>`

Color of the message containing the spoiler

::: tip Example
`<spoiler:home>`.

Here `house` will have the color `<fcolor:2>`.

:::

### `permission`
- Name `flectonepulse.module.tag.spoiler`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module