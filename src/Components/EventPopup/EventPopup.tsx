import { FC, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'




import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

interface PopupProps {
  event: Event,
  onClose: () => void,
}

const Popup: FC<PopupProps> = ({ event, onClose }) => {
  const start = event.start?.toLocaleTimeString();
  const end = event.end?.toLocaleTimeString();
  
  

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Start time: {start}</p>
      <p>End time: {end}</p>
      <button onClick={onClose}>Close</button>
      
    </div>
  );
};

export default Popup;
