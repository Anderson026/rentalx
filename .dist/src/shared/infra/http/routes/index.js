"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// importando o router do express
var express_1 = require("express");
var authenticate_routes_1 = require("./authenticate.routes");
var cars_routes_1 = require("./cars.routes");
var categories_routes_1 = require("./categories.routes");
var password_routes_1 = require("./password.routes");
var rental_routes_1 = require("./rental.routes");
var specifications_roustes_1 = require("./specifications.roustes");
var users_routes_1 = require("./users.routes");
// instanciando o router dentro de uma variável
var router = (0, express_1.Router)();
exports.router = router;
// utilizando a rota de cadastro de categorias
router.use("/categories", categories_routes_1.categoriesRoutes);
// utilizando a rota de cadsatro de usuários
router.use("/users", users_routes_1.usersRoutes);
//rota para envio de dados de cadastro de carros
router.use("/cars", cars_routes_1.carsRoutes);
// rota para envio de dados de cadastro de alugueis
router.use("/rentals", rental_routes_1.rentalRoutes);
// rota para envio de refresh token
router.use("/password", password_routes_1.passwordRoutes);
// utilizando a rota de sessão
router.use(authenticate_routes_1.authenticateRoutes);
// utilizando a rota de cadastro de especificações de veículos
router.use("/specifications", specifications_roustes_1.specificationsRoutes);
