import NewsTabs from './NewsTabs';
import NewsItem from './NewsItem';
import CurrencyRates from './CurrencyRates';
import PromoRight from './PromoRight';
import DateTimeHeader from './DateTimeHeader';
import { NewsList } from './NewsList';

/**
 * Главная верхняя секция. Объединяет вкладки, дату, список новостей, котировки 
 * и правый рекламный блок в двухколоночный лэйаут.
 */
export default function NewsSection() {
    return (
        <section className="news-section" style={{ marginBottom: '25px' }}>
            {/* Шапка секции: Вкладки + Дата */}
            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <NewsTabs />
                <DateTimeHeader />
            </div>

            {/* Контентная зона: Левая колонка (новости) и Правая колонка (промо) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px' }}>
                <div style={{ flex: 1 }}>
                    <ul style={{ padding: 0, margin: 0 }}>
                        {NewsList.map((item, index) => (
                            <NewsItem key={index} icon={item.icon} text={item.text} url={item.url} />
                        ))}
                    </ul>
                    <CurrencyRates />
                </div>

                <PromoRight
                    iconUrl="./image-promo-right.png"
                    title="Работа над ошибками"
                    description="Смотрите на Яндексе и запоминайте"
                    link="#error-work"
                />
            </div>
        </section>
    );
}
