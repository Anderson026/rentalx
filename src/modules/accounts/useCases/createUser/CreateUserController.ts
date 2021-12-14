import {Request, Response} from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserCrontroller {

  async handle(request: Request, response: Response): Promise<Response> {
    //  pegando as informações da requisição
    const { name, username, email, password, driver_license } = request.body;
    // método para criar usuário
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      email,
      password,
      driver_license,
    });
    // retorna a resposta
    return response.status(201).send();
  }
}

 export { CreateUserCrontroller }