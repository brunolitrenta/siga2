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
    const users = [{
        name: "neneca",
        password: "auladorui"

    },
    {
        name: "briven",
        password: "auladoruim"
    }]
    const inputTextValue = document.querySelector("#inputText").value
    const inputPasswordValue = document.querySelector("#inputPassword").value

    const correctUserFinder = users.find(user => user.name == inputTextValue)
    if (correctUserFinder && correctUserFinder.password == inputPasswordValue) {
        console.log(correctUserFinder.name)
        /*userdata(correctUserFinder.name)*/
        window.location.href = "aluno.html"
        
    }
    if (!correctUserFinder || correctUserFinder.password !== inputPasswordValue) {
        window.alert("Usuário ou senha incorretos. Tente novamente.");
    }
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