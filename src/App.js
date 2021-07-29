import './App.css';

import CartContextProvider from './contexts/cartContext'
import { HelmetProvider } from 'react-helmet-async';
import Routes from './routes';

function App() {
  return (
          <HelmetProvider>
            <CartContextProvider>
              <Routes />
            </CartContextProvider>
          </HelmetProvider>
  );
}

export default App;
