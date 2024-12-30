# Подпись
Путь `message.yml > contact.sign`

## Пояснение
Подпись создаётся на предмете с помощью **ЛКМ** по наковальне, если игрок держит в **дополнительной** руке краситель и в **главной** предмет
![sign](/sign.gif)

## Редактирование
```yaml
<message.contact.sign>
```

### По умолчанию
```yaml
sign:
  enable: false
  drop-dye: true
  block: "ANVIL"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Локализация](/ru/localizations/ru_ru/message/contact/sign/)
- [Права](/ru/permission/message/contact/sign/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `drop-dye`
- По умолчанию `true`

Включает выкидывание красителя прошлой подписи, если подпись переделывается
![resign](/resign.gif)

### `block`
- По умолчанию `ANVIL`

Блок, на который нужно нажать, для подписи

### `cooldown`
- По умолчанию `false`

Включает задержку для игрока между использованиями

::: details Настройка задержки
#### `duration: 60`

Сколько должно пройти [тиков](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) между использованиями
:::

### `sound`
- По умолчанию `false`

Включает проигрывание звука при использовании

::: details Настройка звука
#### `type`
- По умолчанию `BLOCK_NOTE_BLOCK_BELL:1:1`

Определяет тип (`BLOCK_NOTE_BLOCK_BELL`), громкость (`1`) и тональность (`1`) звука через `:`
:::