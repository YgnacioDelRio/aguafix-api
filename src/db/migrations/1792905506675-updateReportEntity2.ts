import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateReportEntity21792905506675 implements MigrationInterface {
    name = 'UpdateReportEntity21792905506675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "WATER_REPORT" RENAME COLUMN "imageUrl" TO "photoUrl"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "WATER_REPORT" RENAME COLUMN "photoUrl" TO "imageUrl"`);
    }

}
