import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateReportEntity1792904742443 implements MigrationInterface {
    name = 'UpdateReportEntity1792904742443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "WATER_REPORT" ADD "imageUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "WATER_REPORT" DROP COLUMN "imageUrl"`);
    }

}
