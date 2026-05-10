// Script para Login e Registro na página index.html
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form');
    const registerForm = document.querySelector('#register-form');
    const toggleText = document.querySelector('#toggle-text');

    // Função para alternar entre login e cadastro
    window.toggleForm = function() {
        const loginDisplay = loginForm.style.display;
        const registerDisplay = registerForm.style.display;

        if (loginDisplay === 'none' || loginDisplay === '') {
            loginForm.style.display = 'none';
            registerForm.style.display = 'flex';
            toggleText.innerHTML = 'Já tem conta? <a href="#" onclick="toggleForm(); return false;">Volte ao login</a>';
        } else {
            loginForm.style.display = 'flex';
            registerForm.style.display = 'none';
            toggleText.innerHTML = 'Não tem conta? <a href="#" onclick="toggleForm(); return false;">Comece agora grátis</a>';
        }
    };

    // Função de Login
    window.handleLogin = function() {
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();

        if (!email || !password) {
            showAlert('Por favor, preencha todos os campos', 'error');
            return;
        }

        if (email.length < 5) {
            showAlert('E-mail inválido', 'error');
            return;
        }

        // Salvar dados no localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userName', email.split('@')[0]);

        showAlert('✓ Login realizado com sucesso!', 'success');

        // Redirecionar após 2 segundos
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    };

    // Função de Cadastro
    window.handleRegister = function() {
        const name = document.querySelector('#reg-name').value.trim();
        const email = document.querySelector('#reg-email').value.trim();
        const password = document.querySelector('#reg-password').value.trim();
        const confirmPassword = document.querySelector('#reg-confirm-password').value.trim();

        if (!name || !email || !password || !confirmPassword) {
            showAlert('Por favor, preencha todos os campos', 'error');
            return;
        }

        if (name.length < 3) {
            showAlert('Nome deve ter pelo menos 3 caracteres', 'error');
            return;
        }

        if (email.length < 5 || !email.includes('@')) {
            showAlert('E-mail inválido', 'error');
            return;
        }

        if (password.length < 6) {
            showAlert('Senha deve ter pelo menos 6 caracteres', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showAlert('Senhas não correspondem', 'error');
            return;
        }

        // Salvar dados no localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userLoggedIn', 'true');

        showAlert('✓ Conta criada com sucesso!', 'success');

        // Redirecionar após 2 segundos
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    };

    // Função de Google Login (simulada)
    window.loginGoogle = function() {
        showAlert('✓ Login com Google - Redirecionando...', 'success');
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userName', 'Google User');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    };

    // Função de alerta customizado
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 14px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        `;

        if (type === 'success') {
            alertDiv.style.background = '#22c55e';
            alertDiv.style.color = 'white';
        } else if (type === 'error') {
            alertDiv.style.background = '#ef4444';
            alertDiv.style.color = 'white';
        } else {
            alertDiv.style.background = '#3b82f6';
            alertDiv.style.color = 'white';
        }

        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alertDiv.remove(), 300);
        }, 3000);
    }

    // Adicionar estilos de animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('✓ Index Login page loaded successfully');
});
