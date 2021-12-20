import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";


// tipando os dados de email e password
interface IRequest {
  email: string;
  password: string;
}

// interface do usuário para utilizar na resposta da requisição
interface IResponse {
  user: {
    name: string,
    email: string
  },

  token: string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({email, password}: IRequest): Promise<IResponse> {
    // Usuário existe?
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email or password incorrect!");
    }
    // Senha está correta?
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }
    // Gerar jsonwebtoken
    const token = sign({}, "e10adc3949ba59abbe56e057f20f883e", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };