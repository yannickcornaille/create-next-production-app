import { useState, useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';

const ServiceForm = ({ onSubmit = () => {} }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    inputNameElement.current.focus();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    onSubmit(name, price);
    setName('');
    setPrice(0);
    inputNameElement.current.focus();
    event.preventDefault();
  };

  const inputNameElement = useRef();

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Ajouter un service</legend>
        <label htmlFor="name">Nom :</label>
        <input
          ref={inputNameElement}
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="price">Prix :</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={handlePriceChange}
        />
        <button type="submit">Ajouter</button>
      </fieldset>
    </form>
  );
};

ServiceForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ServiceForm;
