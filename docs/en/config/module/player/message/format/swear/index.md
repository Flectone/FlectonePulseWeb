# Swear
Path `config.yml > module.player.message.format.swear`

## Explanation
This formatting hides the swearing of the player
![swear](/swear.png)

## Edit
```yaml
<config.module.player.message.format.swear>
```

### Default
```yaml
swear:
  enable: true
  permission:
    name: "flectonepulse.module.player.message.format.swear"
    type: TRUE
  permission-ignore:
    name: "flectonepulse.module.player.message.format.swear.ignore"
    type: OP
  permission-see:
    name: "flectonepulse.module.player.message.format.swear.see"
    type: OP
  trigger:
    - "((у|[нз]а|(хитро|не)?вз?[ыьъ]|с[ьъ]|(и|ра)[зс]ъ?|(о[тб]|под)[ьъ]?|(.\\B)+?[оаеи])?-?([её]б(?!о[рй])|и[пб][ае][тц]).*?|(н[иеа]|([дп]|верт)о|ра[зс]|з?а|с(ме)?|о(т|дно)?|апч)?-?ху([яйиеёю]|ли(?!ган)).*?|(в[зы]|(три|два|четыре)жды|(н|сук)а)?-?бл(я(?!(х|ш[кн]|мб)[ауеыио]).*?|[еэ][дт]ь?)|(ра[сз]|[зн]а|[со]|вы?|п(ере|р[оие]|од)|и[зс]ъ?|[ао]т)?п[иеё]зд.*?|(за)?п[ие]д[аое]?р([оа]м|(ас)?(ну.*?|и(ли)?[нщктл]ь?)?|(о(ч[еи])?|ас)?к(ой)|юг)[ауеы]?|манд([ауеыи](л(и[сзщ])?[ауеиы])?|ой|[ао]вошь?(е?к[ауе])?|юк(ов|[ауи])?)|муд([яаио].*?|е?н([ьюия]|ей))|мля([тд]ь)?|лять|([нз]а|по|пи)х|м[ао]л[ао]фь([яию]|[еёо]й))(?=[\\s,.:;\"']|$)"
    - "(([уyu]|[нзnz3][аa]|(хитро|не)?[вvwb][зz3]?[ыьъi]|[сsc][ьъ']|(и|[рpr][аa4])[зсzs]ъ?|([оo0][тбtb6]|[пp][оo0][дd9])[ьъ']?|(.\\B)+?[оаеиeo])?-?([еёe][бb6](?!о[рй])|и[пб][ае][тц]).*?|([нn][иеаaie]|([дпdp]|[вv][еe3][рpr][тt])[оo0]|[рpr][аa][зсzc3]|[з3z]?[аa]|с(ме)?|[оo0]([тt]|дно)?|апч)?-?[хxh][уuy]([яйиеёюuie]|ли(?!ган)).*?|([вvw][зы3z]|(три|два|четыре)жды|(н|[сc][уuy][кk])[аa])?-?[бb6][лl]([яy](?!(х|ш[кн]|мб)[ауеыио]).*?|[еэe][дтdt][ь']?)|([рp][аa][сзc3z]|[знzn][аa]|[соsc]|[вv][ыi]?|[пp]([еe][рpr][еe]|[рrp][оиioеe]|[оo0][дd])|и[зс]ъ?|[аоao][тt])?[пpn][иеёieu][зz3][дd9].*?|([зz3][аa])?[пp][иеieu][дd][аоеaoe]?[рrp](ну.*?|[оаoa][мm]|([аa][сcs])?([иiu]([лl][иiu])?[нщктлtlsn]ь?)?|([оo](ч[еиei])?|[аa][сcs])?[кk]([оo]й)?|[юu][гg])[ауеыauyei]?|[мm][аa][нnh][дd]([ауеыayueiи]([лl]([иi][сзc3щ])?[ауеыauyei])?|[оo][йi]|[аоao][вvwb][оo](ш|sh)[ь']?([e]?[кk][ауеayue])?|юк(ов|[ауи])?)|[мm][уuy][дd6]([яyаиоaiuo0].*?|[еe]?[нhn]([ьюия'uiya]|ей))|мля([тд]ь)?|лять|([нз]а|по|пи)х|м[ао]л[ао]фь([яию]|[её]й))(?=[\\s,.:;\"']|$)"
```

## Options

- Swear symbol to be replaced is changed here [Swear](/en/messages/en_us/module/player/message/swear/)

### `enable`
- Default `true`

Enables or disables the functionality of the module

### `permission`
- Name `flectonepulse.module.player.message.format.swear`
- Type `TRUE`

[Permission](/en/config/module/#explanation) to use the module

### `permission-ignore`
- Name `flectonepulse.module.player.message.format.swear.ignore`
- Type `OP`

[Permission](/en/config/module/#explanation) to ignore the swear test

### `permission-see`
- Name `flectonepulse.module.player.message.format.swear.see`
- Type `OP`

[Permission](/en/config/module/#explanation) to see which swear word was formatted
![swear see](/swearsee.png)


### `trigger`

[RegEx](https://javarush.com/en/groups/posts/en..regular-expressions-in-java-regex) to define a swear word