// Variáveis que recebem as tarefas
const btnAdd = document.getElementById('adicionar');
const btnExcluirTodos = document.getElementById('removeAll');
const lista = document.getElementById('lista');

// Adiciona evento de clique no botão
btnAdd.addEventListener("click", function() {
    
    const tarefaInput = document.getElementById('tarefa').value;

    // Verifica se o input está vazio
    if (tarefaInput.trim() === "") {
        alert("Por favor, preencha o campo da tarefa.");
        return;
    }    

    // Adiciona item à lista criada
    const novaTarefa = document.createElement('li');
    
    const tarefaTexto = document.createElement('span');
    tarefaTexto.innerText = tarefaInput;
    novaTarefa.appendChild(tarefaTexto);
    
    novaTarefa.addEventListener('click', function() {
        novaTarefa.classList.toggle('concluida');
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';

    btnExcluir.addEventListener('click', function(){
        lista.removeChild(novaTarefa);
    });

    btnExcluir.style.marginLeft = "50px";
    
    const btnEdit = document.createElement('button');
    btnEdit.innerText = 'Editar';

    btnEdit.addEventListener('click', function() {
        // Solicita ao usuário a nova descrição da tarefa
        const novaDescricao = prompt('Digite a nova descrição da tarefa:', tarefaTexto.innerText);

        // Atualiza a descrição da tarefa somente se o usuário inserir algum valor
        if (novaDescricao !== null && novaDescricao.trim() !== "") {
            tarefaTexto.innerText = novaDescricao;
        } else if (novaDescricao !== null) {
            alert("Por favor, insira uma descrição válida para a tarefa.");
        }
    });
    
    btnEdit.style.marginLeft = "50px";

    novaTarefa.appendChild(btnExcluir);
    novaTarefa.appendChild(btnEdit);

    lista.appendChild(novaTarefa);

    document.getElementById('tarefa').value = "";

});

// Botão que exclui todos os itens da lista
btnExcluirTodos.addEventListener("click", function() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
});
