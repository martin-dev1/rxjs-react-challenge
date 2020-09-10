import React, { useEffect, useState } from 'react';
import * as Rx from 'rxjs/Rx';
import { getRandomValue } from './services/rand.generator';
import { DisplayElement } from './components';

const temperature = Rx.Observable.defer(() => {
  return Rx.Observable.timer(0, 2500).map(() => {
    return { id: 'temp', value: getRandomValue(100, 0) };
  });
});
//emit every 2 seconds
const airPressure = Rx.Observable.defer(() => {
  return Rx.Observable.timer(0, 2000).map(() => {
    return { id: 'air', value: getRandomValue(100, 0) };
  });
});
//emit every 1.5 seconds
const humidity = Rx.Observable.defer(() => {
  return Rx.Observable.timer(0, 1500).map(() => {
    return { id: 'humidity', value: getRandomValue(100, 0) };
  });
});

//emit outputs from one observable
const observer = Rx.Observable.merge(temperature, airPressure, humidity);

const App = () => {
  const [temp, setTemp] = useState('N/A');
  const [air, setAir] = useState('N/A');
  const [humidity, setHumidity] = useState('N/A');

  useEffect(() => {
    observer.subscribe((obj) => {
      if (obj.id === 'temp') {
        setTemp(obj.value);
      } else if (obj.id === 'air') {
        setAir(obj.value);
      } else {
        setHumidity(obj.value);
      }
    });
  }, []);

  return (
    <div className='event-wrapper'>
      Measured Events
      <div className='display-elements'>
        <DisplayElement name='Temperature' val={temp} />
        <DisplayElement name='Air Pressure' val={air} />
        <DisplayElement name='Humidity' val={humidity} />
      </div>
      <div className='measure-content'></div>
      <style jsx='true'>{`
        .display-elements {
          display: flex;
        }
        .measure-content {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 30px;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default App;
