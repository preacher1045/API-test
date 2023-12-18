const express = require('express')
const app = express()


//routes



app.listenerCount(3000, () => {
    console.log('hello API')
})