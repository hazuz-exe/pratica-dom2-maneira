function mudarcor() {
    document.getElementById('mostrarcidade').style.color = 'pink'
}

function mostrarcidade() {
    var cidade = document.getElementById('cidade').value;
    document.getElementById('mostrarcidade').innerText = cidade;
}

function incrementar() {
    var valor = parseInt(document.getElementById('numero').innerText);
    valor++;
    document.getElementById('numero').innerText = valor;
}
function decrementar() {
    var valor = parseInt(document.getElementById('numero').innerText);
    valor--;
    document.getElementById('numero').innerText = valor;
}