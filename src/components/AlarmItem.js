import React from 'react';
import 'font-awesome/css/font-awesome.css'

function AlarmItem(props) {
const idd = props.id
const handleDelete = (id) => {
  props.onRemoveItem(id)

  console.log(id)
}

  return (
    <div className='alarm-item' style={props.isMatched ? { backgroundColor: '#c01515' } : {}}>
        <div className="alarm-info">
            <h3>{props.title}</h3>
            <div className="alarm-date-time">
                <div className="alarm-date">{props.date}</div>,&nbsp;&nbsp;&nbsp;
                <div className="alarm-time">{props.time}</div>
            </div>
        </div>
        <div className="alarm-delete"  onClick={() => {handleDelete(idd)}}><i className='fa fa-trash 2x'></i></div>
    </div>
  )
}

export default AlarmItem;