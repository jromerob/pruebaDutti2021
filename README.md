# Antes de empezar:

- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres.
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies o clases para los tipos de datos que consideres.
2.  Implementa un sistema de login/registro que persista los datos correctamente.
    1.  Puedes utilizar:
        1. LocalStorage,
        2. Alguna api externa
        3. Implementar servicio propio con Nodejs.
3.  Implementa el patron de diseño redux para la gestion del listado de naves.
    1.  No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.  Actualmente solo carga una página de la api.
    2.  Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api 'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE --> https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.

# Getting Started

`npm i` for install
Run `npm run start` for a dev server.
Navigate to `http://localhost:4200/`.

# Notas del desarrollador:

Para el desarrollo de la prueba se ha hecho uso de la metodología GitFlow. - Se han ido desarrollando funcionalidades mediante la creación de features que al ir cerrando se han incorporado a la rama develop. - Finalmente se ha generado una release que se ha cerrado generando la version 1.0.0 en la rama master
Para la descripción de commits se ha seguido la especificación Conventional Commits identificando commits de features, documentación, test, estilos,...
Para evitar la sobrecarga del servidor por peticiones a la API de Ships se ha desarrollado un sistema simple de cacheado en memoria en el servicio ships.service.ts
Se ha eliminado la llamada a funciones en el tempalte de ships para obtener imágenes. Se ha sustituido por la generación de un array asociativo en el componente con la correspondencia entre ship e imagen
Se han renombrado variables que no identifican contenido como Data, datalist,...
Se ha reestructurado el proyecto por features que contienen sus propios módulos. en concreto se han identificado users, ships y auth
Al no entrar en los requisitos no se ha modificado la navegación pero una posible mejora sería realizar la carga del layout (principal) app.component.html y que en el router-outlet se cargaran las páginas (\*-page) mediante módulos y carga lazy-load
Para mantener el usuario logado se ha optado por emitir un observable desde el servicio al que se pude suscribir cualquier componente que necesite ser notificado de cambios en el login.

Saludos
