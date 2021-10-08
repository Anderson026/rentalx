import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

// instanciando o repositorio da lista de categorias
const categoriesRepository = new CategoriesRepository();
// instanciando os casos de uso da lista de categorias
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
// instanciando os controllers da lista de categorias
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
