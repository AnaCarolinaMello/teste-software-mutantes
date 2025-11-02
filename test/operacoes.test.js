const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  test('soma - deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('subtracao - deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('multiplicacao - deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('divisao - deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('potencia - deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('raizQuadrada - deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('restoDivisao - deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('fatorial - deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('mediaArray - deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('somaArray - deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  test('maximoArray - deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('minimoArray - deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('valorAbsoluto - deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('arredondar - deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('isPar - deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('isImpar - deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('calcularPorcentagem - deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('aumentarPorcentagem - deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('diminuirPorcentagem - deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('inverterSinal - deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  test('seno - deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('cosseno - deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('tangente - deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('logaritmoNatural - deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('logaritmoBase10 - deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('arredondarParaBaixo - deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('arredondarParaCima - deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('hipotenusa - deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('grausParaRadianos - deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('radianosParaGraus - deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  test('mdc - deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('mmc - deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('isPrimo - deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('fibonacci - deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('produtoArray - deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('clamp - deve manter um valor dentro de um intervalo', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('isDivisivel - deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('celsiusParaFahrenheit - deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('fahrenheitParaCelsius - deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('inverso - deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  test('areaCirculo - deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('areaRetangulo - deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('perimetroRetangulo - deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('isMaiorQue - deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('isMenorQue - deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('isEqual - deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('medianaArray - deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('dobro - deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('triplo - deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('metade - deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
  test('raizQuadrada - deve lançar erro para raiz quadrada de número negativo', () => { expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); });
  test('raizQuadrada - deve retornar 0 para raiz quadrada de 0', () => { expect(raizQuadrada(0)).toBe(0); });
  test('fatorial - deve lançar erro para fatorial de número negativo', () => { expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); });
  test('fatorial - deve retornar 1 para fatorial de 0', () => { expect(fatorial(0)).toBe(1); });
  test('fatorial - deve calcular fatorial de 5 corretamente', () => { expect(fatorial(5)).toBe(120); });
  test('isPar - deve retornar false para número ímpar', () => { expect(isPar(1)).toBe(false); });
  test('isImpar - deve retornar false para número par', () => { expect(isImpar(2)).toBe(false); });
  test('isPrimo - deve retornar false para número 1', () => { expect(isPrimo(1)).toBe(false); });
  test('isPrimo - deve retornar false para número composto', () => { expect(isPrimo(4)).toBe(false); });
  test('isPrimo - deve retornar true para número primo 2', () => { expect(isPrimo(2)).toBe(true); });
  test('fibonacci - deve retornar 0 para fibonacci de 0', () => { expect(fibonacci(0)).toBe(0); });
  test('produtoArray - deve retornar 1 para produto de array vazio', () => { expect(produtoArray([])).toBe(1); });
  test('produtoArray - deve calcular produto de array com elementos', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('clamp - deve retornar valor máximo quando acima do limite', () => { expect(clamp(15, 15, 10)).toBe(10); });
  test('clamp - deve retornar valor mínimo quando abaixo do limite', () => { expect(clamp(5, 10, 20)).toBe(10); });
  test('clamp - deve retornar valor quando dentro dos limites', () => { expect(clamp(14, 10, 15)).toBe(14); });
  test('clamp - deve retornar valor quando igual ao limite superior', () => { expect(clamp(15, 10, 15)).toBe(15); });
  test('clamp - deve retornar valor quando igual ao limite inferior', () => { expect(clamp(10, 10, 15)).toBe(10); });
  test('isDivisivel - deve retornar false para número não divisível', () => { expect(isDivisivel(15, 4)).toBe(false); });
  test('celsiusParaFahrenheit - deve converter 100°C para 212°F', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
  test('fahrenheitParaCelsius - deve converter 212°F para 100°C', () => { expect(fahrenheitParaCelsius(212)).toBe(100); });
  test('inverso - deve lançar erro para inverso de zero', () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); });
  test('isMaiorQue - deve retornar false para números iguais', () => { expect(isMaiorQue(12, 12)).toBe(false); });
  test('isMenorQue - deve retornar false para números iguais', () => { expect(isMenorQue(12, 12)).toBe(false); });
  test('isEqual - deve retornar false para números diferentes', () => { expect(isEqual(12, 11)).toBe(false); });
  test('medianaArray - deve lançar erro para mediana de array vazio', () => { expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.'); });
  test('medianaArray - deve calcular mediana de array ímpar desordenado', () => { expect(medianaArray([1, 2, 8, 5, 5])).toBe(5); });
  test('medianaArray - deve calcular mediana de array ímpar desordenado', () => { expect(medianaArray([8, 1, 4, 2, 5])).toBe(4); });
  test('medianaArray - deve calcular mediana corretamente após ordenação', () => { expect(medianaArray([8, 1, 4, 2, 5])).toBe(4); });
  test('medianaArray - deve calcular mediana de array par', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });
  test('medianaArray - deve calcular mediana de array par com valores específicos', () => { 
    expect(medianaArray([10, 20, 30, 40])).toBe(25); 
  });
  test('mediaArray - deve retornar 0 para array vazio', () => { 
    expect(mediaArray([])).toBe(0); 
  });
  test('maximoArray - deve lançar erro para array vazio', () => { 
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.'); 
  });
  test('minimoArray - deve lançar erro para array vazio', () => { 
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.'); 
  });
});