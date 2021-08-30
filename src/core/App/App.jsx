import React, { useState, useEffect } from 'react';
import TaskApi from '../../api/taskApi/provider';
import { Currencies } from '../../components/Currencies/Currencies';
import './App.scss';

const App = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    TaskApi.getTask()
      .then((data) => setCurrencies([{ curAbbreviation: "BYR", curName: "Белорусский рубль", curRate: 1 }, ...data]));
  }, []);

  return (
    <div className='App'>
      <h1 className='App__header'>Конвертер валют</h1>
      <Currencies currencies={currencies} />
    </div>
  );
};

export default App;
