import logo from './logo.svg';
import './App.css'; 
import { Routes, Route, Link } from 'react-router-dom';
 import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductPage from './pages/ProductPage/ProductPage';
 import './Responsive.css'

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
           <Route path="/productdetails" element={<ProductPage />} />
           {/* <Route path='/about' element={<About/>} /> */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
