# Image
Path `config.yml > module.tag.image`

## Explanation
The `image` tag is used to display images

Usage: `<image:link> message </image>`

![image](https://i.imgur.com/hX8U4T7.png)
![image message](/imagemessage.png)
![image minecraft](/imageminecraft.png)


## Edit
```yaml
<config.module.tag.image>
```

### Default
```yaml
image:
  enable: true
  color: "<fcolor:2>"
  permission:
    name: "flectonepulse.module.tag.image"
    type: TRUE
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `color`
- Default `<fcolor:2>`

Color of the message containing the link

::: tip Example
`<image:link> house </image>`.

Here `home` will have a color of `<fcolor:2>`

:::

### `permission`
- Name `flectonepulse.module.tag.image`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module