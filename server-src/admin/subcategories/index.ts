import SubCategoryController from './subcategories.controller';

class SubCategoryModule {
  testcats: any;

  constructor() {
    this.testcats = SubCategoryController.testCats
  }
}

export default new SubCategoryModule();