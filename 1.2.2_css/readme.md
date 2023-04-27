
# Intro a la web

## HTML

Hyper text markup language

Lenguaje que por medio de etiquetas identifica elementos.

Por ejemplo:

La etiqueta de encabezado H1 se puede usar para el título de un sitio web:

`<h1> Título </h1>`

### ¿cómo creo un sitio web?

1. Crear una carpeta donde mantendré mis archivos.
2. Crear dentro la carpeta mi archivo `index.html`
3. Crear la estructura del HTML:
    - Escribiendo "!" o "html:5" y dando enter.
    - Cambiar `<title>Document</title>` con mi titulo.
4. Recordar la estructura del HTML:
    - `<head></head>`: Metadatos, cabeceras, configuraciones, el título e importaciones.
    - `<body></body>`: Estructura visual de la página. El contenido.
5. Utilizar etiquetas semánticas:
   ```
   <header>
    <nav></nav>
   </header>
   <main>
    <section></section>
    <section></section>
    <aside></aside>
   </main>
   <footer>
   </footer>
    ```
    - NOTA: SI quieres dar formato a tu documento, click derecho + format document

6. Empieza a añadir las etiquetas que requieras no olvides que cada una puede tener atributos diferentes y atributos en común.
    - En común:
        - class: etiqueta para clasificar elementos
            - Por ejemplo:
                - `<p class="primero">`
                - `<p class="primero bg-negro">`
                - `<p class="primero texto">`
            - Una etiqueta puede tener tantas clase requiera, mientras se separen por un espacio.
        - id: identificador para tratar lo elementos que queremos sean unicos y tener una forma de acceder directamente a ellos.

7. Agrega estilos:
    - Inline
    - Interno
    - Externo: Es importar los estilos que viven en un archivo fuera del html con la extensión `.css`
        - Siguiendo los pasos:
            1. Crear archivo: `style.css`.
            2. Enlazar con html escribiendo dentro del head al final: `link:css` y enter.
    y empiezo a escribir usando selectores.
8. Los selectores son:
    - nombre de la etiqueta
    - clase
    - id

9. Este es el orden de especificidad o de prioridad que da CSS a los selectores de mayor  a menor: 

- !important
- Estilos en linea
- #Id
- Clases, atributos y pseudoclases
- Elementos y pseudoelementos
- selector universal







