import PropTypes from 'prop-types' ; 
import './ProdusCard.css'

function ProdusCard( {produsElement, large = false } ) {
    const {id, imageUrl , year , rating , category , title} = produsElement;
    return (
        <li className={`produs ${ large ? "produs--large" : "produs--small" }`} key={id}>
                <img className='produs__image' src={imageUrl}/>

                <div className='produs__bookmark'>
                  <i className='produs__bookmark-icon' />
                </div>


            <div className='produs__info'>
              <div> 
                <span className='produs__year'>
                   {year}
                </span>
                <span className='produs__rating'>
                  {rating}
                </span>
                <span className='produs__category'>
                  {category}
                </span>
                </div>
                
                <h3 className='produs__title'>{title}</h3>
              </div>
              </li>
    );

}



export default ProdusCard;

ProdusCard.propTypes = {
        large: PropTypes.bool,
        produsElement: PropTypes.shape({
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        year: PropTypes.any,
        rating: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        bookmark: PropTypes.bool,
    })
};

