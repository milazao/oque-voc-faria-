const botaoExtrair = document.querySelector('#botao-extrair');

botaoExtrair.addEventListener('click', extrairTermosRelevantes);

function extrairTermosRelevantes() {
    const conteudoTexto = document.querySelector('#campo-texto').value;
    const areaResultado = document.querySelector('#resultado-termos');
    const termosRelevantes = identificarTermos(conteudoTexto);

    areaResultado.textContent = termosRelevantes.join(", ");
}

function identificarTermos(textoBruto) {
    let termosSeparados = textoBruto.split(/\P{L}+/u);
    return termosSeparados.filter(termo => termo.trim().length > 0);
}