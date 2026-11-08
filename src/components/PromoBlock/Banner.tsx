/**
 * Свойства для рекламного баннера.
 * @property imgUrl - Ссылка на изображение баннера.
 * @property link - Ссылка для перехода при клике на рекламу.
 * @property altText - Альтернативный текст для изображения.
 */
interface BannerProps {
    imgUrl: string;
    link: string;
    altText: string;
}

/**
 * Компонент для отображения горизонтального рекламного баннера по центру страницы.
 */
export default function Banner({ imgUrl, link, altText }: BannerProps) {
    return (
        <div className="promo-banner" style={{ width: '100%', margin: '20px 0', borderRadius: '4px', overflow: 'hidden' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} alt={altText} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </a>
        </div>
    );
}
