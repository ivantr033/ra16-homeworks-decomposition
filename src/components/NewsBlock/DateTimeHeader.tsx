/**
 * Компонент для отображения текущей даты и времени в шапке новостного блока.
 * Выводится справа от вкладок "Рекомендации".
 */
export default function DateTimeHeader() {
    // En producción esto vendría de un estado dinámico, aquí emulamos el texto estático del mockup
    const currentDateTime = '31 июля, пятница 08:23';

    return (
        <span className="datetime-header" style={{ fontSize: '0.85rem', color: '#999', marginLeft: 'auto', alignSelf: 'center' }}>
            {currentDateTime}
        </span>
    );
}
