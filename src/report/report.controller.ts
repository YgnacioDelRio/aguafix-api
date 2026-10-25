import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { ReportService } from './report.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { generateReportTemplate } from './templates/report-template';
import { StorageService } from 'src/storage/storage.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('report')
export class ReportController {
    constructor(
        private emailService:EmailService,
        private reportService: ReportService,
        private storageService: StorageService
    ){}

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        limits: { fileSize: 5 * 1024 * 1024 },
        fileFilter: (req, file, cb) => cb(null, file.mimetype.startsWith('image/'))
    }))
    async createReport(
        @Body() createReportDto: CreateReportDto,
        @UploadedFile() file: any
    ){
        const url = await this.storageService.uploadFile(file,"reports");
        const template = generateReportTemplate(createReportDto, url);   //ola 2
        await this.emailService.sendEmail(template);
        const report = await this.reportService.createReport(createReportDto, url);
        return report;
    }
    
    @Get()
    async findAllReports() {
        return await this.reportService.findAllReports();
    }

    @Post(":id/image")
    @UseInterceptors(FileInterceptor('image', {
        limits: { fileSize: 5 * 1024 * 1024 },
        fileFilter: (req, file, cb) => cb(null, file.mimetype.startsWith('image/'))
    }))
    async uploadSingleFile(
        @Param('id',ParseIntPipe) id: number,
        @UploadedFile() file: any
    ){
        const url = await this.storageService.uploadFile(file,'reports');
        return{
            url: url
        };
    }
}
