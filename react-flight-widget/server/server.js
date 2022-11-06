const PORT = 8000
const axios = require("axios")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
console.log(process.env)

app.get("/flights", (req, res) => {
    const options = {
        url: "https://20e6394d-5ec6-47c5-abae-b99cf1a1f249-northamerica-northeast1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures",
        headers: {
            accept: "application/json",
            "X-Cassandra-Token": process.env.API_DATASTAX_TOKEN
        }
    }
    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))