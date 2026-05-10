import PDFDocument from "pdfkit";
import fs from "fs";

export function generatePDF(candidate: any) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(`candidate-${candidate.id}.pdf`));

  doc.fontSize(18).text("Relatório do Candidato");

  doc.text(`Nome: ${candidate.name}`);
  doc.text(`Email: ${candidate.email}`);
  doc.text(`Score: ${candidate.score}`);

  doc.end();
}