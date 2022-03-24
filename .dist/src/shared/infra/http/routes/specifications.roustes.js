"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
// importando o router do express
var CreateSpecificationController_1 = require("@modules/cars/useCases/createSpecification/CreateSpecificationController");
var express_1 = require("express");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
// armazenando o router em uma variável
var specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
// instanciando o controller de specifications
var createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
// rota para verificar se o token do usuário é valido
// criando a rota de cadastro de especificações do veículo
specificationsRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createSpecificationController.handle);
