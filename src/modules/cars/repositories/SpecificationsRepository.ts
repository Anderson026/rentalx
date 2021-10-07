import { Specification } from "../model/Specifications";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificatiosRepository";

// classe de especificação de veículos
class SpecificationsRepository implements ISpecificationsRepository {
  // criando a tabela fake
  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }
  // método para cadastrar especificação
  create({name, description}: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description, 
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }
}

export { SpecificationsRepository };