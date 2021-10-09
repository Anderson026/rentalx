import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
// instanciando o caso de uso
const importCategoryUseCase = new ImportCategoryUseCase();
// instanciando o controller
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };