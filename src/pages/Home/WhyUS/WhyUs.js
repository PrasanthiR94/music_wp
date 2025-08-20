import { Parallax } from 'react-parallax';
import parallaxx from '../../../assets/parallax.jpg'
import './WhyUs.css'
import ConfirmButton from '../../../components/ConfirmButton/ConfirmButton';

function WhyUs(){

    return(
         <Parallax
    bgImage={parallaxx}
    strength={300}
  >
     <div className='parallax_content' style={{height:"500px"}}>
         <div className='parallax_inner'>
               <h2>Why Us?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ConfirmButton>Shop Now</ConfirmButton>
         </div>
     </div>
  </Parallax>
    )
}

export default WhyUs