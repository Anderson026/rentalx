import { v4 as uuidV4 } from "uuid";
// criando a estrutura da classe de especificações do veículo
class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
  // método construtor
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };