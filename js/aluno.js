//var declarations
  const pnomeElement = document.getElementById('pnome')
  const praElement = document.getElementById('pra')
  const pcursoElement = document.getElementById('pcurso')
  const pcicloElement = document.getElementById('pciclo')

//function declarations
  function getUserData(){
    const usuario = JSON.parse(window.sessionStorage.getItem("usuario"))
    if(!usuario){
      alert("Dados não encontrados.")
      settimeout(()=>{window.location.href="login.html"},5000)
      return;
    }
    pnomeElement.innerText = usuario.nome;
    praElement.innerText = usuario.ra;
    pcursoElement.innerText = usuario.curso; 
    pcicloElement.innerText = usuario.ciclo;
  }

//actions
  getUserData();
