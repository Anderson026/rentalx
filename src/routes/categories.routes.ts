// importando o router do express
import { Router } from "express";
import { Category } from "./model/Category";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();

// criando um array como banco de dados para testes da rota
const categories: Category[] = [];

// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  // recebendo as informações de request.body
  const { name, description } = request.body;

  // criando um objeto de category
  const category = new Category();
  // atribuindo os dados em um novo objeto
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

// exportando a rota de categories
export { categoriesRoutes };
