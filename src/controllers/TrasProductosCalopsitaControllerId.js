const ProductModel = require('../models/ProductModel');

module.exports = async (request,response) => {
          let calopsita = await ProductModel.findOne({
                    where:{
                              id: request.params.id
                    }
          })
          console.log(calopsita)
          return response.json(calopsita)
}
