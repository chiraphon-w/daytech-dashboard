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

  let aqius = parseInt(list.value.data.current.pollution.aqius);
  let iconSty;
  let iconColor;
  let desc;
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
  if (list.type === 'weatherNF') {
    dataName = <h3 className={`${h3Sty} text-red-600`}></h3>;
    dataIconDesc = (
      <h4 className='text-red-400 -mt-1'>
        <span className='align-middle'>City not found</span>
      </h4>
    );

    dataTemp = (
      <h2 className='text-red-500 mt-1 text-5xl font-extralight'>--</h2>
    );
  } else {
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
          {list.value.data.current.pollution.aqius}
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

  const handleEdit = function () {
    setModalActiveEditWeather(true);
  };
  // id, type, value
  const onEditSubmit = async (id, type, name) => {
    try {
      const res = await openweather.get('/data/2.5/weather', {
        params: {
          q: name,
          units: 'metric',
        },
      });

      // destructuring array
      const { data } = res;
      onEditWeather(id, 'weather', data);
    } catch {
      onEditWeather(id, 'weatherNF', name);
    }

    setModalActiveEditWeather(false);
  };

  const handleRefresh = async () => {
    try {
      const res = await openweather.get('/data/2.5/weather', {
        params: {
          q: list.value.name,
          units: 'metric',
        },
      });

      // destructuring array
      const { data } = res;
      onEditWeather(list.id, 'weather', data);
    } catch {
      onEditWeather(list.id, 'weatherNF', list.value.name);
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
        editBtn={<MdEdit />}
        refreshBtn={reBtnCard}
        key={list.id}
        onDelete={handleDelete}
        onEdit={handleEdit}
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

// {
//     "city": "Bangkok Noi",
//     "state": "Bangkok",
//     "country": "Thailand",
//     "location": {
//         "type": "Point",
//         "coordinates": [
//             100.47798,
//             13.76266
//         ]
//     },
//     "current": {
//         "weather": {
//             "ts": "2021-04-27T15:00:00.000Z",
//             "tp": 27,
//             "pr": 1013,
//             "hu": 68,
//             "ws": 0.69,
//             "wd": 78,
//             "ic": "04n"
//         },
//         "pollution": {
//             "ts": "2021-04-27T16:00:00.000Z",
//             "aqius": 61,
//             "mainus": "p2",
//             "aqicn": 24,
//             "maincn": "p2"
//         }
//     }
// }
