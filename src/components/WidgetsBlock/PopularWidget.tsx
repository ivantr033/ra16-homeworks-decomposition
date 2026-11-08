interface PopularItem {
    category: string;
    text: string;
}

/**
 * Компонент содержимого виджета популярных разделов ("Посещаемое").
 * Выводит самые кликабельные темы или маркет-категории пользователей.
 */
export default function PopularWidget() {
    const items: PopularItem[] = [
        { category: 'Маркет', text: '— люстры и светильники' },
        { category: 'Авто.ру', text: '— подержанные машины' },
        { category: 'Недвижимость', text: '— снять квартиру' },
    ];

    return (
        <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '0.9rem' }}>
            {items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>
                    <strong style={{ color: '#333' }}>{item.category}</strong> {item.text}
                </li>
            ))}
        </ul>
    );
}
