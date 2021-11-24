// importando a classe de categorias
import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesrepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// criando um repositório de categorias para armazenar os dados do objeto de categoria no array
class CategoriesRepository implements ICategoriesrepository {
  
  private repository: Repository<Category>;
 
  // método construtor da classe
  constructor() {
    this.repository = getRepository(Category);
  } 

  // método de cadastro de categoria
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
   
    // cria os dados de nome e descrição no banco de dados
    const category = this.repository.create({
      description,
      name,
    })
      // salva no banco de dados
      await this.repository.save(category);
  }
  // método para listar as categorias
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  // método para localizar por nome
  async findByName(name:string): Promise<Category> {
    // busca no banco de dados pelo nome
    const category = await this.repository.findOne({name});
    return category;
  }

};
// exportando a classe de repositío de categorias
export { CategoriesRepository };