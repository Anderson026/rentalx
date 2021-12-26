import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {

  upload(folder: string) {
    // definindo a pasta de destino dos avatares
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          // cria um hash hexadecimenal para o nome do arquivo
          const fileHash = crypto.randomBytes(16).toString("hex");
          // concatena o hash com o nome original
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};