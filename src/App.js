import './App.css';
import CollectionNav from './Components/CollectionNav';
// import Carousel from './Components/Carousel';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import MoreProduct from './Components/MoreProduct';
import Product from './Components/Product';
// import NavBar from './Components/NavBar';
import ProductDetail from './Components/ProductDetail';
import ProductDetailNav from './Components/ProductDetailNav';
import ProductNavTop from './Components/ProductNavTop';
import ReviewPage from './Components/ReviewPage';
// import TopNav from './Components/TopNav';
// import Trending from './Components/Trending';

function App() {
  return (
    <div className="App">
      {/* <TopNav/>
      <NavBar/>
      <Carousel/>
      <Trending/>
      <Contact/> */}
      <ProductNavTop/>
      <ProductDetailNav/>
      <CollectionNav/>
      <Product/>
      <ReviewPage/>
      <MoreProduct/>
      <ProductDetail/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
