// Script para o Chat Assistente
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.querySelector('.messages');
    const messageInput = document.querySelector('.message-input');
    const sendButton = document.querySelector('.send-btn');

    const responses = {
        'oi': 'Olá! Como posso ajudar você hoje?',
        'olá': 'Olá! Como posso ajudar você hoje?',
        'ola': 'Olá! Como posso ajudar você hoje?',
        'quero enviar o meu currículo': 'Vá em configurações e envie o seu currículo. Ou se desejar envie no site da Empresa https://enviagora.com.br ou para o Linkedln www.linkedin.com/in/enviagora;',
        'enviar currículo': 'Vá em configurações e envie o seu currículo. Ou se desejar envie no site da Empresa https://enviagora.com.br ou para o Linkedln www.linkedin.com/in/enviagora;',
        'currículo': 'Vá em configurações e envie o seu currículo. Ou se desejar envie no site da Empresa https://enviagora.com.br ou para o Linkedln www.linkedin.com/in/enviagora;',
        'quero enviar meu curriculo': 'Vá em configurações e envie o seu currículo. Ou se desejar envie no site da Empresa https://enviagora.com.br ou para o Linkedln www.linkedin.com/in/enviagora;',
        'enviar meu curriculo': 'Vá em configurações e envie o seu currículo. Ou se desejar envie no site da Empresa https://enviagora.com.br ou para o Linkedln www.linkedin.com/in/enviagora;',
        'meu curriculo': 'Vá em configurações e envie o seu currículo. Ou se desejar envie no site da Empresa https://enviagora.com.br ou para o Linkedln www.linkedin.com/in/enviagora;',
        'ajuda': 'Estou aqui para ajudar! Você pode perguntar sobre candidatos, vagas, testes ou qualquer coisa relacionada ao RH.',
        'candidatos': 'Posso ajudar com informações sobre candidatos. Você quer ver estatísticas, filtrar por status ou algo específico?',
        'vagas': 'Sobre vagas: posso mostrar estatísticas, ajudar a criar novas vagas ou filtrar por nível.',
        'testes': 'Para testes: posso enviar testes para candidatos, ver resultados ou configurar novos tipos de teste.',
        'relatórios': 'Posso gerar relatórios sobre candidatos, vagas, testes e métricas gerais do sistema.',
        'organograma': 'O organograma mostra a estrutura da empresa. Posso ajudar a visualizar ou editar.',
        'configurações': 'Nas configurações você pode ajustar preferências do sistema, notificações e permissões.',
        'default': 'Desculpe, não entendi. Tente perguntar sobre candidatos, vagas, testes, relatórios, envio de currículo ou organograma.'
    };

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;

        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = `<p>${message}</p><small>agora</small>`;

        messageDiv.appendChild(content);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(message) {
        const lowerMessage = message.toLowerCase();

        for (const [key, response] of Object.entries(responses)) {
            if (key !== 'default' && lowerMessage.includes(key)) {
                return response;
            }
        }

        return responses.default;
    }

    function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;

        // Adiciona mensagem do usuário
        addMessage(message, true);

        // Limpa input
        messageInput.value = '';

        // Simula resposta do assistente após um pequeno delay
        setTimeout(() => {
            const response = getResponse(message);
            addMessage(response);
        }, 800);
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    console.log('✓ Chat Assistente loaded successfully');
});