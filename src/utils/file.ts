import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    // verifica se o arquivo existe
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  // se o arquivo existir será deletado
  await fs.promises.unlink(filename);
}