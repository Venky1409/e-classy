import SubCategoryController from './subcategories.controller';

class SubCategoryModule {
  saveSubCategory = SubCategoryController.SaveSubCategory;
  subCategoriesByCategoryId = SubCategoryController.SubCategoriesByCategoryId;
  delete = SubCategoryController.delete;

  constructor() { }
}

export default new SubCategoryModule();