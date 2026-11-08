interface StreamItem {
    icon: string;
    title: string;
    category: string;
}

/**
 * Компонент содержимого виджета прямого эфира.
 * Отображает иконку воспроизведения, название стрима и его категорию.
 */
export default function StreamWidget() {
    const streams: StreamItem[] = [
        { icon: '▶️', title: 'Управление киберрисками', category: 'Успех' },
        { icon: '▶️', title: 'Как стать джедаем', category: 'Наука' },
        { icon: '▶️', title: 'Ночной дождь (Chill)', category: 'Музыка' },
    ];

    return (
        <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '0.9rem', lineHeight: '1.6' }}>
            {streams.map((s, idx) => (
                <li key={idx} style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{s.icon}</span>
                    <span style={{ color: '#333' }}>{s.title}</span>
                    <span style={{ color: '#999', fontSize: '0.8rem', marginLeft: 'auto' }}>{s.category}</span>
                </li>
            ))}
        </ul>
    );
}
