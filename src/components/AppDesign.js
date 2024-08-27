import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Footer from './Footer';
import AlarmInput from './AlarmInput';
import AlarmList from './AlarmList';

// const saveToLocalStorage = (data) => {
//   localStorage.setItem('itemsJson', JSON.stringify(data));
// };

// const loadFromLocalStorage = () => {
//   const data = localStorage.getItem('itemsJson');
//   return data ? JSON.parse(data) : [

//     {
//       title: 'test',
//       date: '9-10-10',
//       time: '12:00'
//     }
//   ];

// };


function AppDesign() {
  const [data, setData] = useState([
    {
      id:1,
      title: 'Wake up time',
      date: '8-27-24',
      time: '6:40'
    },
    {
      id:2,
      title: 'School Time',
      date: '8-27-24',
      time: '9:00'
    },
    {
      id:3,
      title: 'Play Time',
      date: '8-27-24',
      time: '5:00'
    }
  ]);


  // useEffect(() => {
  //   saveToLocalStorage(data);
  // }, [data]);

  const handelAddItem = (newItem) => {
    setData((prevItems) => {
      const newItemWithId = { id: uuidv4(), ...newItem };
      return [...prevItems, newItemWithId];
    });
  };

  const onRemoveItem = (id) => {
    setData((prevItems) => {
      const filteredItems = prevItems.filter((item) => item.id !== id);
      return filteredItems;
    });
  };

  return (
    <div className='app-container'>
      <Header />
      <div className='main-content'>
        <AlarmInput onAddItem={handelAddItem} />
        <AlarmList AlarmItems={data} onRemoveItem={onRemoveItem} />
      </div>
      <Footer />
    </div>
  );
}

export default AppDesign;
