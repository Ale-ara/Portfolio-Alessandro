const btnSaiba = document.querySelector('.btn-saiba');

if (btnSaiba) {
    btnSaiba.addEventListener('click', function(e) {
        e.preventDefault(); // evita o redirecionamento instantâneo
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = btnSaiba.href;
        }, 600); // duração do fade-out
    });
}
