// importando o router do express
import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.roustes";
// instanciando o router dentro de uma variável
const router = Router();

// utilizando a rota de cadastro de categorias
router.use("/categories", categoriesRoutes);
// utilizando a rota de cadastro de especificações de veículos
router.use("/specifications", specificationsRoutes);
// exportando as rotas
export { router };