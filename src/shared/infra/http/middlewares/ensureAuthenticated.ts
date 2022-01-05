import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";



interface IPayload {
  sub: string;
}

// função para autenticar rotas
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // pega o token através do header
  const authHeader = request.headers.authorization;

  // se não tiver token retonar a seguinte mensagem
  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }
  // se tiver vai pegar o Bearer e o token
  const [, token] = authHeader.split(" ");
  // verifica se o token é válido
  try {
    const { sub: user_id } = verify(token, "25d55ad283aa400af464c76d713c07ad") as IPayload;
    
    // verifica se o usuário existe no banco de dados
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    // se o usuário não existir
    if (!user) {
      throw new AppError("User does not exists!", 401);
    }
    // colocando o usuário na requisição
    request.user = {
      id: user_id,
    };

    next();
  } catch{
    throw new AppError("Invalid token!", 401);
  }
}