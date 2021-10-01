// importando a lib uuid para gerar ids
import { v4 as uuidV4 } from "uuid";
// criando a classe de categoria
class Category {
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
};
// exportando a classe de categoria
export { Category };