import {calculadoraCadenas} from "./sumador.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });

  it("deberia retornar el mismo numero si la cadena tiene un solo numero", () => {
    expect(calculadoraCadenas("2")).toEqual(2);
  });

  it("deberia retornar la suma de dos numeros separados por coma", () => {
    expect(calculadoraCadenas("1,2")).toEqual(3);
  });

  it("deberia retornar la suma de multiples numeros separados por coma", () => {
    expect(calculadoraCadenas("1,2,4,8")).toEqual(15);
  });

  it("deberia permitir el guion como separador alternativo", () => {
    expect(calculadoraCadenas("1-2,3")).toEqual(6);
  });

  it("deberia aceptar un delimitador personalizado simple", () => {
    expect(calculadoraCadenas("//[;] 6;7;4")).toEqual(17);
  });
});


