import PropTypes from 'prop-types';

const MainCurrency = ({ options, selected, onChange }) => (
  <>
    <select value={selected} onChange={onChange}>
      {
        options.reduce((acc, item) => {
          acc.push(<option key={item} value={item}>{item}</option>);

          return acc;
        }, [])
      }
    </select>
  </>
);

export default MainCurrency;

MainCurrency.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
