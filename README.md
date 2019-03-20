# test-acidlabs

La app está desplegada en http://acidlabsapp.ddns.net/

Para correr el proyecto deben seguir los siguientes pasos (Asumo que tienen Docker y npm instalados): 

* Ir al directorio "api"
  * Ejecutar npm run docker:network
  * Ejecutar npm run docker:redis
  * Ejecutar npm run docker:build
  * Ejecutar npm run docker:dev

* Ir al directorio "web"
  * Ejecutar npm run docker:build-dev
  * Ejecutar npm run docker:dev

* Visitar http://localhost:3001 en un web browser
