const sequelize = require('../models').sequelize; 
const Products = sequelize.import('../models/product');

class ProductService {

    getAllProducts() {
        return Products.findAll()
    }

    createProduct(productobj){
        console.log(productobj)
        return Products.create(productobj)
    }

    getMyProduct(userId){
        return Product.findOne({where:{ userId: userId}, include:'user'})
    }

    getProduct(id){
        return Product.find({where: {id}})
    }

    updateProduct(productDetailsToUpdate) {
        return Product.update(productDetailsToUpdate,{where:{id: productDetailsToUpdate.id}})
        }
    }    

module.exports = ProductService;