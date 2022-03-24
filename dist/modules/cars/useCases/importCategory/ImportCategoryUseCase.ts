// importando o csv parse
import csvParse from "csv-parse";
// importando o file system
import fs from "fs";

import { inject, injectable } from "tsyringe";
import { ICategoriesrepository } from "@modules/cars/repositories/ICategoriesRepository";
// interface para utilizar o nome e a descrição do conteúdo do arquivo csv importado
interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCategoryUseCase {

  constructor(
    // injetando a dependência do caso de uso de import category
    @inject("Categoriesrepository")
    private categoriesRepository: ICategoriesrepository) {

  }
  // método que faz a leitura dos arquivos enviados
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    // retornando uma promisse
    return new Promise((resolve, reject) => {
       // cria um stream de leitura de arquivo e passa o caminho onde está o arquivo
      const stream = fs.createReadStream(file.path);
      // criando o array de categorias
      const categories: IImportCategory[] = [];
      // importando a função de csv parse para uma variável
      const parseFile = csvParse();
      // utilizando o pipe do stream para enviar o arquivos divido em pedaços para uma pasta que será configurada
      stream.pipe(parseFile);

      parseFile.on("data", async(line) => {
        // desestruturando o nome e a description
        const [name, description] = line;
        // adiciona o nome e descrição dentro do array
        categories.push({
          name,
          description,
        });
      })
      .on("end", () => {
        // removendo os arquivos da pasta tmp
        fs.promises.unlink(file.path);
        resolve(categories);
      }).on("error", (err) => {
        reject(err);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    // faz a chamado de método loadCategories, passando o arquivo importado
    const categories = await this.loadCategories(file);
    // percorre pelo banco de dados fake (array)
    categories.map(async (category) => {
      const { name, description } = category;
      // verifica se a categoria existe
      const existCategory = await this.categoriesRepository.findByName(name);
      // se não existir, cria a categoria
      if (!existCategory) {
        await this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
    
  }
}

export { ImportCategoryUseCase };