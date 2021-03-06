var express = require('express')
var dbConn  = require('../lib/db')
var router = express.Router()

router.get('/',function(req,res){

    //En este caso según ->vista: (si la madera ha sido vista o no)
  
    dbConn.query(`SELECT * FROM medidas;`, function (err, result, fields) {
      if (err) {
        console.log('Error en la consulta a la bd '+ err)
      }
      console.log(result);
        //Enviar resultado en forma de JSON
      res.json(result);
    });
  
  })

  router.post('/',function(req,res){
    let medida = req.body.medida
    console.log(medida)
  
    dbConn.query(`Insert into medidas SET id=?, ancho=?, grosor=?, largo=?`,[medida.id, medida.ancho, medida.grosor, medida.largo], function (err, result) {
      if (err) {
        console.log('Error en el insert'+ err)
      }
        //Enviar resultado en forma de JSON
      res.send('Se ha insertado correctamente');
    });
  
  })

  router.delete('/:id',function(req,res){
    console.log(`Intentando borrar ${req.params.id}`)

    dbConn.query('DELETE FROM medidas WHERE id=?',[req.params.id], function (err, result) {
      if (err) {
        console.log('Error en el borrado'+ err)
      }
        //Enviar resultado en forma de JSON
      res.send('Borrado correctamente');
    });
  
  })
  module.exports = router

  