const ProductModel = require('../models/ProductModel');

module.exports = async (request,response) => {
          let calopsita = await ProductModel.findAll({
          })
          console.log(calopsita)
          return response.json(calopsita)
}
// where:{
//           id: request.params.id
// }
// // include: {
// //           attributes: ['id','name','slug','price'],
// //           as: 'batata'
// // }