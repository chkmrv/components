# Reusable UI components

![](ololo.jpg)

## [Demo](http://sber-copy.funtom.ru/)

## Design guide

## How to start

```zsh

npm start
```

These commands clone this repository, installs all dependencies and launch dev server.


## How to launch dev server

```zsh
npm run dev
```

>This command starts [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) at port 8080

>#### Parameters
- `--ie` - set it if you want to run demo in IE9.
```zsh
npm run dev -- --ie
```
>>Cons are:
>>- no HMR
>>- no media-helpers (via iframes)
>>- 1 huge CSS bundle
- `--port` or `-p` - changes default (8080) dev-server port
```zsh
npm run dev -- --port 3000
npm run dev -- -p 3000
```
- `--host` or `-h` - changes default (localhost) absolute path (needed for css source maps) hostname. Useful when server and client are different machines
```zsh
npm run dev -- --host 10.0.2.2
npm run dev -- -h 10.0.2.2
```

## How can i view all running components

Open `http://localhost:8080` in browser to find a demo page with all widgets:
```zsh
# for Mac OS users
open http://localhost:8080
```


## How can i view specific components

Open `http://localhost:8080/` with corresponding path in browser. For example, `http://localhost:8080/buttons`


## What is so good about this setup

1. `ES6+` code everywhere
2. up-to-date `React`
3. hot reloading (js, css, images) in browser **WITHOUT** refreshing a page (just save a source file to file system and in 5 seconds it will be reloaded in browser)
4. declarative build config (`webpack.config.js`)
5. eslint and csslint


## How to create new component

 - create it in `src/<component_name>` directory
 - add entry to `demo/demo.jsx#ITEMS` array
 - debug


## How to make my component medias easily-debuggable

You need to write css using `postcss-mixins` plugin and apply `media`-decorator from `src/media` to you component.
Look at `Button` component from `src/button/*` for example.


## How to use these components in other projects

 - add dependency to this repository
 - require specific components, for example `import Button from 'components/button/button';` or `var Button = require('components/button/button');`


## How to build project ready to deploy to somewhere

Just run

```zsh
npm run build
# or
npm run clear-build
```

After build all assets will be placed at `assets` diretory.
