// importando o container de tsyringe
import { container } from "tsyringe";
import { ICategoriesrepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificatiosRepository";


// registtrando o singleton para poder usar como ingetor da dependências das classe e suas interfaces
container.registerSingleton<ICategoriesrepository>(
  // definindo o nome para o singleton
  "Categoriesrepository",
  CategoriesRepository
)
// registrando o ingetor de dependências das classes de specifications
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)
