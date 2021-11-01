import PropTypes from 'prop-types';

export default PropTypes.shape({
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  stringNumber: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
}).isRequired;
