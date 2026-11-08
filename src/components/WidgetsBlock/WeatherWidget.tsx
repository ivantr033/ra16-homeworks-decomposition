/**
 * Компонент содержимого виджета погоды.
 * Отображает текущую температуру, иконку состояния неба и текстовую подсказку на день.
 */
export default function WeatherWidget() {
    return (
        <div className="weather-widget" style={{ display: 'flex', alignItems: 'center', gap: '15px', fontFamily: 'sans-serif' }}>
            {/* Иконка текущего состояния погоды */}
            <span className="weather-icon" style={{ fontSize: '2.2rem' }} role="img" aria-label="Sunny">☀️</span>

            {/* Текущая температура */}
            <span className="weather-temp" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#212529' }}>+20°C</span>

            {/* Дополнительная детализация */}
            <div className="weather-forecast" style={{ fontSize: '0.85rem', color: '#6c757d', lineHeight: '1.3' }}>
                <div>Утром +17,</div>
                <div>днём +22</div>
            </div>
        </div>
    );
}
