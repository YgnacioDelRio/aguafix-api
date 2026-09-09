import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dtos/create-report.dto';

@Injectable()
export class ReportService {

    constructor(
        @InjectRepository(Report)
        private reportRepository : Repository<Report>
    ){}

    async findAllReports(){
        return await this.reportRepository.find();
    }

    async createReport(dto: CreateReportDto){
        const report = this.reportRepository.create({
            address: dto.address,
            description: dto.description,
            severity: dto.severity,
            reporterPhone: dto.reporterPhone,
            isResolved: dto.isResolved,
            createdAt: dto.createdAt
        });
        return await this.reportRepository.save(report);
    }
}
