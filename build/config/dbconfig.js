"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var mysqlConnection = /** @class */ (function () {
    function mysqlConnection() {
    }
    mysqlConnection.prototype.getConnection = function () {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'clarion',
            database: 'test'
        });
        connection.connect(function (err) {
            if (err)
                throw err;
            console.log('Connected!');
        });
        return connection;
    };
    return mysqlConnection;
}());
exports.mysqlConnection = mysqlConnection;
//# sourceMappingURL=dbconfig.js.map