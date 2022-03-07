## Challenge backend - Koibanx :) ##

- en los models, puse todos los datos como requeridos

- pase todo a ES6

- cambie la forma en la que tenia definidas las rutas por la que yo manejo (preferi hacerlo asi porque tengo poca experiencia aun)

- instale mocha y supertest para los test unitarios

- cambie la forma en la que me conecataba a mongo porque me resulta mas sencillo hacerlo con mongouri

- la implementacion de basic auth funciona, pero si soy 100% sincera, es la primera vez que lo hago. Me guie por youtube, github y stackoverflow

- para correr los test, hacer npm test. Hice un test para cada caso de uso que imagine: los dos happy path (get y post que devuelven 200), los dos endpoints sin autenticar (devuelven 401) y los dos autenticandose con password incorrecta

- Agregue la coleccion de postman para que puedan probar los endpoints mas facil :)