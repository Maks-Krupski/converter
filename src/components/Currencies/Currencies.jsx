import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from "../CurrencyItem/CurrencyItem";
import MainCurrency from '../MainCurrency/MainCurrency';
import './Currency.scss';

const curAbbrToRateMap = {
  AMD: 5.094,
  AUD: 1.8122,
  BGN: 1.5033,
  BYR: 1,
  CAD: 1.9838,
  CHF: 2.7461,
  CNY: 3.8684,
  CZK: 11.5151,
  DKK: 3.9538,
  EUR: 2.9413,
  GBP: 3.4367,
  IRR: 5.9679,
  ISK: 1.9602,
  JPY: 2.2848,
  KGS: 2.9624,
  KWD: 8.3283,
  KZT: 5.8976,
  MDL: 1.4189,
  NOK: 2.8226,
  NZD: 1.7381,
  PLN: 6.4139,
  RUB: 3.3898,
  SEK: 2.8793,
  SGD: 1.8476,
  TRY: 2.9745,
  UAH: 9.3929,
  USD: 2.5065,
  XDR: 3.5554,
};

export const Currencies = ({ currencies }) => {
  const [value, setValue] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState('BYR');

  const options = currencies.map((item) => item.curAbbreviation);

  const listItem = currencies.reduce((acc, item) => {
    if (item.curAbbreviation !== selectedCurrency) {
      acc.push(<CurrencyItem
        key={item.curName.toString()}
        curAbbr={item.curAbbreviation}
        readonly
        value={((value * curAbbrToRateMap[selectedCurrency]) / item.curRate).toFixed(4)}
      />);
    }

    return acc;
  }, []);

  const hendleValueChange = (e) => {
    setValue(e.target.value);
  };

  const hendleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <>
      <div className='currency'>
        <MainCurrency options={options} selected={selectedCurrency} onChange={hendleCurrencyChange} />
        <CurrencyItem selected={selectedCurrency} value={value.toString()} onChange={hendleValueChange} />
        { listItem }
      </div>
    </>
  );
};

Currencies.propTypes = { currencies: PropTypes.arrayOf(PropTypes.object) };

Currencies.defaultProps = { currencies: [] };
