require ('dotenv').config();

const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

// require(hbs)

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials')

//Servir contenido estatico

app.use( express.static('public') )

// app.get('/', (req, res) =>{
//   res.send( 'Home page' ); 
// });
app.get('/', (req, res) => {
    res.render('home' ,{
        nombre: 'Fernando Herrera',
        titulo: 'curso node'
    });
  });

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Fernando Herrera',
        titulo: 'curso node'
    });
  });

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'curso node'
    });
})

app.get('*', (req, res) =>{
    res.render('Error 404')
});

app.listen(port, () => {
    console.log(`La escuchand http://localhost:${port}` );
});