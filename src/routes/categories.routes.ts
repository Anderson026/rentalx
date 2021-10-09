// importando o router do express
import { Router } from "express";
// importando o multer
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
// criando uma constante de categoriesRoutes
const categoriesRoutes = Router();
// instanciando o multer e configurando a pasta de destino das imagens
const upload = multer({
  dest: "./tmp",
});
// criando a rota de post
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});
// rota com a lista de categorias
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});
// rota para enviar as imagens dos veículos
categoriesRoutes.post("/import", upload.single("file") , (request, response) => {
  // pegando o arquivo file dentro do request
  const { file } = request;
  console.log(file);
  // retornnando o envio do arquivo
  return response.send();
});
// exportando a rota de categories
export { categoriesRoutes };
