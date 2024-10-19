# Url
Path `config.yml > module.tag.url`

## Explanation
The `url` tag is used to format links

Usage: `<url:link> message </url>`.

![url message](/urlmessage.png)
![url minecraft](/urlminecraft.png)


## Edit
```yaml
<config.module.tag.url>
```

### Default
```yaml
url:
  enable: true
  hover: true
  clickable: true
  color: "<fcolor:2>"
  permission:
    name: "flectonepulse.module.tag.url"
    type: TRUE
```

## Options

- Message is being changed here [Url](/en/messages/ru_ru/module/tag/url/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `hover`
- Default `true`

Turns the hover message on or off
![url minecraft](/urlminecraft.png)

### `clickable`
- Default `true`

Enables or disables option to click on a link

### `color`
- Default `<fcolor:2>`

Color of message containing the link

::: tip Example
`<url:link> hello </url>`.

Here `hello` will have the color `<fcolor:2>`.

:::

### `permission`
- Name `flectonepulse.module.tag.url`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module