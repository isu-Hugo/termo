var palavra = ["c", "h", "o", "m", "a",];
var letras = [];


function tecla(letra){
    let id = letras.length;
    if(id == 5) return;

    let celula = document.getElementById(id);
    celula.innerHTML = letra;

    letras.push(letra)

}

function enter(){
    if(letras.length != palavra.length) return

    let ganhou = true;
    for(i in palavra){
        if (letras[i] != palavra[i]){
            ganhou = false;
        }
        

        let celula = document.getElementById(i);
        if(letras[i] == palavra[i]){
            celula.classList.add('certo');
    
        }else if(palavra.includes(letras[i])){
            celula.classList.add('tem');
        }else{
            celula.classList.add('errado');
        }

    }

    if(ganhou) alert("Parabens");

}

function del(){
    id = letras.length-1;
    if(id == -1) return;
    
    let celula = document.getElementById(id);
    console.log(celula)
    celula.innerHTML = "";
    celula.classList = 0;
    letras.pop();


}