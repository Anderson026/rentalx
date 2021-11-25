// importando o express
import  express  from "express";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
// importando o arquivo de configuração do swagger
import swaggerFile from "./swagger.json";
// importando o container
import "./shared/container";
// importando o banco de dados
import "./database";
// armazenando o express dentro de uma variável
const app = express();

// configurando o express para receber dados no formato json
app.use(express.json());
// configurando o swagger para criar a documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// importando as rotas
app.use(router);

// definindo a rota de aplicação
app.listen(3333, () => console.log("Server is running!"));