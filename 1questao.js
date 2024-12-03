let num = Number(document.getElementById("num").value)
let res = document.getElementById("res")



let matriz1 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

let matriz2 = [ [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]]

let matrizResposta = [ [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0]]

function gerarMatrizSecundaria(){
    for(let i=0; i < 7; i++){
        for(let j=0; j<7; j++){
            if(i+j == 6){
                matriz2[i][j] = num
            }else{
                matriz2[i][j] = 0
            }
        }
    }

    console.table(matriz2)
}

function gerarMatrizPrincipal(){
    for(let i=0; i < 7; i++){
        for(let j=0; j<7; j++){
            if(i == j){
                matriz1[i][j] = 7
            }else{
                matriz1[i][j] = 0
            }
        }
    }

    console.table(matriz1)
}

function somarMatriz(){
    for(let i=0; i < 7; i++){
        for(let j=0; j<7; j++){
            matrizResposta[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }

    console.table(matrizResposta)
}

gerarMatrizSecundaria()
console.log('------------------------------------')
gerarMatrizPrincipal()
console.log('------------------------------------')
somarMatriz()
