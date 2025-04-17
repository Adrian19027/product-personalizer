import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  
  
  const getPrice = () => {
    const selectedSize = props.sizes.find(size => size.name === currentSize)
    const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
    return props.basePrice + additionalPrice;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Summary:');
    console.log('===============');
    console.log('Name:', props.title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor,);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm colors={props.colors} sizes={props.sizes} submit={handleSubmit}
          currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;