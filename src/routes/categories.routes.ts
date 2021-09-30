// importando o router do express
import { Router } from "express";
// importando a lib uuid para gerar ids
import { v4 as uuidV4 } from "uuid";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();

// criando um array como banco de dados para testes da rota
const categories = [];

// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  // recebendo as informações de request.body
  const { name, description } = request.body;

  // criando um objeto de category
  const category = {
    id: uuidV4(),
    name,
    description,
  }

  categories.push(category);

  return response.status(201).send();
});

// exportando a rota de categories
export { categoriesRoutes };
