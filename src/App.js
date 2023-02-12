import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { Menu } from './components/Menu/Menu';
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Menu />
      <Navigation />
      <Carousel />
    </div>
  );
}

export default App;
