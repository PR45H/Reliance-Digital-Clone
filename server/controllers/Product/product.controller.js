const ComprehensiveProductModel = require('../../models/product.model');

const product = async (req, res) => {
    try {
        const { id } = req.params
        console.log('Product ID:', id)
    } catch (error) {
        
    }
}

module.exports = product