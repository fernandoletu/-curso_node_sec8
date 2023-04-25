const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.userPath = '/api/user'

        //Middlewares
        this.middlewares()

        //Read and parse body
        //To serialize data into JSON
        this.app.use(express.json())

        //Application routes
        this.routes()
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        //Public dir
        this.app.use(express.static('public'))
    }

    routes() {
        //Reference to file with all routes
        this.app.use(this.userPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at port=${this.port}`)
        })
    }
}

module.exports = Server