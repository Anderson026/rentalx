// importando o file system
import fs from "fs";
// importando o csv parse
import csvParse from "csv-parse";
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository";
// interface para utilizar o nome e a descrição do conteúdo do arquivo csv importado
interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesrepository) {

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
        resolve(categories);
      }).on("error", (err) => {
        reject(err);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    // faz a chamado de método loadCategories, passando o arquivo importado
    const categories = await this.loadCategories(file);
    console.log(categories);
    
  }
}

export { ImportCategoryUseCase };