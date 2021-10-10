// importando o file system
import fs from "fs";
// importando o csv parse
import csvParse from "csv-parse";

class ImportCategoryUseCase {

  execute(file: Express.Multer.File): void {
    
    // cria um stream de leitura de arquivo e passa o caminho onde está o arquivo
    const stream = fs.createReadStream(file.path);
    // importando a função de csv parse para uma variável
    const parseFile = csvParse();
    // utilizando o pipe do stream para enviar o arquivos divido em pedaços para uma pasta que será configurada
    stream.pipe(parseFile);

    parseFile.on("data", async(line) => {
      console.log(line);
      
    })
  }
}

export { ImportCategoryUseCase };