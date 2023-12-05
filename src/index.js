//creación de un servidor web en express
const express = require('express') //COMMONJS
const app = express()
const {engine} = require('express-handlebars')
const path = require('path')
//import { engine } from 'express-handlebars'; //ESMODULES
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// //si encuentra devuelve
// app.get('/dashboard', (req, res) => {
//   res.send('dahboard principal')
// })

// //la ruta que no se encuentra poner al final. con el .use
// app.use((req, res)=>{
//   res.send("404- Not Found")
// })

//mandar info en formato json al web server
//verbos
//get: obtener
//post: registrar
//put: actualizar
//delete: eliminar

app.use(express.json())//le indica al servidor que la información que va a enviar será en formato json

// app.post('/register',(req,res)=>{
//   const{pedido,solicitado}=req.body
//   res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)
// })//le envia info al servidor para registrar


// app.get('/pedido/:tipo/',(req,res)=>{
//   //console.log(req.params)//en este punto el navegador al no tener algo que responder, se quedará cargando
//   res.send(`El pedido de es hamburguesa ${req.params.tipo}`) //para capturar el pedido y enviar una respuesta
// })

// //identificador de query params: ?

// app.get('/search',(req,res)=>{  //req.query es un objeto
//   console.log(req.query)

//   if (req.query.tipo=="sencilla"){
//     res.send(`hamburguesa sencilla`)
//   }
//   else{
//     res.send('no existen resultados')
//   }
// })


// app.get('/hamburguesa/simple',(req,res)=>{
//   res.send('hamburguesa-simple')
// })

// console.log(__dirname)//para obtener el patch del archivo js
// app.get('/hamburguesa/doble',(req,res)=>{
//   res.sendFile('./doble.jpg',{
//     root:__dirname
//   })

// })

// app.get('/hamburguesa/triple',(req,res)=>{
//   res.sendFile('./triple.docx',{
//     root:__dirname
//   })

// })

// app.get('/hamburguesa/mixta',(req,res)=>{
//   res.status(200).json({
//     "tipo":"mixta",
//     "extra":"No"
//   })
// })


//rutas pública
// app.get('/entradas', (req,res)=>{
//   res.send('entrada al local')
// })



// //crear middlewar para que solo los usuarios que tienen acceso a la ruta privada pueden acceder.¬
// app.use((req, res, next)=>{
//   const{email, password}=req.body
//   if (email=="nohemiespinel0@gmail.com" && password=="123"){
//     next()//permite que acceda a la ruta privada. A todas las rutas
//   }
//   else{
//     res.send('usuario no registrado')
//   }
// })

// //rutas privadas
// app.get('/pedidos', (req,res)=>{
//   res.send(`bienvenido-${req.body.email}-listo para tomar tu orden`)
// })




// //utilizar un motor de plantillas
// app.engine('handlebars', engine());
// //extensión de las páginas
// app.set('view engine', 'handlebars');
// //ubicación del directorio views
// routes = path.join(__dirname,"views")
// app.set('views', routes)

// app.get('/hamburguesa/vegana',(req,res)=>{
//   res.render('home')
// })


// app.get('/hamburguesa/about',(req,res)=>{
//   res.render('about')
// })

app.get('/dashboard', (req,res)=>{
  res.send('bienvenido al dashboard')
})
app.get('/', (req,res)=>{
  res.send('ladin page')
})

app.get('/about', (req,res)=>{
  res.send('ladin page')
})



app.listen(port)




