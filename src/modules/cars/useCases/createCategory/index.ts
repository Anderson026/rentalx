import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// instanciando o repositório de categorias
const categoriesRepository = CategoriesRepository.getInstance();
// instanciando o caso de uso do controller da categoria
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
// instanciando o controller de categorias
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }