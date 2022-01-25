// importando o router do express
import { Router } from "express";
// importando o multer
import multer from "multer";
// importando as regras de negócio para as rotas
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// instanciando o multer e configurando a pasta de destino das imagens
const upload = multer({
  dest: "./tmp",
});
// instanciando o controller de create categories
const createCategoryController = new CreateCategoryController();
// instanciando o controller de import categories
const importCategoryController = new ImportCategoryController();
// instanciando o controller de list categories
const listCategoriesController = new ListCategoriesController();
// criando a rota de post
categoriesRoutes.post("/", ensureAuthenticated, ensureAdmin, createCategoryController.handle);
// rota com a lista de categorias
categoriesRoutes.get("/", listCategoriesController.handle);
// rota para enviar as imagens dos veículos
categoriesRoutes.post("/import", upload.single("file"), ensureAuthenticated, ensureAdmin, importCategoryController.handle);
// exportando a rota de categories
export { categoriesRoutes };
