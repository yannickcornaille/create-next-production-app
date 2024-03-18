import PropTypes from 'prop-types';

import './button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor = null,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button-primary'
    : 'storybook-button-secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button-${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
