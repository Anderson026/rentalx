import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserDeleteUsername1639614029171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // deletar a coluna de username da tabela de usuários
      await queryRunner.dropColumn("users", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      // adicionando a coluna de usernamen na tabela de usuários
      await queryRunner.addColumn(
        "users",
        new TableColumn({
          name: "username",
          type: "varchar",
        })
      );
    }

}
