import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [EmailModule, TypeOrmModule.forFeature([Report]), StorageModule],
  providers: [ReportService],
  controllers: [ReportController]
})
export class ReportModule {}
