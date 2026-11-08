import NewsSection from './components/NewsBlock/NewsSection';
import SearchSection from './components/SearchBlock/SearchSection';
import Banner from './components/PromoBlock/Banner';
import WidgetContainer from './components/WidgetsBlock/WidgetContainer';
import WeatherWidget from './components/WidgetsBlock/WeatherWidget';
import MapsWidget from './components/WidgetsBlock/MapsWidget'; // 👈 Nuevo
import PopularWidget from './components/WidgetsBlock/PopularWidget'; // 👈 Nuevo
import TVWidget from './components/WidgetsBlock/TVWidget';
import StreamWidget from './components/WidgetsBlock/StreamWidget';
import './App.css';

function App() {
  return (
    <div className="yandex-layout" style={{ maxWidth: '850px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>

      {/* Блок 1: Новости, Курсы, Дата и Промо-Блок справа */}
      <NewsSection />

      {/* Блок 2: Поисковая система (Incluye el Logo internamente o al lado en el CSS) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img className="yandex-logo" src="./yandex-logo.png" alt="Yandex Logo" style={{ width: '120px', height: 'auto' }} />
        <div style={{ flex: 1 }}>
          <SearchSection />
        </div>
      </div>

      {/* Блок 3: Горизонтальный баннер */}
      <Banner
        imgUrl="./image-promo.png"
        link="#ads"
        altText="Реклама на Яндексе"
      />

      {/* Блок 4: Полная расширенная сетка виджетов (5 блоков в ряд) */}
      <div className="widgets-grid">

        <WidgetContainer title="Погода" link="#weather">
          <WeatherWidget />
        </WidgetContainer>

        <WidgetContainer title="Посещаемое" link="#popular">
          <PopularWidget />
        </WidgetContainer>

        <WidgetContainer title="Карта региона" link="#maps">
          <MapsWidget />
        </WidgetContainer>

        <WidgetContainer title="Телепрограмма" link="#tv">
          <TVWidget />
        </WidgetContainer>

        <WidgetContainer title="Эфир" link="#stream">
          <StreamWidget />
        </WidgetContainer>

      </div>
    </div>
  );
}

export default App;
