import { ICratedUserDTO } from "../dtos/ICreatedUserDTO";

interface IUsersRepository {
  create(data: ICratedUserDTO): Promise <void>
}

export { IUsersRepository }