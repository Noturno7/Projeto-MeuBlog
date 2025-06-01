document.addEventListener('DOMContentLoaded', () => {
    // Obtém o nome do arquivo HTML atual (ex: 'index.html', 'bem-estar.html')
    const currentPath = window.location.pathname.split('/').pop();

    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // Obtém o nome do arquivo do atributo href do link
        const linkPath = link.getAttribute('href').split('/').pop();

        // Compara o caminho atual com o caminho do link
        // A condição `(currentPath === '' && linkPath === 'index.html')`
        // é para o caso de a página inicial ser acessada sem 'index.html' na URL
        if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active'); // Adiciona a classe 'active' se for a página atual
        } else {
            link.classList.remove('active'); // Remove a classe 'active' dos outros links
        }
    });
});
