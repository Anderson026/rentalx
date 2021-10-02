import { Category } from "../model/Category";
import { ICategoriesrepository, ICreateCategoryDTO } from "./ICategoriesRepository";

// subclasse de ICategoriesrepository
class PostgresCategoriesRepository implements ICategoriesrepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
    // throw new Error("Method not implemented.");
  }
  list(): Category[] {
    return null;
    // throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
    
    // throw new Error("Method not implemented.");
  }

};

export { PostgresCategoriesRepository };