
//////////////////ejercicio 1

function ejercicio(cadena) {
    let entrada = cadena.split(/\n/);
    let arreglo = array(entrada);
    console.log(arreglo);
    let salida = [];
    if(arreglo[0] > 0 && arreglo[0] < 100) {
        for( let i = 0; i < arreglo[0]; i++ ) {
            salida.push(mult( arreglo[(i+1)+i], arreglo[(i+2)+i] ));
        }
        return salida
    } else {
        return 'Parametros incorrectos'
    }
}

function mult(arreglo, numero) {
    let n = numero.toString();
    let result = 0;
    if( arreglo[0] > arreglo[1] && arreglo[0] ==  n.length ){
        for( let i=0; i< (arreglo[0] - (arreglo[1] - 1)); i++ ) {
           let mul = 1;
            for( let j=i; j< arreglo[1]+ i ; j++ ) {
                mul = mul * parseInt(n.charAt(j));
            }
            if (result < mul){
                result = mul;
            }
        }
    } else {
        return 'Parametro invalido'
    }
    return result;
}

function array(arreglo) {
    return arreglo.map( (data) => {
        data = data.trim();
        data = data.split(" ");
        if ( data.length > 1) {
            let nYk= data.map( (element) => parseInt(element) );
            return nYk;
        }
        return parseInt(data)
    });
}

var cadenaej_1 = `2
              10 5
              3675356291
              10 6
              2709360626`

console.log(ejercicio(cadenaej_1));

test("Prueba de multiplicación",function () {  
        let res = [
            3150,
            0
          ];

        let cadena2 = `-5
              10 5
              3675356291
              10 6
              2709360626`;

        resp2 = 'Parametros incorrectos';
        
        let res3 = [
                3150,
                'Parametro invalido'
              ];
    
            let cadena3 = `2
                  10 5
                  3675356291
                  10 6
                  2709360626555555`;

        deepEqual( ejercicio(cadenaej_1), res);
        equal( ejercicio(cadena2), resp2);
        deepEqual( ejercicio(cadena3), res3);
    });

///// fin ejercicio 1


/////ejercicio 2
// function palindromo(cadena){
//     let entrada = cadena.split(/\n/);
//     let arreglo = array(entrada);
//     let salida = [];
//     if( 1 <= arreglo[0] && arreglo[0] <= 100 ) {
//         for( let i = 1; i < arreglo.length; i++ ) {
//             if( 101101 < arreglo[i] &&  arreglo[i] < 1000000   ) {
//                 let arr = []; 
//                 for(let j = 999; j > 100; j--){
//                     for(let k = 999; k > 100; k--){
//                         let mul = k*j;
//                         if(isPalin(mul) && mul <= arreglo[i] ) {
//                             arr.push(mul);
//                         }
//                     }
//                 }
//                 salida.push(Math.max.apply(Math, arr));
//             } else {
//                 salida.push('Valor invalido')
//             }
//         }
//     } else {
//         return 'Parametros invalidos'
//     }   
//     return salida;
// }

// function isPalin(i){
//     return i.toString() == i.toString().split("").reverse().join("");
// }

// function array(arreglo) {
//     return arreglo.map( (data) => {
//         data = data.trim();
//         return parseInt(data)
//     });
// }

// let cadenaej_2 = `2
//             101110
//             800000`

// console.log(palindromo(cadenaej_2));

// test("Prueba de palindromo",function () {  
//         let res = [
//             101101,
//             793397
//           ]
          
//         let cadena2 = `-1
//             101110
//             800000`
//         let res2 = 'Parametros invalidos'

//         let cadena3 = `2
//             101110000000
//             800000`
//         let res3 = [
//             'Valor invalido',
//             793397
//           ]

//         equal( palindromo(cadena2), res2);
//         deepEqual( palindromo(cadenaej_2), res);
//         deepEqual( palindromo(cadena3), res3);
//     });
