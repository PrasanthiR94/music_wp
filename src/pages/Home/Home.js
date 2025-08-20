import banner from '../../assets/banner.jpg'
import Categories from './Categories/Categories';
import './Home.css';
import PopularProducts from './Popular/PopularProducts';
import WhyUs from './WhyUS/WhyUs';

function Home(){

    return (
       <div className="home_wrap">
        <div className="banner_section">
            <img src={banner} alt="banner-img"/>
        </div>
            <PopularProducts/>
            <Categories/>
            <WhyUs/>
       </div>
    )
}

export default Home