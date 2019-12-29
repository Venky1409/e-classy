import CategoryController from './categories.controller';

class CategoryModule {

  testcats = CategoryController.testCats;
  addcategory = CategoryController.post;
  getcategories = CategoryController.get;
  findById = CategoryController.findById;
  delete = CategoryController.delete;
  update = CategoryController.update;

  constructor() {}
}

export default new CategoryModule();