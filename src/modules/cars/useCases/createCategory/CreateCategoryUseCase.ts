// importando o repositório de categorias
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository";
import "reflect-metadata";
// importando as injeções de dependência
import { inject, injectable } from  "tsyringe";

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
      throw new Error("Category already exists!");
    };

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };