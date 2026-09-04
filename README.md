# Plantilla del Curso de Programación Web 

2026-2

---

## Descripción del Proyecto

Esta plantilla implementa una aplicación web full-stack utilizando React.js + Vite para el frontend y Node.js + Express para el backend. El proyecto está organizado para separar la interfaz, lógica de negocio, acceso a datos y configuración, permitiendo desarrollar tanto el sitio web como un panel administrativo.

La aplicación utiliza Supabase como base de datos y dispone de migraciones SQL para gestionar su estructura y datos iniciales. Además, incluye configuración para Vercel, vistas EJS para páginas del servidor y una API organizada mediante controladores, servicios y repositorios.

| Carpeta | Descripción |
|---|---|
| `admin/` | Lógica del panel administrativo: APIs, controladores, modelos, repositorios y servicios. |
| `api/` | Punto de entrada de la API del servidor. |
| `configs/` | Configuración general, base de datos, middlewares y funciones auxiliares. |
| `db/` | Esquema y migraciones SQL de la base de datos Supabase. |
| `docs/` | Documentación técnica, incluyendo el diagrama de la base de datos. |
| `public/` | Archivos públicos y recursos estáticos. |
| `src/` | Aplicación React: páginas, componentes, estilos, helpers y entradas de la aplicación. |
| `views/` | Plantillas EJS para las páginas renderizadas por Express. |
| `website/` | Lógica del sitio web: APIs, controladores, modelos, repositorios, rutas y servicios. |
| `server.js` | Archivo principal para iniciar y configurar el servidor Express. |

## Comandos Git

