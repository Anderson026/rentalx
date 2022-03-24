import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from "tsyringe";

// criando a classe de controller para as regras de negócio da rota 
class ImportCategoryController {
  

  async handle(request: Request, response: Response): Promise<Response> {
    // pegando o arquivo file dentro do request
    const { file } = request;
    // injetando a dependência do caso de uso de import categories
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    // instanciando o caso de uso para importar o arquivo
    await importCategoryUseCase.execute(file);
    // retornnando o envio do arquivo
    return response.status(201).send();
  }
}
// exportando a classe
export { ImportCategoryController };