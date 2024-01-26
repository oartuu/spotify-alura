function horaDia (){
    var mensagem = document.getElementById("greeting")
    var data = new Date()
    var hora = data.getHours()

    if (hora >0 && hora < 12){
    mensagem.innerHTML = 'Bom dia'
    }else if (hora >12 && hora <18){
        mensagem.innerHTML = 'Boa tarde'
    }else{
        mensagem.innerHTML = 'Boa noite'
    }
}