// importando o router do express
import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});
// rota com a lista de categorias
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
})
// exportando a rota de categories
export { categoriesRoutes };
