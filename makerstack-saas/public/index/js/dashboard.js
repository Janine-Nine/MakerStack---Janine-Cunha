// Script para animar números no Dashboard
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card h2');

    // Valores iniciais dos cards
    const initialValues = {
        'vagas-ativas': 12,
        'candidatos-total': 87,
        'testes-concluidos': 64,
        'match-medio': 78
    };

    // Função para animar números
    function animateNumber(element, targetNum, duration = 2000) {
        const startNum = parseInt(element.textContent) || 0;
        const increment = (targetNum - startNum) / (duration / 16);
        let currentNum = startNum;

        const interval = setInterval(() => {
            currentNum += increment;
            if ((increment > 0 && currentNum >= targetNum) || (increment < 0 && currentNum <= targetNum)) {
                element.textContent = targetNum;
                clearInterval(interval);
            } else {
                element.textContent = Math.floor(currentNum);
            }
        }, 16);
    }

    // Animar números quando a página carregar
    cards.forEach(card => {
        const targetNum = parseInt(card.textContent);
        if (!isNaN(targetNum)) {
            animateNumber(card, targetNum);
        }
    });

    // Simular usuários se candidatando em tempo real
    function simulateUserActivity() {
        const activities = [
            { type: 'candidato', element: document.getElementById('candidatos-total'), increment: 1 },
            { type: 'teste', element: document.getElementById('testes-concluidos'), increment: 1 },
            { type: 'match', element: document.getElementById('match-medio'), increment: Math.random() > 0.7 ? 1 : 0 }
        ];

        // Escolher uma atividade aleatória (mais chance de candidatos)
        const weights = [0.6, 0.3, 0.1]; // 60% candidatos, 30% testes, 10% match
        const random = Math.random();
        let activityIndex = 0;
        if (random < weights[0]) activityIndex = 0;
        else if (random < weights[0] + weights[1]) activityIndex = 1;
        else activityIndex = 2;

        const activity = activities[activityIndex];
        if (activity.element) {
            const currentNum = parseInt(activity.element.textContent);
            const newNum = currentNum + activity.increment;
            animateNumber(activity.element, newNum, 1000); // Animação mais rápida

            // Atualizar atividades recentes
            updateRecentActivity(activity.type);
        }
    }

    // Atualizar lista de atividades recentes
    function updateRecentActivity(type) {
        const activityList = document.querySelector('.activity-list');
        if (!activityList) return;

        const activities = {
            candidato: { icon: '📬', text: 'Nova candidatura recebida', time: 'agora mesmo' },
            teste: { icon: '✓', text: 'Candidato concluiu teste psicométrico', time: 'há poucos minutos' },
            match: { icon: '🎯', text: 'Novo match de alta compatibilidade encontrado', time: 'agora mesmo' }
        };

        const activity = activities[type];
        if (activity) {
            const newActivity = document.createElement('li');
            newActivity.className = 'activity-item new-activity';
            newActivity.innerHTML = `
                <div class="activity-icon">${activity.icon}</div>
                <div class="activity-content">
                    <h4>${activity.text}</h4>
                    <span>${activity.time}</span>
                </div>
            `;

            // Adicionar no topo da lista
            activityList.insertBefore(newActivity, activityList.firstChild);

            // Remover atividades antigas se houver mais de 6
            const items = activityList.querySelectorAll('.activity-item');
            if (items.length > 6) {
                items[items.length - 1].remove();
            }

            // Animação de entrada
            setTimeout(() => {
                newActivity.classList.add('show');
            }, 100);

            // Remover classe 'new-activity' após animação
            setTimeout(() => {
                newActivity.classList.remove('new-activity');
            }, 3000);
        }
    }

    // Iniciar simulação de atividade a cada 3-8 segundos
    setInterval(simulateUserActivity, Math.random() * 5000 + 3000);

    // Função para abrir modal de nova vaga (melhorada)
    window.openNewVagaModal = function() {
        // Criar modal overlay
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🚀 Criar Nova Vaga</h2>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <form class="vaga-form">
                        <div class="form-group">
                            <label for="titulo">Título da Vaga</label>
                            <input type="text" id="titulo" placeholder="Ex: Desenvolvedor Full Stack Senior" required>
                        </div>
                        <div class="form-group">
                            <label for="empresa">Empresa</label>
                            <input type="text" id="empresa" placeholder="Nome da empresa" required>
                        </div>
                        <div class="form-group">
                            <label for="salario">Faixa Salarial</label>
                            <input type="text" id="salario" placeholder="Ex: R$ 8.000 - R$ 12.000">
                        </div>
                        <div class="form-group">
                            <label for="localizacao">Localização</label>
                            <input type="text" id="localizacao" placeholder="Ex: São Paulo, SP (Remoto)">
                        </div>
                        <div class="form-group">
                            <label for="tipo">Tipo de Contrato</label>
                            <select id="tipo">
                                <option value="clt">CLT</option>
                                <option value="pj">PJ</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="estagio">Estágio</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="descricao">Descrição da Vaga</label>
                            <textarea id="descricao" rows="4" placeholder="Descreva as responsabilidades, requisitos e benefícios..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn secondary" onclick="closeModal()">Cancelar</button>
                    <button class="btn primary" onclick="createVaga()">Criar Vaga</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Animação de entrada
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    };

    // Função para fechar modal
    window.closeModal = function() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    };

    // Função para criar vaga
    window.createVaga = function() {
        const titulo = document.getElementById('titulo').value;
        const empresa = document.getElementById('empresa').value;

        if (titulo && empresa) {
            // Simular criação da vaga
            alert(`✅ Vaga criada com sucesso!\n\n📋 ${titulo}\n🏢 ${empresa}\n\nA vaga será publicada e candidatos começarão a se candidatar automaticamente.`);

            // Atualizar contador de vagas ativas
            const vagasElement = document.getElementById('vagas-ativas');
            const currentVagas = parseInt(vagasElement.textContent);
            animateNumber(vagasElement, currentVagas + 1, 1000);

            closeModal();
        } else {
            alert('⚠️ Por favor, preencha pelo menos o título e empresa da vaga.');
        }
    };

    console.log('✓ Dashboard animations loaded - Simulando atividade em tempo real');
});
