// importando o router do express
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
// armazenando o router em uma variável
const specificationsRoutes = Router();
// instanciando o controller de specifications
const createSpecificationController = new CreateSpecificationController();
// rota para verificar se o token do usuário é valido
specificationsRoutes.use(ensureAuthenticated);
// criando a rota de cadastro de especificações do veículo
specificationsRoutes.post("/", createSpecificationController.handle);
// exportando a rota
export { specificationsRoutes };