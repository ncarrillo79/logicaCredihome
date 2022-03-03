//exercício 28
// var valor1=6
// var valor2=8
// var valor3=7

// if(valor1>valor2 && valor1>valor3){
//     console.log('la valor 1 es mayor, esta es : ' + valor1)
// }else {
//     if(valor2>valor3){
//     console.log('el la valor2 es mayor, esta es: ' + valor2)
//     }else{
//         console.log('la valor3 es mayor es, esta es ' + valor3)
//     }
// }

//exercício 29. ler tres valores e escrever a soma dos dois maiores.
// var v1 = 10;
// var v2 = 8;
// var v3 = 13;

//   if (v1 > v2 && v1 > v3) {

//     var maior1=v1
//     }

//   if (v2 > v3)  {
//       var maior2=v2
//   }else
//     var maior2=v3



//     if (v2 > v1 && v2 > v3) ;{
//         maior1=v2;
//     }

// 	   if (v1 > v3) {
//         maior2=v1
//        } else {
//         maior2=v3;
//        }

// if (v3 > v2 && v3 > v1); {

// 	   maior1=v3;

// 	   if (v2 > v1) {
//         maior2=v2

//        }else {
//         maior2=v1;
//        }
//     }

// soma=maior1+maior2;

// console.log(soma);

//exercício 30. ler tres valores e escreve-los em ordem decrescente.

//estrutura de repetição (enquanto --- faca)

// cont=2
// while(cont<8){
//     console.log('bom dia')
//     cont=cont+1
// }

//exercício 50. Escreva um algoritmo para imprimir os numeros de 1 (inclusive) a 10(inclusive) em ordem crescente.

// for(i=1; i<=10 ;i++){
//   console.log(i)
// }

//exercício 51. Escreva um algoritmo para imprimir os numeros de 1 (inclusive) a 10(inclusive) em ordem decrescente.

//metodo FAÇA-ATE (For)
// for(var k=15;k>=0;k--){
//   console.log('aja'+k)
// }

//exercício 52. Escreva um algoritmo, os 10 primeiros numeros inteiros maiores que 100

// var cont4=0
// var numero=100
// while(cont4 <=10) {
//   if(numero>100)
//   console.log(numero)
//   numero++
//   cont4 = cont4+1

//  }
//Estructura de seleção aninhada
// exemplo 1
// var nota1=7
// var nota2 = 6function fazerTracinhos() {
  let contador = 1;
  let traço = "_";

  while (contador < 25) {
      
    traço += "_";
    contador = contador + 1;
  }
  console.log(traço);


fazerTracinhos();
// var nota3=7
// var promedio=(nota1+nota2+nota3)/3

// if (promedio>=7){
//     console.log('Bom')

// }else{
//     if(promedio>=6){
//         console.log('regular')
//     }else{
//         console.log('não deu certo')
//     }
// }. Considere que N será sempre maior que ZERO

// var N = 5;

// for (i = 1; i <= N; i++) {
//   if (N > var i;
//   if(n>0){
//     for(var i = 0; i <= n; i ++){

//       console.log(i)
//       }
//   }else{
//   console.log('digite outro valor para N')

//   }

// exercício 55.Escreva um algoritmo que calcule e imprima a tabuada do 8 (1al 10)

//  for(var i=0;i<=10; i++ ){

//    resultado= i*8

//    console.log(`8 x ${i} = ${resultado}`)
//  }
// exercício 56. Ler um valor inteiro(aceitar somente valores entre 1 e 10) e escrever tabuada de 1 a 10 do valor lido.
// N=5

//  for(var i=0;i<=10; i++ ){

//   resultado= N*i

//   console.log(`${N} x ${i} = ${resultado}`)
// }

//exercício 57. Reescreva o exercício 50 utilizando a estrutura REPITA e um contador. (Exe 50  Escreva um algoritmo para imprimir os numeros de 1 (inclusive) a 10(inclusive) em ordem crescente.)

// cont5 = 1;

// for (var i = 1; i <= 10; i++) {
//   console.log(cont5);
//   cont5 = cont5 + 1;
// }

//exercício 58.Reescreva o exercício 51 utilizando a estrutura ENQUANTO e um CONTADOR.
//(exercício 51. Escreva um algoritmo para imprimir os numeros de 1 (inclusive) a 10(inclusive) em ordem decrescente.)

