import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  // instanciando o serviço de cadastro de categorias
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {

  }

  async handle(request: Request, response: Response): Promise<Response> {
    // recebendo as informações de request.body
    const { name, description } = request.body;
    // executando o método para criar a categoria
    await this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };