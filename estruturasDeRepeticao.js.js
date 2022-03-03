//****************ENQUANTO-FAÇA (WHILE)**************

// cont=0

// while(cont<5){
//     if(n>50)
//   console.log('bom dia')
//     cont =cont+1}

// var n = [51, 51, 52, 70];

// let i = 0;
// quant = 0;
// while (i < n.length) {
//   if (n[i] > 50) {
//     quant = quant + 1;
//   }
//   i++;

// }

// console.log(n.length);
// console.log("numero de numeros maiores que 50: " + quant);

//****************************************** */

//***********REPITA ATE (FOR)*********************

// cont=1

// for(var i=0 ; i<5; i++){

//   console.log('ola mundo!', + cont)
//   cont++
// }

//Imprime:
// ola mundo2! 1
// ola mundo2! 2
// ola mundo2! 3
// ola mundo2! 4
// ola mundo2! 5

// cont2=5

// for(var i=0 ; i<5; i++){

//   console.log('ola mundo2!', + cont2)
//   cont2--
// }

//Imprime:
// ola mundo2! 5
// ola mundo2! 4
// ola mundo2! 3
// ola mundo2! 2
// ola mundo2! 1

//***********PARA FACA O PASSO*********************

/** Faça dois algoritmos que fazem a mesma coisa um usando:
_REPITA ATE
_Outro usando PARA-FAÇA:
ele deve mostrar na tela, um embaixo do outro, 
de 3 entre 20 y 50 todos os múltiplos **/

//repita usando while

// cont3=21
// while(cont3<50){
//     console.log(cont3, " ")
//       cont3 =cont3+3}

/**para x de 21 ate 50 passo 3 faca usando For:
 


for(var x=21;x<50;x=x+3){
 
  console.log(x)

}

/**Usando para FAÇA-ATE (FOR), desenvolva um algoritmo que solicite ao usuário 5 números e mostre sólo a média deles  */

// soma=0
// media=0

// for(n=1; n<=5;n++){
//   soma=soma+n
//   media=soma/n

// }

// console.log(soma)
// console.log(media)

/**Usando para ENQUANTO-FAÇA (WHILE), desenvolva um algoritmo que solicite ao usuário 5 números e mostre sólo amédia deles  */

var soma = 0;
var media = 0;
n = 0;

while (n <= 5) {
  soma = soma + n;
  media = soma / n;
  n = n + 1;
}

console.log(soma);
console.log(media);

//************************************ */

//Operadores lógicos-relacionales
//Operadores Lógicos e, ou e não


/*exemplo13. Uma determinada empresa realizou uma pesquisa de mercado a respeito da qualidade do seu produto. Esta empresa entrevistou homens e mulheres, perguntando somente se o cliente gostou o não do seu produto. Crie um software para calcular o índice de satisfação do cliente perante algumas regras qe estão descritas abaixo.


-O sistema devera solicitar a quntidade de pessoas entrevistadas
_O software deverá perguntar ao usuário se o cliente é mulher ou homem e , além disso, perguntar se o mesmo o mesma gostou do produto


-O software deverá apresentar:
-A quantidade de mulheres que gostaram e não gostaram do produto
-O porcentual de mulheres que gostaram do produto
-A quantidade de homens que gostaram e não gostaram do produto
-O percentual de homes que gostaram do produto
-O porcentual geral de clientes que gostaram do produto
*
Formatação para impresão na tela:
Qtd de entrevistados:4

Sexo do cliente1:F
Cliente1 gostou do produto:S

Sexo do cliente2:F
Cliente1 gostou do produto:S

Sexo do cliente2:M
Cliente1 gostou do produto:S

Sexo do cliente4:M
Cliente1 gostou do produto:S
*

var pessoas = [1, 2, 3, 4, 5, 6];
var qtd_pessoas = 0;
var sexo;
var opiniao;
var M_S_gostou = 0;
var M_N_gostou = 0;
var H_S_gostou = 0;
var H_N_gostou = 0;
var pessoa;

for (var i = 0; i <pessoas.length; i++) {

  var pessoa=pessoas[i]
  qtd_pessoas = qtd_pessoas+1;
  if (!sexo) sexo = "M";

  console.log(`sexo do cliente: ${sexo}`);
  if (!opiniao) opiniao = "S";
  console.log(`Cliente ${pessoas[i]} gostou do produto(S/N)?: ${opiniao}`);

  if (sexo == "F" && opiniao == "S") {
    M_S_gostou++;
  }

  if (sexo == "F" && opiniao == "N") {
    M_N_gostou++;
  }

  if (sexo == "M" && opiniao == "S") {
    H_S_gostou++;
  }

  if (sexo == "M" && opiniao == "N") {
    H_N_gostou++;
  }
}

console.log(`Qtd de entrevistados?: ${qtd_pessoas}`);
console.log(`mulheres que gostaram ${M_S_gostou}`);
console.log(`mulheres que não gostaram ${M_N_gostou}`);
console.log(
  ` percentual mulheres que gostaram do produto ${
    (M_S_gostou / (M_N_gostou + M_S_gostou)) * 100
  }%`
);

console.log(`homens que gostaram ${H_S_gostou}`);
console.log(`homens que não gostaram ${H_N_gostou}`);
console.log(
  ` percentual homens que gostaram do produto ${
    (H_S_gostou / (H_N_gostou + H_S_gostou)) * 100
  }%`
)
console.log(`percentual geral de clientes que gostaram do produto ${M_S_gostou+H_S_gostou/(qtd_pessoas)*100}%`);
console.log(`percentual geral de clientes que não gostaram do produto ${M_N_gostou+H_N_gostou/(qtd_pessoas)*100}%`);*/

/*Calcular la media das notas.

[12,15,17,10,11,9,19,19,18,17,15,13,11,10,12,12,14,14,15,17,10,18,17,15,13,9,18,17,15,19]

var soma=0;
var media=0;
cont=0


notas=[13,15,17,10,11,9]
for(var i=0;i<notas.length;i++){
    soma=soma+notas[i]
 
}

media=soma/(notas.length)

for(x=0;x<notas.length;x++){
       
    if(notas[x]>=media){
        
        cont=cont+1
    }
    
 }

 console.log(Math.round(media))
 console.log(cont + ' aprovado(s)')

 **/

/**
  
//exemplo1
for (n = 1; n <= 9; n++) {
  fazerLinhas();
}

function fazerLinhas() {
  console.log("___________");
}

//exemplo2
function fazerTracinhos() {
  let contador = 1;
  let traço = "_";

  while (contador < 25) {
      
    traço += "_";
    contador = contador + 1;
  }
  console.log(traço);
}

fazerTracinhos();

  */