//  var cont3 = 10

//  while(cont3 >= 0) {

//     console.log(cont3)
//     cont3 = cont3 -1

//    }

//exercício 59.Ler 10 valore e escrever cuantos desses valores são NEGATIVOS

// numeroDeNegativos=0
// negativos=[1,2,-4,5,-9,-8,-3,7]

// for(var i=0;i<negativos.length;i++){
//   if(negativos[//Estructura de seleção aninhada
// exemplo 1
// var nota1=7
// var nota2 = 6
// var nota3=7
// var promedio=(nota1+nota2+nota3)/3

// if (promedio>=7){
//     console.log('Bom')

// }else{
//     if(promedio>=6){
//         console.log('regular')
//     }else{
//         console.log('não deu certo')
//     }
// }, 4, 8, 5, 2, 9, 1, 3, 4];
// total_valores = 0;
// for (var i = 0; i < valores.length; i++) {
//   total_valores = total_valores + valores[i];
//   var media = total_valores / 10;

//   console.log(media);
// }

//exercício 62. Ler o número de alunos existentes em uma turma e, ápos isto ler as notas destes alunos, calcular e escrever a média aritmética dessas notas lidas

// notas = [17, 16, 4, 18, 11, 17, 13, 11, 12, 14];

// var total_notas = 0;
// var num_alunos = 10;

// for (var i = 0; i < notas.length; i++) {
//   total_notas = total_notas + notas[i];

// }
// var media2 = total_notas / num_alunos;
// console.log(media2);

//exercício 63.Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10 números lidos.

// numeros = [7, 1, 4, 8, 1, 7, 3, 1, 2, 4];

// var total_numeros = 0;

// for (var i = 0; i < numeros.length; i++) {
//   total_numeros = total_numeros + numeros[i];

// }`
// var somaT = 0;

// for (var valor1 = 5; valor1 <= 10; valor1++) {
//   var valor2 = valor1;
//   somaT=somaT+valor2
// }// var código=[a,b,c,d,e,f,g]a deve-se testá-los

// var soma = 0;
// cont = 15;

// while (cont <= 20) {
//   for (var valor1 = 20; valor1 >= 15; valor1--) {
//     valor2 = valor1;
//     soma = soma + valor2;
//     cont = cont + 1;
//   }
//   console.log("*******************");
//   console.log("resultado1", soma);
// }

// var soma2 = 0;
// cont = 15;

// while (cont <= 20) {
//   for (var i = 15; i <= 20; i++) {
//     valor2 = i;
//     soma2 = soma2 + valor2;
//     cont = cont + 1;
//   }
//   console.log("*******************");
//   console.log("resultado2", soma);
//   console.log("*******************")
// }
//exercício 67. Faça um algoritmo que calcule e escreva a media aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

// total_valores = 0;

// for (var i = 15; i <=100;i++) {
//   total_valores = total_valores + (i);
//   var med// var código=[a,b,c,d,e,f,g]
/*Exercício 68. Uma loja está levantando o valor total de todas as mercadorías dem estoque.Escreva um algritmo que permita a entrada das seguintes informações : 
a) o número total de mercadorías no estoque
b) o valor de cada mercadoria
Ao final, imprimir o valor total em estoque e a média de valor das mercadorias em estoque*/

// var total_estoque = 0;

// valor_mercadorias = [15, 18, 49, 20, 56, 4, 56, 23, 90, 34, 12];

// for (i = 0; i < valor_mercadorias.length; i++) {
//   total_estoque = total_estoque + valor_mercadorias[i];
// }

// media_valor_mercadorias = total_estoque / valor_mercadorias.length;

// console.log(`O valor total em estoque é: ${Math.round(total_estoque)}`);
// console.log(
//   `A media de valor por mercadoria em estoque é, ${Math.round(
//     media_valor_mercadorias
//   )}`
// );

/*Exercício 69.O mesmo exercício anterior, mas agora não será informado o ńumero de mercadorias em estoque. Então o funcionamento deverá ser da seguinte forma: ler o valor da mercadoria e perguntar "ḾAIS MERCADORIAS (S/N?)". Ao final, imprimir o valor total em estoque e a média de valor das mercadorias em estoque */

