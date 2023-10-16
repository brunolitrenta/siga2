function userdata(username) {
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
    {
        nome: "Guilherme Heineken",
        usuario: "bigas",
        ra: "003",
        curso: "Preguiçoso",
        ciclo: "Todo dia ele cicla"
    },
    {
        nome: "Mestre Miyagui",
        usuario: "walterwhite",
        ra: "009",
        curso: "Amor",
        ciclo: "Infinito"
    },     
    {
        nome: "Greis Lukaku",
        usuario: "greis",
        ra: "004",
        curso: "Ídolo",
        ciclo: "Todos"
    }            
    ]

    const user = datausers.find(user => user.usuario == username)
    return user
}

function loginAuth() {
    var usuarios = [{
        "login": "neneca",
        "senha": "auladorui"
    },
    {
        "login": "briven",
        "senha": "auladoruim"
    },
    {
        "login": "bigas",
        "senha": "adeptodosuco"
    },
    {
        "login": "walterwhite",
        "senha": "camisanove"
    },
    {
        "login": "greis",
        "senha": "igualopele"
    }              
    ]
    var usuario = document.getElementsByName('inputText')[0].value.toLowerCase();
    var senha = document.getElementsByName('inputPassword')[0].value

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            const user = userdata(usuario);
            if(!user){
                alert("Usuário não encontrado, tente novamente.");
                return;
            }
            window.sessionStorage.setItem("usuario",JSON.stringify(user));
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
