const config = require('../config')
const MongoClient = require('mongodb').MongoClient

const mongoClient = new MongoClient(config.mongoHost, { useUnifiedTopology: true })

module.exports = () => {
	mongoClient.connect((err, client) => {
		if (err) {
			return err
		}
		else {
			const db = client.db('gardenplants')
			const activeRoutesCollection = db.collection('activeRoutes')
			
			activeRoutesCollection.find({}).toArray((err, routes) => {
				if (err) {
					console.log(err)
					return err
				}
				else {
					console.log('got routes')
					return routes
				}
			})
		}
		client.close()
	})
}
