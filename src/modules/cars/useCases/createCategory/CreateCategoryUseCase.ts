// importando o repositório de categorias
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository";

// criando a interface para poder cadastrar o nome e a descrição
interface IRequest {
  name: string;
  description: string;
}
// criando a classe de criar as categorias e com a validação pelo nome
class CreateCategoryUseCase {
  // acessar o repository
  constructor(private categoriesRepository: ICategoriesrepository) {

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