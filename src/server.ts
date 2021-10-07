// importando o express
import  express  from "express";

// importando a rota de cadastro de categorias
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.roustes";

// armazenando o express dentro de uma variável
const app = express();

// configurando o express para receber dados no formato json
app.use(express.json());

// utilizando a rota de cadastro de categorias
app.use("/categories", categoriesRoutes);
// utilizando a rota de cadastro de especificações de veículos
app.use("/specifications", specificationsRoutes);

// definindo a rota de aplicação
app.listen(3333, () => console.log("Server is running!"));