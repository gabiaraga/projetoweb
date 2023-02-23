// VARIAVEIS
let nomeProduto = "blusa";
let preçoProduto = 500;
let descontoProduto = 0;
let descontoValido = true;
let precoFinal = preçoProduto;
let demanda = [10, 2, 1, 30, 5]; //1
let demandaValor = [];
let totalLucro =  0 ;
if ((descontoValido = true)) {
 precoFinal = preçoProduto - descontoProduto;
  console.log(precoFinal);
}  if (precoFinal > 1000) {
  precoFinal = preçoProduto - 50;
  console.log(precoFinal);
} else if (precoFinal < 1000) {
  console.log("O preço do final do produto é " + precoFinal);
} else {
  precoFinal = preçoProduto;
  console.log(precoFinal);
}

 for (let i = 0; i < demanda.length; i++) {
   let e = demanda[i] * precoFinal;
   demandaValor.push(e);
   console.log(`O cliente ${i + 1} irá pagar: R$ ${demandaValor[i]}`);
 }

 for (let i = 0; i < demandaValor.length; i++) {
  totalLucro += demandaValor[i];
   }
   console.log(`O total de lucro é de R$ ${totalLucro}`)

// 1 - Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
// 2- Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.
// 3 - Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo.
