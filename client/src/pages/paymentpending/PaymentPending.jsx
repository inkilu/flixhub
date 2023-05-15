import { useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import loadingicon from './loading.gif';

import './paymentpending.css'
const PaymentPending = ()=>{
    const history = useHistory();
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        history.push('/Paymentsuccess'); // Replace '/destination' with your desired destination URL
      }, 6000); // 6000 milliseconds = 6 seconds
  
      return () => clearTimeout(redirectTimeout);
    }, [history]);
    return(
<div className='main-payment-pending-div'>
    <img src={loadingicon} className='loading-icon' alt="payment loading"/>
    <div>
    <h2 className='paymenth2'>Please wait....Payment is being processed!</h2>
    </div>
</div>
    )
}
export default PaymentPending;