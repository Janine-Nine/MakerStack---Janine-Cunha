// Script para a página de relatórios
document.addEventListener('DOMContentLoaded', function() {
    // Valores iniciais dos cards de métricas
    const initialValues = {
        'candidatos-total': 142,
        'contratacoes-mes': 27,
        'match-ia': 89,
        'vagas-abertas': 18
    };

    // Função para animar números
    function animateNumber(element, targetNum, duration = 2000, isPercentage = false) {
        const startNum = parseInt(element.textContent) || 0;
        const increment = (targetNum - startNum) / (duration / 16);
        let currentNum = startNum;

        const interval = setInterval(() => {
            currentNum += increment;
            if ((increment > 0 && currentNum >= targetNum) || (increment < 0 && currentNum <= targetNum)) {
                element.textContent = isPercentage ? `${targetNum}%` : targetNum;
                clearInterval(interval);
            } else {
                element.textContent = isPercentage ? `${Math.floor(currentNum)}%` : Math.floor(currentNum);
            }
        }, 16);
    }

    // Animar números quando a página carregar
    Object.keys(initialValues).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const isPercentage = id === 'match-ia';
            animateNumber(element, initialValues[id], 2000, isPercentage);
        }
    });

    // Simular atividade realista em tempo real
    function simulateActivity() {
        const activities = [
            { id: 'candidatos-total', increment: 1, description: 'Novo candidato inscrito' },
            { id: 'contratacoes-mes', increment: 1, description: 'Nova contratação confirmada' },
            { id: 'match-ia', increment: 0, description: 'Match IA recalculado' },
            { id: 'vagas-abertas', increment: Math.random() > 0.7 ? 1 : 0, description: 'Nova vaga publicada' }
        ];

        // Escolher atividade aleatória com pesos diferentes
        const weights = [0.4, 0.2, 0.3, 0.1]; // 40% candidatos, 20% contratações, 30% match IA, 10% vagas
        const random = Math.random();
        let activityIndex = 0;
        if (random < weights[0]) activityIndex = 0;
        else if (random < weights[0] + weights[1]) activityIndex = 1;
        else if (random < weights[0] + weights[1] + weights[2]) activityIndex = 2;
        else activityIndex = 3;

        const activity = activities[activityIndex];
        const element = document.getElementById(activity.id);

        if (element) {
            let currentNum = parseInt(element.textContent.replace('%', ''));
            let newNum = currentNum + activity.increment;

            // Para match IA, manter entre 85-95%
            if (activity.id === 'match-ia') {
                if (newNum < 85) newNum = 85;
                if (newNum > 95) newNum = 95;
            }

            // Garantir que números não fiquem negativos
            if (newNum < 0) newNum = 0;

            animateNumber(element, newNum, 1000, activity.id === 'match-ia'); // Animação mais rápida

            // Log da atividade (opcional para debug)
            console.log(`📊 ${activity.description}: ${currentNum}${activity.id === 'match-ia' ? '%' : ''} → ${newNum}${activity.id === 'match-ia' ? '%' : ''}`);
        }
    }

    // Iniciar simulação de atividade a cada 5-12 segundos
    setInterval(simulateActivity, Math.random() * 7000 + 5000);

    // Funcionalidade do botão Exportar PDF
    const exportBtn = document.querySelector('.btn');

    exportBtn.addEventListener('click', () => {
        // Simular geração de PDF
        exportBtn.textContent = '📄 Gerando PDF...';
        exportBtn.disabled = true;

        setTimeout(() => {
            // Criar conteúdo detalhado do PDF
            const pdfContent = generateDetailedPDFContent();

            // Simular download
            const blob = new Blob([pdfContent], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `relatorio-rh-completo-${new Date().toISOString().split('T')[0]}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            // Resetar botão
            exportBtn.textContent = '📥 Exportar PDF';
            exportBtn.disabled = false;

            // Mostrar notificação
            showNotification('Relatório PDF detalhado gerado com sucesso! 📄', 'success');
        }, 2500); // Mais tempo para simular processamento
    });

            // Simular download
            const blob = new Blob([pdfContent], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `relatorio-rh-${new Date().toISOString().split('T')[0]}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            // Resetar botão
            exportBtn.textContent = '📥 Exportar PDF';
            exportBtn.disabled = false;

            // Mostrar notificação
            showNotification('Relatório PDF gerado com sucesso! 📄', 'success');
        }, 2000);
    });

    // Animação das cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = '0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

function generateDetailedPDFContent() {
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const candidatos = document.getElementById('candidatos-total').textContent;
    const contratacoes = document.getElementById('contratacoes-mes').textContent;
    const matchIA = document.getElementById('match-ia').textContent;
    const vagas = document.getElementById('vagas-abertas').textContent;

    return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R 4 0 R 5 0 R]
/Count 3
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 6 0 R
/Resources <<
/Font <<
/F1 7 0 R
/F2 8 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 9 0 R
/Resources <<
/Font <<
/F1 7 0 R
/F2 8 0 R
>>
>>
>>
endobj

5 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 10 0 R
/Resources <<
/Font <<
/F1 7 0 R
/F2 8 0 R
>>
>>
>>
endobj

6 0 obj
<<
/Length 1200
>>
stream
BT
/F1 24 Tf
50 750 Td
(Relatório Executivo de RH - Enviagora) Tj
0 -40 Td
/F2 12 Tf
(Data de Geração: ${currentDate}) Tj
0 -30 Td
/F1 18 Tf
(Resumo Executivo) Tj
0 -25 Td
/F2 11 Tf
(Este relatório apresenta uma análise completa das métricas de recrutamento e seleção,) Tj
0 -15 Td
(incluindo dados de candidatos, contratações, eficiência do Match IA e vagas ativas.) Tj
0 -30 Td
/F1 16 Tf
(Métricas Principais) Tj
0 -20 Td
/F2 12 Tf
(• Candidatos Inscritos: ${candidatos} - Total de profissionais registrados na plataforma) Tj
0 -15 Td
(• Contratações Confirmadas: ${contratacoes} - Colocações bem-sucedidas no mês corrente) Tj
0 -15 Td
(• Precisão Match IA: ${matchIA} - Taxa de acerto nas recomendações automatizadas) Tj
0 -15 Td
(• Vagas Abertas: ${vagas} - Posições ativas aguardando preenchimento) Tj
ET
endstream
endobj

7 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Bold
>>
endobj

8 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

9 0 obj
<<
/Length 1000
>>
stream
BT
/F1 18 Tf
50 750 Td
(Análise Detalhada de Desempenho) Tj
0 -30 Td
/F2 12 Tf
(1. Análise de Candidatos) Tj
0 -20 Td
(• Volume total de inscrições: ${candidatos} candidatos registrados) Tj
0 -15 Td
(• Taxa de conversão: ${Math.round((parseInt(contratacoes) / parseInt(candidatos)) * 100)}% das inscrições resultaram em contratação) Tj
0 -15 Td
(• Distribuição por fonte: LinkedIn (45%), Site (30%), Indicação (25%)) Tj
0 -30 Td
(2. Eficiência das Contratações) Tj
0 -20 Td
(• Contratações realizadas: ${contratacoes} profissionais colocados) Tj
0 -15 Td
(• Tempo médio de contratação: 18 dias corridos) Tj
0 -15 Td
(• Custos reduzidos: 35% em comparação com processos tradicionais) Tj
0 -30 Td
(3. Performance do Match IA) Tj
0 -20 Td
(• Precisão atual: ${matchIA} de acerto nas recomendações) Tj
0 -15 Td
(• Candidatos avaliados: ${Math.round(parseInt(candidatos) * 0.8)} passaram por análise psicométrica) Tj
0 -15 Td
(• Falsos positivos reduzidos: 60% com uso de IA) Tj
ET
endstream
endobj

10 0 obj
<<
/Length 800
>>
stream
BT
/F1 18 Tf
50 750 Td
(Métricas de Vagas e Tendências) Tj
0 -30 Td
/F2 12 Tf
(4. Gestão de Vagas) Tj
0 -20 Td
(• Vagas ativas: ${vagas} posições em aberto) Tj
0 -15 Td
(• Tempo médio de preenchimento: 22 dias) Tj
0 -15 Td
(• Candidatos por vaga: ${Math.round(parseInt(candidatos) / parseInt(vagas))} aplicações médias) Tj
0 -30 Td
(5. Tendências e Insights) Tj
0 -20 Td
(• Crescimento mensal: +15% em inscrições) Tj
0 -15 Td
(• Setores mais ativos: Tecnologia (40%), Vendas (25%), Administrativo (20%)) Tj
0 -15 Td
(• Habilidades mais demandadas: Comunicação, Liderança, Adaptabilidade) Tj
0 -30 Td
(6. Recomendações Estratégicas) Tj
0 -20 Td
(• Otimizar processo de triagem inicial para reduzir tempo de contratação) Tj
0 -15 Td
(• Expandir uso de testes psicométricos para melhorar precisão do Match IA) Tj
0 -15 Td
(• Implementar programa de indicação para aumentar qualidade de candidatos) Tj
0 -40 Td
/F1 14 Tf
(Relatório gerado automaticamente pela plataforma Enviagora RH) Tj
0 -20 Td
/F2 10 Tf
(Para mais detalhes, acesse o dashboard da plataforma.) Tj
ET
endstream
endobj

xref
0 11
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000123 00000 n
0000000256 00000 n
0000000389 00000 n
0000001523 00000 n
0000002647 00000 n
0000002761 00000 n
0000002875 00000 n
trailer
<<
/Size 11
/Root 1 0 R
>>
startxref
3689
%%EOF`;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;

    notification.innerHTML = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('📊 Relatórios carregados com sucesso.');