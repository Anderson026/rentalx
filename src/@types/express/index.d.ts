// sobreescrevendo a tipagem de requisição
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    }
  }
}