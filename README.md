Implementación de Logger
Se implemento la librería de Winston
La imlementación se puede ver en src\utils\new_logger.js
Se definieron dos transportes predeterminados
    new transports.File({ filename: logFileGeneral, level: 'debug' }),  Es un log general desde silly
    new transports.File({ filename:logFileError, level: 'warn'  })  solo almacena desde warn hasta error
Y uno condicional en el caso de que se reciba en config.environment -> "prod"  solo muestra por consola 
    desde http
    se adiciona un tranporte por consola

Para el testeo se  define el endpoint /testlogs   
    el endpoint devuelve un objeto como el siguiente
        {"error":"Registro de Error","warn":"Registro de Warn","info":"Registro de Info","http":"Registro de Http","verbose":"Registro de Verbose","debug":"Registro de debug","silly":"Registro de stilly"}
         
Para el testeo en modo desarrollo levantar la app con  
    npm run local

Para el testeo en modo producción levantar la app con  
    npm run prod
    