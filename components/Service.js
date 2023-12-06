import PropTypes from 'prop-types';

const Service = ({ name, price = 0 }) => {
  const handleClick = () => {
    console.log('CLICK !!!');
  };
  return (
    <button onClick={handleClick}>
      <span>{name}</span>
      <span>{price}</span>
    </button>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
};

export default Service;
