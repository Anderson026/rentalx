// importando o router do express
import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
// armazenando o router em uma variável
const specificationsRoutes = Router();
// instanciando o controller de specifications
const createSpecificationController = new CreateSpecificationController();
// criando a rota de cadastro de especificações do veículo
specificationsRoutes.post("/", createSpecificationController.handle);
// exportando a rota
export { specificationsRoutes };