// console.log("*********NAO FUNCIONA AINDA************");

// num_mercadorias = 0;
// total_valor_estoque = 0;
// valor_unit_mercadoria = [30,15,12,4];
// Mais_mercadorias = "N";

//   for(i=0; i<valor_unit_mercadoria.length;i++){
//     total_valor_comprado = valor_unit_mercadoria[i];
//     total_valor_estoque = total_valor_estoque + total_valor_comprado;
//     num_mercadorias = num_mercadorias + 1;
//   }

//   if (Mais_mercadorias = "N") {
//     console.log(
//       `O valor total em estoque é: ${Math.round(total_valor_estoque)}`
//     );
//     console.log(
//       `O número de mercadorias em estoque é, ${Math.round(num_mercadorias)}`
//     );
// }

//Exercícios 70 ao 73 utilizar Maior e Menor*******
/*Exercício 70.Faça um programa que leia 100 valores e no final , escreva o maior e o menor valor lido */

// var numeros = [
//   -9, 0, -500, -3, 9, 1057, 1,
//   -4,
// ];

// maior = 0;
// menor = 0;

// for (var i = 0; i <= numeros.length; i++) {
//   if (numeros[i] >= maior) {
//     maior = numeros[i];
//     console.log("A pasei para maior", maior);
//   } else {
//     if (numeros[i] <= menor) {
//       menor = numeros[i];
//       console.log("B pasei para menor", menor);
//     }
//   }
// }

// console.log(maior);
// console.log(menor);

/*Exercício 71.Faça um algoritmo para ler uma quantidade e seguir ler a quantidade de números. Depois de ler todos os números o algoritmo deve apresentar na tela o maior dos numeros lidos e a média dos numeros lidos*/

// var numeros = [
//      9, 500, 3`
//   var numero;
//   soma=0

//   for(var i = 0; i < numeros.length; i++){

//     soma=soma+numeros[i]

//       numero = numeros[i];

//       if(numero > maior){
//           maior = numero;
//       }

// if (!menor) menor = numero
//       if(numero < menor){
//           menor = numero;

//       }

//   }

//   media=soma/numeros.length

//   console.log(`A média é: ${Math.round(media)}`)
//   console.log(`O menor número  é:  ${menor}`);
//   console.log(`O maior número é: ${maior}`);

/*Exercício 72.Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever:
  
  -o maior preço lido

  -a média aritmética dos preços dos produtos*/

// var produtos = [9, 500, 3, 9, 1057, 1, 0];
// var código=[a,b,c,d,e,f,g]

// var maior = 0;
// var menor;
// var produto;
// soma = 0;

// for (var i = 0; i < produtos.length; i++) {
//   soma = soma + produtos[i];

//   produto = produtos[i];

//   if (produto > maior) {
//     maior = produto;
//   }

//   if (!menor) menor = produto;
//   if (produto < menor) {
//     menor = produto;
//   }
// }

// media = soma / produtos.length;

// console.log(`A média é: ${Math.round(media)}`);
// console.log(`O menor número  é:  ${menor}`);
// console.log(`O maior número é: ${maior}`);

/*Exercício 73. A prefeitura d euma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmo para coletar dados sobre o salário e 'numero de filhos de cada habitante e após as leituras escrever:
a) Média de salário
b) Media do numero de filhos
c) Percentual de pessoas com salario menor que R$ 150

Obs. :O final da leituras dos dados se dará com a entrada de um salário negativo*/

// var salarios = [90, 500, 1450, 10, -150, 1000, 130];
// var filhos = [2, 5, 3, 4, 2, 10, 3];

// var media_salario;
// var soma_salario = 0;
// var maior_salario = 0;
// var salario_menor150 = 0;
// var salario;
// var numero_filhos;
// var soma_filhos = 0;
// var media_filhos;
// var salario_negativo=0

// for (var i = 0; i < salarios.length; i++) {
//   if (salario <= 0) {
//     console.log(`Entrada não permitida,o salario do habitante ${[i-1]} é negativo}`)
//     return
//   }

//   soma_salario = soma_salario + salarios[i];
//   soma_filhos = soma_filhos + filhos[i];

