import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1636764215270 implements MigrationInterface {
    // cria as tabelas de categorias
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "categories",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "description",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        })
      )
    }
    // deleta a tabela de categorias
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("categories");
    }

}
