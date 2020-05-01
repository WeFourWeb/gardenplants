const config = require('../../config')

const mongoClient = require('mongodb').MongoClient
//const mongoClient = new MongoClient(config.mongoHost, { useUnifiedTopology: true })
const mongoHost = config.mongoHost
let mongodb

function connect(callback) {
  mongoClient.connect(mongoHost, { useUnifiedTopology: true },  (err, db) => {
		if (err) {
			console.log(`Error: ${err}`)
		}
			mongodb = db.db('gardenplants')
			console.log('connected')
      callback()
  })
}

function get() {
    return mongodb
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
