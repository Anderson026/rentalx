import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserCrontroller } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";


// rota para criar um novo usuário
const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserCrontroller();
const updateUserAvatarUseCase = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", 
ensureAuthenticated,
uploadAvatar.single("avatar"), 
updateUserAvatarUseCase.handle);

export { usersRoutes };