import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

// criando a classe de controller para as regras de negócio da rota 
class ImportCategoryController {
  // adicionando o caso de uso no método construtor
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {

  }

  handle(request: Request, response: Response): Response {
    // pegando o arquivo file dentro do request
    const { file } = request;
    // instanciando o caso de uso para importar o arquivo
    this.importCategoryUseCase.execute(file);
    // retornnando o envio do arquivo
    return response.send();
  }
}
// exportando a classe
export { ImportCategoryController };