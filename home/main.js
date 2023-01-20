const nome1 = document.getElementsByClassName('.cabeca');
const nome2 = document.getElementsByClassName('.principal');
const nome3 =  document.getElementsByClassName('.lado');
const nome4 =  document.getElementsByClassName('.footer');

function levarAhPaginaCabeca() {
    window.location.href = "/header/header.html";
}

function levarAhPaginaPrincipal() {
    window.location.href = "/main/main.html";
}

function levarAhPaginaLado() {
    window.location.href = "/sidebar/sidebar.html";
}

function levarAhPaginaFooter() {
    window.location.href = "/footer/footer.html";
}