// importando a classe de categorias
import { Category } from "../model/Category";
// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}
// criando um repositório de categorias para armazenar os dados do objeto de categoria no array
class CategoriesRepository {
  // criando um array como banco de dados para testes da rota
  private categories: Category[];
  // método construtor da classe
  constructor() {
    this.categories = [];
  } 
  // método de cadastro de categoria
  create({ name, description }: ICreateCategoryDTO): void {
    // criando um objeto de category
  const category = new Category();
    // atribuindo os dados em um novo objeto
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
  // método para listar as categorias
  list(): Category[] {
    return this.categories;
  }
};
// exportando a classe de repositío de categorias
export { CategoriesRepository };