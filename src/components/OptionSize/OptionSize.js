import clsx from 'clsx';
import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {
    return (
        <ul className={styles.choices}>
            {sizes.map(size =>
                <li key={size.name}><button onClick={() => setCurrentSize(size.name)} type="button"
                    className={clsx(currentSize === size.name && styles.active)}>{size.name}
                </button></li>)}
        </ul>
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            additionalPrice: PropTypes.number, 
       }) 
    ).isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;