export interface ResultadoHotel {
  tarifa: number;
  subtotal: number;
  iva: number;
  totalConIva: number;
  montoDescuento: number;
  totalFinal: number;
}

export function calcularHotel(clientes: number, dias: number): ResultadoHotel {
  const tarifaIndividual = 2500;
  const tarifaDoble = 4600;
  const tarifaFamiliar = 5200;

  let tarifa = 0;
  let descuento = 0;

  if (clientes === 1) {
    tarifa = tarifaIndividual;
    descuento = 0.05;
  } else if (clientes === 2) {
    tarifa = tarifaDoble;
    descuento = 0.09;
  } else if (clientes >= 3) {
    tarifa = tarifaFamiliar;
    descuento = 0.15;
  }

  const subtotal = tarifa * dias;
  const iva = subtotal * 0.19;
  const totalConIva = subtotal + iva;
  const montoDescuento = totalConIva * descuento;
  const totalFinal = totalConIva - montoDescuento;

  return {
    tarifa,
    subtotal,
    iva,
    totalConIva,
    montoDescuento,
    totalFinal,
  };
}
