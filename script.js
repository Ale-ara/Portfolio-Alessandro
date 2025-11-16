const links = document.querySelectorAll('header nav a, .btn-saiba');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // evita o redirecionamento instantâneo
        const href = link.href;

        // adiciona a classe de fade-out no body
        document.body.classList.add('fade-out');

        // depois do tempo do fade, redireciona
        setTimeout(() => {
            window.location.href = href;
        }, 600); // tempo igual ao do CSS
    });
});
