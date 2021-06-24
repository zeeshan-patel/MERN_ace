const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#urthemusicinme123',
    database: 'ace'
});

connection.connect((err) => {
    if (err) {
        throw(err)
    }
    
    console.log('Server Connected')
});


module.exports = connection
