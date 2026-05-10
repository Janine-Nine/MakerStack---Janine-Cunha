import PDFDocument from "pdfkit";
import fs from "fs";

export function generateConsultingPDF(candidate: any) {
  const doc = new PDFDocument({ margin: 50 });

  doc.pipe(fs.createWriteStream(`report-${candidate.id}.pdf`));

  // Título
  doc.fontSize(22).text("Relatório de Avaliação de Candidato", {
    align: "center",
  });

  doc.moveDown();

  // Dados
  doc.fontSize(14).text(`Nome: ${candidate.name}`);
  doc.text(`Score: ${candidate.score}%`);

  doc.moveDown();

  // Seções
  doc.fontSize(16).text("Pontos Fortes");
  candidate.strengths?.forEach((s: string) => doc.text(`• ${s}`));

  doc.moveDown();

  doc.fontSize(16).text("Pontos de Atenção");
  candidate.weaknesses?.forEach((w: string) => doc.text(`• ${w}`));

  doc.moveDown();

  doc.fontSize(16).text("Recomendação");
  doc.text(candidate.recommendation);

  doc.end();
}