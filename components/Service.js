import PropTypes from 'prop-types';

const Service = ({ id, name, price = 0, selected = false, onServiceClick }) => {
  return (
    <button
      onClick={() => onServiceClick(id)}
      className={selected ? 'selected' : ''}
    >
      <span>{name}</span>
      <span>{price}</span>
    </button>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  onServiceClick: PropTypes.func,
  price: PropTypes.number,
  selected: PropTypes.bool,
};

export default Service;
