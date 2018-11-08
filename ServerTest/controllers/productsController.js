const router = require('express').Router();
const Product = require('../models').sequelize.model('product');
const validateSession = require('../middleware/validate-session');
// Product.sync({force:true});

router.get('/', (req, res) => {
    // returns all products
    Product.findAll()
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json(err))
})

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ where: { id: req.params.id } });
    return product ? res.status(200).json(product) :
        res.status(500).json({ err: true, msg: 'Product not found' });
})

router.delete('/:id', validateSession, async (req, res) => {
    const deletedValue = Product.destroy({ where: { id: req.params.id } });
    return deletedValue ? res.status(200).json({err: false, msg:`Product ${req.params.id} was deleted` }) :
        res.status(500).json({ err: true, msg: 'Product was not deleted' });
})

module.exports = router;