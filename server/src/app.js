var express = require('express') 
var bodyParser = require('body-parser') 
var cors = require('cors') 
var morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

require('../router')(app)

app.listen(process.env.PORT || 1001, () => {
	console.log('listening...')
})