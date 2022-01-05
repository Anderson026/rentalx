import { AppError } from "@shared/errors/AppError";
import { ICratedUserDTO } from "@modules/accounts/dtos/ICreatedUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UersRepositoryInMemory";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })
  // deve ser possível criar o token do usuário
  it("should be able to authenticate an user", async () => {
    const user: ICratedUserDTO = {
      driver_license: "000123",
      email: "user@test.com",
      password: "1234",
      name: "User Test"
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });
  // testa o email inexistente
  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  // testa a senha inexistente
  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICratedUserDTO = {
        driver_license: "9999",
        email: "user@user.com",
        password: "1234",
        name: "User Test Error"
      }

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrectPassword",
      })
    }).rejects.toBeInstanceOf(AppError);
  });
});