interface TVProgram {
    time: string;
    title: string;
    channel: string;
}

/**
 * Компонент содержимого виджета телепрограммы.
 * Отображает список передач с указанием времени и телеканала.
 */
export default function TVWidget() {
    const programs: TVProgram[] = [
        { time: '02:15', title: 'THT. Best', channel: 'ТНТ International' },
        { time: '02:25', title: 'Джинглики', channel: 'Карусель' },
        { time: '03:15', title: 'Наедине со всеми', channel: 'Первый' },
    ];

    return (
        <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '0.9rem', lineHeight: '1.6' }}>
            {programs.map((p, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>
                    <span style={{ color: '#333', marginRight: '5px' }}>{p.time}</span>
                    <span style={{ fontWeight: '500' }}>{p.title}</span>
                    <span style={{ color: '#999', marginLeft: '8px', fontSize: '0.8rem' }}>{p.channel}</span>
                </li>
            ))}
        </ul>
    );
}
