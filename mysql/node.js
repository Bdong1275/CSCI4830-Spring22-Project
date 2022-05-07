const mysql = require("mysql");
const express = require("express");

const app = express;

const db = mysql.createConnection({
    host: "ec2-52-87-161-18.compute-1.amazonaws.com",
    user: "bdong_remote",
    password: "password",
    database: "reactor_DB"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql connected");
});

app.listen("3000", () => {
    console.log("server started");
});

//create db
app.get("/createdb", (req, res) => {
    let sql = "create database reactor_DB";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("database created");
    });
});

//create table
app.get("/createtable", (req, res) => {
    let sql = "create table sequence(id int AUTO_INCREMENT, sequence VARCHAR(255), PRIMARY KEY (id)";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("table created");
    });
});

//insert data
app.get("/createdata", (req, res) => {
    let data = { sequence: "123"};
    let sql = "insert into reactor_DB set ?";
    let query = db.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("test data added");
    })
});

//get data
app.get("/createdata", (req, res) => {
    let sql = "select * from reactor_DB";
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("test data fetched");
    })
});




