# test-acidlabs

La app está desplegada en http://acidlabsapp.ddns.net/

Para correr el proyecto deben seguir los siguientes pasos (Asumo que tienen Docker y npm instalados): 

* Ir al directorio "api" y ejecutar:
  * npm run docker:network
  * npm run docker:redis
  * npm run docker:build
  * npm run docker:dev

* Ir al directorio "web" y ejecutar:
  * npm run docker:build-dev
  * npm run docker:dev

* Visitar http://localhost:3001 en un web browser
