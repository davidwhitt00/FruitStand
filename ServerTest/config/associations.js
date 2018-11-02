const sequelize = require('../models').sequelize;
const Product = sequelize.model('product'); 
const User = sequelize.model('user');

User.hasMany(Product);
Product.belongsTo(User);
User.belongsToMany(Product,{through: "transactions"})
Product.belongsToMany(User,{through: "transactions"})

sequelize.sync();