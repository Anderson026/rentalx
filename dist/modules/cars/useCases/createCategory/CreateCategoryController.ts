import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";

class CreateCategoryController {
  // instanciando o serviço de cadastro de categorias
  
  async handle(request: Request, response: Response): Promise<Response> {
    // recebendo as informações de request.body
    const { name, description } = request.body;
    // faz a injeção de dependência no caso de uso
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    // executando o método para criar a categoria
    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };