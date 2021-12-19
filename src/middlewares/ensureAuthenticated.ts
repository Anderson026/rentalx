import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

// função para autenticar rotas
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // pega o token através do header
  const authHeader = request.headers.authorization;

  // se não tiver token retonar a seguinte mensagem
  if (!authHeader) {
    throw new Error("Token missing!");
  }
  // se tiver vai pegar o Bearer e o token
  const [, token] = authHeader.split(" ");
  // verifica se o token é válido
  try {
    const { sub: user_id } = verify(token, "e10adc3949ba59abbe56e057f20f883e") as IPayload;
    
    // verifica se o usuário existe no banco de dados
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    // se o usuário não existir
    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch{
    throw new Error("Invalid token!");
  }
}