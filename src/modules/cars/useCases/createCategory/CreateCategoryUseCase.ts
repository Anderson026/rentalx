// importando o repositório de categorias
import "reflect-metadata";
// importando as injeções de dependência
import { inject, injectable } from  "tsyringe";

import { ICategoriesrepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@errors/AppError";

// criando a interface para poder cadastrar o nome e a descrição
interface IRequest {
  name: string;
  description: string;
}
// criando a classe de criar as categorias e com a validação pelo nome
@injectable()
class CreateCategoryUseCase {
  // acessar o repository
  constructor(
    // faz uma verificação no container e verifica qual a classe que ele está referenciando
    @inject("Categoriesrepository")
    private categoriesRepository: ICategoriesrepository) {

  }

  async execute({ name, description }: IRequest): Promise<void> {
  
    // importa o método para localizar o nome da categoria
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    // verifica se a categoria existe
    if (categoryAlreadyExists) {
      // alterando o tipo de erro para padronizar o retorno
      throw new AppError("Category already exists!");
    };

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };