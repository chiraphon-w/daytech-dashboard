import React, { useState } from 'react';
import Button from './Buttons/Button';
import { HeadSettings, TableSettings } from './Layouts/Settings';

export default function ModalSetting({
  listAllWidgets,
  children,
  defaultValueShout,
  onEditJustShout,
  handleClear,
}) {
  let totalWidgets = listAllWidgets.length;
  let jsLength = 0;
  let sumCount = 0;
  let sumTime = 0;
  let min = 99999;
  let minTemp = 0;
  let disabled = true;
  let inputSty = 'w-full px-2.5 py-1 border focus:outline-none rounded-md';
  let settingsBtn =
    'text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600';

  let cityName = 'N/A';
  let pmCityName = 'N/A';
  let editJustShout = (
    <HeadSettings title='JustShout text'>
      <fieldset disabled>
        <form className='flex'>
          <div className='flex-1 mr-1'>
            <input
              type='text'
              className={inputSty}
              placeholder='Enter text'
              defaultValue=''
            />
          </div>
          <div>
            <Button disabled={disabled}>Edit</Button>
          </div>
        </form>
      </fieldset>
    </HeadSettings>
  );

  const [checkError, setCheckError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.trim().length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      onEditJustShout(e.target.title.value.trim());
    }
  };
  listAllWidgets.map((list) => {
    if (list.type === 'justSay' || list.type === 'justShout') {
      if (list.type === 'justShout' && list.value) {
        editJustShout = (
          <HeadSettings title='JustShout text'>
            <fieldset>
              <form onSubmit={onSubmit} className='flex'>
                <div className='flex-1 mr-1'>
                  <input
                    name='title'
                    type='text'
                    className={inputSty}
                    placeholder='Enter text'
                    defaultValue={defaultValueShout}
                  />
                </div>
                <div>
                  <Button disabled={!disabled}>Edit</Button>
                </div>
              </form>
              <div className='text-red-600 text-xs mt-1'>{checkError}</div>
            </fieldset>
          </HeadSettings>
        );
      }
      jsLength = jsLength + list.value.length;
    } else if (list.type === 'counter') {
      sumCount = sumCount + list.value;
    } else if (list.type === 'timer') {
      sumTime = sumTime + list.value;
    } else if (list.type === 'weather') {
      minTemp = `${parseInt(list.value.main.temp)}`;
      if (minTemp < min) {
        min = minTemp;
        cityName = list.value.name;
      }
    }
  });
  let totalTime = (
    <>
      <span>{`0${Math.floor((sumTime / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((sumTime / 1000) % 60)}`.slice(-2)}</span>
    </>
  );

  return (
    <div>
      <h2 className='text-xl mb-4'>Settings</h2>
      <HeadSettings title='Statistics'>
        <div className='table'>
          <TableSettings title='Total widgets'>{totalWidgets}</TableSettings>
          <TableSettings title='Total Just length'>{jsLength}</TableSettings>
          <TableSettings title='Total count'>{sumCount}</TableSettings>
          <TableSettings title='Total time'>{totalTime}</TableSettings>
          <TableSettings title='Coldest cities'>{cityName}</TableSettings>
        </div>
      </HeadSettings>
      {editJustShout}
      {children}
      <HeadSettings title='Delete Zone'>
        <button onClick={handleClear} className={`${settingsBtn} w-full mb-1`}>
          Delete all widgets
        </button>
      </HeadSettings>
    </div>
  );
}
