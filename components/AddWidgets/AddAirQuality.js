import React, { useState } from 'react';
import AddWidgetForm from '../Layouts/AddWidgetForm';
import iqair from '../../pages/api/iqair';

export default function AddAirQuality({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.title.value.trim().length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      // call api
      try {
        const res = await iqair.get('/v2/nearest_city', {
          params: {
            // city: "Bang Bon",
            state: 'Bangkok',
            country: 'Thailand',
            key: 'ed9ce571-0340-4567-972c-a714e9b095e2',
          },
        });

        // destructuring array
        const { data } = res;
        console.log('AddAirQuality data : ', data.data);
        console.log('AddAirQuality country : ', data.data.country);
        console.log('AddAirQuality state : ', data.data.state);
        console.log(
          'AddAirQuality aqius : ',
          data.data.current.pollution.aqius
        );

        onAdd('iqair', data);
      } catch {
        onAdd('iqairNF', 'test'); //City not found!
      }
    }
  };
  return (
    <AddWidgetForm
      title='Add AirQuality'
      onSubmit={onSubmit}
      type='text'
      placeholder='Enter a city'
      checkError={checkError}
    />
  );
}
