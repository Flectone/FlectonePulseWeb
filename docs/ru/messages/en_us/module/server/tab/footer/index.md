# Нижнее
Путь `messages > en_us.yml > module.server.tab.footer`

## Пояснение
Сообщения, отвечающие за нижнюю часть ТАБа
![footer](/footer.png)

## Редактирование
```yaml
<en_us.module.server.tab.footer>
```

### По умолчанию
```yaml
footer:
  format:
    1:
      - " "
      - "<fcolor:1>FlectonePulse"
      - " "
    2:
      - " "
      - "<fcolor:1>TPS <tps>, Online <online>"
      - " "
```

## Параметры

- Конфигурация происходит тут [Нижнее](/ru/config/module/server/tab/footer/)

### `format`
- По умолчанию:
```yaml
1:
  - " "
  - "<fcolor:1>FlectonePulse"
  - " "
2:
  - " "
  - "<fcolor:1>TPS <tps>, Online <online>"
  - " "
```

Список индексов и сообщений, которые им соответствуют

::: danger Обязательно
Индексы должны идти по порядку без пропусков, т.е. `1`, `2`, `3`, `4` и т.д.
:::

