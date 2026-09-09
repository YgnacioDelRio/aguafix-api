import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ReportModule ,EmailModule, TypeOrmModule.forRoot(dataSourceOptions), UsersModule, AuthModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
