import clsx from 'clsx';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, setCurrentColor}) => {
    
    const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

    return (
        <ul className={styles.choices}>
            {colors.map(color => <li key={color}><button onClick={() => setCurrentColor(color)} type="button"
                className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}>
            </button></li>)}
        </ul>
    );
};

OptionColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
}

export default OptionColor;