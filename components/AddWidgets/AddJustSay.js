import React, { useState } from 'react';
import Button from '../Buttons/Button';

export default function AddJustSay({ onAdd }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      onAdd('justSay', e.target.title.value.trim()); // เราใช้เพียงคำสั่งนี้ ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };
  return (
    <div>
      <h2 className='text-xl mb-2'>Add JustSay</h2>
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            type='text'
            name='title'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            placeholder='Enter text'
          />
        </div>
        <Button>Add</Button>
      </form>
      <p className='text-red-600 text-xs mt-1'>{checkError}</p>
    </div>
  );
}

