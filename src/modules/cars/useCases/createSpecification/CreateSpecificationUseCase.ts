import { inject, injectable } from  "tsyringe";
import { AppError } from "@errors/AppError";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificatiosRepository";



interface IRequest {
  name: string;
  description: string;
}

// criando a classe de serviços de especificações
@injectable()
class CreateSpecificationUseCase {

  constructor(
    // utilizando a referência
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository) {

  }

  // método de execução
  async execute({name, description}: IRequest): Promise<void> {
    // verifica se a especificação se já existe
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
// exportando a classe
export { CreateSpecificationUseCase };