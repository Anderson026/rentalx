import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
// criando a estrutura da classe de especificações do veículo
@Entity("specifications")
class Specification {
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
}

export { Specification };