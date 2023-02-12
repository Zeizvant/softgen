import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Menu/Menu';
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Menu />
      <Navigation />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
