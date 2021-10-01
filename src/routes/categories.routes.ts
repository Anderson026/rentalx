// importando o router do express
import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// instanciando o objeto do repositório de categorias para poder inserir os dados no array
const categoriesRepository = new CategoriesRepository();
// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  // recebendo as informações de request.body
  const { name, description } = request.body;

  categoriesRepository.create({ name, description })

  return response.status(201).send();
});

// exportando a rota de categories
export { categoriesRoutes };
