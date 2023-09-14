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
        window.location.href = "pagina2.html"
    }
    if(!correctUserFinder || correctUserFinder.password !== inputPasswordValue) {
        window.alert("Usuário ou senha incorretos. Tente novamente.");
    }
    userdata(inputTextValue)
}

function exposeParagraph() {
    const paragraph = document.getElementById("detailsParagraph")
    if(paragraph.innerHTML=="FATEC Rubens Lara é uma faculdade estadual, com enfoque em tecnologia e desenvolvimento profissional."){
        paragraph.innerHTML= ""
    }
    else {
        paragraph.innerHTML = "FATEC Rubens Lara é uma faculdade estadual, com enfoque em tecnologia e desenvolvimento profissional."
    }
}

function userdata(inputTextValue){
    const dataus = [{
        nome: "Bruno Vergara",
        ra: "001",
        curso: "ADS"
    }]

    const namep = document.getElementById("pnome")
    const rap = document.getElementById("pra")
    const cursop = document.getElementById("pcurso")

    const nomed = dataus.find(dataus => dataus.nome)
    const rad = dataus.find(dataus => dataus.ra)
    const cursod = dataus.find(dataus=> dataus.curso)
    
    if(inputTextValue=="briven"){
        namep.innerHTML = nomed
        rap.innerHTML = rad
        cursop.innerHTML = cursod
    }
}