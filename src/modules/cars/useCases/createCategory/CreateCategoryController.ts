import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  // instanciando o serviço de cadastro de categorias
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {

  }

  handle(request: Request, response: Response): Response {
    // recebendo as informações de request.body
    const { name, description } = request.body;
    // executando o método para criar a categoria
    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };