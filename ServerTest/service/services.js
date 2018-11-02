const sequelize = require('../models/'); 
const Products = sequelize.import('../models/product');
const User = sequelize.model('user');

class ProductService {

    getAllProducts() {
        return Products.findAll()
    }

    createProduct(productObj){
        console.log(productObj)
        return Products.create(productObj)
    }

    getMyProduct(userId){
        return Product.findOne({where:{ userId: userId}, include:'user'})
    }

    getProduct(id){
        return Product.find({where: {id}})
    }
}

module.exports = ProductService;