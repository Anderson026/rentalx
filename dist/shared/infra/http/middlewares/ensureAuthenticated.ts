import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import auth from "@config/auth";



interface IPayload {
  sub: string;
}

// função para autenticar rotas
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // pega o token através do header
  const authHeader = request.headers.authorization;

  const userTokensRepository = new UsersTokensRepository();

  // se não tiver token retonar a seguinte mensagem
  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }
  // se tiver vai pegar o Bearer e o token
  const [, token] = authHeader.split(" ");
  // verifica se o token é válido
  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;
    
    // verifica se o usuário existe no banco de dados
    // const user = await userTokensRepository.findByUserIdAndRefreshToken(user_id, token);

    // se o usuário não existir
    // if (!user) {
    //   throw new AppError("User does not exists!", 401);
    // }
    // colocando o usuário na requisição
    request.user = {
      id: user_id,
    };

    next();
  } catch{
    throw new AppError("Invalid token!", 401);
  }
}