//   console.log(`o salario do habitante ${[1 + i]} é : R$${salarios[i]}`);

//   console.log(`o numero do filhos do habitante ${[1 + i]} é : ${filhos[i]}`);
//   console.log("*************************************************");

//   salario = salarios[i];

//   if (salario > maior_salario) {
//     maior_salario = salario;
//   }

//   salario = salarios[i];
//   if (salario < 150) {
//     salario_menor150 = salario_menor150 + 1;
//   }

// }

// console.log(salario_menor150);

// percentual_menor_150 = (salario_menor150 * 100) / salarios.length;
// media_filhos = soma_filhos / filhos.length;
// media_salario = soma_salario / salarios.length;
// porcentual_menor = (salario_menor150 * 100) / soma_salario;
// console.log(`A média de sálario da população é: ${Math.round(media_salario)}`);
// console.log(`A maior  sálario da população é: ${maior_salario}`);
// console.log(`A media de filhos da população é: ${Math.round(media_filhos)}`);
// console.log(
//   `Percentual salario menor a 150R$ é: ${Math.round(percentual_menor_150)}%`
// );

// ********Exercicios 74 a 76 utilizar repetição aninhada*********
// console.log(
//   "// ********Exercicios 74 a 76 utilizar repetição aninhada*********"
// );

/*exercício 74 Escreva um algoritmo que imprima a tabuada de (1 a 10) para os números 1 a 10.*/

// var mult = 0;

// for (var i = 0; i <= 10; i++) {
//   console.log(`Tabuada do ${i}:`);
//   console.log(`************** `);
//   for (var j = 0; j <= 10; j++) {
//     mult = i * j;

//     console.log(`${i}x${j} = ${mult}`);
//   }
//   console.log("\n");
// }

/*exercício 75 Escreva um algoritmo que imprima as seguintes seqüências de números: (1, 1 2 3 4 5 6 7 8 9 10) (2, 1 2 3 4 5 6 7 8 9 10) (3, 1 2 3 4 5 6 7 8 9 10) (4, 1 2 3 4 5 6 7 8 9 10) e assim sucessivamente, até que o primeiro número (antes da vírgula), também chegue a 10 */

// var sequencia=0

//for(var i=1; i<=10;i++){

// for(var j = 1; j <= 10; j++){
//   console.log('('+j,','+ '1,2,3,4,5,6,7,8,9,10'+')' ,'\n')
// }
//}

// console.log('usando while')
// c=1
// while(c<=10)
//   console.log(c,','+ '{1,2,3,4,5,6,7,8,9,10}' ,'\n')
//   c=c+1

// }

/*exercício 76  Imagine que exista um comando chamado "posiciona (x,y)" em alguma linguagem de
programação. Onde o X representaria a coluna que algo deve ser impresso na tela, e Y a linha que
algo deve ser impresso na tela. Desta forma, o algoritmo abaixo:
    início
        posiciona (10,2)
        escrever ‘Olá’
    fim
Escreveria a palavra ‘Olá’ na segunda linha da tela, a partir da 10 coluna. Baseado nesta situação,
escreva um algoritmo, utilizando este comando 'posiciona' citado, que desenhe na tela um retângulo de
60 colunas (a partir da coluna 1 da tela) e 10 linhas (a partir da linha 1 da tela), sendo que a borda deste retângulo será formada pelo caractere ‘+’. Lembre que somente a primeira e última linha deverão ter
todas as colunas preenchidas com o caractere ‘+’. As demais linhas (entre 2 e 9) só terão as colunas 1 e
60 preenchidas. A aparência deste retângulo deve ser parecida com a figura abaixo:

                                    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                    +                                                          +
                                    +                                                          +
                                    +                                                          +
                                    +                          Olá                             +
                                    +                                                          +
                                    +                                                          +
                                    +                                                          +
                                    +                                                          + 
                                    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        
                                                          */
//solução 1 tipo Gambiarra ()

// lado=60
// contador2 = 1;
// traço2 = "+";
// while (contador2 <= lado) {
//   contador2 = contador2 + 1;
//   traço2 += "+";
// }
// console.log(traço2);


// let contador = 1;

// let traço = "+";

// for (var i = 0; i <= 10; i++) {
//   console.log("+                                                           +");
// }
// while (contador <= lado) {
//   traço += "+";
//   contador = contador + 1;
// }
// console.log(traço);

/*Exercicio 77.  Dado o seguinte vetor:[5,1,4,2,7,8,9,3,6]

Qual será o conteúdo do vetor V depois de executado o algoritmo abaixo?
Para i de 8 até 5 passo -1 Faça
aux
 v [i]=v [i]
 v [8 - i + 1]
v [8 - i + 1]
 aux
Fim_Paraif (!menor) menor = produto;
//   if (produto < menor) {
//     menor = produto;
//   }
v [v [2]]
*/
// v = [5, 1, 4, 2, 7, 8, 9, 3, 6];
// var aux;
// for (var i = 8; i <= 5; i--) {
//   var aux = v[i];
//   v[i] = v[8 - i + 1];

//   v[8 - i + 1] = aux;

//   v[3] = v[1];
//   v[3] = v[v[2]];
// }

// console.log(v[3]); //resp valor do vetor=2

/* (REVISAR!)Exercício 78 Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em
um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois
escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no
vetor), ou NÃO ACHEI caso contrário.
*/

//   "clarissa",
//   "jaime",
//   "pedro",
//   "juan",
//   "maria",
//   "elena",
//   "elizabeth",
//   "julia",
//   "ana",
// ];

// for (var i = 0; i <= 10; i++) {
//   cadastro1 = cadastro[i];

//   if (cadastro[i] == "arelys") {if (!menor) menor = produto;

/* Exercício 79. Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média
da turma e contar quantos alunos obtiveram nota acima desta média calculada. Escrever a média da
turma e o resultado da contagem.
 */

// var calificacoes = [
//   10, 8, 9, 7, 8, 10, 9, 8, 7, 8, 9, 7, 8, 9, 7, 8, 9, 6, 9, 8,
// ];

// var maiores=0
// var soma=0

// for(var i=0; i<calificacoes.length;i++){
//   var notas=calificacoes[i]
//   soma=soma+calificacoes[i]

// }

// media=soma/calificacoes.length

// console.log(media)

// for(var i=0; i<calificacoes.length;i++){
//  if(calificacoes[i]>media){
//    maiores=maiores+1
//  }
// }

// console.log(`A media da turma é: ${media}`)
// console.log(`Alunos com nota acima da media calculada: ${maiores}`)

/* Exercício 80. Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do
maior elemento de Q e a respectiva posição que ele ocupa no vetor.

 */

// var posicoes=[15,17,79,10,8,6,7,4,10,33,2,4,5,6,8,3,4,100,29,5]

// var maior;
// var pos_maior;

// //encontra o maior valor
// maior=posicoes[0];
// pos_maior=0
// for(var i=1; i<posicoes.length;i++){
//   if(posicoes[i]>maior){
//     maior=posicoes[i+1]
//     pos_maior=i
//   }

// }

//console.log(`posicao maior valor: ${pos_maior} , maior ${maior}`)

/* Exercício 81.  O mesmo exercício anterior, mas agora deve escrever o menor elemento do vetor e a respectiva
posição dele nesse vetor.
 */

// var posicoes=[15,17,79,1,8,6,7,4,10,33,2,4,5,6,8,3,4,100,29,5]

// var menor;
// var pos_menor;

// //encontra o menor valor
// menor=posicoes[0];
// pos_menor=0
// for(var i=1; i<posicoes.length;i++){
//   if(posicoes[i]<menor){
//     menor=posicoes[i+1]
//     pos_menor=i
//   }

// }

// console.log(`posicao maior valor: ${pos_menor} , maior ${menor}`)

/*Exercício 82.   Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após,
imprimir o vetor M.
*/

// var a=[9,5,6,8,6,7,3,1,8,10]
// var b= 5
// var m=[]

//utilizando metodos nativos de javascript
// for (var i=0;i<A.length;i++){

//   var m=B*A[i]
//   M.push(m)

// }
// console.log('O vector M=',M)

//***********metodo utilizando loop for */
//multiplicação do bxa[i]

// console.log('imprime multiplicação do bxa[i]')
// for (var i=0;i<a.length;i++){

// m[i]=a[i]*b
// var produto=console.log(m[i] )

// }

