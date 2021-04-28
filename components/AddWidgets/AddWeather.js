import React, { useState } from 'react';
import AddWidgetForm from '../Layouts/AddWidgetForm';
import openweather from '../../pages/api/openweather';
export default function AddWeather({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.title.value.trim().length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      // call api
      try {
        const res = await openweather.get('/data/2.5/weather', {
          params: {
            q: e.target.title.value,
            units: 'metric',
          },
        });

        // destructuring array
        const { data } = res;
        onAdd('weather', data);
      } catch {
        onAdd('weatherNF', e.target.title.value); //City not found!
      }
    }
  };
  return (
    <AddWidgetForm
      title='Add Weather'
      onSubmit={onSubmit}
      type='text'
      placeholder='Enter a city'
      checkError={checkError}
    />
  );
}
