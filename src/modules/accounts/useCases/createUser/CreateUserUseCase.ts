import { inject, injectable } from "tsyringe";
import { ICratedUserDTO } from "../../dtos/ICreatedUserDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

// criando o caso de uso do usuário
@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({name, email, password, driver_license}: ICratedUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    })
  }
}

export { CreateUserUseCase }