import React, { useState } from 'react';
import Button from '../Buttons/Button';

/**
 * แทนที่เราจะรับ props เข้ามาเต็มไปหมด
 * เราก็เหลือเพียง onAdd แล้วส่งกลับไปเพื่อ handleAdd ใน WidgetTools
 * เพราะเรารู้ว่า props อื่นๆ เช่น listAllWidgets, setListAllWidgets, realTime, handleCancel สามารถเรียกใช้ได้เลยใน WidgetTools
 */
export default function AddCounter({
  // setCounter,
  // handleCancel,
  // setListAllWidgets,
  // listAllWidgets,
  // realTime,
  // handleAddWidgets,
  onAdd, // เหลือแค่อันนี้
}) {
  const [checkError, setCheckError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    if (Number(e.target.title.value) < 0) {
      setCheckError('Please enter at least 0.');
    } else if (e.target.title.value === '') {
      setCheckError('Please provide some value.');
    } else {
      onAdd('counter', Number(e.target.title.value)); // เราใช้เพียงคำสั่งนี้ ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };

  return (
    <div>
      <h2 className='text-xl mb-2'>Add Counter</h2>
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            type='number'
            name='title'
            pattern='[0-9]'
            placeholder='Enter the initial value'
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            // min="-999999"
            // max="999999"
          />
        </div>
        <Button>Add</Button>
      </form>

      <div className='text-red-600 text-xs mt-1'>{checkError}</div>
    </div>
  );
}
