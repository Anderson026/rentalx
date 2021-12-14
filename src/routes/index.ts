// importando o router do express
import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.roustes";
import { usersRoutes } from "./users.routes";
// instanciando o router dentro de uma variável
const router = Router();

// utilizando a rota de cadastro de categorias
router.use("/categories", categoriesRoutes);
// utilizando a rota de cadastro de especificações de veículos
router.use("/specifications", specificationsRoutes);
// utilizando a rota de cadsatro de usuários
router.use("/users", usersRoutes);
// exportando as rotas
export { router };