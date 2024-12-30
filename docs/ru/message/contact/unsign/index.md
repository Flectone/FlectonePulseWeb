# Снятие подписи
Путь `message.yml > contact.unsign`

## Пояснение
Снятие подписи происходит с помощью **ЛКМ** на точиле, если игрок держит в **главной** руке предмет с подписью
![unsign](/unsign.gif)

::: info Условие
Игрок может снять только свою подпись
:::

## Редактирование
```yaml
<message.contact.unsign>
```

### По умолчанию
```yaml
unsign:
  enable: false
  drop-dye: true
  block: "GRINDSTONE"
  cooldown:
    enable: false
    duration: 60
  sound:
    enable: false
    type: "BLOCK_NOTE_BLOCK_BELL:1:1"
```

## Параметры

- [Права](/ru/permission/message/contact/unsign/)

### `enable`
- По умолчанию `false`

Включает или выключает работоспособность модуля

### `drop-dye`
- По умолчанию `true`

Включает выкидывание красителя, который использовался при подписи
![unsign](/unsign.gif)

### `block`
- По умолчанию `GRINDSTONE`

Блок, на который нужно нажать, для снятия подписи

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