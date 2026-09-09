import { CreateReportDto } from "../dtos/create-report.dto";

export const generateReportTemplate = (createReportDto:CreateReportDto) =>{
    return `
        <p>${createReportDto.address}<\p>
        <p>${createReportDto.description}<\p>
        <p>${createReportDto.severity}<\p>
        <p>${createReportDto.reporterPhone}<\p>
        <p>${createReportDto.isResolved}<\p>
        <p>${createReportDto.createdAt}<\p>
    `;
}