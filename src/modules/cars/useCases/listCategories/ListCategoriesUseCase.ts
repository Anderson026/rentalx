import { Category } from "../../model/Category";
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  // acessar o repository
  constructor(private categoriesRepository: ICategoriesrepository) {

  }

  execute(): Category[] {
    // criando uma constante para pegar todas as categorias
    const categories = this.categoriesRepository.list();

    // retornar as categotiras
    return categories;
  }
}

export { ListCategoriesUseCase };