Descargar Git [Enlace](https://git-scm.com/install/windows)

![Sitio web de descarga](./docs/gitwindows.png)
## Crear proyecto git

    >git init

## Pasos para guardar el proyecto en git

    >git status
    >git add . o "Nombre del archivo"
    >git restore . o "Nombre del archivo"
    >git commit -m "Titulo"
    >git log --oneline

## Logearse

    >git config --global user.name "tu nombre"
    >git config --global user.email "tu correo"

## Crear rama
    
    >git checkout -b "nombre de la dimension 2XD"

## Ver rama

    >git branch

## Regresar a rama

    >git checkout master

## Ir a una etapa del git

    >git reset --hard "id del commit"

## Subir a tu github personal

    >git remote set-url origin git@github:usuario/repositorio.git

## Instalar dependencias:

Para esto tenemos que instalar node.js (variable de entorono de ser necesario)

    npm install (en la carpeta de tu proyecto)

## Correr dependencia:

    npm run dev (se corre el front y backend)

## Crear html:

    html:5 (en un archivo creado y se crea una base)

## 🎨 Resumen de propiedades CSS

| Propiedad               | Valores utilizados                  | Diferencia clave                                                                                                    |
| ----------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `display`               | `block`                             | Hace que el elemento se comporte como un bloque y ocupe una línea completa.                                         |
| `margin`                | `0 auto` / `10px auto`              | `0 auto` no agrega margen vertical; `10px auto` agrega 10px arriba y abajo. `auto` permite centrar horizontalmente. |
| `width`                 | `385px` / `203px`                   | Define el ancho del elemento. `.form` tiene 385px y `.logo` 203px.                                                  |
| `height`                | `100vh` / `50px`                    | `100vh` ocupa el 100% de la altura de la ventana; `50px` establece una altura fija.                                 |
| `background-color`      | `rgba(255, 255, 255, 0.8)`          | Define un fondo blanco con 80% de opacidad.                                                                         |
| `background-image`      | `url("/assets/img/Ulimafondo.png")` | Establece una imagen como fondo.                                                                                    |
| `background-size`       | `cover`                             | Hace que la imagen cubra todo el contenedor, pudiendo recortar parte de ella.                                       |
| `background-position`   | `center`                            | Centra la imagen de fondo.                                                                                          |
| `background-repeat`     | `no-repeat`                         | Evita que la imagen de fondo se repita.                                                                             |
| `background-attachment` | `fixed`                             | Mantiene la imagen de fondo fija al desplazarse.                                                                    |
| `padding-top`           | `50px`                              | Agrega 50px de espacio interno en la parte superior.                                                                |
| `text-align`            | `center` / `justify`                | `center` centra el texto; `justify` distribuye el texto para alinear ambos extremos.                                |
| `justify-content`       | `center`                            | Centra el contenido en el eje principal cuando se utiliza Flexbox.                                                  |
| `align-items`           | `center`                            | Centra los elementos en el eje transversal cuando se utiliza Flexbox.                                               |
| `padding`               | `10px`                              | Agrega espacio interno en los 4 lados del elemento (a diferencia de `padding-top`, que solo afecta arriba).         |
| `border`                | `#343434 1px solid`                 | Shorthand que define color, grosor y estilo del borde en una sola línea.                                            |
| `border-radius`         | `0px`                               | Controla qué tan redondeadas son las esquinas del elemento (`0px` = esquinas totalmente rectas).                    |
| `box-sizing`            | `border-box`                        | Hace que el padding y el borde se incluyan dentro del `width` definido, en vez de sumarse por fuera.                |
| `background`            | `#121314`                           | Shorthand que puede definir color, imagen, posición, etc. de fondo en una sola propiedad.                           |
| `color`                 | `aliceblue`                         | Define el color del texto del elemento.                                                                             |

## 📌 Clases utilizadas

### `.form`

Es el contenedor principal del formulario.

* `width: 300px`
* `background-color: rgba(255, 255, 255, 0.8)`
* `margin: 0 auto`
* `padding-top: 50px`
* `margin-top: 80px`

**Diferencia clave:** permite crear un panel de 300px de ancho, centrado horizontalmente y con un fondo semitransparente.

### `.logo`

Controla la posición y tamaño del logo.

* `display: block`
* `margin: auto`
* `width: 203px`
* `height: 50px`

**Diferencia clave:** utiliza `margin: auto` para centrar la imagen.

### `.centro`

Busca centrar el contenido del enlace.

* `display: block`
* `justify-content: center`
* `align-items: center`
* `text-align: center`

**Diferencia clave:** `text-align: center` sí centra directamente el texto. En cambio, `justify-content` y `align-items` normalmente requieren `display: flex` para funcionar.

### `.input`

Da estilo a los campos de texto del formulario (usuario y contraseña).

* `display: block`
* `border: #343434 1px solid`
* `border-radius: 0px`
* `width: 90%`
* `padding: 10px`
* `background-color: rgba(255, 255, 255, 0)`
* `box-sizing: border-box`

**Diferencia clave:** `box-sizing: border-box` hace que el padding y el borde queden *dentro* del 90% de ancho definido, en vez de sumarse aparte y desbordar el contenedor. El fondo con alpha en `0` lo deja transparente, dejando ver el fondo semitransparente de `.form`.

### `.bing`

Da estilo al botón de "Iniciar sesión".

* `border-radius: 0px`
* `width: 75%`
* `padding: 10px`
* `background: #121314`
* `color: aliceblue`

**Diferencia clave:** usa `background` (oscuro) junto con `color` (claro) para lograr contraste de texto legible, a diferencia de `.input`, que usa fondo transparente.

## 🏷️ Selectores HTML

También se aplican estilos directamente a etiquetas:

* `body` → controla el fondo y tamaño general de la página.
* `label` → organiza las etiquetas como bloques.
* `input` → organiza los campos y botones mediante márgenes.
* `button` → centra el botón y agrega separación.
* `h1` → agrega margen al título.
* `p` → agrega margen y justifica el comunicado.
* `small` → convierte el texto pequeño en bloque y agrega margen.

## 🔑 Diferencias importantes

* **`margin` vs `padding`**: `margin` crea espacio **fuera** del elemento; `padding` crea espacio **dentro**.
* **`width` vs `height`**: `width` controla el ancho; `height` controla la altura.
* **`text-align` vs `justify-content`**: `text-align` alinea texto; `justify-content` distribuye elementos dentro de un contenedor Flexbox.
* **`background-image` vs `background-color`**: uno utiliza una imagen como fondo y el otro establece un color.
* **`display: block / flex`**: `block` organiza el elemento como bloque; `flex` permite organizar y alinear elementos mediante Flexbox.
* **Selector de etiqueta vs. selector de clase**: un selector de clase (`.input`, `.bing`) tiene más especificidad que uno de etiqueta (`input`, `button`). Por eso, aunque `input` y `button` ya definen `margin: 10px auto`, las clases `.input` y `.bing` pueden agregar o sobreescribir propiedades (como `border`, `padding`, `background`) sin necesidad de tocar el selector genérico.


npm install -g vercel
vercel login
vercel --prod