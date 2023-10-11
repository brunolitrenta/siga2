function userdata(userName) {
    console.log({userName})
    const datausers = [{
        nome: "Bruno Vergara",
        usuario: "briven",
        ra: "001",
        curso: "ADS",
        ciclo: "2°"
    },
    {
        nome: "Neneca da Silva",
        usuario: "neneca",
        ra: "002",
        curso: "ADS",
        ciclo: "2°"
    },
    ]

    const namep = document.getElementById("pnome")
    const rap = document.getElementById("pra")
    const cursop = document.getElementById("pcurso")

    const userLoged = datausers.find(datauser => datauser.usuario == userName)

    namep.innerHTML = userLoged.nome
    rap.innerHTML = userLoged.ra
    cursop.innerHTML = userLoged.curso
}

function loginAuth() {
    var usuarios = [{
        "login": "neneca",
        "senha": "auladorui"
    },
    {
        "login": "briven",
        "senha": "auladoruim"
    }]
    var usuario = document.getElementsByName('inputText')[0].value.toLowerCase();
    var senha = document.getElementsByName('inputPassword')[0].value

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location.href = "aluno.html";
            return;
        }
    }
    alert("Dados incorretos, tente novamente.");
}

function exposeParagraph() {
    const paragraph = document.getElementById("detailsParagraph")
    if (paragraph.innerHTML == "FATEC Rubens Lara é uma faculdade estadual, com enfoque em tecnologia e desenvolvimento profissional.") {
        paragraph.innerHTML = ""
    }
    else {
        paragraph.innerHTML = "FATEC Rubens Lara é uma faculdade estadual, com enfoque em tecnologia e desenvolvimento profissional."
    }
}

// var usuario = document.getElementsByName('username')[0].value.toLowerCase();
//     var senha = document.getElementsByName('password')[0].value;

//     for (var u in usuarios) {
//         var us = usuarios[u];
//         if (us.login === usuario && us.senha === senha) {
//             window.location = "index.html";
//             return true;
//         }
//     }
//     alert("Dados incorretos, tente novamente.");
//     return false;
// }

//const inputTextValue = document.querySelector("#inputText").value
//const inputPasswordValue = document.querySelector("#inputPassword").value

//const correctUserFinder = users.find(user => user.name == inputTextValue)
//if (correctUserFinder && correctUserFinder.password == inputPasswordValue) {
 //  window.location.href = "aluno.html"
        
 // }
//  if (!correctUserFinder || correctUserFinder.password !== inputPasswordValue) {
 //      window.alert("Usuário ou senha incorretos. Tente novamente.");
  //  }
// }
