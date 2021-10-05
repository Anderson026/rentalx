// importando o router do express
import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// instanciando o objeto do repositório de categorias para poder inserir os dados no array
const categoriesRepository = new CategoriesRepository();
// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  // recebendo as informações de request.body
  const { name, description } = request.body;
  // instanciando o serviço de cadastro de categorias
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  // executando o método para criar a categoria
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});
// rota com a lista de categorias
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
})
// exportando a rota de categories
export { categoriesRoutes };
