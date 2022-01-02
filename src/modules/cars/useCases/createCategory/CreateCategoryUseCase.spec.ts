
// descrição do teste
describe("Criar categoria", () => {
  // função que vai testar a implementação
  it("Espero que 2 + 2 seja 4", () => {
    const soma = 2 + 2;
    const resultado = 4;
    // espera o resultado correto
    expect(soma).toBe(resultado);
  });

  it("Espero que 2 + 2 não seja 4", () => {
    const soma =  2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
})