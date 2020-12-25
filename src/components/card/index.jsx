import PropTypes from 'prop-types';
import "./index.css";
const Card = ({name,population}) => (
  <>
    <div data-testid="card" className="card">
      <p data-testid="cityname" className="city">
        {name}
      </p>
      <p data-testid="population" className="population">
        {population}
      </p>
    </div>
  </>
);

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string
};