import SubChildCategoryController from './subchildcategories.controller';

class SubChildCategoryModule {

  saveSubChildCategory = SubChildCategoryController.SaveSubChildCategory;
  subChildCategoriesBySubCategoryId = SubChildCategoryController.SubChildCategoriesBySubCategoryId;
  update = SubChildCategoryController.update;
  delete = SubChildCategoryController.delete;

  constructor() { }
}

export default new SubChildCategoryModule();