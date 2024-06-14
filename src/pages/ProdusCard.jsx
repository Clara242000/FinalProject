import PropTypes from 'prop-types' ; 
import './ProdusCard.css'

function ProdusCard( {produsElement, large = false } ) {
    const {id, imageUrl ,  rating , category , title} = produsElement;
    return (
        <li className={`produs ${ large ? "produs--large" : "produs--small" }`} key={id}>
                <img className='produs__image' src={imageUrl}/>

                <div className='produs__bookmark'>
                  <i className='produs__bookmark-icon' />
                </div>


            <div className='produs__info'>
              <div> 
                {/* <span className='produs__year'>
                   {year}
                </span> */}
                <br />
                <span className='produs__category'>
                  {category} 
                  <br />
                </span>
                <br />
                200 $
                </div>
                
                <h3 className='produs__title'>{title} </h3>
                <span className='produs__rating'>
                  {rating}
                  <br />
                </span>
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

