const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Node app</h1>
            </body>
        </html>
    `)
});

app.get("/api/user", (req, res) => {
    res.send({
        name: "Anna",
        lastname: "Glovuak"
    })
})

/// params

app.get("/api/:user/:id", (req, res) => {
    let id = req.params.id;
    let username = req.params.user;
    res.send(`
        <html>
            <body>
                <h1>The user id is ${id}, and username is ${username}</h1>
            </body>
        </html>
    `)
})

// /api/car?brand=ford&year=2017
app.get("/api/car", (req, res) => {
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})

const port = process.env.PORT || 3000;
app.listen(port);
