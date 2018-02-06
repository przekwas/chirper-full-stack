// let mysql = require('mysql');
import mysql from 'mysql';

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'chirpr',
        user: 'chirprapp',
        password: 'chirprapp'
    }
);

let getChirps = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM chirps', (err, results, fields) => {
            if (err) {
                reject();
                // connection.end();
                console.log('YOU DONE MESSED UP AARON, ', err);
            }
            resolve(results);
        })
    })
}

let getChirp = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM chirps where id = ${id}`, (err, results, fields) => {
            if (err) {
                reject();
                // connection.end();
                console.log('YOU DONE MESSED UP AARON, ', err);
            }
            resolve(results);
        })
    })
}

let deleteChirp = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM chirps where id = ${id}`, (err, results, fields) => {
            if (err) {
                reject();
                // connection.end();
                console.log('YOU DONE MESSED UP AARON, ', err);
            }
            resolve(results);
        })
    })
}

let editChirp = (id, text) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE chirps SET text = '${text}' where id = ${id}`, (err, results, fields) => {
            if (err) {
                reject();
                // connection.end();
                console.log('YOU DONE MESSED UP AARON, ', err);
            }
            resolve(results);
        })
    })
}

let postChirp = (text) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO chirps (userid, text) VALUES (1, '${text}')`, (err, results, fields) => {
            if (err) {
                reject();
                // connection.end();
                console.log('YOU DONE MESSED UP AARON, ', err);
            }
            resolve(results);
        })
    })
}

module.exports = {
    GetChirps: getChirps,
    GetChirp: getChirp,
    DeleteChirp: deleteChirp,
    EditChirp: editChirp,
    PostChirp: postChirp
}