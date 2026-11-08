/**
 * Компонент строки новости.
 * Отображает иконку источника, текст заголовка и обеспечивает переход по внешней ссылке.
 */
export default function NewsItem({ icon, text, url }: { icon: string; text: string; url?: string }) {
    return (
        <li className="news-item" style={{ listStyle: 'none', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{icon}</span>
            <a href={url || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
                {text}
            </a>
        </li>
    );
}
