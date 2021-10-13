// Renb's MySQL設定
var mysql = require('mysql');

// 包裝mysql連線方法，命名為exec ,後在export
exports.exec = (sql, data, callback) => { 
    const connection = mysql.createConnection({
        host: 'localhost', //127.0.0.1
        user: 'root',
        password: 'root',
        database: 'project',
        port: 8889,
    });
    connection.connect();

    connection.query(sql, data, function(error, results, fields) {
        if (error) {
            console.log(error)
        };
        callback(results, fields);
    })
    connection.end();
}


