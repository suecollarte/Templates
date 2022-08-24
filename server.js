const express=require('express');
const exphbs=require('express-handlebars');
const path = require('path');
const app= express();

app.use(express.static(path.join(__dirname, "public")));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs', exphbs.engine ({
        defaultLayout:'main',
        layoutsDir: path.join(app.get('views'),'layouts'),
        extname:'hbs'

}))
app.set('view engine','hbs');
//Rutas



ProductoApi = () =>[
    {
      "nombre": "Escuadra",
      "precio": "123.45",
      "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
    },
    {
      "nombre": "Calculadora",
      "precio": 234.56,
      "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
    },
    {
      "nombre": "Globo Terraqueo",
      "precio": 345.67,
      "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
    },
    {
      "nombre": "Escuadra",
      "precio": "123.45",
      "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
    },
    {
      "nombre": "Calculadora",
      "precio": 234.56,
      "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
    },
    {
      "nombre": "Globo Terraqueo",
      "precio": 345.67,
      "thumbail": "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
    }
  ];

  app.get('/', (req,res)=>{
    res.send('Productos');
    
    })
app.get('/productos',(req,res)=>{
    //res.render('productos',{Productos: ProductoApi(), listExists:true});
    res.render('productos', {
      nombre: "Calculadora",
      precio: 234.56,
      thumbail: "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
 
    });

});
app.get('/productos2',(req,res)=>{
  //res.render('productos',{Productos: ProductoApi(), listExists:true});
  res.render('productos', {
    nombre: "Globo Terraqueo",
    precio: 345.67,
    thumbail: "https://cdn3.iconfinder.com/data/icons/education/64/ruler-trianglestationary-school-256.png"
  });

});
const PORT=8080;
app.listen(PORT, err =>{
    if(err) throw new Error(`Error en servidor ${error}`);
    console.log(`Servidor express en port ${PORT}`);

})

/* Utilizando la misma API de productos del proyecto entregable 
de la clase anterior, construir un web server (no REST) que incorpore:
-Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
-Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
-Ambas páginas contarán con un botón que redirija a la otra.
 */