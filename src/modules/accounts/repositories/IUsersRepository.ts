import { ICratedUserDTO } from "../dtos/ICreatedUserDTO";
import { User } from "../infra/typeorm/entities/User";


interface IUsersRepository {
  create(data: ICratedUserDTO): Promise <void>;
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}

export { IUsersRepository };