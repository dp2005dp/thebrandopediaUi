import Navbar from './components/Navbar';
import ProductSlides from './components/ProductSlides';
import ProductDetails from './components/ProductDetails';
import ProductFuture from './components/ProductFuture';
import  FaqContainer from './components/FaqContainer';
import MediaPartners from './components/MediaPartners';
import CustomerReviews from './components/CustomerReviews';
import Fooder from './components/Fooder';
import './App.css';

const App = () => (
    <>
    <div className="App">
        <Navbar />
        <ProductSlides />
        <ProductDetails />
        <ProductFuture/>
        <FaqContainer/>
        <MediaPartners/>
        <CustomerReviews/>
        <Fooder/>
    </div>
    
    <div className='mobile-view'>
    <p>Mobile View Only This App</p>
    </div>
    </>
)
 
export default App;
