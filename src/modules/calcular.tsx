import { useState } from "react";
export default function cal() {
  const [clientes, setClientes] = useState(0);
  const [dias, setDias] = useState(0);

  // Tarifas
  const tarifaIndividual = 2500;
  const tarifaDoble = 4600;
  const tarifaFamiliar = 5200;

  // Cálculos
  function calcular() {
    let tarifa = 0;
    let descuento = 0;

    // condicionales
    if (clientes === 1) {
      tarifa = tarifaIndividual;
      descuento = 0.05; // 5%
    } else if (clientes === 2) {
      tarifa = tarifaDoble;
      descuento = 0.09; // 9%
    } else {
      tarifa = tarifaFamiliar;
      descuento = 0.15; // 15%
    }

    // Subtotal sin IVA
    const subtotal = tarifa * dias;

    // IVA del 19%
    const iva = subtotal * 0.19;

    // Total con IVA
    const totalConIva = subtotal + iva;

    // Descuento aplicado SOBRE el total con IVA (como dice el enunciado)
    const montoDescuento = totalConIva * descuento;

    // Total final
    const totalFinal = totalConIva - montoDescuento;

    // Devolvemos todo
    return {
      tarifa,
      subtotal,
      iva,
      totalConIva,
      montoDescuento,
      totalFinal,
    };
  }

  const resultado = calcular();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calculadora de Hotel - Caso 3</h1>

      <label>
        Número de huéspedes:
        <input
          type="number"
          onChange={(e) => setClientes(Number(e.target.value))}
        />
      </label>
      <br />
      <br />

      <label>
        Días de estadía:
        <input
          type="number"
          onChange={(e) => setDias(Number(e.target.value))}
        />
      </label>
      <br />
      <br />

      <h2>Resultados:</h2>
      <p>Tarifa aplicada: ${resultado.tarifa}</p>
      <p>Subtotal (sin IVA): ${resultado.subtotal}</p>
      <p>IVA (19%): ${resultado.iva}</p>
      <p>Total con IVA: ${resultado.totalConIva}</p>
      <p>Descuento aplicado: ${resultado.montoDescuento}</p>
      <h2>Total final a pagar: ${resultado.totalFinal}</h2>
    </div>
  );
}
