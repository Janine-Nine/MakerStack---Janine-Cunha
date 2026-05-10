// Script para a página de vagas
document.addEventListener('DOMContentLoaded', function() {
    const levelButtons = document.querySelectorAll('.filter-btn');
    const jobCards = document.querySelectorAll('.vaga-card');
    const searchInput = document.querySelector('.search-box input');
    const applyButtons = document.querySelectorAll('.btn-candidatar');
    const createJobButton = document.querySelector('.topbar .btn');

    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const level = this.textContent.toLowerCase().trim();

            levelButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            jobCards.forEach(card => {
                const jobLevel = card.querySelector('.cargo')?.textContent.toLowerCase() || '';
                const matches = level === 'todas' || jobLevel.includes(level);
                card.style.display = matches ? 'block' : 'none';
            });
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            jobCards.forEach(card => {
                const title = card.querySelector('h2')?.textContent.toLowerCase() || '';
                const content = card.innerText.toLowerCase();
                const matches = title.includes(searchTerm) || content.includes(searchTerm);
                card.style.display = matches ? 'block' : 'none';
            });
        });
    }

    // Melhorado: Botões de candidatura
    applyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const jobTitle = this.closest('.vaga-card').querySelector('h2').textContent;
            
            // Salvar vaga no localStorage
            localStorage.setItem('selectedJob', jobTitle);
            localStorage.setItem('applyingTo', 'true');
            
            // Mostrar confirmação
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
                text-align: center;
                max-width: 400px;
            `;
            
            popup.innerHTML = `
                <h2 style="color: var(--dark); margin-bottom: 10px;">✓ Candidatura Registrada!</h2>
                <p style="color: var(--text-secondary); margin-bottom: 30px;">Você será redirecionado para completar seus dados e fazer os testes psicométricos.</p>
                <button style="
                    padding: 12px 24px;
                    background: var(--primary);
                    color: var(--dark);
                    border: none;
                    border-radius: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: 15px;
                " onclick="this.parentElement.remove(); window.location.href='testes.html';">Ir para Testes</button>
            `;
            
            document.body.appendChild(popup);
        });
    });

    // Melhorado: Botão para criar nova vaga
    if (createJobButton) {
        createJobButton.addEventListener('click', () => {
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
                <h2 style="color: var(--dark); margin-bottom: 20px;">+ Nova Vaga</h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">Título da Vaga</label>
                        <input type="text" placeholder="Ex: Desenvolvedor Frontend" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 14px; box-sizing: border-box;">
                    </div>
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">Nível</label>
                        <select style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 14px; box-sizing: border-box;">
                            <option>Júnior</option>
                            <option>Pleno</option>
                            <option>Sênior</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-weight: 700; color: var(--dark); display: block; margin-bottom: 8px;">Descrição</label>
                        <textarea placeholder="Descreva a vaga..." style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 14px; box-sizing: border-box; resize: none;" rows="4"></textarea>
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
                            document.querySelector('.backdrop').remove();
                            alert('✓ Vaga criada com sucesso!');
                        ">Criar Vaga</button>
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
                        " onclick="this.closest('.backdrop').remove();">Cancelar</button>
                    </div>
                </div>
            `;
            
            const backdrop = document.createElement('div');
            backdrop.className = 'backdrop';
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

    console.log('✓ Vagas page loaded successfully');
});