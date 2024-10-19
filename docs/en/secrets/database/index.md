# Database
Path `secrets.yml > database`

## Explanation
This category for setting up access to the database

### Default
```yaml
database:
  name: "flectonepulse"
  host: "localhost"
  port: "3306"
  user: "root"
  password: "1234"
```

## Options

### `name`
- Default `flectonepulse`

Database name

### `host`
- Default `localhost`

Address of the server where the database

::: warning Important
The setting will be used if [MySQL](/en/config/plugin/#database) mode is enabled
:::

### `port`
- Default `3306`
Database connection port on the server

::: warning Important
The setting will be used if [MySQL](/en/config/plugin/#database) mode is enabled
:::

### `user`
- Default `root`

Name of user that will be used to connect to the database
::: warning Important
The setting will be used if [MySQL](/en/config/plugin/#database) mode is enabled
:::

### `password`
- Default `1234`

Password for connecting to the database
::: warning Important
The setting will be used if [MySQL](/en/config/plugin/#database) mode is enabled
:::


