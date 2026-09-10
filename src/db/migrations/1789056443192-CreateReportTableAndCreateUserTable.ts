import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateReportTableAndCreateUserTable1789056443192 implements MigrationInterface {
    name = 'CreateReportTableAndCreateUserTable1789056443192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "PENDING_EMAIL" ("id" SERIAL NOT NULL, "payload" character varying NOT NULL, "isPending" boolean NOT NULL, "subject" character varying NOT NULL, "to" character varying NOT NULL, CONSTRAINT "PK_01db8dd94ef7914d695da10f2c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "SYSTEM_USER" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isNotificationEnabled" boolean NOT NULL, CONSTRAINT "PK_3f5912604df1254054eac4f2b5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "WATER_REPORT" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "description" character varying NOT NULL, "severity" character varying NOT NULL, "reporterPhone" character varying NOT NULL, "isResolved" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b232cdd6d3e95978564720c2ebe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "WATER_REPORT"`);
        await queryRunner.query(`DROP TABLE "SYSTEM_USER"`);
        await queryRunner.query(`DROP TABLE "PENDING_EMAIL"`);
    }

}
