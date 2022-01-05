// importando a lib uuid para gerar ids
import { v4 as uuidV4 } from "uuid";
// importando a entitie para criação dos dados no banco de dados com o typeorm
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
// criando a classe de categoria
@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @CreateDateColumn()
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