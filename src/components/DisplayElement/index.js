import React, { useState, useEffect } from 'react';

const DisplayElement = ({ name, val }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const updateInterval = setInterval(() => setValue(undefined), 1000);
    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  useEffect(() => {
    setValue(val);
  }, [val]);

  return (
    <div className='event-wrapper'>
      <label>{name}</label>
      {<label>{!value ? 'N/A' : val}</label>}
      <style jsx='true'>{`
        .event-wrapper {
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

export default DisplayElement;
