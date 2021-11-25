// importando o container de tsyringe
import { container } from "tsyringe";
import { ICategoriesrepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";


// registtrando o singleton para poder usário como ingetor da dependências das classe e suas interfaces
container.registerSingleton<ICategoriesrepository>(
  // definindo o nome para o singleton
  "Categoriesrepository",
  CategoriesRepository
)