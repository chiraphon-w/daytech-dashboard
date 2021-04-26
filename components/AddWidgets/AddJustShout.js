import React, { useState } from 'react';
import AddWidgetForm from '../Layouts/AddWidgetForm';

export default function AddJustShout({ onAdd, list }) {
  const [checkError, setCheckError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      onAdd('justShout', e.target.title.value.trim()); //ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };
  return (
    <AddWidgetForm title="Add JustShout" onSubmit={onSubmit} type="text" checkError={checkError}/>
  );
}

