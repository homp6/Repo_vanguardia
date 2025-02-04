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

class GREMIO {
    constructor(id,nombre,casa,cantidad,status){
        this.id = id;
        this.nombre = nombre;
        this.casa = casa;
        this.cantidad = cantidad;
        this.status = status;
        let lista = [];
    }

    update(id,nombre,casa,cantidad,status){
        this.id = id;
        this.nombre = nombre;
        this.casa = casa;
        this.cantidad = cantidad;
        this.status = status;
    }

    eliminar(id,nombre){
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id == id && this.lista[i].nombre == nombre) {
                this.lista[i].status = false;
            }
        }
    }

    buscar(id,nombre){
        lista.map((item)=>{
            if(item.id==id && item.nombre==nombre){
                return item;
            }
        })
    }
    

    addMember(id,nombre,direccion,magia,poder,status){
        this.lista.push(new Hechiceros(id,nombre,direccion,magia,poder,status));
    }
};

const gremio = new GREMIO(1,"Gremio de Hechiceros","Gryffindor",5,true);

const add= async(request,response)=>{
    const {id,nombre,casa,cantidad,status} = request.body;
    gremio.update(id,nombre,casa,cantidad,status);
    response.status(200).json({
        'status':200,
        message:"Gremio creado"
    })
}

const Update= async(request,response)=>{
    const {id,nombre,casa,cantidad,status} = request.body;
    gremio.update(id,nombre,casa,cantidad,status);
    response.status(200).json({
        'status':200,
        message:"Gremio actualizado"
    })
}

const buscar= async(request,response)=>{
    const {id,nombre} = request.body;
    const result = gremio.buscar(id,nombre);
    response.status(200).json({
        'status':200,
        message:result
    })
}

const Eliminar= async(request,response)=>{  
    const {id,nombre} = request.body;
    gremio.eliminar(id,nombre);
    response.status(200).json({
        'status':200,
        message:"Gremio eliminado"
    })
}

const AddMembers= async(request,response)=>{
    const {id,nombre,direccion,magia,poder,status} = request.body;
    gremio.addMember(id,nombre,direccion,magia,poder,status);
    response.status(200).json({
        'status':200,
        message:"Miembro añadido"
    })
}


module.exports={add,Update,Eliminar,buscar,AddMembers};


/*class Hechiceros{
    constructor(id, nombre,direccion,magia,poder,status){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.magia = magia;
        this.poder = poder;
        this.status = status;
        let listaH = [];
    }

    Add(){
        this.listaH.push(new Hechiceros(id,nombre,direccion,magia,poder,true));
    }

    update(id,nombre,direccion,magia,poder,status){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.magia = magia;
        this.poder = poder;
        this.status = status;
    }

    desactivar(id, nombre){
        if(this.id==id && this.nombre==nombre)
            this.status=false;

    }

    buscarAll(){
        return this.listaH;
    }

    buscarID(id){
        for (let i = 0; i < this.listaH.length; i++) {
            if (this.lista[i].id == id) {
                return this.listaH[i];
            }
        }
    }
}

*/