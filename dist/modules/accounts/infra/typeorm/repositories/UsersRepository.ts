import { getRepository, Repository } from "typeorm";

import { ICratedUserDTO } from "@modules/accounts/dtos/ICreatedUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { User } from "../entities/User";



class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  // construtor da classe de implementação de usuários
  constructor() {
    this.repository = getRepository(User);
  }

  // método para criar o usuário
  async create({name, password, email, driver_license, id, avatar}: ICratedUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      id,
      avatar
    });


    await this.repository.save(user);
  }
  // método para verificar se email existe
  async findByEmail(email: string): Promise<User> {
      const user = await this.repository.findOne({email});
      return user;
  }

  // método para verificar se o id existe no banco de dados
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

}

export { UsersRepository };