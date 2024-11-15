const ProductModel = require("../models/ProductModel");
const product = [
          {
                    name: 'Sapatenis',
                    price: 250.99,
                    price_with_discount: 9.99,
                    stock: 2,
                    slug: 'sapatenis legal'
          },
          {
                    name: 'Laptop da Xuxa',
                    price: 999.99,
                    price_with_discount: 50.99,
                    description: 'massa',
                    slug: 'Laptop da Xuxa legal'
          },
          {
                    name: 'calopsita',
                    price: 150.99,
                    price_with_discount: 100.99,
                    stock: 5,
                    slug: 'calopsita legal'
          }
]

async function calopsita() {
          await ProductModel.bulkCreate(product);
}

calopsita();