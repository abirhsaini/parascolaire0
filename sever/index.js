const express = require("express");
const mysql = require("mysql");
const cors = require("cors")


const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    password: "aseds",
    host: "localhost",
    database: "login1"
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const member = req.body.member;

    console.log(email)
    console.log(password)
    console.log(member)

    db.query("select * from login"),
        (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log("hi");
            }
            if (result) {
                res.send(result);
                console.log("h");
            } else {
                res.send({ message: "wrong email" });
                console.log("by");
            }



        }
})


app.listen(3001, () => { console.log("server runnig") })