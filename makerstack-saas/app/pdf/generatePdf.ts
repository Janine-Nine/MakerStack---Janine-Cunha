import { jsPDF } from 'jspdf'

interface PdfData {
  titulo: string
  conteudo: string[]
}

export function generatePdf(data: PdfData) {
  const doc = new jsPDF()

  doc.setFontSize(22)
  doc.text(data.titulo, 20, 20)

  doc.setFontSize(12)

  let y = 40

  data.conteudo.forEach((linha) => {
    doc.text(linha, 20, y)
    y += 12
  })

  doc.save(`${data.titulo}.pdf`)
}