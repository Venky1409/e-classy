import { Router } from 'express';
import CategoryModule from '../../admin/categories';
import SubCategoryModule from '../../admin/subcategories';
import SubChildCategoryModule from '../../admin/subchildcategories';
import OrderModule from '../../admin/orders';
import ProductModule from '../../admin/products';

let router = Router();

// Categories Routes
router.route('/categories')
    .get(CategoryModule.getcategories)
    .post(CategoryModule.addcategory);
router.route('/categories/:id?')
    .get(CategoryModule.findById)
    .put(CategoryModule.update)
    .delete(CategoryModule.delete);

// SubCategories Routes
router.route('/subcategories')
    .post(SubCategoryModule.saveSubCategory);
router.route('/subcategories/:id?')
    .get(SubCategoryModule.subCategoriesByCategoryId)
    .put(SubCategoryModule.update)
    .delete(SubCategoryModule.delete);

// SubChildCategories Routes
router.route('/subchildcategories')
    .post(SubChildCategoryModule.saveSubChildCategory);
router.route('/subchildcategories/:id?')
    .get(SubChildCategoryModule.subChildCategoriesBySubCategoryId)
    .put(SubChildCategoryModule.update)
    .delete(SubChildCategoryModule.delete);

// Orders Routes
router.route('/orders')
    .get(OrderModule.getorders);
router.route('/orders/:id')
    .get(OrderModule.getorders);

// Products Routes
router.route('/products')
    .post(ProductModule.addProduct);
router.route('/getproducts')
    .post(ProductModule.getProducts);
router.route('/products/:id')
.put(ProductModule.updateProduct);
router.route('/products/:id')
.delete(ProductModule.deleteProduct);

export let adminRouter = router;