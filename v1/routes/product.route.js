const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

//test if everything is connected

router.get('/', product_controller.product_index);

router.get('/form', product_controller.product_form);

/*router.get('/list', product_controller.product_list);*/

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;