<h1>Cartelera de Cine</h1>

<pre>
Este proyecto implementa una cartelera de cine animada utilizando React + CSS puro, 
sin librerías externas de carrusel. Las películas se obtienen desde una API externa y se muestran
de forma automática con una transición fluida, permitiendo ver varias películas al mismo tiempo,
como en una cartelera real de cine.
</pre>

<h3>Idea General</h3>
La cartelera funciona como un carrusel horizontal automático:

1-Se consumen las películas desde una API externa.

2-Se almacenan en el estado del componente.

3-Se muestran varias películas visibles a la vez.

4-Cada cierto intervalo de tiempo, el carrusel se desplaza automáticamente.

5-El desplazamiento se logra con transform: translateX() y transiciones CSS.


<h3>Tecnologías usadas</h3>
-React (useState, useEffect)
-JavaScript
-CSS puro (sin Swiper, sin SCSS)
-API externa de películas (ej: TMDb)


<h3>Estamos del componente</h3>

<img src="https://github.com/CNBasualdo/ProyectoCine/blob/main/client/screenshots/estadosDelComponente.png" >

<h4>Index Actual</h4>
-Controla el desplazamiento del carrusel.
-Representa desde qué película comienza la vista.
-Es el estado clave para el movimiento automático.

<h4>Peliculas</h4>
-Almacena el array de películas obtenido desde la API.
-Cada objeto contiene datos como id, title y poster_path.

<h3>Carga de Peliculas(API externa)</h3>

<img src="https://github.com/CNBasualdo/ProyectoCine/blob/main/client/screenshots/cargarLAPelicula.png" >

-Se ejecuta una sola vez al montar el componente.
-Llama a la API y guarda los resultados en el estado.
-Maneja correctamente errores y loading.

<h3>Configuracion de la cartelera</h3>

<img src="https://github.com/CNBasualdo/ProyectoCine/blob/main/client/screenshots/configuracionDeCartelera.png">

-Define cuántas películas se ven al mismo tiempo.

-Este valor impacta directamente en:

    -El ancho de cada tarjeta (CSS)

    -El cálculo del desplazamiento

    -El límite del carrusel

<h3>Autoplay del carrusel</h3>

<img src="https://github.com/CNBasualdo/ProyectoCine/blob/main/client/screenshots/autoPlayDelCarrusel.png">

<h4>Como Funciona:</h4>
-Se ejecuta solo cuando hay películas cargadas.
-Cada 4 segundos:
    -Avanza una posición en el carrusel.
    -Si llega al final, vuelve al inicio.
-Se limpia el intervalo para evitar memory leaks.

<h3>Movimiento del carrusel</h3>

<img src="https://github.com/CNBasualdo/ProyectoCine/blob/main/client/screenshots/MovimientoDelCarrusel(clave).png">

-translateX desplaza horizontalmente todo el contenedor.
-El valor depende del índice actual.
-El porcentaje representa el ancho de cada película.

<h3>Render de las peliculas</h3>

<img src="https://github.com/CNBasualdo/ProyectoCine/blob/main/client/screenshots/renderDeLasPeliculas.png">

-Se recorren todas las películas con map.
-key asegura un render eficiente.
-Se muestra el póster y el título.


<h3>Resultado final</h3>
✅ Cartelera automática
✅ Varias películas visibles
✅ Transición fluida
✅ Sin librerías externas