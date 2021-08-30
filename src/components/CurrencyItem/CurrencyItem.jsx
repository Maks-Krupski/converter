import PropTypes from 'prop-types';
import './CurrencyItem.scss';

const CurrencyItem = ({ curAbbr, readonly, value, onChange }) => (
  <>
    <div className='currency__item'>
      <label htmlFor='curAbbr'>
        {
          curAbbr ? <span>{curAbbr}</span> : null
        }
        <input id={curAbbr} type='number' readOnly={readonly} onChange={onChange} value={value} />
      </label>
    </div>
  </>
);

export default CurrencyItem;

CurrencyItem.propTypes = {
  curAbbr: PropTypes.string,
  value: PropTypes.string.isRequired,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
};

CurrencyItem.defaultProps = {
  curAbbr: '',
  readonly: false,
  onChange: () => null,
};
