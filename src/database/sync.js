const ProductModel = require('../models/ProductModel');

async function calopsita() {
          await ProductModel.sync();
}

calopsita();