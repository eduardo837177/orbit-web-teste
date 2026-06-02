document.addEventListener('DOMContentLoaded', function() {
    
    // Destacar página ativa no menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Botões assinar
    const botoesAssinar = document.querySelectorAll('.btn-assinar');
    const selectPlano = document.getElementById('planoSelecionado');
    const formAssinatura = document.getElementById('formAssinatura');
    
    botoesAssinar.forEach(btn => {
        btn.addEventListener('click', function() {
            if (selectPlano && formAssinatura) {
                const plano = this.getAttribute('data-plano');
                for (let i = 0; i < selectPlano.options.length; i++) {
                    if (selectPlano.options[i].text.includes(plano)) {
                        selectPlano.selectedIndex = i;
                        break;
                    }
                }
                formAssinatura.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Formulário de assinatura
    const subscriptionForm = document.getElementById('subscriptionForm');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            const nomeEmpresa = document.getElementById('nomeEmpresa')?.value;
            if (!nomeEmpresa) {
                e.preventDefault();
                alert('Por favor, preencha o nome da empresa!');
                return false;
            }
            alert('✅ Informações enviadas! Entraremos em contato em breve.');
        });
    }
    
    console.log('OrbitWeb carregado!');
});