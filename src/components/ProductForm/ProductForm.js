import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';

const ProductForm = ({
        sizes = [],
        colors = [],
        currentColor,
        setCurrentColor,
        currentSize,
        setCurrentSize,
        submit,
    }) => {
    return (
        <form onSubmit={submit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number, 
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

export default ProductForm;