import Product from './Product';
import PropTypes from 'prop-types';

const ProductList = (props) => {
  return (
    <main className="product-list">
      <h1 className="product-list-title">Popular Perfume</h1>

      <div className="product-list-items">
        {props.inventory.map((product) => (
          <Product 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </main>
  )
}

ProductList.propTypes = {
  "inventory": PropTypes.array.isRequired
}

export default ProductList;