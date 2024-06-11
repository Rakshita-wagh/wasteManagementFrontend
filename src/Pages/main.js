import './main.css';

import { useNavigate } from 'react-router-dom';

import dustbin from '../images/Designer.png';
import buy from '../images/Designer (1).png';
import sell from '../images/Designer (2).png';

function Main () {
  const Image = {
    //backgroundImage: `url("${background}")`, 
    backgroundSize: 'cover',
    height: '100vh',  
    width: '100%',
  };

  const navigate = useNavigate();
  const Sell = () => navigate('/loginSignup?redirect=sell');
const Buy = () => navigate('/loginSignup?redirect=buy');
  const Dispose = () => navigate('/disposal');
  
  

  
  
  
  
  return (
    <>
    <div style = {Image} >
      
            <div className='all' >
               <div className="box1" onClick={Sell}>
                 <img src={sell} alt="Description" className="events" />
                 <h5 className="cardtitle">Sell</h5>
                </div>
                <div className="box1" onClick={Buy}>
                 <img src={buy} alt="Description" className="events" />
                 <h5 className="cardtitle">Buy</h5>
                </div>
                <div className="box1" onClick={Dispose}>
                 <img src={dustbin} alt="Description" className="events" />
                 <h5 className="cardtitle">Dispose</h5>
                </div>
            </div>
       
        

       
        </div>
       </>
  );

}

export default Main;
