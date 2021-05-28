# Practica final: Clouset Web
## Resumen

En primer lugar la práctica ha consistido en el desarrollo de la aplicación Web Clouset

*Clouset es una aplicación cuya misión es poder proporcionar al usuario un
 armario digital. En él podrá almacenar todas tanto prendas como outfits. Además te 
permite estar al tanto de publicaciones de las marcas de ropa más influyentes.*

#### Puerto

Para probar el proyecto introduzca la siguiente url en el navegador: http://localhost:8080/

#### Se han desarrollado los siguientes elementos:

- *Index(Icono):* En index.html se puede acceder al resto de páginas a través de las opciones del navbar (Mi Armario).
- *Mi armario:* ...
- *¿Quiénes somos?*: Aquí se encuentra una breve descripción de Clouset
- *Página de contacto:* En la opción del Navbar "Contacte con nosotros". Se trata de un formulario simple.
- *Proyectos:* (Es un desplegable vacío).
- *Marcas:* Aquí podrás ver videos para estar al tanto de las últimas tendencias

#### Los siguientes endpoints y páginas:
Se ha desarrolla lo siguiente:
- /register.html
- /home.html
- /contact.html 
- /detalle.html
- /login.html
- /index.html
- /miarmario/**
- /marca1.html
- /marca2.html
- /marca3.html
- /about.html
- /images/**
- /css/**
- /js/**
- /api/login 
- /api/register

#### La programación en Javascript incluye:

- Redirección a home si el login es correcto (_consultar arriba el nombre y la clave_).
- Deslogearse mediante el botón "Salir".
- Disposición de las prendas del armario.
- Disposición de los outfits del armario.
- Formulario de contacto. La funcionalidad no ha sido incluida a nivel de controller

#### La programación en el lado del servidor incluye:

- Validación de requests en Login y Register
- Devolución de resultados con uso de ResponseEntity<> para devolver el objeto mas el mensaje HTTP correspondiente
- Obtener la información del servidor sobre los items del armario
- Añadir nuevas prendas
- Añadir nuevos Outfits
- Valorar un prenda que se posea
- Valorar un outfit que se posea
- Borrar un prenda/outfit
- Se han incluido los siguientes elementos de seguridad vistos en clase 
  (JwtAuthentication, JwtRequestFilter, JwtTokenUtil, WebConfig, WebSecurityConfig)

#### Anotaciones
Para la arquitectura software del proyecto ha empleado el patron de diseño MVC

# Manual de usuario
Aquí se detalla el funcionamiento de la aplicación, que es principalmente la asociada a la segunda opción, "Mi armario"
1. Pulse la opción de "Mi armario", situada en la parte superior de la pantalla
2. Si usted no ha iniciado sesión recientemente se le mostrará una pantalla para iniciar sesión.
3. (1) En caso de tener cuenta introduzca sus credenciales 
   (desde el resto de páginas se podrá acceder a "Iniciar sesión" pulsando el botón "Iniciar" de la esquina superior derecha)
4. (2) Si todavía no tiene una cuenta en Clouset pulse el botón de registar
5. Una vez se haya registrado o iniciado sesión, se le redirecciona a la página principal.
6. Pulsando de nuevo "Mi armario", accederá al mismo, donde se le da la bienvanida y se mostrará su 'username'
7. Pulse en Prendas para ver las prendas que tiene actualmente en su armario. Si no aparece ninguna es que aún no ha registrado una. 
   Es el momento de agregar una. Pulse "Añadir prenda". 
8. En el menu de añadir prenda rellene los campos según los valores de su prenda. 
   Pulse añadir para agregarla o volver para cerrar el menú.
9. Pulse en Outfits para ver los outfits que tiene registrados en su armario.
   Para agregar uno nuevo. Pulse "Añadir outfit".
10. En el menu de añadir outfit rellene los campos según los valores de su outfit.
   Agrege las prendas de su armario que componen sus outfit mediante un click o ctrl-click.
11. Para consultar más datos sobre una prenda o un outfit pulse sobre el mismo, accederá a la pantalla de detalle
12. En la pantalla de detalle, se le muestra la opción de borrar prenda. Que elimina el item y le redirecciona a su armario. 
13. Para añadir una valoración, deslice el "slider" y cuando se muestre la puntuación que desee, pulse valorar.