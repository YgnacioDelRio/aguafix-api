import { CreateReportDto } from "../dtos/create-report.dto";

export const generateReportTemplate = (createReportDto: CreateReportDto): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; padding: 24px;">
                
                <!-- Encabezado -->
                <tr>
                  <td style="border-bottom: 2px solid #0284c7; padding-bottom: 12px; margin-bottom: 16px;">
                    <h2 style="color: #0284c7; margin: 0;">🚨 Nuevo Reporte de Fuga de Agua</h2>
                  </td>
                </tr>

                <!-- Detalle del reporte -->
                <tr>
                  <td style="padding-top: 16px;">
                    <p style="color: #333333; font-size: 14px; margin-bottom: 16px;">
                      Se ha registrado una nueva incidencia que requiere atención de la cuadrilla:
                    </p>
                    
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="8" border="0" style="border-collapse: collapse; background-color: #f8fafc; border-radius: 6px;">
                      <tr>
                        <td width="30%" style="font-weight: bold; color: #475569;">Ubicación / Dirección:</td>
                        <td style="color: #1e293b;">${createReportDto.address}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #475569;">Severidad:</td>
                        <td style="color: #1e293b;"><strong>${createReportDto.severity}</strong></td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #475569;">Teléfono de contacto:</td>
                        <td style="color: #1e293b;">${createReportDto.reporterPhone}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #475569; vertical-align: top;">Descripción:</td>
                        <td style="color: #1e293b;">${createReportDto.description}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Pie de página -->
                <tr>
                  <td style="padding-top: 24px; text-align: center; color: #94a3b8; font-size: 12px;">
                    Sistema de Atención Ciudadana — Municipio
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};