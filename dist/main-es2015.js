(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addProduct/addProduct.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addProduct/addProduct.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" *ngIf=\"loading\">\r\n    <div id=\"loading-img\"></div>\r\n</div>\r\n<h2>WELCOME ADD_PRODUCTS PAGE</h2>\r\n<div class=\"row\">\r\n    <!-- <form> -->\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Product Title<span class=\"required\">*</span> :</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter Product Title\" name=\"title\" [(ngModel)]=\"title\" required='' aria-required=\"\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"categoryid\">Product Category<span class=\"required\">*</span> :</label>\r\n          <select class=\"form-control\" (change)=\"setCategory($event)\" [(ngModel)]=\"categoryid\" required>\r\n              <option *ngFor=\"let data of categories\"\r\n              [value]=\"data._id\">{{data.categoryname}}\r\n              </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"subchildcategoryid\">Product Sub Child Category:</label>\r\n          <select class=\"form-control\" (change)=\"setSubChildCategory($event)\" [(ngModel)]=\"subchildcategoryid\">\r\n              <option *ngFor=\"let data of subChildCategories\"\r\n              [value]=\"data._id\">{{data.subchildcategoryname}}\r\n              </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"price\">Product Price <span class=\"required\">*</span> :</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Enter Product Price\" name=\"price\" [(ngModel)]=\"price\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"quantity\">Product Measurements :</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"measurements\" placeholder=\"Enter Product Measurements\" name=\"measurements\" [(ngModel)]=\"measurements\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"subtitle\">Product Sub Title :</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"subtitle\" placeholder=\"Enter Product Sub Title\" name=\"subtitle\" [(ngModel)]=\"subtitle\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"subcategoryid\">Product Sub Category <span class=\"required\">*</span> :</label>\r\n          <select class=\"form-control\" (change)=\"setSubCategory($event)\" [(ngModel)]=\"subcategoryid\" required>\r\n              <option *ngFor=\"let data of subCategories\"\r\n              [value]=\"data._id\">{{data.subcategoryname}}\r\n              </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"quantity\">Product Qunatity :</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Enter Product Quantity\" name=\"quantity\" [(ngModel)]=\"quantity\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"quantity\">Product Description <span class=\"required\">*</span> :</label>\r\n          <textarea type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Enter Product Description\" name=\"description\" required=\"\" [(ngModel)]=\"description\" aria-required=\"\"></textarea>\r\n        </div>\r\n      </div>\r\n    <!-- </form> -->\r\n</div>\r\n<div class=\"row justify-content-center align-items-center\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitForm()\">Submit</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n  <app-side-bar class=\"sidebar\"></app-side-bar>\r\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n    <div id=\"content\">\r\n      <app-header></app-header>\r\n      <div class=\"container-fluid\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n    <div toastContainer></div>\r\n  </div>\r\n</div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" *ngIf=\"loading\">\r\n  <div id=\"loading-img\"></div>\r\n</div>\r\n<h2>WELCOME CATEGORY PAGE</h2>\r\n<form\r\n  [formGroup]=\"loginFormGroup\"\r\n  class=\"example-form\"\r\n  (ngSubmit)=\"onFormSubmit()\"\r\n>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input\r\n      matInput\r\n      placeholder=\"Category Name\"\r\n      formControlName=\"categoryname\"\r\n      [errorStateMatcher]=\"matcher\"\r\n      required\r\n    />\r\n    <mat-error>\r\n      <span\r\n        *ngIf=\"\r\n          !loginFormGroup.get('categoryname').valid &&\r\n          loginFormGroup.get('categoryname').touched\r\n        \"\r\n        >Please enter Category Name</span\r\n      >\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <div class=\"d-save-button d-buttons\">\r\n    <button\r\n      mat-button\r\n      class=\"mat-raised-button mat-button-base\"\r\n      color=\"primary\"\r\n      [disabled]=\"!loginFormGroup.valid\"\r\n      type=\"submit\"\r\n    >\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"card\">\r\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">\r\n    Editable table\r\n  </h3>\r\n  <div class=\"card-body\">\r\n    <div id=\"table\" class=\"table-editable\">\r\n      <span class=\"table-add float-right mb-3 mr-2\">\r\n        <a class=\"text-success\" (click)=\"add()\">\r\n          <mdb-icon fas icon=\"plus\" size=\"2x\"></mdb-icon>\r\n        </a>\r\n      </span>\r\n      <table\r\n        class=\"table table-bordered table-responsive-md table-striped text-center\"\r\n      >\r\n        <tr>\r\n          <th class=\"text-center\">Category Name</th>\r\n          <th class=\"text-center\">Action</th>\r\n        </tr>\r\n        \r\n        <tr *ngFor=\"let category of categories; let id = index\">\r\n          <td>\r\n            <span\r\n              (blur)=\"updateCategory(category._id, 'categoryname', $event)\"\r\n              contenteditable=\"true\"\r\n              >{{ category.categoryname }}</span\r\n            >\r\n          </td>\r\n\r\n          <td>\r\n            <span class=\"table-remove\">\r\n              <button\r\n                type=\"button\"\r\n                mdbBtn\r\n                color=\"danger\"\r\n                rounded=\"true\"\r\n                size=\"sm\"\r\n                class=\"my-0\"\r\n                (click)=\"deleteCategory(category._id)\"\r\n              >\r\n                Remove\r\n              </button>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Copyright 2019 Google LLC. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/childCategory/sub-child-category.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/childCategory/sub-child-category.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" *ngIf=\"loading\">\r\n  <div id=\"loading-img\"></div>\r\n</div>\r\n<h2>WELCOME SUB-CHILD-CATEGORY PAGE</h2>\r\n<form id=\"subCategory\" fxLayout=\"column\" [formGroup]=\"subChildCategoryFormGroup\" class=\"example-form\"\r\n  (ngSubmit)=\"onFormSubmit()\">\r\n\r\n  <div class=\"input-row\">\r\n    <mat-form-field>\r\n      <select formControlName=\"categoryid\" (ngModelChange)=\"onCategorySelection(selectCategoryField.value)\"\r\n        #selectCategoryField>\r\n        <option value=\"\">Select Category</option>\r\n        <option *ngFor=\"let category of categories\" value={{category._id}}>{{category.categoryname}}</option>\r\n      </select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"input-row\">\r\n    <mat-form-field>\r\n      <select formControlName=\"subcategoryid\" (ngModelChange)=\"onSubCategorySelection(selectChildField.value)\"\r\n        #selectChildField>\r\n        <option value=\"\">Select Sub Category</option>\r\n        <option *ngFor=\"let subcategory of subcategories\" value={{subcategory._id}}>{{subcategory.subcategoryname}}\r\n        </option>\r\n      </select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"input-row\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Sub Child Category Name\" formControlName=\"subchildcategoryname\"\r\n        [errorStateMatcher]=\"matcher\" required />\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"d-save-button d-buttons\">\r\n    <button mat-button class=\"mat-raised-button mat-button-base\" color=\"primary\"\r\n      [disabled]=\"!subChildCategoryFormGroup.valid\" type=\"submit\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n<div class=\"card\">\r\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Editable table</h3>\r\n  <div class=\"card-body\">\r\n    <div id=\"table\" class=\"table-editable\">\r\n      <table class=\"table table-bordered table-responsive-md table-striped text-center\">\r\n        <tr>\r\n          <th class=\"text-center\">Category Name</th>\r\n          <th class=\"text-center\">Sub Category Name</th>\r\n          <th class=\"text-center\">Sub Child Category Name</th>\r\n          <th class=\"text-center\">Remove</th>\r\n        </tr>\r\n        <tr *ngFor=\"let subchildcategory of subchildcategories; let id = index\">\r\n          <td>\r\n            <span>{{subchildcategory.categoryid}}</span>\r\n          </td>\r\n          <td>\r\n            <span>{{subchildcategory.subcategoryid}}</span>\r\n          </td>\r\n          <td>\r\n            <span (blur)=\"updateSubChildCategory(subchildcategory._id, 'subchildcategoryname', $event)\"\r\n              contenteditable=\"true\">{{subchildcategory.subchildcategoryname}}</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"table-remove\">\r\n              <button type=\"button\" mdbBtn color=\"danger\" rounded=\"true\" size=\"sm\" class=\"my-0\"\r\n                (click)=\"deleteSubChildCategory(subchildcategory._id)\">Remove</button>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <footer class=\"bdT ta-c p-30 lh-0 fsz-sm c-grey-600\">\r\n    <span>Copyright © 2019 Designed by <a href=\"#\" target='_blank' title=\"E-Classy\">Colorlib</a>. All rights reserved.</span>\r\n</footer> -->\r\n<footer class=\"sticky-footer bg-white\">\r\n    <div class=\"container my-auto\">\r\n      <div class=\"copyright text-center my-auto\">\r\n        <span>Copyright &copy; E-Classy &hearts;</span>\r\n      </div>\r\n    </div>\r\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n\r\n    <!-- Sidebar Toggle (Topbar) -->\r\n    <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n      <i class=\"fa fa-bars\"></i>\r\n    </button>\r\n\r\n    <!-- Topbar Navbar -->\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <div class=\"topbar-divider d-none d-sm-block\"></div>\r\n\r\n      <!-- Nav Item - User Information -->\r\n      <li class=\"nav-item dropdown no-arrow\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Admin</span>\r\n          <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\r\n        </a>\r\n        <!-- Dropdown - User Information -->\r\n        <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n            Profile\r\n          </a>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n            Settings\r\n          </a>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n            Activity Log\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\r\n            <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n            Logout\r\n          </a>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Home page</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-control.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-control.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal {{ modalSize }}\" [ngClass]=\"{ 'is-active': visible }\">\r\n  <div class=\"modal-background\" (click)=\"close('cancel', $event)\"></div>\r\n  <div class=\"modal-card\">\r\n    <div class=\"modal-card-head\">\r\n      <p class=\"modal-card-title\">{{title}}</p>\r\n      <button class=\"delete has-no-margin-top\" (click)=\"close('cancel', $event)\">X</button>\r\n    </div>\r\n    <section class=\"modal-card-body\">\r\n      <ng-content></ng-content>\r\n    </section>\r\n    <div class=\"modal-card-foot row\">\r\n      <div>\r\n        <button class=\"button is-cancel\" (click)=\"close('cancel', $event)\">{{cancelText}}</button>\r\n        <button class=\"button is-dark\" (click)=\"save('ok', $event)\">{{saveText}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" *ngIf=\"loading\">\r\n    <div id=\"loading-img\"></div>\r\n</div>\r\n<h2>WELCOME PRODUCTS PAGE</h2>\r\n<div class=\"form-group\">\r\n    <label for=\"categoryId\">Product Category:</label>\r\n    <select class=\"form-control\" (change)=\"getProducts($event)\" [(ngModel)]=\"categoryId\">\r\n        <option *ngFor=\"let data of categories\"\r\n        [value]=\"data._id\">{{data.categoryname}}\r\n        </option>\r\n    </select>\r\n</div>\r\n<div *ngIf=\"products.length\">\r\n    <div class=\"d-flex flex-wrap bg-light\">\r\n        <div class=\"p-2 border\" *ngFor=\"let data of products\">\r\n            <i class=\"fa fa-edit edit-icon icon\" (click)=\"openUpdateModal($event, data)\"></i>\r\n            <i class=\"fa fa-trash delete-icon icon\" aria-hidden=\"true\" (click)=\"openDeleteModal($event, data)\"></i>\r\n            <div><b>Titile:</b> {{data.title}}</div>\r\n            <div><b>Sub Title:</b> {{data.subtitle}}</div>\r\n            <div><b>Description:</b> {{data.description}}</div>\r\n            <div><b>Price:</b> {{data.price}}</div>\r\n            <div><b>Quantity:</b> {{data.quantity}}</div>\r\n            <div><b>Measurements:</b> {{data.measurements}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-control [open]=\"deleteProduct\" (close)=\"onDeleteModalClose($event)\" title=\"Delete Product\">\r\n    <div>\r\n      <p>Are you sure you want to delete this Product.</p>\r\n    </div>\r\n</modal-control>\r\n\r\n<modal-control [open]=\"updateProduct\" (close)=\"onUpdateModalClose($event)\" title=\"Update Product\">\r\n    <div>\r\n            <div class=\"form-group\">\r\n              <label for=\"title\">Product Title <span class=\"required\">*</span> :</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter Product Title\" name=\"title\" [(ngModel)]=\"title\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"subtitle\">Product Sub Title :</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"subtitle\" placeholder=\"Enter Product Sub Title\" name=\"subtitle\" [(ngModel)]=\"subtitle\">\r\n            </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"subcategoryid\">Product Sub Category <span class=\"required\">*</span> :</label>\r\n                <select class=\"form-control\" (change)=\"setSubCategory($event)\" [(ngModel)]=\"subcategoryid\" required>\r\n                    <option *ngFor=\"let data of subCategories\"\r\n                    value=\"{{data._id}}\">{{data.subcategoryname}}\r\n                    </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"price\">Product Price <span class=\"required\">*</span> :</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Enter Product Price\" name=\"price\" [(ngModel)]=\"price\" required>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"quantity\">Product Qunatity :</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Enter Product Quantity\" name=\"quantity\" [(ngModel)]=\"quantity\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"quantity\">Product Measurements :</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"measurements\" placeholder=\"Enter Product Measurements\" name=\"measurements\" [(ngModel)]=\"measurements\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"quantity\">Product Description <span class=\"required\">*</span> :</label>\r\n                <textarea type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Enter Product Description\" name=\"description\" [(ngModel)]=\"description\" required></textarea>\r\n              </div>\r\n    </div>\r\n</modal-control>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n\r\n    <!-- Sidebar - Brand -->\r\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"#\">\r\n      <div class=\"sidebar-brand-icon rotate-n-15\">\r\n        <i class=\"fas fa-laugh-wink\"></i>\r\n      </div>\r\n      <div class=\"sidebar-brand-text mx-3\">E-Classy</div>\r\n    </a>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider my-0\">\r\n\r\n    <!-- Nav Item - Dashboard -->\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" href=\"#\">\r\n        <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n        <span>Dashboard</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <div class=\"sidebar-heading\">\r\n      Profile\r\n    </div>\r\n\r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n        <i class=\"fas fa-fw fa-cog\"></i>\r\n        <span>Category Management</span>\r\n      </a>\r\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n        <div class=\"bg-white py-2 collapse-inner rounded\">\r\n          <a class=\"collapse-item\" routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a>\r\n          <a class=\"collapse-item\" routerLink=\"/subcategories\" routerLinkActive=\"active\">Sub Categories</a>\r\n          <a class=\"collapse-item\" routerLink=\"/childcategories\" routerLinkActive=\"active\">Sub Child Categories</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\r\n        <i class=\"fas fa-fw fa-cog\"></i>\r\n        <span>Product Management</span>\r\n      </a>\r\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionSidebar\">\r\n        <div class=\"bg-white py-2 collapse-inner rounded\">\r\n          <a class=\"collapse-item\" routerLink=\"/products\" routerLinkActive=\"active\">Products</a>\r\n          <a class=\"collapse-item\" routerLink=\"/addProducts\" routerLinkActive=\"active\">Add Product</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <div class=\"sidebar-heading\">\r\n      Addons\r\n    </div>\r\n\r\n    <!-- Nav Item - Pages Collapse Menu -->\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\r\n        <i class=\"fas fa-fw fa-wrench\"></i>\r\n        <span>Utilities</span>\r\n      </a>\r\n      <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n        <div class=\"bg-white py-2 collapse-inner rounded\">\r\n          <h6 class=\"collapse-header\">Custom Utilities:</h6>\r\n          <a class=\"collapse-item\" href=\"#\">Colors</a>\r\n          <a class=\"collapse-item\" href=\"#\">Borders</a>\r\n          <a class=\"collapse-item\" href=\"#\">Animations</a>\r\n          <a class=\"collapse-item\" href=\"#\">Other</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n\r\n    <!-- Nav Item - Charts -->\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">\r\n        <i class=\"fas fa-fw fa-chart-area\"></i>\r\n        <span>Charts</span></a>\r\n    </li>\r\n\r\n    <!-- Nav Item - Tables -->\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">\r\n        <i class=\"fas fa-fw fa-table\"></i>\r\n        <span>Tables</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider d-none d-md-block\">\r\n\r\n    <!-- Sidebar Toggler (Sidebar) -->\r\n    <!-- <div class=\"text-center d-none d-md-inline\">\r\n      <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n    </div> -->\r\n\r\n  </ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subCategory/sub-category.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subCategory/sub-category.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" *ngIf=\"loading\">\r\n  <div id=\"loading-img\"></div>\r\n</div>\r\n<h2>WELCOME SUB-CATEGORY PAGE</h2>\r\n<form id=\"subCategory\" fxLayout=\"column\" [formGroup]=\"subCategoryFormGroup\" class=\"example-form\"\r\n  (ngSubmit)=\"onFormSubmit()\">\r\n\r\n  <div class=\"input-row\">\r\n    <mat-form-field>\r\n      <select formControlName=\"categoryid\" (ngModelChange)=\"onCategorySelection(selectField.value)\" #selectField>\r\n        <option value=\"\">Select Category</option>\r\n        <option *ngFor=\"let category of categories\" value={{category._id}}>{{category.categoryname}}</option>\r\n      </select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"input-row\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Sub-Category Name\" formControlName=\"subcategoryname\" [errorStateMatcher]=\"matcher\"\r\n        required />\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"d-save-button d-buttons\">\r\n    <button mat-button class=\"mat-raised-button mat-button-base\" color=\"primary\"\r\n      [disabled]=\"!subCategoryFormGroup.valid\" type=\"submit\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n<div class=\"card\">\r\n  <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Editable table</h3>\r\n  <div class=\"card-body\">\r\n    <div id=\"table\" class=\"table-editable\">\r\n      <span class=\"table-add float-right mb-3 mr-2\">\r\n        <a class=\"text-success\" (click)=\"add()\">\r\n          <mdb-icon fas icon=\"plus\" size=\"2x\"></mdb-icon>\r\n        </a>\r\n      </span>\r\n      <table class=\"table table-bordered table-responsive-md table-striped text-center\">\r\n        <tr>\r\n          <th class=\"text-center\">Category Name</th>\r\n          <th class=\"text-center\">Sub-Category Name</th>\r\n          <th class=\"text-center\">Remove</th>\r\n        </tr>\r\n        <tr *ngFor=\"let subcategory of subcategories; let id = index\">\r\n          <td>\r\n            <span>{{subcategory.categoryid}}</span>\r\n          </td>\r\n          <td>\r\n            <span (blur)=\"updateSubCategory(subcategory._id, 'subcategoryname', $event)\"\r\n              contenteditable=\"true\">{{subcategory.subcategoryname}}</span>\r\n          </td>\r\n          <td>\r\n            <span class=\"table-remove\">\r\n              <button type=\"button\" mdbBtn color=\"danger\" rounded=\"true\" size=\"sm\" class=\"my-0\"\r\n                (click)=\"deleteSubCategory(subcategory._id)\">Remove</button>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/addProduct/addProduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addProduct/addProduct.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea:invalid {\r\n  border: 2px solid #bac8f3;\r\n}\r\n\r\ninput:invalid {\r\n  border: 2px solid #bac8f3;\r\n}\r\n\r\nselect:invalid {\r\n  border: 2px solid #bac8f3;\r\n}\r\n\r\n.required {\r\n  color: red;\r\n}\r\n\r\n.align-items-center {\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkUHJvZHVjdC9hZGRQcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZGRQcm9kdWN0L2FkZFByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhOmludmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYWM4ZjM7XHJcbn1cclxuXHJcbmlucHV0OmludmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYWM4ZjM7XHJcbn1cclxuXHJcbnNlbGVjdDppbnZhbGlkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYmFjOGYzO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/addProduct/addProduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addProduct/addProduct.component.ts ***!
  \****************************************************/
/*! exports provided: AddProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsComponent", function() { return AddProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let AddProductsComponent = class AddProductsComponent {
    constructor(categoryService, productService, toastrService) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.toastrService = toastrService;
        this.loading = false;
        this.categories = [];
        this.subCategories = [];
        this.subChildCategories = [];
    }
    ngOnInit() {
        this.loading = false;
        this.toastrService.success("Welcome to Add-Product Page");
        this.categoryService.getCategories().subscribe((res) => {
            this.categories = res.data;
        }, (err) => {
            console.log(err);
        });
        setTimeout(() => {
            this.loading = false;
        }, 2500);
    }
    setCategory(e) {
        this.categoryid = e.target.value;
        this.categoryService.getSubCategory(e.target.value).subscribe((res) => {
            this.subCategories = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    setSubCategory(e) {
        this.subcategoryid = e.target.value;
        this.categoryService.getSubChildCategory(e.target.value).subscribe((res) => {
            this.subChildCategories = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    setSubChildCategory(e) {
        this.subchildcategoryid = e.target.value;
    }
    submitForm() {
        const data = {
            "title": this.title,
            "subtitle": this.subtitle,
            "categoryid": this.categoryid,
            "subcategoryid": this.subcategoryid,
            "subchildcategoryid": this.subchildcategoryid,
            "price": this.price,
            "quantity": this.quantity,
            "measurements": this.measurements,
            "description": this.description
        };
        if (!this.title || !this.categoryid || !this.subcategoryid || !this.price || !this.description) {
            alert("Please fill out the required fields");
            return;
        }
        this.productService.addProduct(data).subscribe((res) => {
            console.log("response", res);
            this.toastrService.success("Added Product Sucessfully");
            this.title = undefined;
            this.subtitle = undefined;
            this.categoryid = undefined;
            this.subcategoryid = undefined;
            this.subchildcategoryid = undefined;
            this.price = undefined;
            this.quantity = undefined;
            this.measurements = undefined;
            this.description = undefined;
        }, (err) => {
            console.log(err);
            this.toastrService.error(err);
        });
    }
};
AddProductsComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AddProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addProduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addProduct/addProduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addProduct.component.css */ "./src/app/addProduct/addProduct.component.css")).default]
    })
], AddProductsComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\r\n    background: #4e73df;\r\n    background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0VBQWtFO0lBQ2xFLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRlNzNkZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzRlNzNkZiAxMCUsIzIyNGFiZSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _subCategory_sub_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subCategory/sub-category.component */ "./src/app/subCategory/sub-category.component.ts");
/* harmony import */ var _childCategory_sub_child_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./childCategory/sub-child-category.component */ "./src/app/childCategory/sub-child-category.component.ts");
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/product.component */ "./src/app/products/product.component.ts");
/* harmony import */ var _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./addProduct/addProduct.component */ "./src/app/addProduct/addProduct.component.ts");
/* harmony import */ var _modal_modal_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/modal-control.component */ "./src/app/modal/modal-control.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_subcategories_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/subcategories.service */ "./src/app/services/subcategories.service.ts");
/* harmony import */ var _services_subchildcategories_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/subchildcategories.service */ "./src/app/services/subchildcategories.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");

























const appRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: "categories", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"] },
    { path: "subcategories", component: _subCategory_sub_category_component__WEBPACK_IMPORTED_MODULE_13__["SubCategoriesComponent"] },
    { path: "childcategories", component: _childCategory_sub_child_category_component__WEBPACK_IMPORTED_MODULE_14__["SubChildCategoriesComponent"] },
    { path: "products", component: _products_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"] },
    { path: "addProducts", component: _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_16__["AddProductsComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _subCategory_sub_category_component__WEBPACK_IMPORTED_MODULE_13__["SubCategoriesComponent"],
            _childCategory_sub_child_category_component__WEBPACK_IMPORTED_MODULE_14__["SubChildCategoriesComponent"],
            _products_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"],
            _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_16__["AddProductsComponent"],
            _modal_modal_control_component__WEBPACK_IMPORTED_MODULE_17__["ModalControlComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                positionClass: "toast-bottom-right",
                timeOut: 0,
                closeButton: true // show close button
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastContainerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"]
        ],
        providers: [
            _services_categories_service__WEBPACK_IMPORTED_MODULE_19__["CategoryService"],
            _services_subcategories_service__WEBPACK_IMPORTED_MODULE_20__["SubCategoryService"],
            _services_subchildcategories_service__WEBPACK_IMPORTED_MODULE_21__["SubChildCategoryService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_22__["ProductsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-save-button {\r\n    display: inline !important;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtc2F2ZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: MyErrorStateMatcher, CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
let CategoriesComponent = class CategoriesComponent {
    constructor(_formBuilder, api, toastrService) {
        this._formBuilder = _formBuilder;
        this.api = api;
        this.toastrService = toastrService;
        this.matcher = new MyErrorStateMatcher();
        this.loading = false;
        this.isLoadingResults = false;
    }
    ngOnInit() {
        console.log("categories", this.api.getCategories());
        this.loadCategories();
        this.loginFormGroup = this._formBuilder.group({
            categoryname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loading = false;
        this.toastrService.success("Welcome to Category Page");
        setTimeout(() => {
            this.loading = false;
        }, 2500);
    }
    deleteCategory(id) {
        this.api.deleteCategory(id).subscribe(res => {
            console.log("category deleted successfully");
            this.loadCategories();
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    updateCategory(id, property, event) {
        console.log("id", id, "event", event);
        const editField = event.target.textContent;
        this.api.updateCategory(id, property, editField).subscribe((res) => {
            const id = res._id;
            console.log("id", id);
            console.log("category updated successfully");
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addCategory(this.loginFormGroup.value).subscribe((res) => {
            const id = res._id;
            console.log("id", id);
            this.isLoadingResults = false;
            this.loadCategories();
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    loadCategories() {
        this.api.getCategories().subscribe((res) => {
            console.log("sub categiries list", res);
            const id = res._id;
            this.categories = res.data;
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-categories",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")).default]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/childCategory/sub-child-category.component.css":
/*!****************************************************************!*\
  !*** ./src/app/childCategory/sub-child-category.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaWxkQ2F0ZWdvcnkvc3ViLWNoaWxkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/childCategory/sub-child-category.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/childCategory/sub-child-category.component.ts ***!
  \***************************************************************/
/*! exports provided: MyErrorStateMatcher, SubChildCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubChildCategoriesComponent", function() { return SubChildCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subchildcategories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subchildcategories.service */ "./src/app/services/subchildcategories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
let SubChildCategoriesComponent = class SubChildCategoriesComponent {
    constructor(_formBuilder, api, toastrService) {
        this._formBuilder = _formBuilder;
        this.api = api;
        this.toastrService = toastrService;
        this.matcher = new MyErrorStateMatcher();
        this.loading = false;
        this.isLoadingResults = false;
    }
    ngOnInit() {
        this.loadCategories();
        this.subChildCategoryFormGroup = this._formBuilder.group({
            categoryid: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subcategoryid: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subchildcategoryname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loading = false;
        this.toastrService.success("Welcome to Sub-Category Page");
        setTimeout(() => {
            this.loading = false;
        }, 2500);
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api
            .addSubChildCategory(this.subChildCategoryFormGroup.value)
            .subscribe((res) => {
            const id = res._id;
            console.log("respose ", res);
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    onCategorySelection(categoryId) {
        this.selectedSubCategory = categoryId;
        this.loadSubCategories(categoryId);
    }
    onSubCategorySelection(subcategoryid) {
        this.selectedSubChildCategory = subcategoryid;
        this.loadSubChildCategories(subcategoryid);
    }
    updateSubChildCategory(id, property, event) {
        console.log("id", id, "event", event);
        const editField = event.target.textContent;
        this.api.updateSubChildCategory(id, property, editField).subscribe((res) => {
            const id = res._id;
            console.log("id", id);
            console.log("sub child category updated successfully");
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    deleteSubChildCategory(id) {
        this.api.deleteSubChildCategory(id).subscribe(res => {
            console.log("sub child category deleted successfully");
            this.loadSubChildCategories(this.selectedSubChildCategory);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    loadCategories() {
        this.api.getCategories().subscribe((res) => {
            console.log("categories response", res);
            const id = res._id;
            this.categories = res.data;
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    loadSubCategories(categoryId) {
        this.api.getSubCategories(categoryId).subscribe((res) => {
            console.log("subcategories list response", res);
            const id = res._id;
            this.subcategories = res.data;
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    loadSubChildCategories(subcategoryid) {
        this.api.getSubChildCategories(subcategoryid).subscribe((res) => {
            console.log("subcategories list response", res);
            const id = res._id;
            this.subchildcategories = res.data;
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
SubChildCategoriesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_subchildcategories_service__WEBPACK_IMPORTED_MODULE_2__["SubChildCategoryService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
SubChildCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sub-child-categories",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-child-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/childCategory/sub-child-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-child-category.component.css */ "./src/app/childCategory/sub-child-category.component.css")).default]
    })
], SubChildCategoriesComponent);



/***/ }),

/***/ "./src/app/config/globals.ts":
/*!***********************************!*\
  !*** ./src/app/config/globals.ts ***!
  \***********************************/
/*! exports provided: globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var globals = {
    //dbhosturl: "http://localhost:3000/api/v1/"
    dbhosturl: "https://e-classy.herokuapp.com/api/v1/"
};


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modal/modal-control.component.css":
/*!***************************************************!*\
  !*** ./src/app/modal/modal-control.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWNvbnRyb2wuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modal/modal-control.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modal/modal-control.component.ts ***!
  \**************************************************/
/*! exports provided: ModalControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalControlComponent", function() { return ModalControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalControlComponent = class ModalControlComponent {
    constructor() {
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = '';
        this.saveText = 'Ok';
        this.errorCount = true;
        this.cancelText = 'Cancel';
        this.visible = false;
        this.save = this.close;
        this.modalSize = '';
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tick_then(fn) {
        setTimeout(fn, 0);
    }
    ngOnInit() {
        this.openEvent.subscribe(initiator => {
            this.visible = !!initiator; // TODO revisit this
            this.initiator = initiator;
        });
    }
    close(action, event) {
        if (action == 'ok') {
            this.closeEvent.emit({ action: 'closing', initiator: event });
        }
        if (action == 'yes') {
            this.visible = false;
            this.closeEvent.emit({ action: action, initiator: this.initiator });
        }
        if (event.defaultPrevented) {
            return;
        }
        this.visible = false;
        this.closeEvent.emit({ action: action, initiator: this.initiator });
    }
    toggleVisiblity() {
        this.visible = !this.visible;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('open')
], ModalControlComponent.prototype, "openEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')
], ModalControlComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('saveText')
], ModalControlComponent.prototype, "saveText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('errorCount')
], ModalControlComponent.prototype, "errorCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cancelText')
], ModalControlComponent.prototype, "cancelText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('visible')
], ModalControlComponent.prototype, "visible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('save')
], ModalControlComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('modalSize')
], ModalControlComponent.prototype, "modalSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('close')
], ModalControlComponent.prototype, "closeEvent", void 0);
ModalControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modal-control',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-control.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-control.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-control.component.css */ "./src/app/modal/modal-control.component.css")).default]
    })
], ModalControlComponent);



/***/ }),

/***/ "./src/app/products/product.component.css":
/*!************************************************!*\
  !*** ./src/app/products/product.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-flex {\r\n    justify-content: space-between;\r\n}\r\n.p-2 {\r\n    margin-bottom: 20px;\r\n    width: 300px;\r\n    background: white;\r\n    box-shadow: 1px 1px #ccc;\r\n}\r\n.p-2 div {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.icon {\r\n    float: right;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n.edit-icon {\r\n    color: deepskyblue;\r\n}\r\n.delete-icon {\r\n    color: crimson;\r\n}\r\n.required {\r\n    color: red;\r\n  }\r\ntextarea:invalid {\r\n    border: 2px solid #bac8f3;\r\n  }\r\ninput:invalid {\r\n    border: 2px solid #bac8f3;\r\n  }\r\nselect:invalid {\r\n    border: 2px solid #bac8f3;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksVUFBVTtFQUNaO0FBRUY7SUFDSSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnAtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4ICNjY2M7XHJcbn1cclxuLnAtMiBkaXYge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWljb24ge1xyXG4gICAgY29sb3I6IGRlZXBza3libHVlO1xyXG59XHJcblxyXG4uZGVsZXRlLWljb24ge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbnRleHRhcmVhOmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JhYzhmMztcclxuICB9XHJcblxyXG4gIGlucHV0OmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JhYzhmMztcclxuICB9XHJcblxyXG4gIHNlbGVjdDppbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiYWM4ZjM7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/products/product.component.ts":
/*!***********************************************!*\
  !*** ./src/app/products/product.component.ts ***!
  \***********************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ProductsComponent = class ProductsComponent {
    constructor(productService, categoryService, toastrService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.toastrService = toastrService;
        this.loading = false;
        this.categories = [];
        this.subCategories = [];
        this.products = [];
        this.updateProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.loading = true;
        this.toastrService.success("Welcome to Products Page");
        this.categoryService.getCategories().subscribe((res) => {
            this.categories = res.data;
        }, (err) => {
            console.log(err);
        });
        setTimeout(() => {
            this.loading = false;
        }, 2500);
    }
    getProducts(e) {
        let categoryid = e.target.value;
        this.productService.getProducts(categoryid).subscribe((res) => {
            this.products = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    getSubCategory(id) {
        this.categoryService.getSubCategory(id).subscribe((res) => {
            this.subCategories = res.data;
        }, (err) => {
            console.log(err);
        });
    }
    updateProductFun() {
        let updatedProduct = {
            "title": this.title,
            "subtitle": this.subtitle,
            "categoryid": this.categoryid,
            "subcategoryid": this.subcategoryid,
            "price": this.price,
            "quantity": this.quantity,
            "measurements": this.measurements,
            "description": this.description
        };
        if (!this.title || !this.categoryid || !this.subcategoryid || !this.price || !this.description) {
            alert("Please fill out the required fields");
            return;
        }
        this.productService.updateProduct(this.productId, updatedProduct).subscribe((res) => {
            this.toastrService.success("Product Updated Successfully");
            let result = this.products.filter(function (data) {
                return (data._id == this.productId && data.categoryid == this.categoryId);
            });
            this.products = result;
        }, (err) => {
            console.log(err);
            this.toastrService.error(err);
        });
    }
    deleteProductFun() {
        this.productService.deleteProduct(this.productId).subscribe((res) => {
            this.toastrService.success("Product Deleted Successfully");
            let result = this.products.filter(function (data) {
                return data._id != this.productId;
            });
            this.products = result;
        }, (err) => {
            console.log(err);
            this.toastrService.error(err);
        });
    }
    openUpdateModal(e, data) {
        this.updateProduct.emit(new Event('open'));
        if (data.categoryid) {
            this.getSubCategory(data.categoryid);
        }
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.categoryid = data.categoryid;
        this.subcategoryid = data.subcategoryid;
        this.price = data.price;
        this.quantity = data.quantity;
        this.measurements = data.measurements;
        this.description = data.description;
    }
    openDeleteModal(e, data) {
        this.deleteProduct.emit(new Event('open'));
        this.productId = data._id;
    }
    onUpdateModalClose(result) {
        if (result.action == 'cancel') {
            return;
        }
        if (result.action != 'closing') {
            this.updateProductFun();
        }
    }
    onDeleteModalClose(result) {
        if (result.action == 'cancel') {
            return;
        }
        if (result.action != 'closing') {
            this.deleteProductFun();
        }
    }
    setSubCategory(e) {
        this.subcategoryid = e.target.value;
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/products/product.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/globals */ "./src/app/config/globals.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = _config_globals__WEBPACK_IMPORTED_MODULE_3__["globals"].dbhosturl;
    }
    getCategories() {
        return this.http.get(this.serviceUrl + "admin/categories").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched Categories")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getCategories", [])));
    }
    getSubCategory(id) {
        return this.http.get(this.serviceUrl + "admin/subcategories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched Category")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getCategory", [])));
    }
    getSubChildCategory(id) {
        return this.http.get(this.serviceUrl + "admin/subchildcategories/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched Sub Child Category")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getSubChildCategory", [])));
    }
    addCategory(category) {
        return this.http
            .post(this.serviceUrl + "admin/categories", category)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((prod) => console.log(`added category w/ id=${category.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("addCategory")));
    }
    updateCategory(id, categoryname, value) {
        const url = `${this.serviceUrl + "admin/categories"}/${id}`;
        const data = { categoryname: value };
        return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`updated category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateCategory")));
    }
    deleteCategory(id) {
        const url = `${this.serviceUrl + "admin/categories"}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`deleted category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("deleteCategory")));
    }
    handleError(operation = "operation", result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CategoryService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/globals */ "./src/app/config/globals.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let ProductsService = class ProductsService {
    constructor(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.serviceUrl = _config_globals__WEBPACK_IMPORTED_MODULE_3__["globals"].dbhosturl;
    }
    getProducts(id) {
        return this.http.post(this.serviceUrl + "admin/getproducts", id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((prod) => console.log(`Fetch Products Successefully`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("Fetch Products")));
    }
    handleError(operation = "operation", result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    addProduct(product) {
        return this.http
            .post(this.serviceUrl + "admin/products", product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((prod) => console.log(`Added Product Successefully`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("addProduct")));
    }
    deleteProduct(id) {
        const url = `${this.serviceUrl + "admin/products"}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`deleted product id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("deleteProduct")));
    }
    updateProduct(id, data) {
        const url = `${this.serviceUrl + "admin/products"}/${id}`;
        return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`updated product id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateProduct")));
    }
    log(message) {
        console.log(message);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductsService);



/***/ }),

/***/ "./src/app/services/subcategories.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/subcategories.service.ts ***!
  \***************************************************/
/*! exports provided: SubCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryService", function() { return SubCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/globals */ "./src/app/config/globals.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SubCategoryService = class SubCategoryService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = _config_globals__WEBPACK_IMPORTED_MODULE_3__["globals"].dbhosturl;
    }
    getCategories() {
        return this.http.get(this.serviceUrl + "admin/categories").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched Categories")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getCategories", [])));
    }
    getSubCategories(id) {
        return this.http
            .get(this.serviceUrl + "admin/subcategories/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched sub Categories")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getSubCategories", [])));
    }
    addSubCategory(category) {
        return this.http
            .post(this.serviceUrl + "admin/subcategories", category)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((prod) => console.log(`added category w/ id=${category.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("addCategory")));
    }
    updateSubCategory(id, categoryname, value) {
        const url = `${this.serviceUrl + "admin/subcategories"}/${id}`;
        const data = { subcategoryname: value };
        return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`updated category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateCategory")));
    }
    deleteSubCategory(id) {
        const url = `${this.serviceUrl + "admin/subcategories"}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`deleted sub category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("deleteCategory")));
    }
    handleError(operation = "operation", result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
SubCategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SubCategoryService);



/***/ }),

/***/ "./src/app/services/subchildcategories.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/subchildcategories.service.ts ***!
  \********************************************************/
/*! exports provided: SubChildCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubChildCategoryService", function() { return SubChildCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/globals */ "./src/app/config/globals.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SubChildCategoryService = class SubChildCategoryService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = _config_globals__WEBPACK_IMPORTED_MODULE_3__["globals"].dbhosturl;
    }
    getCategories() {
        return this.http.get(this.serviceUrl + "admin/categories").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched Categories")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getCategories", [])));
    }
    getSubCategories(id) {
        return this.http
            .get(this.serviceUrl + "admin/subcategories/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched sub Categories")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getSubCategories", [])));
    }
    getSubChildCategories(id) {
        return this.http
            .get(this.serviceUrl + "admin/subchildcategories/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log("fetched sub child Categories")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getSubChildCategories", [])));
    }
    addSubChildCategory(category) {
        return this.http
            .post(this.serviceUrl + "admin/subchildcategories", category)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((prod) => console.log(`added category w/ id=${category.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("addCategory")));
    }
    updateSubChildCategory(id, categoryname, value) {
        const url = `${this.serviceUrl + "admin/subchildcategories"}/${id}`;
        const data = { subchildcategoryname: value };
        return this.http.put(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`updated sub child category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("updateCategory")));
    }
    deleteSubChildCategory(id) {
        const url = `${this.serviceUrl + "admin/subchildcategories"}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => console.log(`deleted sub child category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("deleteCategory")));
    }
    handleError(operation = "operation", result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
SubChildCategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubChildCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SubChildCategoryService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/subCategory/sub-category.component.css":
/*!********************************************************!*\
  !*** ./src/app/subCategory/sub-category.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media all and (min-width: 768px) {\r\n    tr  {\r\n      td {\r\n        vertical-align: middle !important;\r\n      }\r\n      span {\r\n        &:not([class]) {\r\n          padding: 1rem 1rem;\r\n        }\r\n      }\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViQ2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFO1FBQ0UsaUNBQWlDO01BQ25DO01BQ0E7UUFDRTtVQUNFLGtCQUFrQjtRQUNwQjtNQUNGO0lBQ0Y7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3N1YkNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHRyICB7XHJcbiAgICAgIHRkIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgJjpub3QoW2NsYXNzXSkge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/subCategory/sub-category.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/subCategory/sub-category.component.ts ***!
  \*******************************************************/
/*! exports provided: MyErrorStateMatcher, SubCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoriesComponent", function() { return SubCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subcategories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subcategories.service */ "./src/app/services/subcategories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
let SubCategoriesComponent = class SubCategoriesComponent {
    constructor(_formBuilder, api, toastrService) {
        this._formBuilder = _formBuilder;
        this.api = api;
        this.toastrService = toastrService;
        this.matcher = new MyErrorStateMatcher();
        this.loading = false;
        this.isLoadingResults = false;
    }
    ngOnInit() {
        console.log("categories", this.api.getCategories());
        this.loadCategories();
        this.subCategoryFormGroup = this._formBuilder.group({
            categoryid: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subcategoryname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loading = false;
        this.toastrService.success("Welcome to Sub-Category Page");
        setTimeout(() => {
            this.loading = false;
        }, 2500);
    }
    changeValue(id, property, event) {
        this.editField = event.target.textContent;
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addSubCategory(this.subCategoryFormGroup.value).subscribe((res) => {
            const id = res._id;
            console.log("respose ", res);
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    onCategorySelection(categoryId) {
        console.log("am here", categoryId);
        this.selectedSubCategory = categoryId;
        this.loadSubCategories(categoryId);
    }
    updateSubCategory(id, property, event) {
        console.log("id", id, "event", event);
        const editField = event.target.textContent;
        this.api.updateSubCategory(id, property, editField).subscribe((res) => {
            const id = res._id;
            console.log("id", id);
            console.log("sub category updated successfully");
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    deleteSubCategory(id) {
        this.api.deleteSubCategory(id).subscribe(res => {
            console.log("category deleted successfully");
            this.loadSubCategories(this.selectedSubCategory);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    loadCategories() {
        this.api.getCategories().subscribe((res) => {
            console.log("response", res);
            const id = res._id;
            this.categories = res.data;
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    loadSubCategories(categoryId) {
        this.api.getSubCategories(categoryId).subscribe((res) => {
            console.log("subcategories list response", res);
            const id = res._id;
            this.subcategories = res.data;
            this.isLoadingResults = false;
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
SubCategoriesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_subcategories_service__WEBPACK_IMPORTED_MODULE_2__["SubCategoryService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
SubCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sub-categories",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subCategory/sub-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-category.component.css */ "./src/app/subCategory/sub-category.component.css")).default]
    })
], SubCategoriesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Venkatesh_Adigicherla\Projects\e-classy\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);