// //numeros gerados
// console.log('imprime valores gerados')
// for (var i=0;i<a.length;i++){

//   console.log(i+1,a[i])
// }

// //imprime valores multiplicados
// console.log('imprime valores multiplicados')
// for (var i=0;i<a.length;i++){

//   console.log(m[i])

// }
// console.log("M =", m)

/*Exercício 83. Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20
números, o algoritmo deve escrever esses 20 números lidos na ordem inversa.
*/

//Gerando o vetor vet

// var vet=[]
//    for(i=0;i<=10;i++){

//     vet[i]=i

//    }

//    console.log('vet=',vet)

//    var vet;
//    var vetor=[];

//    for(var i=0,j=10; i<=10;i++,j--){
//         vetor[j]=vet[i]
//    }

//    for(var i=0; i<=10;i++){

//    }

//    console.log('O Vetor invertido é:',vetor)

/*Exercício 84. Faça um algoritmo para ler um valor N qualquer (que será o tamanho dos vetores). Após, ler dois
vetores A e B (de tamanho N cada um) e depois armazenar em um terceiro vetor Soma a soma dos
elementos do vetor A com os do vetor B (respeitando as mesmas posições) e escrever o vetor Soma.

*/

// var numero=Math.random()*(5,9)
// var numero2=Math.round(numero)

// vet1=[]; vet2=[]; vet3=[];
// for (var i = 0; i<5; i++)
//     {
//      vet1[i]=Math.round(Math.random())
//      vet2[i]=Math.round(Math.random())
//     }

//     for (var i = 0; i<5; i++){
//       vet3[i]=vet1[i]+vet2[i]
//     }

//  for(vari=0;i<5;i++){

//  }
// console.log('vet1:',vet1)
// console.log('vet2:',vet2)
// console.log('vet3:',vet3)

/*Exercício 85.  Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os dias do ano.
Calcular e escrever:
a) Menor temperatura do ano
b) Maior temperatura do ano
c) Temperatura média anual
d) O número de dias no ano em que a temperatura foi inferior a média anual

*/

// var maior_temperatura=0;
// var menor_temperatura=0;
// var sum_temp=0
// var temperaturas=[]
//     for(i=1;i<=365;i++){
//      temperaturas[i]=Math.floor(Math.random()*(25,45))
//       sum_temp +=temperaturas[i]
//     }

//     temperatura_media_anual=Math.round(sum_temp/temperaturas.length)
//     console.log("Temperatura media anual:", temperatura_media_anual +"ºC")

//     dias_temperatura_menor=0;

//     for (var i = 0; i < temperaturas.length; i++) {

//       if (temperaturas[i] > maior_temperatura) {
//           maior_temperatura = temperaturas[i];
//       }
//       else if (temperaturas[i] < menor_temperatura) {
//           menor_temperatura = temperaturas[i];
//       }
//       if (temperaturas[i] < temperatura_media_anual) {
//           dias_temperatura_menor++;
//       }
//   }

// console.log("A maior temperatura foi: "+ maior_temperatura + "°C");
// console.log("A menor temperatura foi: "+ menor_temperatura +"°C");
// console.log("A temperatura média anual foi:" , temperatura_media_anual + "°C"

//   );
// console.log(dias_temperatura_menor + " dias com temperatura menor a la media");

/*Exercício 86. Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo deve
ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado.
*/

// soma_numeros=0
// var cresce;
// var vet=[]

// for(i=1;i<=10;i++){
//   vet[i]=Math.floor(Math.random()*(10,20))
//    soma_numeros +=vet[i]
//  }

//  console.log("vetor sem ordenar:", vet)

//  for(var i=0;i<10;i++){
//    for(var j=i+1; j<10;j++){
//      if(vet[i]>vet[j]){
//         cresce=vet[i]
//         vet[i]=vet[j]
//         vet[j]=cresce
//      }
//    }
//  }
//  console.log(vet)

/*Exercício 87 (REVISR LOGICA!!). O mesmo exercício anterior, mas depois de ordenar os elementos do vetor em ordem crescente, deve ser lido mais um número qualquer e inserir esse novo número na posição correta, ou seja, mantendo a ordem crescente do vetor.*/

