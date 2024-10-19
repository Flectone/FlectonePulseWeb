# FlectonePulse project

## What's the project?

FlectonePulse is a server-side message manager aimed at improving the server configuration experience
![flectonepulse](/flectonepulse.png)

Platforms are currently supported and tested:
- Bukkit
- Spigot
- Paper
- Purpur
- Pufferfish
- Folia

::: tip You need to understand
If your server is a fork of Bukkit/Spigot, you will most likely have the plugin working for you
:::

**Proxy** for server-to-server messaging is also supported:
- Velocity
- BungeeCord

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