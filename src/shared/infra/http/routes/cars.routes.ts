
import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListCategoriesController();
carsRoutes.post("/", ensureAuthenticated, ensureAdmin , createCarController.handle);
// rota para listar os carros cadastrados
carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes };