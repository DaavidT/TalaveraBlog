---
external: false
title: Instalar PHP en Mac OS
description: Servidor LAMP en Mac OS
date: 2023-01-19
---

## Validar versión de php

Por defecto al instalar Mac OS puede venir instalada una versión de php, para validar la versión de php instalada ejecutar el siguiente comando en la terminal:

```bash
php -v
```

## Instalar PHP con Homebrew (actualizar versión)

Si deseas actualizar la versión de php o instalar una versión diferente a la que viene por defecto en Mac OS, puedes hacerlo con [Homebrew](https://brew.sh/)

```bash
brew install php
```

Puedes instalar una versión específica de php, por ejemplo:

```bash
brew install php@7.4
```

## Problemas comunes

### Error: php: Failed to download resource "freetds"

La solución que encontré fue instalar

```bash
brew install curl
```

Si es no funciona puedes instalar:

```bash
brew install composer
```

Después vuelves a intentar instalar php con Homebrew

```bash
brew install php
```
