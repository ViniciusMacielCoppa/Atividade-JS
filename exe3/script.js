function agua(){
    var imagem = document.getElementById("agua");

    if (imagem.className == 1){
        imagem.src = "img/agua2.png";
        imagem.style.height = "220px";
        imagem.style.width = "200px";
        imagem.className = 2;
    }
    else if(imagem.className == 2){
        imagem.src = "img/agua2.png";
        imagem.style.height = "190px";
        imagem.style.width = "200px";
        imagem.className = 3;
    }
    else if(imagem.className == 3){
        imagem.src = "img/agua2.png";
        imagem.style.height = "150px";
        imagem.style.width = "200px";
        imagem.className = 4;
    }
    else if(imagem.className == 4){
        imagem.src = "img/agua.png";
        imagem.style.height = "250px";
        imagem.style.width = "200px";
        imagem.className = 1;
    }
}