// soma_numeros1 = 0;
// var cresce1;
// var vet1 = [];
// for (i = 1; i <= 11; i++) {
//   vet1[i] = Math.floor(Math.random() * (40));
//   soma_numeros1 += vet1[i];
// }

// console.log("vetor gerado",vet1);


// for(var i=1;i<11;i++){
//      for(var j=i; j<=11;j++){
//        if(vet1[i]>vet1[j]){
//           cresce1=vet1[i]
//           vet1[i]=vet1[j]
//           vet1[j]=cresce1
//        }
//      }
// console.log('vetor ordenado', vet1)

// var qualquer=17
// console.log('inserir numero', qualquer)

// for (var i = 1; i <=11; i++) {
//     if ( vet1[i]<=qualquer) {
//       cresce1 = qualquer
//       vet1[j]=cresce1 
//     }else{
//       cresce1=vet1[i]
//           vet1[i]=vet1[j]
//           vet1[j]=cresce1
//     }
//   }
// }

// console.log("vetor  ordenado em forma crescente com o numero ", qualquer + " inserido",vet1)


/*Exercício 88. Faça um algoritmo para ler um vetor de 20 números. Após isto, deverá ser lido mais um número
qualquer e verificar se esse número existe no vetor ou não. Se existir, o algoritmo deve gerar um novo
vetor sem esse número. (Considere que não haverão números repetidos no vetor).
.*/
// var vet1=[]
// var vet2=[]



// for(var i=1;i<=20;i++){
//  vet1[i]=i
// }

// console.log(vet1)
// var numero=17

// j=0
// for(var i=1; i<=20;i++){
//   if (vet1[i]!=numero){
//     j=j+1
//     vet2[j]=vet1[i]
    
//   }
 
// }

// if(j=20){
//   console.log(numero," no está no vetor")
// }else{
//   console.log('vetor sem', num)
// }

// for(var i=1; i<=20;i++){
  
// }


// console.log(vet2[i])


// exercicio extra
//Procurar ocorrências dentro de palavras

// buscar "AR" na frase
// "ARanha ARranha a jARra"


// function ocorrencias(frase,ocorrencias){

//   let texto=frase

//   let resultado=0
//   if (texto.includes(ocorrencias)){


//     let palavras=texto.split(" ")
//     let mapa ={}

//     for(let palavra of palavras ){
//       if(mapa[palavra]){
//         mapa[palavra] ++
//       }else{
//         mapa[palavra]=1
//       }
//     }
//     console.log(palavras)
//     console.log(mapa)

//     resultado = mapa[ocorrencias]

//   }else{
//     return resultado=0
//   }

//   return resultado

// }

// console.log("numero de ocorrencias na frase:",ocorrencias("ARanha ARranha a jARra","AR"))



// var string= "ARanha ARranha a jARra pARa"

// var substring="AR"


// function ocorrencia(texto,subtexto){

//   let resultado= subtexto.replace(/[.*+?^${}()|[\]\\]/g ,'\\$&')

//   return (texto.match(new RegExp(resultado, 'gi'))|| []).length
// }
// console.log(ocorrencia("ARanha ARranha aam a jARra pARa","AR"))
//**************** */

//Metodo1


function contaOcorrencias(cadena, subCadena){
  cont = 0;
  aux = "";
  longSubCad = subCadena.length;
  for(pos=0; pos<=cadena.length-longSubCad; pos++){
      for(i=pos; i<pos+longSubCad; i++){
          aux = aux+cadena.charAt(i);
      }
      if(subCadena ==(aux)){
          cont++;
          
      }
      aux = "";
  }
  return cont;

}

console.log("solução 1. A quantidade de ocorrencias é:",contaOcorrencias("AR ARanha ARranha aam CARa jARra","AR"))


//Metodo2

function contaOcorrencias2(cadena, subCadena){
  cont = 0;
  aux = "";

  
  longSubCad = subCadena.length;
  for(pos=0; pos<=cadena.length-longSubCad; pos++){
          aux = cadena.substring(pos,pos+longSubCad);
      
      if(subCadena ==(aux)){
          cont++;
          console.log(aux)
      }
      aux = "";
  }
  return cont;

}

console.log("solução 2. A quantidade de ocorrencias é:",contaOcorrencias2("AR ARanha ARranha aam CARa jARra","AR"))



