import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddAvatar1640381843358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // adicionando a coluna avatar na tabela de users
      await queryRunner.addColumn(
        "users",
        new TableColumn({
          name: "avatar",
          type: "varchar",
          isNullable: true,
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      // removendo a coluna avatar na tabela de users
      await queryRunner.dropColumn("users", "avatar");
    }

}
