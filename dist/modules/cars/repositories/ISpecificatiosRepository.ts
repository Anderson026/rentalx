import { Specification } from "../infra/typeorm/entities/Specifications";


// interface de craçao de especificação de carros
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
// interface de repositório de especificação de repositório
interface ISpecificationsRepository {
  
  create({name, description}: ICreateSpecificationDTO): Promise<Specification>;
  // validando se o nome já existe no banco de dados
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
// exportando as interfaces
export { ISpecificationsRepository, ICreateSpecificationDTO };