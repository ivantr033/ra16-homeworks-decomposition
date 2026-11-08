/**
 * Компонент содержимого виджета карт и пробок.
 * Отображает текущую ситуацию на дорогах города и ссылки на расписания транспорта.
 */
export default function MapsWidget() {
    return (
        <div className="maps-widget" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
            <div style={{ fontWeight: '500', color: '#333' }}>Пробки: <span style={{ color: '#28a745' }}>0 баллов</span></div>
            <a href="#traffic" style={{ color: '#007bff', textDecoration: 'none' }}>Расписание автобусов и поездов</a>
        </div>
    );
}
