import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return <>{children}</>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
