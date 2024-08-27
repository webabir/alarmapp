import {React,useEffect,useState} from 'react'
import AlarmItem from './AlarmItem'
import moment from 'moment';


function AlarmList(props) {

  console.log(props.AlarmItems)

  const [currentMoment, setCurrentMoment] = useState(moment().format('MM-DD-YY hh:mm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoment(moment().format('YYYY-MM-DD hh:mm'));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    console.log(currentMoment);
  }, [currentMoment]);
  


  return (
    <div className='alarm-list'>
      {props.AlarmItems.map((item, index) => {
            const userMoment = moment(`${item.date} ${item.time}`, 'YYYY-MM-DD hh:mm').format('YYYY-MM-DD hh:mm')
            console.log(userMoment)
            const isMatched = userMoment === currentMoment
          
           return <AlarmItem key={index} id={item.id} title={item.title} date={item.date} time={item.time} isMatched={isMatched} onRemoveItem={props.onRemoveItem} />
        })}
    </div>
  )

}

export default AlarmList 