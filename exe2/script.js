function lamp(){
    var lampada = document.getElementById("lampada");
    
    if (lampada.className == "off"){
        lampada.src = "ing/lampada_on.jpg";
        lampada.className = "on";
    }else{
        lampada.src = "ing/lampada_off.jpg";
        lampada.className = "off";
    }
}