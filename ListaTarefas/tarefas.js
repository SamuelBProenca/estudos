// Variáveis que recebem as tarefas
const btnAdd = document.getElementById('adicionar');
const btnExcluirTodos = document.getElementById('removeAll');
const lista = document.getElementById('lista');

// Adicionar o evento de click no bnt
btnAdd.addEventListener("click", function() {
    
    const tarefaInput = document.getElementById('tarefa').value;

    // Verificando se o input está vazio
    if (tarefaInput.trim() === "") {
        alert("Por favor, preencha o campo da tarefa.");
        return;
    }    

    // Adiciona item a lista criada
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaInput;
    
    
    novaTarefa.addEventListener('click', function() {
        novaTarefa.classList.toggle('contluida');
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';

    btnExcluir.addEventListener('click', function(){
        lista.removeChild(novaTarefa);
    });

    btnExcluir.style.marginLeft = "50px";

    novaTarefa.appendChild(btnExcluir);

    lista.appendChild(novaTarefa);

    document.getElementById('tarefa').value = "";

});

// Btn que exclui todos os itens da lista
btnExcluirTodos.addEventListener("click", function() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
});

