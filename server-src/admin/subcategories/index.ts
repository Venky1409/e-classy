import SubCategoryController from './subcategories.controller';

class SubCategoryModule {
  saveSubCategory = SubCategoryController.SaveSubCategory;
  subCategoriesByCategoryId = SubCategoryController.SubCategoriesByCategoryId;
  update = SubCategoryController.update;
  delete = SubCategoryController.delete;

  constructor() { }
}

export default new SubCategoryModule();