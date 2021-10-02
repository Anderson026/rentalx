// importando a classe de categoria
import { Category } from "../model/Category";

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// criando a interface de categoria
interface ICategoriesrepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void; 
}
// exportando a interface
export { ICategoriesrepository, ICreateCategoryDTO };