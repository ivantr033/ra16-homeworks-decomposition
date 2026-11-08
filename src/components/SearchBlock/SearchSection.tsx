/**
 * Блок поиска, имитирующий поисковую систему Яндекса.
 * Объединяет верхние вкладки категорий, строку ввода с клавиатурой и кнопку-стрелку.
 */
export default function SearchSection() {
    const tabs: string[] = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир'];

    return (
        <div className="search-section" style={{ margin: '25px 0', fontFamily: 'sans-serif' }}>
            {/* Вкладки над строкой поиска */}
            <nav style={{ display: 'flex', gap: '15px', marginBottom: '8px' }}>
                {tabs.map((tab, idx) => (
                    <a key={idx} href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9rem' }}>
                        {tab}
                    </a>
                ))}
            </nav>

            {/* Поисковая строка с клавиатурой и кнопкой */}
            <form style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
                <div className="input-wrapper" style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
                    <input
                        type="text"
                        className="yandex-search-input"
                        style={{
                            width: '100%',
                            padding: '12px 45px 12px 12px', /* 💡 Padding derecho extra para que el texto no pise al teclado */
                            fontSize: '16px',
                            border: '2px solid #ffdb4d',
                            borderRadius: '4px 0 0 4px',
                            outline: 'none'
                        }}
                    />
                    <button type="button" className="virtual-keyboard-btn" title="Виртуальная клавиатура"
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                    >
                        ⌨️
                    </button>
                </div>
                <button type="submit" className="yandex-search-btn">
                    Найти
                </button>
            </form>

            {/* Подсказка под строкой поиска */}
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px' }}>
                Найдётся всё. Например, <span style={{ color: '#999' }}>фаза луны сегодня</span>
            </p>

        </div>
    );
}
