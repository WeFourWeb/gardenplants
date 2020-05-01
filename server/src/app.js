var express = require('express') 
var bodyParser = require('body-parser') 
var cors = require('cors') 
var morgan = require('morgan')
var db = require('../api/db') 

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('../router')(app)

app.listen(process.env.PORT || 1001, () => {
	console.log('listening...')
})


