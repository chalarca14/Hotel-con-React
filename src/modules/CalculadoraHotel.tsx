import { useState } from "react";
import { calcularHotel } from "../components/ui/calcularHotel";
import "../styles/CalculadoraHotel.css";

export function CalculadoraHotel() {
  const [clientes, setClientes] = useState(0);
  const [dias, setDias] = useState(0);

  const resultado = calcularHotel(clientes, dias);

  return (
    <div className="hotel-container">
      <h1 className="hotel-title">Calculadora de Hotel</h1>

      <label className="hotel-label">Número de huéspedes:</label>
      <input
        type="number"
        className="hotel-input"
        value={clientes}
        onChange={(e) => setClientes(Number(e.target.value))}
      />

      <label className="hotel-label">Días de estadía:</label>
      <input
        type="number"
        className="hotel-input"
        value={dias}
        onChange={(e) => setDias(Number(e.target.value))}
      />

      <h2 className="hotel-results-title">Resultados</h2>

      <p className="hotel-result">Tarifa aplicada: ${resultado.tarifa}</p>
      <p className="hotel-result">Subtotal (sin IVA): ${resultado.subtotal}</p>
      <p className="hotel-result">IVA (19%): ${resultado.iva}</p>
      <p className="hotel-result">Total con IVA: ${resultado.totalConIva}</p>
      <p className="hotel-result">Descuento aplicado: ${resultado.montoDescuento}</p>

      <h2 className="hotel-total">Total Final: ${resultado.totalFinal}</h2>
    </div>
  );
}
