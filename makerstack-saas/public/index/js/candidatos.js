// Script para a página de candidatos
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filter-tag');
    const rows = document.querySelectorAll('.candidatos-table tbody tr');
    const importButton = document.querySelector('.topbar .btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.textContent.toLowerCase().trim();

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            rows.forEach(row => {
                const statusBadge = row.querySelector('[data-label="Status"] .status-badge');
                const statusText = statusBadge?.textContent.toLowerCase() || '';
                
                let matches = false;

                if (filter === 'todos') {
                    matches = true;
                } else if (filter === 'aprovados') {
                    matches = statusText.includes('aprovad');
                } else if (filter === 'em análise') {
                    matches = statusText.includes('análise');
                } else if (filter === 'entrevista') {
                    matches = statusText.includes('entrevista');
                } else if (filter === 'rejeitados') {
                    matches = statusText.includes('rejeitad');
                }

                row.style.display = matches ? '' : 'none';
            });
        });
    });

    // Botão de Importar Candidatos
    if (importButton) {
        importButton.addEventListener('click', function() {
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
                max-width: 450px;
            `;
            
            popup.innerHTML = `
                <h2 style="color: var(--dark); margin-bottom: 20px;">📥 Importar Candidatos</h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">Arquivo CSV ou Excel</label>
                        <input type="file" accept=".csv, .xlsx, .xls" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">
                            <input type="checkbox" checked> Atualizar candidatos existentes
                        </label>
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
                            document.querySelector('.import-backdrop').remove();
                            alert('✓ Candidatos importados com sucesso!');
                        ">Importar</button>
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
                        " onclick="this.closest('.import-backdrop').remove();">Cancelar</button>
                    </div>
                </div>
            `;
            
            const backdrop = document.createElement('div');
            backdrop.className = 'import-backdrop';
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

    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.querySelector('.candidate-name strong')?.textContent || 'Candidato';
            const actionText = this.textContent.toLowerCase();

            if (actionText.includes('👁️') || actionText.includes('ver')) {
                alert(`Visualizando perfil de ${name}`);
            } else if (actionText.includes('📧') || actionText.includes('e-mail')) {
                alert(`Abrindo opção de envio de e-mail para ${name}`);
            } else {
                alert(`Ação acionada para ${name}`);
            }
        });
    });

    console.log('✓ Candidatos page loaded successfully');
});