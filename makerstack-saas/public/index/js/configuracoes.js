// Script para a página de configurações
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade para salvar dados do candidato
    const saveCandidateBtn = document.getElementById('save-candidate-data');
    if (saveCandidateBtn) {
        saveCandidateBtn.addEventListener('click', () => {
            const candidateData = {
                name: document.getElementById('candidate-name').value.trim(),
                email: document.getElementById('candidate-email').value.trim(),
                cpf: document.getElementById('candidate-cpf').value.trim(),
                city: document.getElementById('candidate-city').value.trim(),
                cep: document.getElementById('candidate-cep').value.trim(),
                state: document.getElementById('candidate-state').value
            };

            // Validações
            if (!candidateData.name || !candidateData.email || !candidateData.cpf || !candidateData.city || !candidateData.cep || !candidateData.state) {
                showNotification('Preencha todos os dados do candidato.', 'error');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(candidateData.email)) {
                showNotification('Digite um e-mail válido.', 'error');
                return;
            }

            // Validar CPF (formato básico)
            const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
            if (!cpfRegex.test(candidateData.cpf.replace(/\D/g, ''))) {
                showNotification('Digite um CPF válido (11 dígitos).', 'error');
                return;
            }

            // Validar CEP
            const cepRegex = /^\d{5}-?\d{3}$/;
            if (!cepRegex.test(candidateData.cep.replace(/\D/g, ''))) {
                showNotification('Digite um CEP válido.', 'error');
                return;
            }

            // Salvar no localStorage
            localStorage.setItem('candidateData', JSON.stringify(candidateData));
            showNotification('Dados do candidato salvos com sucesso!', 'success');

            // Limpar formulário após salvar
            document.getElementById('candidate-name').value = '';
            document.getElementById('candidate-email').value = '';
            document.getElementById('candidate-cpf').value = '';
            document.getElementById('candidate-city').value = '';
            document.getElementById('candidate-cep').value = '';
            document.getElementById('candidate-state').value = '';
        });
    }

    // Funcionalidade para salvar dados da empresa
    const saveCompanyBtn = document.getElementById('save-company-data');
    if (saveCompanyBtn) {
        saveCompanyBtn.addEventListener('click', () => {
            const companyData = {
                name: document.getElementById('company-name').value.trim(),
                email: document.getElementById('company-email').value.trim(),
                description: document.getElementById('company-description').value.trim()
            };

            if (!companyData.name || !companyData.email || !companyData.description) {
                showNotification('Preencha todos os dados da empresa.', 'error');
                return;
            }

            // Validar email da empresa
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(companyData.email)) {
                showNotification('Digite um e-mail válido para a empresa.', 'error');
                return;
            }

            localStorage.setItem('companyData', JSON.stringify(companyData));
            showNotification('Dados da empresa salvos com sucesso!', 'success');
        });
    }

    // Funcionalidade para alterar senha
    const changePasswordBtn = document.getElementById('change-password');
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', () => {
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!newPassword || !confirmPassword) {
                showNotification('Preencha ambos os campos de senha.', 'error');
                return;
            }

            if (newPassword !== confirmPassword) {
                showNotification('As senhas não coincidem.', 'error');
                return;
            }

            if (newPassword.length < 6) {
                showNotification('A senha deve ter pelo menos 6 caracteres.', 'error');
                return;
            }

            // Simular alteração de senha
            localStorage.setItem('userPassword', newPassword);
            showNotification('Senha alterada com sucesso!', 'success');

            // Limpar campos
            document.getElementById('new-password').value = '';
            document.getElementById('confirm-password').value = '';
        });
    }

    // Funcionalidade para confirmar senha nova
    const confirmPasswordBtn = document.getElementById('confirm-new-password');
    if (confirmPasswordBtn) {
        confirmPasswordBtn.addEventListener('click', () => {
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!newPassword || !confirmPassword) {
                showNotification('Preencha ambos os campos de senha.', 'error');
                return;
            }

            if (newPassword !== confirmPassword) {
                showNotification('As senhas não coincidem.', 'error');
                return;
            }

            if (newPassword.length < 6) {
                showNotification('A senha deve ter pelo menos 6 caracteres.', 'error');
                return;
            }

            // Confirmar e salvar senha
            localStorage.setItem('userPassword', newPassword);
            showNotification('Nova senha confirmada e salva com sucesso!', 'success');

            // Limpar campos
            document.getElementById('new-password').value = '';
            document.getElementById('confirm-password').value = '';
        });
    }

    // Funcionalidade para salvar preferências
    const savePreferencesBtn = document.getElementById('save-preferences');
    if (savePreferencesBtn) {
        savePreferencesBtn.addEventListener('click', () => {
            const preferences = {
                emailNotifications: document.getElementById('email-notifications').checked,
                weeklyReports: document.getElementById('weekly-reports').checked,
                dataSharing: document.getElementById('data-sharing').checked
            };

            localStorage.setItem('userPreferences', JSON.stringify(preferences));
            showNotification('Preferências salvas com sucesso!', 'success');
        });
    }

    // Carregar dados salvos ao carregar a página
    loadSavedData();

    console.log('⚙️ Configurações carregadas com sucesso.');
});
    // Carregar dados do candidato
    const candidateData = localStorage.getItem('candidateData');
    if (candidateData) {
        const data = JSON.parse(candidateData);
        document.getElementById('candidate-name').value = data.name || '';
        document.getElementById('candidate-email').value = data.email || '';
        document.getElementById('candidate-cpf').value = data.cpf || '';
        document.getElementById('candidate-city').value = data.city || '';
        document.getElementById('candidate-cep').value = data.cep || '';
        document.getElementById('candidate-state').value = data.state || '';
    }

    // Carregar dados da empresa
    const companyData = localStorage.getItem('companyData');
    if (companyData) {
        const data = JSON.parse(companyData);
        document.getElementById('company-name').value = data.name || '';
        document.getElementById('company-email').value = data.email || '';
        document.getElementById('company-description').value = data.description || '';
    }

    // Carregar preferências
    const preferences = localStorage.getItem('userPreferences');
    if (preferences) {
        const data = JSON.parse(preferences);
        document.getElementById('email-notifications').checked = data.emailNotifications !== false;
        document.getElementById('weekly-reports').checked = data.weeklyReports !== false;
        document.getElementById('data-sharing').checked = data.dataSharing || false;
    }
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
);

