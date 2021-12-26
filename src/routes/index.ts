// importando o router do express
import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { specificationsRoutes } from "./specifications.roustes";
import { categoriesRoutes } from "./categories.routes";
// instanciando o router dentro de uma variável
const router = Router();

// utilizando a rota de cadastro de categorias
router.use("/categories", categoriesRoutes);
// utilizando a rota de cadsatro de usuários
router.use("/users", usersRoutes);
// utilizando a rota de sessão
router.use(authenticateRoutes);
// utilizando a rota de cadastro de especificações de veículos
router.use("/specifications", specificationsRoutes);
// exportando as rotas
export { router };