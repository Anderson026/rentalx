import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

const tmpFolder = resolve(__dirname, "..", "..", "tmp");

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      // cria um hash hexadecimenal para o nome do arquivo
      const fileHash = crypto.randomBytes(16).toString("hex");
      // concatena o hash com o nome original
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  })
};