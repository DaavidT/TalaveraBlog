---
external: false
title: Terminal Hyper JS
description: Hyper js como terminal para desarrollar
date: 2023-01-19
---

![Mi terminal](/images/Hyper1.png)

## ¿Porque Hyper JS?

En lo personal hyper js me parece una terminal minimalista, es simple y relativamente fácil de configurar, solo es necesario descargar el archivo de instalación y abrirlo.

## Instalación

Para instalar Hyper JS en Mac OS, puedes descargar el archivo de instalación desde la página oficial [hyper.is](https://hyper.is/), o puedes instalarlo con [Homebrew](https://brew.sh/)

```bash
brew install --cask hyper
```

## Configuración

Probablemente la configuración por default de hyper no es la mejor de todas (en lo personal creo que es fea), pero solo es necesario abrir el archivo de configuración, cambiar al tema que mas te guste y listo.

```bash
vim ~/.hyper.js
```

### Plugins que utilizo

```js
// .hyper.js

plugins: ["hyper-pane", "font-ligatures", "hyper-material-theme","hyperterm-cursor"],

//...
```

![Mi terminal](/images/Hyper2.png)
