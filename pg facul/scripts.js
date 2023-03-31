let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => 
{
  event.preventDefault();

  if (!formulario.checkValidity())
  {
    alert("Por favor, preencha todos os campos corretamente")
    return;
  }

  let palavra = document.getElementById("palavra").value;
  let cor = document.getElementById("cor").value;

  document.getElementById("palavras").innerHTML += `<p class="item" style="background-color: ${cor}">${palavra}</p>`;
  formulario.reset();
  document.getElementById("palavra").focus();
});


let botao = document.getElementById("botao");

botao.addEventListener("submit", (event) => 
{
  event.preventDefault();
  let palavra = document.getElementById("palavra").value;
  let cor = document.getElementById("cor").value;
                  
  document.getElementById("palavras").innerHTML += `<p class="item" style="background-color: ${cor}">${palavra}</p>`;
  document.getElementById("formulario").reset();
  document.getElementById("palavra").focus();

  if (palavra === "" || cor ==="")
  {
    alert("Por favor, preencha todos os campos")
  }

});
        


      