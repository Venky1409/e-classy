import SubChildCategoryController from './subchildcategories.controller';

class SubChildCategoryModule {
  testcats: any;

  constructor() {
    this.testcats = SubChildCategoryController.testCats
  }
}

export default new SubChildCategoryModule();