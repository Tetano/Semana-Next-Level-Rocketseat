const notaFinal = 7;

let aluna = {
    nome: 'Ana',
    nota:'8',
}

let aluno = {
    nome: 'Miguel',
    nota: '6.5',
}


var vetor = [aluna,aluno]

function verificaNota(nota){
    if(nota>=notaFinal){
        console.log("Aprovado");
    }
    else{
        console.log("Reprovado");
    }
}


for(i = 0; i<=10; i++){
    document.write(`<p>${i}</p>`)

}


