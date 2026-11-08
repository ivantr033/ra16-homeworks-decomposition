import { ReactNode } from 'react';

/**
 * Интерфейс для свойств компонента WidgetContainer.
 * @property title - Заголовок виджета (например, "Погода" или "Эфир").
 * @property link - Необязательная ссылка для перехода по клику на заголовок.
 * @property children - Вложенные элементы для рендеринга содержимого виджета.
 */
interface WidgetContainerProps {
    title: string;
    link?: string;
    children: ReactNode;
}

/**
 * Универсальный контейнер для отображения информационных блоков (виджетов).
 * Использует паттерн композиции через props.children.
 */
export default function WidgetContainer({ title, link = '#', children }: WidgetContainerProps) {
    return (
        <div className="widget-card" style={{ padding: '15px', borderRadius: '4px' }}>
            <h3 className="widget-title">
                <a href={link} style={{ textDecoration: 'none', color: '#007bff' }}>{title}</a>
            </h3>
            <div className="widget-content" style={{ marginTop: '10px' }}>
                {children}
            </div>
        </div>
    );
}
