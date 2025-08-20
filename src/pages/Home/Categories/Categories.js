
import './Categories.css'
import violin from '../../../assets/violin.jpg'
import drum from '../../../assets/drums.jpg'

function Categories(){


    return (
       <div className="categories_wrap">
        <h2>Categories</h2>
        <div className="categories_inner_wrap">
            <div className='luxury-card'>
                <div class="card-inner">
                <div class="card-front">
                    <div class="premium-label">Premium</div>
                    <div class="product-image">
                        <img src={violin} />
                    </div>
                 
                </div>
                <div class="card-back">
                    <div class="features">
                        <h3>Exquisite Features</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> Sapphire Crystal Glass</li>
                            <li><i class="fas fa-check"></i> 18K Gold Finishing</li>
                            <li><i class="fas fa-check"></i> 50M Water Resistant</li>
                            <li><i class="fas fa-check"></i> 5 Year Warranty</li>
                        </ul>
                    </div>
                    <button class="reserve-btn">Reserve Now</button>
                </div>
            </div>
            </div>
            <div className='luxury-card'>
                <div class="card-inner">
                <div class="card-front">
                    <div class="premium-label">Premium</div>
                    <div class="product-image">
                        <img src={drum} />
                    </div>
                 
                </div>
                <div class="card-back">
                    <div class="features">
                        <h3>Exquisite Features</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> Sapphire Crystal Glass</li>
                            <li><i class="fas fa-check"></i> 18K Gold Finishing</li>
                            <li><i class="fas fa-check"></i> 50M Water Resistant</li>
                            <li><i class="fas fa-check"></i> 5 Year Warranty</li>
                        </ul>
                    </div>
                    <button class="reserve-btn">Reserve Now</button>
                </div>
            </div>
            </div>
            <div className='luxury-card'>
                <div class="card-inner">
                <div class="card-front">
                    <div class="premium-label">Premium</div>
                    <div class="product-image">
                        <img src={violin} />
                    </div>
                 
                </div>
                <div class="card-back">
                    <div class="features">
                        <h3>Exquisite Features</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> Sapphire Crystal Glass</li>
                            <li><i class="fas fa-check"></i> 18K Gold Finishing</li>
                            <li><i class="fas fa-check"></i> 50M Water Resistant</li>
                            <li><i class="fas fa-check"></i> 5 Year Warranty</li>
                        </ul>
                    </div>
                    <button class="reserve-btn">Reserve Now</button>
                </div>
            </div>
            </div>
        </div>


 
        </div>
       )
}

export default Categories