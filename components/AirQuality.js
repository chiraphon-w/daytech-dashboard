import React, { useState } from 'react';
import Card from '../components/Layouts/Card';
import { MdEdit, MdRefresh } from 'react-icons/md';
import Modal from './Layouts/Modal';
import { IoClose } from 'react-icons/io5';
import EditForm from './AddWidgets/EditForm';
import iqair from '../pages/api/iqair';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSmile,
  faMeh,
  faFrown,
  faFrownOpen,
  faTired,
  faDizzy,
} from '@fortawesome/free-solid-svg-icons';

export default function AirQuality({ list, onDelete, onEditWeather }) {
  const [modalActiveEditWeather, setModalActiveEditWeather] = useState(false);
  let dataName;
  let dataIconDesc;
  let dataTemp;
  let reBtnCard;
  let h3Sty = 'text-xl font-bold capitalize';
  let aqius = null;
  let iconSty;
  let iconColor;
  let desc;
  if(list.type === 'iqair'){
    if (list.value.data.current.pollution.aqius) {
    aqius = parseInt(list.value.data.current.pollution.aqius);
    // aqius = 300;
    if (aqius >= 0 && aqius < 51) {
      iconSty = faSmile;
      iconColor = 'text-green-400';
      desc = 'Good';
    } else if (aqius > 50 && aqius < 101) {
      iconSty = faMeh;
      iconColor = 'text-yellow-300';
      desc = 'Moderate';
    } else if (aqius > 100 && aqius < 151) {
      iconSty = faFrown;
      iconColor = 'text-yellow-600';
      desc = 'Unhealthy for Sensitive Groups';
    } else if (aqius > 150 && aqius < 201) {
      iconSty = faFrownOpen;
      iconColor = 'text-red-400';
      desc = 'Unhealthy';
    } else if (aqius > 200 && aqius < 301) {
      iconSty = faTired;
      iconColor = 'text-pink-700';
      desc = 'Very Unhealthy';
    } else if (aqius > 300 && aqius < 501) {
      iconSty = faDizzy;
      iconColor = 'text-pink-900';
      desc = 'Hazardous';
    }
  } else {
    list.type = 'iqairNF';
  }
  }
  

  if (list.type === 'iqairNF') {
    dataName = <h3 className={`${h3Sty} text-red-600`}></h3>;
    dataIconDesc = (
      <h4 className='text-red-400 -mt-1'>
        <span className='align-middle'>City not found</span>
      </h4>
    );

    dataTemp = (
      <h2 className='text-red-500 mt-1 text-5xl font-extralight'>--</h2>
    );
  } else if (list.type === 'iqair') {
    reBtnCard = <MdRefresh />;
    dataName = <h3 className={h3Sty}>{list.value.data.country}</h3>;
    dataIconDesc = (
      <h4 className='text-gray-400 -mt-1 flex justify-center items-center'>
        <span className='pr-2'>{list.value.data.state}</span>
      </h4>
    );
    dataTemp = (
      <>
        <h2 className='text-gray-500 mt-1 text-5xl font-extralight'>
          <p className='text-gray-500 mt-1 text-xl text-center font-extralight'>
            {desc}
          </p>
          <FontAwesomeIcon className={`${iconColor} pr-1`} icon={iconSty} />
          {aqius}
        </h2>
        <p className='text-gray-500 mt-1 text-center font-extralight'>US AQI</p>
      </>
    );
  }

  const handleCancel = function () {
    setModalActiveEditWeather(false);
  };
  const handleDelete = function () {
    onDelete(list);
  };

  const handleRefresh = async () => {
    try {
      const res = await iqair.get('/v2/city', {
        params: {
          city: 'Bangkok',
          state: 'Bangkok',
          country: 'Thailand',
          key: 'ed9ce571-0340-4567-972c-a714e9b095e2',
        },
      });
      const { data } = res;
      onEditWeather(list.id, 'iqair', data);
    } catch {
      const dataNF = {
        city: 'city not found',
        state: 'state not found',
        country: 'country not found',
        key: 'ed9ce571-0340-4567-972c-a714e9b095e2',
      };
      onEditWeather(list.id, 'iqairNF', dataNF);
    }
  };

  return (
    <>
      {modalActiveEditWeather && (
        <Modal onCancel={handleCancel}>
          <EditForm
            title='Edit Weather'
            onEditSubmit={onEditSubmit}
            list={list}
          />
        </Modal>
      )}
      <Card
        title='AirQuality'
        closeBtn={<IoClose />}
        refreshBtn={reBtnCard}
        key={list.id}
        onDelete={handleDelete}
        onRefresh={handleRefresh}
        list={list}
      >
        <div className='text-center'>
          {dataName}
          {dataIconDesc}
          {dataTemp}
          <div className='text-xs text-gray-400'>
            <div className='mt-6 -mb-2 text-center'>{list.date}</div>
          </div>
        </div>
      </Card>
    </>
  );
}
