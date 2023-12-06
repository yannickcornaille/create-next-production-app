const Service = () => {
  const handleClick = () => {
    console.log('CLICK !!!');
  };
  return (
    <button onClick={handleClick}>
      <span>Ergonomie</span>
      <span>5000</span>
    </button>
  );
};
export default Service;
