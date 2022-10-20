const express = require('express')
const app = express()
const cors = require('cors');
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

let router = require("./routes")
// parse application/json
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 8080;
app.use(express.static('public'))
app.use('/api', router);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
