import { Specification } from "../model/Specifications";

// interface de craçao de especificação de carros
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
// interface de repositório de especificação de repositório
interface ISpecificationsRepository {
  
  create({name, description}: ICreateSpecificationDTO): void;
  // validando se o nome já existe no banco de dados
  findByName(name: string): Specification;
}
// exportando as interfaces
export { ISpecificationsRepository, ICreateSpecificationDTO };