import "reflect-metadata";
import "dotenv/config";
import upload from "@config/upload";
// importando o express
import  express, { NextFunction, Request, Response }  from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
// importando o banco de dados
import createConnection from  "@shared/infra/typeorm";

import { AppError } from "@shared/errors/AppError";
import { router } from "./routes";
// importando o arquivo de configuração do swagger
import swaggerFile from "../../../swagger.json";
// importando o container
import "@shared/container";
import cors from "cors";
import rateLimiter from "@shared/infra/http/middlewares/rateLimiter";

// faz a chamada do banco de dados
createConnection();

// armazenando o express dentro de uma variável
const app = express();

app.use(rateLimiter);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// configurando o express para receber dados no formato json
app.use(express.json());

// configurando o swagger para criar a documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// fazendo a leitura dos arquivos estáticos
app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use("/cars", express.static(`${upload.tmpFolder}/cars`));

app.use(cors({}));
// importando as rotas
app.use(router);

app.use(Sentry.Handlers.errorHandler());

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

export { app };