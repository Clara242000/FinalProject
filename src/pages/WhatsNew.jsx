//carousel whats new//

import {whatsnewproduse} from '../data/data'
import  ProdusCard from './ProdusCard';
import './WhatsNew.css';

function WhatsNew(){
  return (
  
    <ul className='trending'>
       {whatsnewproduse.map((produs) =>(
        <ProdusCard key={produs.id} produsElement={produs} large={true}></ProdusCard>
       ) )}      
    </ul>
    
  )
}

export default WhatsNew;
