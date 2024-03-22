import one from "../assets/one.jpg"
import two from "../assets/three.jpg"
import three from "../assets/two.jpg"
function Product()
{
   return( <div className="products">

            <div class="box">
                <img src={one} alt="one"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            <div class="box">
                <img src={two} alt="two"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={three} alt="three"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
        </div>)

}

export default Product