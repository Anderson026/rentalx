import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

// criando a classe das regras de negócio das especificações
class CreateSpecificationController {

  async handle(request: Request, response: Response): Promise<Response> {
    // pegando o nome e a descrição do corpo da requisição
    const { name, description } = request.body;
    // injetando o caso de uso como dependência
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
    // chama o create specifications
    await createSpecificationUseCase.execute({ name, description });
    // retorna os o status se deu tudo certo
    return response.status(201).send();
    }
}

export { CreateSpecificationController };