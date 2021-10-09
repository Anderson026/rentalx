// importando o router do express
import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
// armazenando o router em uma variável
const specificationsRoutes = Router();

// criando a rota de cadastro de especificações do veículo
specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
})
// exportando a rota
export { specificationsRoutes };