import { generatePdf } from '@/pdf/generatePdf'

export function gerarRelatorioEmpresa() {
  generatePdf({
    titulo: 'Relatório Empresarial',
    conteudo: [
      'Funcionários ativos: 45',
      'Setor com maior performance: TI',
      'Taxa de contratação: 92%'
    ]
  })
}
export function gerarRelatorioRH() {
  generatePdf({
    titulo: 'Relatório RH',
    conteudo: [
      '12 vagas abertas',
      '7 entrevistas agendadas',
      '4 admissões em andamento'
    ]
  })
}