document.querySelector('formulario-contato').addEventListener('submit', function (event) {
    const nome = document.querySelector('name').value;
    const email = document.querySelector('email').value;

    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('email', email);
});