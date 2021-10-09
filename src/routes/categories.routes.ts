// importando o router do express
import { Router } from "express";
// importando o multer
import multer from "multer";
// importando as regras de negócio para as rotas
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// instanciando o multer e configurando a pasta de destino das imagens
const upload = multer({
  dest: "./tmp",
});
// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});
// rota com a lista de categorias
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});
// rota para enviar as imagens dos veículos
categoriesRoutes.post("/import", upload.single("file") , (request, response) => {
  return importCategoryController.handle(request, response);
});
// exportando a rota de categories
export { categoriesRoutes };
