import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './component/Home';
import { PrincipeApp } from './component/PrincipeApp';

function App() {
  return (
    <GlobalProvider>
      <Home />
      <PrincipeApp />
    </GlobalProvider>

  );
}

export default App;
