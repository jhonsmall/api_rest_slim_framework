// para guardar en el registro

// get
http://localhost/slim/public/api/clientes

// get by id
http://localhost/slim/public/api/clientes/1

// nuevo post
Content-Type: application/json
http://localhost/slim/public/api/clientes/nuevo

{
    "nombre": "Juan Carlos",
    "apellidos": "Chico Taboada",
    "telefono": "0984644134",
    "email": "juancarloschico0@gmail.com",
    "direccion": "Juan B. Vela - San Luis",
    "ciudad": "Tungurahua - Ambato"
}

// modificar put
http://localhost/slim/public/api/clientes/modificar/1

{
    "nombre": "Modificado Carlos",
    "apellidos": "Modificado Taboada",
    "telefono": "Modificado 0984644134",
    "email": "Modificado juancarloschico0@gmail.com",
    "direccion": "Modificado. Vela - San Luis",
    "ciudad": "Modificado - Ambato"
}

// DELETE
http://localhost/slim/public/api/clientes/delete/2


