// importando o router do express
import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
// armazenando o router em uma variável
const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository()

// criando a rota de cadastro de especificações do veículo
specificationsRoutes.post("/", (request, response) => {
  // pegando o nome e a descrição do corpo da requisição
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  // chama o create specifications
  createSpecificationService.execute({ name, description });
  // retorna os o status se deu tudo certo
  return response.status(201).send();
})
// exportando a rota
export { specificationsRoutes };