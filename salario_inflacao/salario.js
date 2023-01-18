import inputDados from "readline-sync";

const mensagemAno = "Ano :";
const mensagemValor = "Salário mínimo:";
const mensagemCrescimento = "Crescimento do salário mínimo:";
const mensagemIpca = "Inflação IPCA:";

let listaSalarioMinimo = [
  { ano: 2010, valor: 510.0 },
  { ano: 2011, valor: 545.0 },
  { ano: 2012, valor: 622.0 },
  { ano: 2013, valor: 678.0 },
  { ano: 2014, valor: 724.0 },
  { ano: 2015, valor: 788.0 },
  { ano: 2016, valor: 880.0 },
  { ano: 2017, valor: 937.0 },
  { ano: 2018, valor: 954.0 },
  { ano: 2019, valor: 998.0 },
  { ano: 2020, valor: 1045.0 },
  { ano: 2021, valor: 1212.0 },
  { ano: 2022, valor: 1302.0 },
];

let listaInflacao = [
  { ano: 2010, ipca: 5.91 },
  { ano: 2011, ipca: 6.5 },
  { ano: 2012, ipca: 5.84 },
  { ano: 2013, ipca: 5.91 },
  { ano: 2014, ipca: 6.41 },
  { ano: 2015, ipca: 10.67 },
  { ano: 2016, ipca: 6.29 },
  { ano: 2017, ipca: 2.95 },
  { ano: 2018, ipca: 3.75 },
  { ano: 2019, ipca: 4.31 },
  { ano: 2020, ipca: 4.52 },
  { ano: 2021, ipca: 10.06 },
  { ano: 2022, ipca: 5.13 },
];

console.log("Escolha uma das alternativas:");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log(
  "3 - Comparação entre o percental de aumento do salario mínimo e o IPCA"
);

let OpcaoDoUsuario = inputDados.question("Digite o numero desejado:");

if (OpcaoDoUsuario == 1) {
  for (let salario of listaSalarioMinimo) {
    let salarioAno = salario.ano;
    let salarioValor = salario.valor.toFixed(2);
    console.log(`${mensagemAno.padEnd(30, ".")} ${salarioAno}`);
    console.log(
      `${mensagemValor.padEnd(30, ".")} R$ ${salarioValor.replace(
        ".",
        ","
      )}\n\n`
    );
  }
} else if (OpcaoDoUsuario == 2) {
  for (let inflacao of listaInflacao) {
    let inflacaoAno = inflacao.ano;
    let ipca = inflacao.ipca.toFixed(2);
    console.log(`${mensagemAno.padEnd(30, ".")} ${inflacaoAno}`);
    console.log(`${mensagemIpca.padEnd(30, ".")} ${ipca}% \n\n`);
  }
} else if (OpcaoDoUsuario == 3) {
  for (let i = 0; i < listaSalarioMinimo.length; i++) {
    let ipca = listaInflacao[i].ipca.toFixed(2);
    let salarioAno = listaSalarioMinimo[i].ano;
    let salarioValor = listaSalarioMinimo[i].valor.toFixed(2);
    let crescimentoSalarial = 0;
    if (i > 0) {
      let diferencaSalarial =
        listaSalarioMinimo[i].valor - listaSalarioMinimo[i - 1].valor;
      crescimentoSalarial = (
        (diferencaSalarial / listaSalarioMinimo[i - 1].valor) *
        100
      ).toFixed(2);

      console.log(`${mensagemAno.padEnd(30, ".")} ${salarioAno}`);
      console.log(
        `${mensagemValor.padEnd(30, ".")} R$ ${salarioValor.replace(".", ",")}`
      );
      console.log(
        `${mensagemCrescimento.padEnd(30, ".")} ${crescimentoSalarial.replace(
          ".",
          ","
        )}%`
      );
      console.log(
        `${mensagemIpca.padEnd(30, ".")} ${ipca.replace(".", ",")}% \n\n`
      );
    }
  }
} else {
  console.log("Opção inválida");
}
