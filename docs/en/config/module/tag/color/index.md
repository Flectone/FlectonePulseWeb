# Color
Path `config.yml > module.tag.color`

## Explanation
The `fcolor` tag is used for individual color settings on each player

Usage: `<fcolor:number>`

![color message](/colormessage.png)
![color](/color.gif)

## Edit
```yaml
<config.module.tag.color>
```

### Default
```yaml
color:
  enable: true
  use-player-colors: true
  permission:
    name: "flectonepulse.module.tag.color"
    type: TRUE
  list:
    1: "#ADD8E6"
    2: "#87CEFA"
    3: "#A9A9A9"
    4: "#FFFAFA"
```

## Options

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `use-player-colors`
- Default `true`

If enabled, any message that contains `<fcolor:number>` will be formatted relative to the recipient
![color true](/colortrue.gif)

Otherwise, the color will depend on the sender's colors
![color false](/colorfalse.gif)


### `permission`
- Name `flectonepulse.module.tag.color`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `list`

A list of all colors used, where the number is the key to the default color


::: tip For example, there is a color
```yaml
1: "#ADD8E6"
```
`1` is the number for color `#ADD8E6` <br><br>
To use such a tag, you must write `<fcolor:1>`
:::