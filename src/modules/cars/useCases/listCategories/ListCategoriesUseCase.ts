import { Category } from "../../entities/Category";
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  // acessar o repository
  constructor(
    @inject("Categoriesrepository")
    private categoriesRepository: ICategoriesrepository) {

  }

  async execute(): Promise<Category[]> {
    // criando uma constante para pegar todas as categorias
    const categories = await this.categoriesRepository.list();

    // retornar as categotiras
    return categories;
  }
}

export { ListCategoriesUseCase };