const changePasswordBtn = document.querySelector(
  '.settings-section:nth-child(2) .btn'
);

changePasswordBtn.addEventListener('click', () => {

  const password = securityInputs[0].value;
  const confirmPassword = securityInputs[1].value;

  if (
    password === '' ||
    confirmPassword === ''
  ) {
    showNotification(
      'Preencha os campos de senha.',
      'error'
    );
    return;
  }

  if (password.length < 6) {
    showNotification(
      'A senha deve ter no mínimo 6 caracteres.',
      'error'
    );
    return;
  }

  if (password !== confirmPassword) {
    showNotification(
      'As senhas não coincidem.',
      'error'
    );
    return;
  }

  localStorage.setItem(
    'empresaSenha',
    password
  );

  showNotification(
    'Senha alterada com sucesso!',
    'success'
  );

  securityInputs[0].value = '';
  securityInputs[1].value = '';

});

const preferenceCheckboxes = document.querySelectorAll(
  '.settings-section:nth-child(3) input[type="checkbox"]'
);

const savePreferencesBtn = document.querySelector(
  '.settings-section:nth-child(3) .btn'
);

savePreferencesBtn.addEventListener('click', () => {

  const preferences = {
    notificacoes: preferenceCheckboxes[0].checked,
    relatorios: preferenceCheckboxes[1].checked,
    compartilharDados: preferenceCheckboxes[2].checked
  };

  localStorage.setItem(
    'preferenciasEmpresa',
    JSON.stringify(preferences)
  );

  showNotification(
    'Preferências salvas com sucesso!',
    'success'
  );

});

window.addEventListener('DOMContentLoaded', () => {

  // EMPRESA
  const empresaNome = localStorage.getItem('empresaNome');
  const empresaEmail = localStorage.getItem('empresaEmail');
  const empresaDescricao = localStorage.getItem('empresaDescricao');

  if (empresaNome) {
    companyInputs[0].value = empresaNome;
  }

  if (empresaEmail) {
    companyInputs[1].value = empresaEmail;
  }

  if (empresaDescricao) {
    companyInputs[2].value = empresaDescricao;
  }

  // PREFERÊNCIAS
  const preferencesSaved = localStorage.getItem(
    'preferenciasEmpresa'
  );

  if (preferencesSaved) {

    const preferences = JSON.parse(
      preferencesSaved
    );

    preferenceCheckboxes[0].checked =
      preferences.notificacoes;

    preferenceCheckboxes[1].checked =
      preferences.relatorios;

    preferenceCheckboxes[2].checked =
      preferences.compartilharDados;
  }

});

function showNotification(message, type) {

  const notification = document.createElement('div');

  notification.classList.add(
    'notification',
    type
  );

  notification.innerHTML = `
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  setTimeout(() => {

    notification.classList.remove('show');

    setTimeout(() => {
      notification.remove();
    }, 300);

  }, 3000);

}

const style = document.createElement('style');

style.innerHTML = `

.notification{
  position:fixed;
  top:25px;
  right:25px;
  padding:16px 22px;
  border-radius:14px;
  color:white;
  font-weight:600;
  font-size:14px;
  z-index:9999;
  transform:translateX(120%);
  transition:0.4s ease;
  box-shadow:0 10px 25px rgba(0,0,0,0.15);
}

.notification.show{
  transform:translateX(0);
}

.notification.success{
  background:#22c55e;
}

.notification.error{
  background:#ef4444;
}

`;

document.head.appendChild(style);

function toggleDarkMode() {

  document.body.classList.toggle('dark-mode');

}

console.log(
  '⚙️ Configurações carregadas com sucesso.'
);
