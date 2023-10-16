import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<MainPage />}></Route>
            <Route path="product/">
              <Route path="" element={<ProductPage />}></Route>
              <Route path=":productId" element={<ProductDetail />}></Route>
            </Route>
            <Route path="/photo" element={<PhotoPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>            
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
