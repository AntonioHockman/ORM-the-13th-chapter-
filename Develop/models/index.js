// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category,{
  foreignKey:'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  //foreignKey:'product_id',
  foreignKey: 'tag_id',
  
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  foreignKey:'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};