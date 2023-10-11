//var declarations
  const pnomeElement = document.getElementById('pnome')

//function declarations
  function getUserData(){
    const usuario = JSON.parse(window.sessionStorage.getItem("usuario"))
    if(!usuario){
      alert("Dados não encontrados.")
      settimeout(()=>{window.location.href="login.html"},5000)
      return;
    }
  pnome.innerText = usuario.nome;
    
  }

//actions
  getUserData();
