# actividad

Pasos a seguir.

	1 - Instalar Apache, PHP, MySQL
	2 - Importar la base de datos que se encuentra en `web/php_crud/comentarios.sql`
	3 - Instalar NodeJS

## web/php_crud

Sin bien es un modelo orientado a objetos, el archivo `data.json` contiene los datos de conexión a la base de datos.

## api/api_node

Para utilizar la api debe ejecutar

`npm install`

luego

`npm start`

La api se ejecutara en puerto `3000`. 

### Obtener el token

Para obtener el token, puede utilizar `Postman` mediante la url con el metodo `POST`

`http://localhost:3000/api/auth`

Respuesta

```
{
    "token": "555555I1NiIsInR5cCI6IkpXVCJ9..."
}

```

### Obtener datos

Para obtener los datos debe pasar en la cabecera los siguientes valores

```
Authorization | Bearer 555555I1NiIsInR5cCI6IkpXVCJ9...

```

### Obtener todos los comentarios

Metodo: GET - `http://localhost:3000/api/comentarios`

Respuesta:

```
[
    {
        "id": 14,
        "titulo": "Mi comentario",
        "comentario": "comentario desde PHP",
        "fecha": "2023-10-16T03:00:00.000Z"
    }
]
```

### Obtener un comentario

Metodo: GET - `http://localhost:3000/api/comentarios/id`

### Actualizar un comentario

Metodo: PATCH - `http://localhost:3000/api/comentarios/id`

### Eliminar un comentario

Metodo: DELETE - `http://localhost:3000/api/comentarios/id`

