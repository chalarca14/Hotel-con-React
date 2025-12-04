import "../../styles/CalculadoraHotel.css"; // o usa un CSS dedicado, como styles/HotelDescription.css

export function HotelDescription() {
  return (
    <section className="hotel-description-section">
      <h2 className="hotel-description-title">Sobre Hotel Aurora</h2>
      <p className="hotel-description">
        En Hotel Aurora reinventamos la forma de hospedarte. Habitaciones
        diseñadas para tu descanso, detalles que marcan la diferencia y un
        servicio que siempre llega justo a tiempo. Aquí, cada día es una nueva
        oportunidad para desconectar, explorar y disfrutar.
      </p>
    </section>
  );
}
