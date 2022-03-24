"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
// importando o router do express
var express_1 = require("express");
// importando o multer
var multer_1 = __importDefault(require("multer"));
// importando as regras de negócio para as rotas
var CreateCategoryController_1 = require("@modules/cars/useCases/createCategory/CreateCategoryController");
var ImportCategoryController_1 = require("@modules/cars/useCases/importCategory/ImportCategoryController");
var ListCategoriesController_1 = require("@modules/cars/useCases/listCategories/ListCategoriesController");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
// criando uma constante de categoriesRoutes
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
// instanciando o multer e configurando a pasta de destino das imagens
var upload = (0, multer_1.default)({
    dest: "./tmp",
});
// instanciando o controller de create categories
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
// instanciando o controller de import categories
var importCategoryController = new ImportCategoryController_1.ImportCategoryController();
// instanciando o controller de list categories
var listCategoriesController = new ListCategoriesController_1.ListCategoriesController();
// criando a rota de post
categoriesRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCategoryController.handle);
// rota com a lista de categorias
categoriesRoutes.get("/", listCategoriesController.handle);
// rota para enviar as imagens dos veículos
categoriesRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, importCategoryController.handle);
