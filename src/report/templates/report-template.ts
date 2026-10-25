
/*
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
*/

import { CreateReportDto } from "../dtos/create-report.dto";

export const generateReportTemplate = (
  createReportDto: CreateReportDto,
  photoUrl?: string
): string => {
  const statusBadge = createReportDto.isResolved
    ? `<span style="background-color: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">Resuelto</span>`
    : `<span style="background-color: #fef3c7; color: #b45309; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">Pendiente</span>`;

  const photoSection = photoUrl
    ? `
      <tr>
        <td style="font-weight: bold; color: #475569; vertical-align: top; padding-top: 12px;">Fotografía:</td>
        <td style="padding-top: 12px;">
          <a href="${photoUrl}" target="_blank" style="text-decoration: none;">
            <img src="${photoUrl}" alt="Evidencia de la incidencia" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #cbd5e1; display: block;" />
          </a>
        </td>
      </tr>
    `
    : "";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                        <td width="35%" style="font-weight: bold; color: #475569;">Estado:</td>
                        <td style="color: #1e293b;">${statusBadge}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #475569;">Ubicación / Dirección:</td>
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
                      ${photoSection}
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