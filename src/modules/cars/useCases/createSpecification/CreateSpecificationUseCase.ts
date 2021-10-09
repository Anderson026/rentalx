import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}

// criando a classe de serviços de especificações
class CreateSpecificationUseCase {

  constructor(private specificationsRepository: ISpecificationsRepository) {

  }

  // método de execução
  execute({name, description}: IRequest): void {
    // verifica se a especificação se já existe
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
// exportando a classe
export { CreateSpecificationUseCase };