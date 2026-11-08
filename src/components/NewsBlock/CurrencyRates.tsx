interface RateItem {
    ticker: string;
    value: string;
    change: string;
}

/**
 * Компонент отображения курсов валют и биржевых индексов (USD, EUR, MOEX).
 * Выводится горизонтальной строкой непосредственно под списком новостей.
 */
export default function CurrencyRates() {
    const rates: RateItem[] = [
        { ticker: 'USD', value: '75.20', change: '+0.15' },
        { ticker: 'EUR', value: '88.45', change: '-0.05' },
        { ticker: 'НЕФТЬ', value: '64.30', change: '+1.2%' },
    ];

    return (
        <div className="currency-rates" style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: '#333', marginTop: '12px', fontFamily: 'sans-serif' }}>
            {rates.map((rate, idx) => (
                <div key={idx} className="rate-ticker-item">
                    <span style={{ fontWeight: 'bold', marginRight: '6px' }}>{rate.ticker}</span>
                    <span style={{ marginRight: '6px' }}>{rate.value}</span>
                    <span style={{ color: rate.change.startsWith('+') ? '#28a745' : '#dc3545', fontSize: '0.8rem' }}>
                        {rate.change}
                    </span>
                </div>
            ))}
            <a href="#more-rates" style={{ color: '#999', textDecoration: 'none', marginLeft: '5px' }}>...</a>
        </div>
    );
}
