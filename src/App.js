import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { Content } from './components/Content/Content';
import { Menu } from './components/Menu/Menu';
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Menu />
      <Navigation />
      <Carousel />
      <Content />
    </div>
  );
}

export default App;
