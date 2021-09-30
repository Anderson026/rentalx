// importando o router do express
import { Router } from "express";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();

// criando um array como banco de dados para testes da rota
const categories = [];

// criando a rota de post
categoriesRoutes.post("/categories", (request, response) => {
  // recebendo as informações de request.body
  const { name, description } = request.body;

  categories.push({
    name,
    description
  });

  return response.status(201).send();
});

// exportando a rota de categories
export { categoriesRoutes };
