// importando a classe de categoria
import { Category } from "../infra/typeorm/entities/Category";


// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// criando a interface de categoria
interface ICategoriesrepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>; 
}
// exportando a interface
export { ICategoriesrepository, ICreateCategoryDTO };