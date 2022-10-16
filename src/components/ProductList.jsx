import Product from './Product';
import PropTypes from 'prop-types';

const ProductList = (props) => {
  return (
    <section className="product-list">
      {props.inventory.map((product) => (
        <Product 
          key={product.id}
          {...product}
        />
      ))}
    </section>
  )
}

ProductList.propTypes = {
  "inventory": PropTypes.array.isRequired
}

export default ProductList;