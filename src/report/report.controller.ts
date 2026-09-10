import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { ReportService } from './report.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { generateReportTemplate } from './templates/report-template';

@Controller('report')
export class ReportController {
    constructor(private emailService:EmailService, private reportService: ReportService){}

    @Post()
    async createReport(
        @Body() createReportDto: CreateReportDto
    ){
        const template = generateReportTemplate(createReportDto);
        await this.emailService.sendEmail(template);
        const report = await this.reportService.createReport(createReportDto);
        return report;
    }
    
    @Get()
    async findAllReports() {
        return await this.reportService.findAllReports();
    }
}
