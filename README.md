# Ejercicio1

Queremos crear un nuevo proyecto en Angular llamado Ejercicio_1

En este proyecto, que debe ser creado con AngularCLI, tenemos los siguientes requisitos:

Crear un componente en la página principal que muestre las coordenadas del usuario latitud, longitud y precisión) y las pinte en un mapa.

Si se produce cualquier tipo de error debemos mostrar un div, con letra roja y de tamaño 22px., que estará centrado encima de donde debería estar el mapa, indicando el tipo de error que ha sucedido.

Una vez obtengamos la posición la guardaremos en el localstorage, y cada vez que recarguemos la pagina recuperaremos estas coordenadas guardadas y las compararemos con las que estemos capturando en ese momento.

Si son iguales no haremos nada, pero si son distintas queremos que salga una capa, de 200px x 200px de tamaño con fondo blanco que indique que las coordenadas son distintas y que por consiguiente nos hayamos movido.

Queremos que esta capa tenga un botón en la parte inferior para poder cerrar la capa.

