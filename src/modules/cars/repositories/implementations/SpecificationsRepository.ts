import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specifications";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificatiosRepository";

// classe de especificação de veículos
class SpecificationsRepository implements ISpecificationsRepository {
  
  private repository: Repository<Specification>

  constructor(){
    this.repository = getRepository(Specification);
  }
  // método para cadastrar especificação
  async create({name, description}: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    });
    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      name, 
    });
    return specification;
  }
}

export { SpecificationsRepository };