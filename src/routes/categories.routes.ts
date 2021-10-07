// importando o router do express
import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// instanciando o objeto do repositório de categorias para poder inserir os dados no array
const categoriesRepository = new CategoriesRepository();
// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});
// rota com a lista de categorias
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
})
// exportando a rota de categories
export { categoriesRoutes };
