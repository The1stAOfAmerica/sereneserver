//database code
var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./serene.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
}
);

function createDatabase() {
    var newdb = new sqlite3.Database('serene.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

function createTables(newdb) {
    newdb.exec(`
    CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT, score INT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);`, ()  => {
            console.log("Table created")
    });
}

db.close();

db = new sqlite3.Database('./serene.db');

module.exports = db