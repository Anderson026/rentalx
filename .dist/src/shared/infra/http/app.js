"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
require("dotenv/config");
var upload_1 = __importDefault(require("@config/upload"));
// importando o express
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// importando o banco de dados
var typeorm_1 = __importDefault(require("@shared/infra/typeorm"));
var AppError_1 = require("@shared/errors/AppError");
var routes_1 = require("./routes");
// importando o arquivo de configuração do swagger
var swagger_json_1 = __importDefault(require("../../../swagger.json"));
// importando o container
require("@shared/container");
// faz a chamada do banco de dados
(0, typeorm_1.default)();
// armazenando o express dentro de uma variável
var app = (0, express_1.default)();
exports.app = app;
// configurando o express para receber dados no formato json
app.use(express_1.default.json());
// configurando o swagger para criar a documentação
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
// fazendo a leitura dos arquivos estáticos
app.use("/avatar", express_1.default.static(upload_1.default.tmpFolder + "/avatar"));
app.use("/cars", express_1.default.static(upload_1.default.tmpFolder + "/cars"));
// importando as rotas
app.use(routes_1.router);
// criando um middleware para tratar os erros
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - " + err.message
    });
});
