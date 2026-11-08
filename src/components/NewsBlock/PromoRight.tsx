/**
 * Интерфейс для свойств компонента PromoRight.
 */
interface PromoRightProps {
    iconUrl: string;
    title: string;
    description: string;
    link: string;
}

/**
 * Компонент правого промо-блока (на макете: "Работа над ошибками").
 * Размещается справа от основного списка новостей для привлечения внимания пользователя к сервисам.
 */
export default function PromoRight({ iconUrl, title, description, link }: PromoRightProps) {
    return (
        <div className="promo-right-block" style={{ width: '240px', padding: '10px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={iconUrl} alt={title} style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '10px' }} />
                <h4 style={{ margin: '5px 0', fontSize: '1rem', color: '#007bff' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>{description}</p>
            </a>
        </div>
    );
}
