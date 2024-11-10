![flectonepulse](/flectonepulse.png)


<div class="center-row" style="font-size: 19px; font-weight: bold;">
    Supported Bukkit-platforms
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
    Supported Proxy-platforms
</div>
<div class="center-row">
    <a href="https://www.spigotmc.org/wiki/bungeecord/"><img src="/bungeecord.svg" alt="bungeecord" class="hover-brightness"></a>
    <a href="https://papermc.io/software/velocity"><img src="/velocity.svg" alt="velocity" class="hover-brightness"></a>
</div>

## What's the project?

FlectonePulse is a server-side message manager aimed at improving the server configuration experience

<div class="center-row" style="justify-content: left;">
    <a href="https://github.com/flectone/FlectonePulse"><img src="/github.svg" alt="github" class="hover-brightness"></a>
    <a href="https://modrinth.com/plugin/flectonepulse"><img src="/modrinth.svg" alt="modrinth" class="hover-brightness"></a>
    <a href="https://flectone.net/pulse/docs/en/"><img src="/documentation.svg" alt="documentation" class="hover-brightness"></a>
    <a href="https://discord.flectone.net/"><img src="/discord.svg" alt="discord" class="hover-brightness"></a>
    <a href="https://www.youtube.com/@thefaser"><img src="/youtube.svg" alt="youtube" class="hover-brightness"></a>
    <a href="https://boosty.to/thefaser"><img src="/boosty.svg" alt="boosty" class="hover-brightness"></a>
</div>

::: tip INFO
If your server is a fork of Bukkit/Spigot, you will most likely have the plugin working for you
:::

## Structure
```php
FlectonePulse/ # plugin folder
├─ icons/ # icon folder
│   ├─ maintenance.png # icon for technical work
│   ├─ server-icon-1.png # custom icon 1
│   └─ server-icon-2.png # custom icon 2
├─ libraries/... # folder of downloaded libraries
├─ messages/ # messages folder
│   ├─ en_us.yml # English messages
│   └─ ru_ru.yml # Russian messages
├─ config.yml # main plugin settings
└─ secrets.yml # passwords, tokens, etc.
```

## Setting
- [Configuration](/en/config/) - All main customization
- [Messages](/en/messages/) - All plugin messages
- [Secrets](/en/secrets/) - Passwords, tokens, etc.

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
