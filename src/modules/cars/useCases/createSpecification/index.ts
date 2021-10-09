import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

// instanciando o repositório de especificações
const specificationsRepository = new SpecificationsRepository();
// instanciando o caso de uso de especificações
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
// instanciando o controller de especificações
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);
// exportando o controller de especificações
export { createSpecificationController };