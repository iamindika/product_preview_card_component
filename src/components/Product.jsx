import useWindowDimensions from '../hooks/useWindowDimensions';
import { getProductImage } from '../utilities/helpers';
import cartIcon from '../assets/images/icon-cart.svg'
import PropTypes from 'prop-types'

const RESPONSIVE = {
  "MOBILE": 375,
  "DESKTOP": 1440,
}

const Product = (props) => {
  const { width } = useWindowDimensions();

  const productImage = width < RESPONSIVE.DESKTOP 
  ? getProductImage(props.image.mobile) 
  : getProductImage(props.image.desktop); 

  return (
    <article className="product">
      <img
        className="product-image"
        src={productImage}
        alt={props.title}
      />

      <div className="product-info">
        <h3 className="product-category">
          {props.category}
        </h3>
        <h4 className="product-title">
          {props.title}
        </h4>
        <p className="product-description">
          {props.description}
        </p>

        <div className="product-price-wrapper">
          {props.price?.sale 
            ? <>
                <span className="product-price--lg">
                  ${props.price.sale}
                </span>
                <span className="product-price--sm">
                  ${props.price.original}
                </span>
              </>
            : (
                <span className="product-price--lg">
                  ${props.price.original}
                </span>
              )}
        </div>

        <button className="product-btn">
          <img
            className="cart-icon"
            src={cartIcon}
            alt="cart icon"
          />
          <span className="cart-text">
            Add to Cart
          </span>
        </button>
      </div>
    </article>
  )
};

export default Product;