// importando o express
import  express  from "express";
import { router } from "./routes";

// armazenando o express dentro de uma variável
const app = express();

// configurando o express para receber dados no formato json
app.use(express.json());
// importando as rotas
app.use(router);

// definindo a rota de aplicação
app.listen(3333, () => console.log("Server is running!"));