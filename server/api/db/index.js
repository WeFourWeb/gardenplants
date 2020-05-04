const config = require('../../config')

const mongoClient = require('mongodb').MongoClient
const mongoHost = config.mongoHost
let client, mongodb

function connect(callback) {
  mongoClient.connect(mongoHost, { useUnifiedTopology: true },  (err, db) => {
		if (err) {
			console.log(`Error: ${err}`)
    }   
    mongodb = db
		client = db.db('gardenplants')
		console.log('connected')
    callback()
  })
}

function get() {
    return client
}

function close() {
	console.log('disconnected')
  mongodb.close()
}

module.exports = {
  connect,
  get,
  close
}
