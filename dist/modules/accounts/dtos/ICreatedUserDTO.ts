
// criando a interface com os tipos de dados do usuário
interface ICratedUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string;
  avatar?: string;
}

export { ICratedUserDTO }