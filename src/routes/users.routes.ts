import { Router } from "express";
import { CreateUserCrontroller } from "../modules/accounts/useCases/createUser/CreateUserController";

// rota para criar um novo usuário
const usersRoutes = Router();

const createUserController = new CreateUserCrontroller();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };