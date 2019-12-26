import CategoryController from './categories.controller';

class CategoryModule {
  getcategories: any;
  testcats: any;
  addcategory: any;

  constructor() {
    this.testcats = CategoryController.testCats;
    this.addcategory = CategoryController.addNewCategory;
    this.getcategories = CategoryController.getAllCategories;
  }
}

export default new CategoryModule();