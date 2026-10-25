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

    async findAllReports(): Promise<Report[]> {
        return await this.reportRepository.find();
    }

    async createReport(dto: CreateReportDto, url?:string){
        const report = this.reportRepository.create({
            address: dto.address,
            description: dto.description,
            severity: dto.severity,
            reporterPhone: dto.reporterPhone,
            isResolved: dto.isResolved,
            photoUrl: url
        });
        return await this.reportRepository.save(report);
    }
}
