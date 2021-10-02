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
  // importa o método para localizar o nome da categoria
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  // verifica se a categoria existe
  if(categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already Exists!" });
  };

  categoriesRepository.create({ name, description })

  return response.status(201).send();
});
// rota com a lista de categorias
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
})
// exportando a rota de categories
export { categoriesRoutes };
