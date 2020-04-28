exports.getAdresses = require('./getAdresses')

exports = (product) => {
	addProduct = require('./addProduct')(product)
}

exports = (productType) => {
	addProductType = require('./addProductType')(productType)
}

exports = (activeRoute) => {
	addActiveRoute = require('./addActiveRoute')(activeRoute)
}

exports.getActiveRoutes = require('./addActiveRoute')