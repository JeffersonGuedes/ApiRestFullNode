const ProductModel = require('../models/ProductModel');

module.exports = async (request, response) => {
          console.log(request.body)
          let {name, price, slug, stock, price_with_discount} = request.body;

          let createProduct = await ProductModel.create({
                    name, price, slug, stock, price_with_discount
          });
          response.status(200);
          return response.json(createProduct);
};