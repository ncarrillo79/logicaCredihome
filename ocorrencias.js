
// exercicio ocorrencias
//Procurar ocorrências dentro de palavras

// buscar "AR" na frase
// "ARanha ARranha a jARra

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
  
  
  