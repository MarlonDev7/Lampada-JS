const turnOnOff = document.getElementById("turnOnOff")

const lamp = document.getElementById("lamp") 


function isBrokenLamp(){
    return lamp.src.indexOf('quebrada') > -1

}

function lampOn (){
    if ( !isBrokenLamp ()){      // ! == negação/não
    lamp.src = "./img/ligada.jpg";
} 

}

function lampOff (){
    if( !isBrokenLamp()){
    lamp.src = "./img/desligada.jpg" 
   }
}
function brokenLamp(){
    
    lamp.src = "./img/quebrada.jpg" 
}

function lampOnOff(){
    if ( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else{
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
}


turnOnOff.addEventListener("click", lampOnOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOnOff);
lamp.addEventListener("dblclick", brokenLamp);



