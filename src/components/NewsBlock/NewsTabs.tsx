interface TabItem {
    id: string;
    label: string;
    isActive: boolean;
}

/**
 * Компонент переключателя вкладок для новостного блока.
 * Позволяет пользователю переключать категории новостей (например, "Сейчас в СМИ", "В Германии").
 */
export default function NewsTabs() {
    const tabs: TabItem[] = [
        { id: 'media', label: 'Сейчас в СМИ', isActive: true },
        { id: 'germany', label: 'В Германии', isActive: false },
        { id: 'recommend', label: 'Рекомендации', isActive: false },
    ];

    return (
        <nav className="news-tabs" style={{ display: 'flex', gap: '18px', marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '6px' }}>
            {tabs.map((tab) => (
                <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    style={{
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: tab.isActive ? 'bold' : 'normal',
                        color: tab.isActive ? '#000000' : '#555555',
                    }}
                >
                    {tab.label}
                </a>
            ))}
        </nav>
    );
}
