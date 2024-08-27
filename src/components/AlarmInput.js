import React, { useState } from 'react';


function AlarmInput(props) {
  const [inputValues, setInputValues] = useState({
    title: "",
    date: "",
    time: ""
  });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setInputValues(prevItems => ({...prevItems,[name]: value}));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues)
    props.onAddItem(inputValues)

    setInputValues({title:"",date:"",time:""})
  };

  return (
    <form className='form-group' onSubmit={handleSubmit}>
      <input
        type="text"
        name='title'
        value={inputValues.title}
        placeholder='Input Title'
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name='date'
        value={inputValues.date}
        placeholder='Month-Day-Year'
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name='time'
        value={inputValues.time}
        placeholder='Input Time'
        onChange={handleChange}
        required
      />
      <button type='submit'>Set Alarm</button>
    </form>
  )
}

export default AlarmInput;
