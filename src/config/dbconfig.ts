import  * as mysql from 'mysql';
export class mysqlConnection {
    constructor () {}
    public  getConnection() : mysql.Connection {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'clarion',
            database: 'test'
          });
          connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
          });

          return connection;
    }
}