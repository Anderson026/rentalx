import { ICratedUserDTO } from "../dtos/ICreatedUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICratedUserDTO): Promise <void>;
  findByEmail(email: string): Promise<User>
}

export { IUsersRepository }