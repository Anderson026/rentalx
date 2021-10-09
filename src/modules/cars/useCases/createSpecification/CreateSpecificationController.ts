import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

// criando a classe das regras de negócio das especificações
class CreateSpecificationController {

  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {

  }

  handle(request: Request, response: Response): Response {
    // pegando o nome e a descrição do corpo da requisição
    const { name, description } = request.body;

    // chama o create specifications
    this.createSpecificationUseCase.execute({ name, description });
    // retorna os o status se deu tudo certo
    return response.status(201).send();
    }
}

export { CreateSpecificationController };