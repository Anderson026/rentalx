

import { Category } from "../../entities/Category";
import { ICategoriesrepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// salvando a categoria em memória para poder testar a funcionalidade
class CategoriesRepositoryInMemory implements ICategoriesrepository {

  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  async list(): Promise<Category[]> {
      const all = this.categories;
      return all;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
      const category = new Category();

      Object.assign(category, {
        name,
        description,
      });

      this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };