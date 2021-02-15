const db = require('../database/models') // si es index, no es necesario ponerlo

module.exports = {
    index: function(req, res) {
        // encontrar todos los registros en la tabla -- pedido asincronico
        db.Nota.findAll()
        .then(function(notas){ //le asigno un nombre a la funcion (puede ser pepe)
            return res.render('index', {
                notas:  notas //propiedad(si la funcion se llama pepe, sera pepe): valor  
            })
        })
    },

    create: (req, res) => {
        let {title, message} = req.body;
        if(!title || !message){
            res.send("¡¡Error!!");
        }

        db.Nota.create({
            titulo: title,
            texto: message
        })
        .then(()=>{
            res.redirect('/');
        })
        .catch(error=>{
            res.send("Algo no funciona: " + error.toString());
        })
    },

    edit: (req, res)=>{
        let id = req.params.id;
        if(!id){
            res.send("¡¡Error!!");
        }

        db.Nota.findAll({
            where: {
              id: id
            }
          }).then((result)=>{
            console.log(result);
            res.render("detail", {nota: result});
        });
    },

    editSave: (req, res)=>{
        let id = req.params.id;
        if(!id){
            res.send("¡¡Error!!");
        }

        let {title, message} = req.body;
        if(!title || !message){
            res.send("¡¡Error!!");
        }

        db.Nota.update({
                titulo: title,
                texto: message
            },{
            where:{
                    id: id  
                }
            }    
        ).then(()=>{
            res.redirect("/");
        })
        .catch(error=>{
            res.send("Algo no funciona: " + error.toString());
        });
    },

    delete: (req, res)=>{
        let id = req.params.id;
        if(!id){
            res.send("¡¡Error!!");
        }
       
        db.Nota.destroy( {
            where: { id: id}
        })
        .then(()=>{
            res.redirect("/");
        })
        .catch(error=>{
            res.send("Algo no funciona: " + error.toString());
        });
    }



}