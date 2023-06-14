# Detección de rostros humanos utilizando TentorFlow.JS

El objetivo de este repositorio es dar respuesta a las consignas planteadas en un trabajo integrador de la asignatura *Seminario de Actualización 2* de la **Tecnicatura Superior en Desarrollo de Software** dictada en el **Instituto Politécnico de Formosa (IPF)**.

Se utilizaron 2 modelos:
- [Blazeface](https://github.com/tensorflow/tfjs-models/tree/master/blazeface)
- [Face-detection](https://github.com/tensorflow/tfjs-models/tree/master/face-detection)

El último de estos vino a reemplazar al primero, sin embargo el modelo deprecado aún es funcional.

## Tecnologías utilizadas:
<div align="center" style="display: flex">
    <span>
        <a href="https://es.javascript.info/" target="_blank">
            <img width="100" style="margin: 10" title='JavaScript' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'>
        </a>
    </span>
    <span>
        <a href="https://www.w3schools.com/html/default.asp" title='html' target="_blank">
            <img width="100" style="margin: 10" title='HTML' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'>
        </a>
    </span>
    <span>
        <a href="https://www.w3schools.com/css/default.asp" title='CSS' target="_blank">
            <img width="72" style="margin: 10" title='CSS' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png'>
        </a>
    </span>
    <br/>
    <span>
        <a href="https://www.tensorflow.org/js?hl=es-419" target="_blank" title='TensorFlow.js'>
            <img width="200" style="margin: 10" title='TensorFlow.js' src='https://www.tensorflow.org/static/site-assets/images/project-logos/tensorflow-js-logo-social.png?hl=es-419&sp=1683830971T11ac29b185018b83554aecf994ef3e4eee1b67c797df5e0f3c125847aeb44fa8'>
        </a>
    </span>
    <span>
        <a href="https://getbootstrap.com/docs/5.3/getting-started/download/" title='Bootstrap 5' target="_blank">
            <img width="100" style="margin: 10" title='Bootstrap' src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png'>
        </a>
    </span>
    
</div>

#### Para ejecutar o utilizar el proyecto debes clonar este repositorio en un directorio de tu sistema. Abre una terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/MARnVEL/saII_face_detection_in_browser_tensorFlow_JS.git
```

#### Para ver la respuesta utilizando el modelo nuevo abrir el archivo:
```bash
index.html
```

#### Para ver la respuesta utilizando el modelo antiguo abrir el archivo:
```bash
indexBlaze.html
```

### Advertencia:
- Si no es posible visibilizar los resultados, deberás:
    - Opcion 1:
        1. Instalar algún software que permita crear un servidor web como XAMPP (el cual trae configurado Apache).
        2. Clonar el proyecto dentro de la carpeta "htdocs" de XAMPP. Si la instalación previa fue correcta seguir los siguientes pasos:
            - En Windows dirigirse a:
                ```bash
                C:\xampp\htdocs\
                ```

            - Abrir una terminal apuntando a esta dirección y ejecutar:
                ```bash
                git clone https://github.com/MARnVEL/saII_face_detection_in_browser_tensorFlow_JS.git
                ```
        3. Abrir XAMPP
        4. Iniciar el servidor Apache
        5. En su navegador de preferencia escribir en la barra de búsqueda lo siguiente:
            ```bash
            http://localhost/saII_face_detection_in_browser_tensorFlow_JS/index.html
            ```

    - Opcion 2:
        - Una vez clonado el repositorio. Abrir el directorio donde se encuentra la carpeta saII_face_detection_in_browser_tensorFlow_JS con el IDE *Visual Studio Code*.
        - En Visual Studio Code instalar el plug-in *```Live Server```* que nos permite crear un servidor virtual.
        - Abrir el archivo ```index.html``` con Visual Studio Code
        - Clic derecho sobre algún espacio en blanco de este fichero.
        - Clic en ```Open with Live Server (Abrir con Live Server)```.
        - Deberás ver a tu navegador preferido abrirse automáticamente.
