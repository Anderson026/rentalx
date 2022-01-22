// importando o container de tsyringe
import { container } from "tsyringe";

import { ICategoriesrepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificatiosRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';


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

// registrando o ingetor de dependências da classe de usuário
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

// registrando o ingetor de dependências da classe de carros
container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
)