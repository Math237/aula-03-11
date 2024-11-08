var receita = [];
var i = 0;
var condicao = 'sim'
var totalReceita = 0, totalDespesa = 0;
while (condicao == 'sim'){
    receita[i] = parseFloat(prompt("digite uma receita"));
    i++;
    condicao = prompt("deseja adicionar mais alguma receita? caso deseje digite (sim) ");
} 
 var despesas = [];
var i = 0;
var condicao = 'sim'
while (condicao == 'sim'){
    despesas[i] = parseFloat(prompt("digite a despesa"));
    i++;
    condicao = prompt("deseja adicionar mais alguma despesa? caso deseje digite (sim) ");
} 
while(i < despesas.length){
    var soma = 0;
   
    totalDespesa += despesas [i];
   
    i++

} 
while(i < receita.length){
    var soma = 0;
   
    totalReceita += despesas [i];
   
    i++

} 
console.log(" a" + totalReceita);
console.log("A soma entre eles é " + (totalDespesa + totalReceita));