![flectonepulse](/flectonepulse.png)


<div class="center-row" style="font-size: 19px; font-weight: bold;">
    Поддерживаемые Bukkit-платформы
</div>
<div class="center-row">
    <a href="https://www.spigotmc.org/"><img src="/bukkit.svg" alt="bukkit" class="hover-brightness"></a>
    <a href="https://www.spigotmc.org/"><img src="/spigot.svg" alt="spigot" class="hover-brightness"></a>
    <a href="https://papermc.io/"><img src="/paper.svg" alt="paper" class="hover-brightness"></a>
    <a href="https://purpurmc.org/"><img src="/purpur.svg" alt="purpur" class="hover-brightness"></a>
    <a href="https://papermc.io/software/folia"><img src="/folia.svg" alt="folia" class="hover-brightness"></a>
</div>

<br>

<div class="center-row" style="font-size: 19px; font-weight: bold;">
    Поддерживаемые Proxy-платформы
</div>
<div class="center-row">
    <a href="https://www.spigotmc.org/wiki/bungeecord/"><img src="/bungeecord.svg" alt="bungeecord" class="hover-brightness"></a>
    <a href="https://papermc.io/software/velocity"><img src="/velocity.svg" alt="velocity" class="hover-brightness"></a>
</div>

## Что за проект?

FlectonePulse - это серверный менеджер сообщений, нацеленный на улучшение опыта настройки сервера

<div class="center-row" style="justify-content: left;">
    <a href="https://github.com/flectone/FlectonePulse"><img src="/github.svg" alt="github" class="hover-brightness"></a>
    <a href="https://modrinth.com/plugin/flectonepulse"><img src="/modrinth.svg" alt="modrinth" class="hover-brightness"></a>
    <a href="https://flectone.net/pulse/docs/en/"><img src="/documentation.svg" alt="documentation" class="hover-brightness"></a>
    <a href="https://discord.flectone.net/"><img src="/discord.svg" alt="discord" class="hover-brightness"></a>
    <a href="https://www.youtube.com/@thefaser"><img src="/youtube.svg" alt="youtube" class="hover-brightness"></a>
    <a href="https://boosty.to/thefaser"><img src="/boosty.svg" alt="boosty" class="hover-brightness"></a>
</div>

::: tip НУЖНО ПОНИМАТЬ
Если ваш сервер на ядре, которое является форком Bukkit/Spigot, то скорее всего у вас будет работать FlectonePulse, **но это не точно**
:::



## Структура
```php
FlectonePulse/ # папка плагина
│
├─ icons/ # папка иконок
│  ├─ maintenance.png # иконка для технических работ
│  ├─ server-icon-1.png # кастомная иконка 1
│  └─ server-icon-2.png # кастомная иконка 2
│
├─ libraries/... # папка скачанных библиотек
│
├─ messages/ # папка сообщений
│  ├─ en_us.yml # английские сообщения
│  └─ ru_ru.yml # русские сообщения
│
├─ config.yml # главная настройка плагина
├─ permissions.yml # настройка прав
├─ commands.yml # настройка комманд
└─ secrets.yml # пароли, токены и т.д.
```

## Настройка
- [Конфигурация](/ru/config/) - Вся главная настройка
- [Сообщения](/ru/messages/) - Все сообщения плагина
- [Секреты](/ru/secrets/) - Пароли, токены и т.д.


<style>
.center-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.hover-brightness:hover {
    filter: brightness(1.2); /* Увеличивает яркость на 20% */
    transition: 0.3s; /* Плавный переход */
}
</style>