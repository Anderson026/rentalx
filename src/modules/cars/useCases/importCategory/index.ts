import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
// instanciando o repositório de categorias
const categoriesRepository = CategoriesRepository.getInstance();
// instanciando o caso de uso
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
// instanciando o controller
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };