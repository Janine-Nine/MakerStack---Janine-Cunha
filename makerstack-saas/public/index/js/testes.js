// Script para a página de testes
document.addEventListener('DOMContentLoaded', function() {
    // Valores iniciais dos cards de métricas
    const initialValues = {
        'links-ativos': 23,
        'testes-concluidos': 64,
        'testes-pendentes': 18,
        'testes-expirados': 2
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
    Object.keys(initialValues).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            animateNumber(element, initialValues[id]);
        }
    });

    // Simular usuários concluindo testes em tempo real
    function simulateTestActivity() {
        const activities = [
            { id: 'links-ativos', increment: 1, description: 'Novo link de teste enviado' },
            { id: 'testes-concluidos', increment: 1, description: 'Teste concluído por candidato' },
            { id: 'testes-pendentes', increment: -1, description: 'Candidato iniciou teste pendente' },
            { id: 'testes-expirados', increment: 0, description: 'Teste expirado reenviado' }
        ];

        // Escolher atividade aleatória com pesos diferentes
        const weights = [0.3, 0.4, 0.2, 0.1]; // 30% novos links, 40% concluídos, 20% pendentes, 10% expirados
        const random = Math.random();
        let activityIndex = 0;
        if (random < weights[0]) activityIndex = 0;
        else if (random < weights[0] + weights[1]) activityIndex = 1;
        else if (random < weights[0] + weights[1] + weights[2]) activityIndex = 2;
        else activityIndex = 3;

        const activity = activities[activityIndex];
        const element = document.getElementById(activity.id);

        if (element) {
            const currentNum = parseInt(element.textContent);
            let newNum = currentNum + activity.increment;

            // Garantir que números não fiquem negativos
            if (newNum < 0) newNum = 0;

            animateNumber(element, newNum, 1000); // Animação mais rápida

            // Log da atividade (opcional para debug)
            console.log(`📊 ${activity.description}: ${currentNum} → ${newNum}`);
        }
    }

    // Iniciar simulação de atividade a cada 4-10 segundos
    setInterval(simulateTestActivity, Math.random() * 6000 + 4000);

    const typeButtons = document.querySelectorAll('.test-filter');
    const testRows = document.querySelectorAll('.testes-table tbody tr');
    const sendTestButton = document.querySelector('.topbar .btn');

    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            typeButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');

            // Se for o botão "Todos", mostrar todas as linhas
            if (this.textContent.includes('Todos')) {
                testRows.forEach(row => {
                    row.style.display = '';
                });
                return;
            }

            // Para outros filtros, filtrar por tipo
            const filterType = this.textContent.toLowerCase().trim();
            testRows.forEach(row => {
                const rowType = row.querySelector('[data-label="Tipo"]')?.textContent.toLowerCase() || '';
                const matches = rowType.includes(filterType);
                row.style.display = matches ? '' : 'none';
            });
        });
    });

    // Adicionar funcionalidade aos botões de ação
    const testActionButtons = document.querySelectorAll('.test-action-btn');
    testActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const candidateName = row.querySelector('[data-label="Candidato"] strong')?.textContent || 'Candidato';
            const testType = row.querySelector('[data-label="Tipo"]')?.textContent || 'Teste';
            const buttonText = this.textContent.toLowerCase();

            if (buttonText.includes('👁️') || buttonText.includes('ver')) {
                // Mostrar resultados do teste
                const popup = document.createElement('div');
                popup.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    z-index: 1000;
                    width: 90%;
                    max-width: 500px;
                    max-height: 80vh;
                    overflow-y: auto;
                `;
                
                popup.innerHTML = `
                    <h2 style="color: var(--dark); margin-bottom: 10px;">📊 Resultados - ${candidateName}</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 30px;">${testType}</p>
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div style="padding: 15px; background: #f0f9ff; border-left: 4px solid var(--primary); border-radius: 8px;">
                            <h4 style="margin: 0 0 10px 0; color: var(--dark);">DISC</h4>
                            <p style="margin: 0; color: var(--text-secondary);">Perfil Identificado: Dominante / Influenciador</p>
                        </div>
                        <div style="padding: 15px; background: #fef3c7; border-left: 4px solid #fbbf24; border-radius: 8px;">
                            <h4 style="margin: 0 0 10px 0; color: var(--dark);">Eneagrama</h4>
                            <p style="margin: 0; color: var(--text-secondary);">Tipo 3: O Realizador</p>
                        </div>
                        <div style="padding: 15px; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 8px;">
                            <h4 style="margin: 0 0 10px 0; color: var(--dark);">16 Personalidades</h4>
                            <p style="margin: 0; color: var(--text-secondary);">INTJ: O Arquiteto</p>
                        </div>
                    </div>
                    <button style="
                        margin-top: 30px;
                        width: 100%;
                        padding: 12px;
                        background: var(--primary);
                        color: var(--dark);
                        border: none;
                        border-radius: 12px;
                        font-weight: 700;
                        cursor: pointer;
                        font-size: 15px;
                    " onclick="this.closest('.test-backdrop').remove();">Fechar</button>
                `;
                
                const backdrop = document.createElement('div');
                backdrop.className = 'test-backdrop';
                backdrop.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 999;
                `;
                backdrop.appendChild(popup);
                backdrop.addEventListener('click', (e) => {
                    if (e.target === backdrop) backdrop.remove();
                });
                
                document.body.appendChild(backdrop);
            } else if (buttonText.includes('📊') || buttonText.includes('relatório')) {
                alert(`✓ Gerando relatório de ${testType} para ${candidateName}...`);
            } else if (buttonText.includes('⏱️') || buttonText.includes('lembrete')) {
                alert(`✓ Lembrete enviado para ${candidateName}`);
            } else if (buttonText.includes('🔗') || buttonText.includes('reenviar')) {
                alert(`✓ Link de teste reenviado para ${candidateName}`);
            }
        });
    });

    // Botão de Enviar Teste
    if (sendTestButton) {
        sendTestButton.addEventListener('click', function() {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                z-index: 1000;
                width: 90%;
                max-width: 500px;
            `;
            
            popup.innerHTML = `
                <h2 style="color: var(--dark); margin-bottom: 20px;">+ Enviar Teste</h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">Selecionar Candidatos</label>
                        <textarea placeholder="Cole emails dos candidatos..." style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 14px; box-sizing: border-box; resize: none;" rows="4"></textarea>
                    </div>
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">Tipo de Teste</label>
                        <select style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 14px; box-sizing: border-box;">
                            <option>DISC + Eneagrama</option>
                            <option>DISC + 16 Personalidades</option>
                            <option>Eneagrama</option>
                            <option>16 Personalidades</option>
                            <option>Todos</option>
                        </select>
                    </div>
                    <div style="display: flex; gap: 15px;">
                        <button style="
                            flex: 1;
                            padding: 12px;
                            background: var(--primary);
                            color: var(--dark);
                            border: none;
                            border-radius: 12px;
                            font-weight: 700;
                            cursor: pointer;
                            font-size: 15px;
                        " onclick="
                            document.querySelector('.send-test-backdrop').remove();
                            alert('✓ Testes enviados com sucesso!');
                        ">Enviar</button>
                        <button style="
                            flex: 1;
                            padding: 12px;
                            background: #e5e7eb;
                            color: var(--dark);
                            border: none;
                            border-radius: 12px;
                            font-weight: 700;
                            cursor: pointer;
                            font-size: 15px;
                        " onclick="this.closest('.send-test-backdrop').remove();">Cancelar</button>
                    </div>
                </div>
            `;
            
            const backdrop = document.createElement('div');
            backdrop.className = 'send-test-backdrop';
            backdrop.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 999;
            `;
            backdrop.appendChild(popup);
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) backdrop.remove();
            });
            
            document.body.appendChild(backdrop);
        });
    }

    console.log('✓ Testes page loaded successfully');
});