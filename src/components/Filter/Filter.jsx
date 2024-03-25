import PropTypes from 'prop-types';
import './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <label>
    {' '}
    <input
      placeholder="Find contacts by name"
      type="text"
      value={filter}
      onChange={onFilterChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
