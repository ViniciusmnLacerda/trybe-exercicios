function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error('Não pode ser feito uma divisão por zero.');

  const result = num1 / num2;

  return result;
}
try {
  const resultado =  calcularDivisao(2, 1);
  console.log("resultado: %s", resultado);
} catch(e) {
  console.log("erro: %s", e.message);
}