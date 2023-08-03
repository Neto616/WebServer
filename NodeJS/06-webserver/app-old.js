// >
const http = require('http')

http.createServer( ( req , res ) =>{
    
    // res.writeHead(200, { 'Conten-Type':'text/plain' } )
    // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
    // res.writeHead(200, { 'Conten-Type':'text/csv' } )
    
    // res.write( 'id, nombre\n' );
    // res.write( '1, Fernando\n' );
    // res.write( '2, Maria\n' );
    // res.write( '3, Juan\n' );
    // res.write( '4, Pedro\n' );
    res.write( "Hola Mundo" )
    res.end();

})
.listen( 4444 )

console.log('Escucnado en el puerto .', 4444)