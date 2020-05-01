exports.getAdresses = require('./getAdresses')

exports = (product) => {
	const addProduct = require('./addProduct')(product)
}

exports = (productType) => {
	const addProductType = require('./addProductType')(productType)
}

exports = (activeRoute) => {
	const addActiveRoute = require('./addActiveRoute')(activeRoute)
}

exports.getActiveRoutes = require('./addActiveRoute')