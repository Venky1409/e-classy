import ProductController from './product.controller';

class ProductModule {

    addProduct = ProductController.post;
    getProducts = ProductController.getProducts;
    updateProduct = ProductController.update;
    deleteProduct = ProductController.delete;

  constructor() {}
}

export default new ProductModule();