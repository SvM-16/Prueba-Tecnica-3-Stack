import mysql from 'mysql';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'prueba_tecnica_dev',
    password:''
});

connection.connect(function(err){
    if(err){
        console.error('error connecting:' + err.stack);
        return;
    }
    console.log('Conexion a mysql '+ connection.threadId)
})


export default connection;