import CategoryController from './categories.controller';

class CategoryModule {
  testcats: any;

  constructor() {
    this.testcats = CategoryController.testCats
  }
}

export default new CategoryModule();