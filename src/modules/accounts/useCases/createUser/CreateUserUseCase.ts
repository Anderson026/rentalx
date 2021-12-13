import { inject } from "tsyringe";
import { ICratedUserDTO } from "../../dtos/ICreatedUserDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

// criando o caso de uso do usuário
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({name, username, email, password, driver_license}: ICratedUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    })
  }
}

export { CreateUserUseCase }