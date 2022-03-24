"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importando o container de tsyringe
var tsyringe_1 = require("tsyringe");
require("@shared/container/providers");
var CategoriesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CategoriesRepository");
var SpecificationsRepository_1 = require("@modules/cars/infra/typeorm/repositories/SpecificationsRepository");
var UsersRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UsersRepository");
var CarsRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsRepository");
var CarsImagesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsImagesRepository");
var RentalsRepository_1 = require("@modules/rentals/infra/typeorm/respositories/RentalsRepository");
var UsersTokensRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UsersTokensRepository");
// registtrando o singleton para poder usar como ingetor da dependências das classe e suas interfaces
tsyringe_1.container.registerSingleton(
// definindo o nome para o singleton
"Categoriesrepository", CategoriesRepository_1.CategoriesRepository);
// registrando o ingetor de dependências das classes de specifications
tsyringe_1.container.registerSingleton("SpecificationsRepository", SpecificationsRepository_1.SpecificationsRepository);
// registrando o ingetor de dependências da classe de usuário
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
// registrando o ingetor de dependências da classe de carros
tsyringe_1.container.registerSingleton("CarsRepository", CarsRepository_1.CarsRepository);
// registrando o ingetor de dependências da classe de images
tsyringe_1.container.registerSingleton("CarsImagesRepository", CarsImagesRepository_1.CarsImagesRepository);
// registrando o ingetor de dependência da classe de alugueis
tsyringe_1.container.registerSingleton("RentalsRepository", RentalsRepository_1.RentalsRepository);
// registrando o ingetor de dependência da classe de usersTokens
tsyringe_1.container.registerSingleton("UsersTokensRepository", UsersTokensRepository_1.UsersTokensRepository);
