import {calculadoraCadenas} from "./sumador.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });
});


