import { useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import './paymentsuccess.css'
const Paymentsuccess = ()=>{
    const history = useHistory();
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        history.push('/'); // Replace '/destination' with your desired destination URL
      }, 3000); // 6000 milliseconds = 6 seconds
      return () => clearTimeout(redirectTimeout);
    }, [history]);

    return(
<div className='successdiv'>
</div>
    )
}
export default Paymentsuccess;