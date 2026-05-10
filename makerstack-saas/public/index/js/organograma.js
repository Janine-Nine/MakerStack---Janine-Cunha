// Script para a página de organograma
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidades básicas do organograma
    const nodes = document.querySelectorAll('.org-node');
    const expandButtons = document.querySelectorAll('.expand-btn');

    // Expandir/colapsar nós
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const node = this.closest('.org-node');
            const children = node.querySelector('.org-children');

            if (children) {
                const isExpanded = children.style.display !== 'none';
                children.style.display = isExpanded ? 'none' : 'block';
                this.textContent = isExpanded ? '+' : '-';
            }
        });
    });

    // Hover effects
    nodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

        node.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // Busca no organograma
    const searchInput = document.querySelector('.org-search input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            nodes.forEach(node => {
                const name = node.querySelector('.node-name').textContent.toLowerCase();
                const position = node.querySelector('.node-position').textContent.toLowerCase();

                if (name.includes(searchTerm) || position.includes(searchTerm)) {
                    node.style.display = 'block';
                } else {
                    node.style.display = 'none';
                }
            });
        });
    }

    console.log('Organograma page loaded successfully');
});