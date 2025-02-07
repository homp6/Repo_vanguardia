/*
----------GREMIO---------------
Add
Update
Buscar
Add members
status
---------HECHICEROS------------
Add
Update
Desactivar
Buscar All
Buscar por id
Status
*/

class Hechiceros {
    constructor(id, nombre, direccion, magia, poder, status) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.magia = magia;
        this.poder = poder;
        this.status = status;
        this.listaH = []; // ✅ Corrected
    }

    Add() {
        this.listaH.push(new Hechiceros(this.id, this.nombre, this.direccion, this.magia, this.poder, true));
    }

    update(id, nombre, direccion, magia, poder, status) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.magia = magia;
        this.poder = poder;
        this.status = status;
    }

    desactivar(id, nombre) {
        if (this.id === id && this.nombre === nombre) {
            this.status = false;
        }
    }

    buscarAll() {
        return this.listaH;
    }

    buscarID(id) {
        for (let i = 0; i < this.listaH.length; i++) {
            if (this.listaH[i].id === id) { // ✅ Fixed
                return this.listaH[i];
            }
        }
    }
}

class GREMIO {
    constructor(id, nombre, casa, cantidad, status) {
        this.id = id;
        this.nombre = nombre;
        this.casa = casa;
        this.cantidad = cantidad;
        this.status = status;
        this.lista = []; // ✅ Corrected
    }

    update(id, nombre, casa, cantidad, status) {
        this.id = id;
        this.nombre = nombre;
        this.casa = casa;
        this.cantidad = cantidad;
        this.status = status;
    }

    eliminar(id, nombre) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === id && this.lista[i].nombre === nombre) {
                this.lista[i].status = false;
            }
        }
    }

    buscar(id, nombre) {
        console.log(this.lista);
        return this.lista.find((item) => item.id === id && item.nombre === nombre); // ✅ Fixed
    }

    addMember(id, nombre, direccion, magia, poder, status) {
        this.lista.push(new Hechiceros(id, nombre, direccion, magia, poder, status));
    }
}

const gremio = new GREMIO(1, "Gremio de Hechiceros", "Gryffindor", 5, true);

const add = async (request, response) => {
    const { id, nombre, casa, cantidad, status } = request.body;
    gremio.update(id, nombre, casa, cantidad, status);
    response.status(200).json({
        status: 200,
        message: "Gremio creado"
    });
};

const Update = async (request, response) => {
    const { id, nombre, casa, cantidad, status } = request.body;
    gremio.update(id, nombre, casa, cantidad, status);
    response.status(200).json({
        status: 200,
        message: "Gremio actualizado"
    });
};

const buscar = async (request, response) => {
    const { id, nombre } = request.query; 
    const result = gremio.buscar(id, nombre);
    

    if (result) { 
        response.status(200).json({
            status: 200,
            message: `Resultado encontrado: ${result.nombre}`,
            data: result // 
        });
    } else {
        response.status(404).json({
            status: 404,
            message: "No se encontró el gremio."
        });
    }
};


const Eliminar = async (request, response) => {
    const { id, nombre } = request.body;
    gremio.eliminar(id, nombre);
    response.status(200).json({
        status: 200,
        message: "Gremio eliminado"
    });
};

const AddMembers = async (request, response) => {
    const { id, nombre, direccion, magia, poder, status } = request.body;
    gremio.addMember(id, nombre, direccion, magia, poder, status);
    response.status(200).json({
        status: 200,
        message: "Miembro añadido"
    });
};

const obtenerGremio = async (request, response) => {
    const { id, nombre } = request.query; // ✅ Use request.query for GET requests
    const result = gremio.buscar(id, nombre);
    

    if (result) {
        const gremioEncontrado = new GREMIO(result.id, result.nombre, result.casa, result.cantidad, result.status);
        
        response.status(200).json({
            status: 200,
            message: `Gremio encontrado: ${result.nombre}`,
            gremio: gremioEncontrado // ✅ Return the full instance
        });
    } else {
        response.status(404).json({
            status: 404,
            message: "No se encontró el gremio."
        });
    }
};


module.exports = { add, Update, Eliminar, buscar, AddMembers, obtenerGremio };

