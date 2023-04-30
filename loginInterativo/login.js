/*function send() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    else{
        alert('Por favor, preencha todos os campos...');
        document.getElementById('nome').focus();
    }

}*/

function darkmode() {
    document.getElementById('btnLog').addEventListener('click', function() {
        //document.getElementsById('btnReg').style.backgroundColor = 'red';
        var container = document.getElementsById('btnReg');
        if (container.style.backgroundColor === 'black') {
            container.style.backgroundColor = 'white';
        } else {
            container.style.backgroundColor = 'black';
        }

    });
}