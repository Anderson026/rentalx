import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
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

    // validação de email
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }
    // criando a criptografia de senha
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    })
  }
}

export { CreateUserUseCase }