const router = require('express').Router();
const Product = require('../models').sequelize.model('product');
const ProductService = require('../service/product.service')
const validateSession = require('../middleware/validate-session')

router.get('/', (req, res) => {
    // returns all products
    productService().Product.findAll()
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json(err))
})

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ where: { id: req.params.id } });
    return product ? res.status(200).json(product) :
        res.status(500).json({ err: true, msg: 'Product not found' });
})

router.post('/', validateSession, (req, res) => {
    const pso= {
        product_name: req.body.name, 
        product_description: req.body.description, 
        product_price: req.body.price,
        product_image: req.body.image
        
    }
    productService().createProduct(pso)
    .then(createdProduct => res.status(200).json(createdProduct))
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', async (req, res) => {
    const deletedValue = Product.destroy({ where: { id: req.params.id } });
    return deletedValue ? res.status(200).json({err: false, msg:`Product ${req.params.id} was deleted` }) :
        res.status(500).json({ err: true, msg: 'Product was not deleted' });
})

router.put('/:id', (req,res) => {
    if (!req.errors){
        productService().update(req.body)
        .then(product => {
            console.log('here')
            return res.status(200).json(product)
        })
            .catch(err => res.json(req.errors))
        } else {
            res.status(500).json(req.errors)
        }
})

const productService = () => new ProductService()

module.exports = router;