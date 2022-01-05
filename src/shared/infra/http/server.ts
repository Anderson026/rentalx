import "reflect-metadata";
// importando o express
import  express, { NextFunction, Request, Response }  from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
// importando o banco de dados
import "@shared/infra/typeorm";

import { AppError } from "@shared/errors/AppError";
import { router } from "./routes";
// importando o arquivo de configuração do swagger
import swaggerFile from "../../../swagger.json";
// importando o container
import "@shared/container";
// armazenando o express dentro de uma variável
const app = express();

// configurando o express para receber dados no formato json
app.use(express.json());
// configurando o swagger para criar a documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// importando as rotas
app.use(router);
// criando um middleware para tratar os erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
});

// definindo a rota de aplicação
app.listen(3333, () => console.log("Server is running!"));