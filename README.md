![jointDeveloper](https://raw.githubusercontent.com/jointDeveloper/Aprendizaje-Web/gh-pages/IMG/robot-logo.png)

# Comunidad jointDeveloper

## Repositorio de Desarrollo y Pruebas 

### Pruebas Locales:
Para realizar pruebas locales se deberan hacer los siguientes cambios:

* Reemplazar en el archivo data.json:

```javascript
{
"perfiles": [
  {
    "name": "Plantilla",
    "img": "/Aprendizaje-Web/IMG/plantilla.jpg",
    "page": "/Aprendizaje-Web/HTML/profiles/plantilla.html",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor diam  in ullamcorper malesuada."
  },
  ...
```

Por:

```javascript
"perfiles": [
  {
    "name": "Plantilla",
    "img": "/IMG/plantilla.jpg",
    "page": "/HTML/profiles/plantilla.html",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor diam  in ullamcorper malesuada."
  },
  ...
```
* Cambiar index.html en la linea 28:

```html
<a href="/Aprendizaje-Web/HTML/perfiles" id="allProfiles">Perfiles</a>
```

Por:

```html
<a href="/HTML/perfiles.html" id="allProfiles">Perfiles</a>
```

* Cambiar en JS/index.js:

```javascript
$.getJSON("/Aprendizaje-Web/data.json", function (data) {...}
```

Por:

```javascript
$.getJSON("/data.json", function (data) {...}
```

* Cambiar en JS/perfiles.js:

```javascript
$.getJSON("/Aprendizaje-Web/data.json", function (data) {...}
```

Por:

```javascript
$.getJSON("/data.json", function (data) {...}
```

##### Por favor no olvidar revertir dichos cambios cuando se vaya a relizar un push :blush:

___
#### _Más Información_

<a href="https://github.com/jointDeveloper/"><img src="https://raw.githubusercontent.com/jointDeveloper/media/master/social-icon/github.png" alt="Github-jointDeveloper" /></a>
<a href="https://facebook.com/jointDeveloper/"><img src="https://raw.githubusercontent.com/jointDeveloper/media/master/social-icon/facebook.png" alt="Facebook-jointDeveloper" /></a>
<a href="https://twitter.com/jointdev"><img src="https://raw.githubusercontent.com/jointDeveloper/media/master/social-icon/twitter.png" alt="Twitter-jointDeveloper" /></a>
<a href="https://instagram.com/jointdeveloper/"><img src="https://raw.githubusercontent.com/jointDeveloper/media/master/social-icon/instagram.png" alt="Instagram-jointDeveloper" /></a>
<a href="mailto:developerjoint@gmail.com"><img src="https://raw.githubusercontent.com/jointDeveloper/media/master/social-icon/email.png" alt="E-mail-jointDeveloper" /></a>
<a href="https://jointdeveloper.github.io/Aprendizaje-Web/"><img src="https://raw.githubusercontent.com/jointDeveloper/media/master/social-icon/internet.png" alt="Web-jointDeveloper" /></a>
___
