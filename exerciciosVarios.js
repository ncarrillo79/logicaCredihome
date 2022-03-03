// //Exercicio 1.Dado un numero entero positivo, encontrar el numero de digitos de esse número.

// function contarDigitos(cifra) {
//   var cont = 0;

//   while (cifra > 0) {
//     //console.log('son',cont)
//     cont = cont + 1;

//     cifra = Math.floor(cifra) / 10;

//     //console.log(cifra))
//   }

//   return cont;
// }

// console.log("Exercicio 1", contarDigitos(8));

// //Exercicio 2.Dado un numero entero positivo, determinar se e divisível entre 4. Um numero é divisível entre 4 quando o numero formado por seus dos últimos dígitos é divisível entre 4. ejemplo 54616 sus dos últimos dígitos 1 y 6 asi tenemos 16/4=4. Devolver las cifras que determinan su divisivilidade. no caso não seja divisível retornar -1.

// function verificador(numero1) {
//   res = -1;
//   last = numero1 % 100;
//   if (last % 4 == 0) {
//     res = last;
//   }
//   return res;
// }

// console.log("Exercicio 2:", verificador(85416));

// //Exercicio 3 Obtener el dígito maior e menor de un entero e as vezes que se repete cada.

// function mayorMenor(numero2) {
//   res = "";
//   contMay = 1;
//   contMen = 1;
//   mayor = 0;
//   menor = 0;
//   //9898
//   if (numero2 > 0) {
//     mayor = numero2 % 10;
//     menor = numero2 % 10;
//     numero2 = numero2 / 10;
//     while (numero2 > 0) {
//       dig = numero2 % 10; //digito actual
//       if (dig > mayor) {
//         mayor = dig;
//         contMay = 1;
//       } else {
//         if (dig < menor) {
//           menor = dig;
//           contMen = 1;
//         } else {
//           if (dig == mayor) {
//             contMay++;
//           } else {
//             if (dig == menor) {
//               contMen += contMen;
//             }
//           }
//         }
//       }
//       numero2 = Math.floor(numero2 / 10);
//     }
//     res = "El Mayor es " + mayor + " y se repite " + contMay + " veces" + "\n";
//     res = res + "El Menor es " + menor + " y se repite " + contMen + " veces";
//   } else {
//     res = "Dato de entrada no valido";
//   }
//   return res;
// }

// var resultado = mayorMenor(1918989);

// console.log("Exercício 3:", resultado);

// //Exercicio 4.Dado um numero, invertir o número.
// numero3 = 4523;
// function invertir(numero3) {
//   resp1 = 0;
//   while (numero3 > 0) {
//     digit = numero3 % 10;
//     resp1 = resp1 * 10 + digit;
//     numero3 = Math.floor(numero3 / 10);
//   }
//   return resp1;
// }

// var resposta = invertir(numero3);

// console.log(`Exercicio 4: O inverso de ${numero3} é: ${resposta}`);

// //Exercício 5. Dado un numero entero positivo, indicar si es primo o no.

// numero4 = 29;
// function numeroPrimo(numero4) {
//   res2 = false;

//   if (numero4 > 1) {
//     res2 = true;
//     for (div = 2; div <= numero4 / 2 && res2 == true; div++) {
//       if (numero4 % div == 0) {
//         res2 = false;
//       }
//     }
//   }

//   return res2;
// }

// console.log("Exercício 5:", numero4 + " é número primo?", numeroPrimo(numero4));

// //Exercício 6.Dado um número inteiro, positivo, formar um novo número com o primeiro e último dígito. Exemplo n=12345, res=15

// numero5 = 1046;
// function transformaNumero(numero5) {
//   res3 = 0;
//   if (numero5 < 10) {
//     res3 = numero5;
//   } else {
//     lastDigit = numero5 % 10; //ultimo dígito
//     console.log("ultimo dígito:", lastDigit);
//     while (numero5 >= 10) {
//       numero5 = Math.trunc(numero5 / 10);
//       console.log("divisiones: " + numero5);
//     }
//     res3 = numero5 * 10 + lastDigit; //primeiro dígito
//     console.log("primer dígito:", numero5);
//   }

//   return res3;
// }

// var resp3 = transformaNumero(numero5);

// console.log(resp3);

// console.log(
//   "Exercicio 6: O numero formado a partir de " + numero5 + " é:",
//   resp3
// );

/**Exercício 7.Dado um número inteiro, faze-lo rotar a quantidade de vezes indicada. exemplo n=12345 y n=3 . resultado deve ser:
 -51234
 -45123
 -34152*/


numero=12345
function rotar(numero, n) {
  res = "";
  exp = (numero.toString().length)- 1;
  console.log("exp:",exp)

  aux =Math.pow(10, exp)
  console.log("aux:",aux)

  for (i = 0; i < n; i++) {
    dig = (numero % 10).toFixed(0);
    console.log("ultimo digito:",dig)
    numero =(numero / 10)
    console.log("numero: tofixed",numero)
    base = aux * dig;
    numero = numero + base;
    res = res + numero + "\n";
    console.log(res)
  
  }
  return res;


}

rotar(numero, 3)





