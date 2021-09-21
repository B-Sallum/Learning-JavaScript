//Vamos ajustar os salários

console.log(`Calculadora de Ajuste Salarial
         Bônus 2021

Insira o valor so salário abaixo:

(Apenas números)

`) //Espaço estiloso

let salario = +prompt("")

//Reajuste de 20% para salários
//Menos ou igual a 280
if (salario <= 280){
    console.log(`
  O salário atual é de ${salario}.
  O percentual aplicado é de 20%.
  Valor líquido do aumento: ${salario * 0.2}
  Salário total reajustado para:
  ${(salario * 1.2).toFixed(2)}`)
} 
//Reajuste de 15% para salários entre 281
else if (salario > 280 && salario <= 700){
  console.log(`
  O salário atual é de ${salario}.
  O percentual aplicado é de 15%.
  Valor líquido do aumento: ${salario * 0.15}
  Salário total reajustado para:Salário reajustado para:
  ${(salario * 1.15).toFixed(2)}`)
}
//Reajuste de 10% para salários entre 701 e 1500
else if (salario > 700 && salario <= 1500){
  console.log(`
  O salário atual é de ${salario}.
  O percentual aplicado é de 10%.
  Valor líquido do aumento: ${salario * 0.1}
  Salário total reajustado para:Salário reajustado para:
  ${(salario * 1.1).toFixed(2)}`)
}
//Reajuste de 05% para salários acima de 1500
else {
  console.log(`
  O salário atual é de ${salario}.
  O percentual aplicado é de 05%.
  Valor líquido do aumento: ${salario * 0.05}
  Salário total reajustado para:Salário reajustado para:
  ${(salario * 1.05).toFixed(2)}`)
}
